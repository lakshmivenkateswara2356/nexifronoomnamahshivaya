import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const courses = await prisma.course.findMany({
      orderBy: { createdAt: 'asc' },
    });

    return NextResponse.json({
      success: true,
      data: courses,
    });
  } catch (error) {
    console.error('Course fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to load courses.' },
      { status: 500 },
    );
  }
}
