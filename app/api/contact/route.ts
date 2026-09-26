import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';

const schema = z.object({
  name: z.string().min(2),
  email: z.email(),
  phone: z.string().optional().or(z.literal('')),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ success: false, message: 'Invalid contact form data.' }, { status: 400 });
    }

    await prisma.contactMessage.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone || null,
        message: parsed.data.message,
      },
    });

    return NextResponse.json({ success: true, data: { message: 'Thanks! Your message has been received.' } });
  } catch (error) {
    console.error('Contact form failed:', error);
    return NextResponse.json({ success: false, message: 'Unable to send message.' }, { status: 500 });
  }
}
