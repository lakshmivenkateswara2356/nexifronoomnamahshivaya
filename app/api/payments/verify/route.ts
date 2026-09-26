import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { verifyRazorpaySignature } from '@/lib/razorpay';

const schema = z.object({
  enrollmentId: z.string().min(1),
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ success: false, message: 'Invalid payment verification payload.' }, { status: 400 });
    }

    const enrollment = await prisma.enrollment.findUnique({
      where: { id: parsed.data.enrollmentId },
      include: { payment: true },
    });

    if (!enrollment) {
      return NextResponse.json({ success: false, message: 'Enrollment not found.' }, { status: 404 });
    }

    const isValid = verifyRazorpaySignature({
      orderId: parsed.data.razorpay_order_id,
      paymentId: parsed.data.razorpay_payment_id,
      signature: parsed.data.razorpay_signature,
    });

    if (!isValid) {
      await prisma.enrollment.update({
        where: { id: enrollment.id },
        data: { paymentStatus: 'FAILED' },
      });

      if (enrollment.payment) {
        await prisma.payment.update({
          where: { id: enrollment.payment.id },
          data: { status: 'FAILED', signature: parsed.data.razorpay_signature },
        });
      }

      return NextResponse.json({ success: false, message: 'Payment signature verification failed.' }, { status: 400 });
    }

    await prisma.enrollment.update({
      where: { id: enrollment.id },
      data: {
        paymentStatus: 'SUCCESS',
        razorpayOrderId: parsed.data.razorpay_order_id,
        razorpayPaymentId: parsed.data.razorpay_payment_id,
      },
    });

    await prisma.payment.upsert({
      where: { enrollmentId: enrollment.id },
      update: {
        razorpayOrderId: parsed.data.razorpay_order_id,
        razorpayPaymentId: parsed.data.razorpay_payment_id,
        amount: enrollment.amount,
        currency: 'INR',
        status: 'SUCCESS',
        signature: parsed.data.razorpay_signature,
      },
      create: {
        enrollmentId: enrollment.id,
        razorpayOrderId: parsed.data.razorpay_order_id,
        razorpayPaymentId: parsed.data.razorpay_payment_id,
        amount: enrollment.amount,
        currency: 'INR',
        status: 'SUCCESS',
        signature: parsed.data.razorpay_signature,
      },
    });

    return NextResponse.json({
      success: true,
      data: {
        enrollmentId: enrollment.id,
        paymentStatus: 'SUCCESS',
      },
    });
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json({ success: false, message: 'Unable to verify payment.' }, { status: 500 });
  }
}
