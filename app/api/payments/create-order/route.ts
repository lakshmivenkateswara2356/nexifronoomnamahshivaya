import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { razorpay } from '@/lib/razorpay';
import { createEnrollmentNumber } from '@/lib/utils';

const schema = z.object({
  courseId: z.string().min(1),
  fullName: z.string().min(2),
  email: z.email(),
  phone: z.string().min(10),
  qualification: z.string().optional().or(z.literal('')),
  graduationYear: z.coerce.number().int().min(1900).max(new Date().getFullYear() + 10).optional().or(z.literal('')),
  city: z.string().optional().or(z.literal('')),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ success: false, message: 'Invalid request payload.' }, { status: 400 });
    }

    const course = await prisma.course.findUnique({ where: { id: parsed.data.courseId } });
    if (!course || course.status !== 'OPEN') {
      return NextResponse.json({ success: false, message: 'Course is unavailable.' }, { status: 400 });
    }

    const existing = await prisma.enrollment.findFirst({
      where: {
        email: parsed.data.email.toLowerCase(),
        courseId: parsed.data.courseId,
      },
    });

    const enrollment = existing ?? await prisma.enrollment.create({
      data: {
        enrollmentNumber: createEnrollmentNumber(),
        fullName: parsed.data.fullName,
        email: parsed.data.email.toLowerCase(),
        phone: parsed.data.phone,
        qualification: parsed.data.qualification || null,
        graduationYear: parsed.data.graduationYear ? Number(parsed.data.graduationYear) : null,
        city: parsed.data.city || null,
        courseId: parsed.data.courseId,
        amount: course.fee,
        paymentStatus: 'PENDING',
      },
    });

    if (enrollment.paymentStatus === 'SUCCESS') {
      return NextResponse.json({ success: false, message: 'This enrollment has already been paid.' }, { status: 409 });
    }

    if (!razorpay) {
      return NextResponse.json({ success: false, message: 'Payment service is not configured.' }, { status: 500 });
    }

    const order = await razorpay.orders.create({
      amount: course.fee * 100,
      currency: 'INR',
      receipt: `rcpt_${enrollment.id}`,
    });

    await prisma.enrollment.update({
      where: { id: enrollment.id },
      data: {
        razorpayOrderId: order.id,
      },
    });

    await prisma.payment.upsert({
      where: { enrollmentId: enrollment.id },
      update: {
        razorpayOrderId: order.id,
        amount: course.fee,
        currency: 'INR',
        status: 'PENDING',
      },
      create: {
        enrollmentId: enrollment.id,
        razorpayOrderId: order.id,
        amount: course.fee,
        currency: 'INR',
        status: 'PENDING',
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        orderId: order.id,
        amount: course.fee,
        currency: 'INR',
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        enrollmentId: enrollment.id,
      },
    });
  } catch (error) {
    console.error('Razorpay order creation failed:', error);
    return NextResponse.json({ success: false, message: 'Unable to initialize payment.' }, { status: 500 });
  }
}
