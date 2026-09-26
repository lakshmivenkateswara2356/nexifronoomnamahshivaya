import { cookies } from 'next/headers';
import { prisma } from '@/lib/db';
import bcrypt from 'bcryptjs';

export async function verifyAdminSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get('nexiquill_admin');

  if (!session?.value) return null;

  try {
    const payload = JSON.parse(Buffer.from(session.value, 'base64').toString('utf-8'));
    if (!payload.email) return null;

    const admin = await prisma.admin.findUnique({ where: { email: payload.email } });
    return admin;
  } catch {
    return null;
  }
}

export function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export function comparePassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function serializeAdminSession(email: string) {
  return Buffer.from(JSON.stringify({ email })).toString('base64');
}
