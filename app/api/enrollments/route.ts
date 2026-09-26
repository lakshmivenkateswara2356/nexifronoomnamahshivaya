import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { sanitizeInput } from '@/lib/utils';

const schema = z.object({
  fullName: z.string().min(2),
  email: z.email(),
  phone: z.string().min(10),
  courseId: z.string().min(1),
  qualification: z.string().optional().or(z.literal('')),
  graduationYear: z.coerce.number().int().min(1900).max(new Date().getFullYear() + 10).optional().or(z.literal('')),
  city: z.string().optional().or(z.literal('')),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, message: 'Invalid enrollment details.' },
        { status: 400 },
      );
    }

    const sanitizedBody = {
      fullName: sanitizeInput(parsed.data.fullName),
      email: sanitizeInput(parsed.data.email.toLowerCase()),
      phone: sanitizeInput(parsed.data.phone),
      courseId: parsed.data.courseId,
      qualification: parsed.data.qualification ? sanitizeInput(parsed.data.qualification) : null,
      graduationYear: parsed.data.graduationYear ? Number(parsed.data.graduationYear) : null,
      city: parsed.data.city ? sanitizeInput(parsed.data.city) : null,
    };

    const course = await prisma.course.findUnique({ where: { id: sanitizedBody.courseId } });

    if (!course || course.status !== 'OPEN') {
      return NextResponse.json(
        { success: false, message: 'This course is not currently open for enrollment.' },
        { status: 400 },
      );
    }

    const existing = await prisma.enrollment.findFirst({
      where: {
        email: sanitizedBody.email,
        courseId: sanitizedBody.courseId,
        paymentStatus: { not: 'FAILED' },
      },
    });

    if (existing) {
      return NextResponse.json(
        { success: false, message: 'An enrollment already exists for this candidate and course.' },
        { status: 409 },
      );
    }

    const enrollment = await prisma.enrollment.create({
      data: {
        enrollmentNumber: `NQ-${Date.now()}`,
        fullName: sanitizedBody.fullName,
        email: sanitizedBody.email,
        phone: sanitizedBody.phone,
        qualification: sanitizedBody.qualification,
        graduationYear: sanitizedBody.graduationYear,
        city: sanitizedBody.city,
        courseId: sanitizedBody.courseId,
        amount: course.fee,
        paymentStatus: 'PENDING',
      },
    });

    return NextResponse.json({
      success: true,
      data: { enrollment },
    });
  } catch (error) {
    console.error('Enrollment creation failed:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to create enrollment at this time.' },
      { status: 500 },
    );
  }
}
