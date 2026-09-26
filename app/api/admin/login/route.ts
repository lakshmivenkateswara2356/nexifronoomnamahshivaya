import { NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/db';
import { comparePassword, serializeAdminSession } from '@/lib/auth';

const schema = z.object({
  email: z.email(),
  password: z.string().min(8),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, message: 'Invalid admin credentials.' }, { status: 400 });
    }

    const admin = await prisma.admin.findUnique({ where: { email: parsed.data.email.toLowerCase() } });
    if (!admin) {
      return NextResponse.json({ success: false, message: 'Invalid credentials.' }, { status: 401 });
    }

    const valid = await comparePassword(parsed.data.password, admin.passwordHash);
    if (!valid) {
      return NextResponse.json({ success: false, message: 'Invalid credentials.' }, { status: 401 });
    }

    const response = NextResponse.json({ success: true, data: { admin: { email: admin.email, role: admin.role } } });
    response.cookies.set('nexiquill_admin', serializeAdminSession(admin.email), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 12,
    });

    return response;
  } catch (error) {
    console.error('Admin login failed:', error);
    return NextResponse.json({ success: false, message: 'Unable to sign in.' }, { status: 500 });
  }
}
