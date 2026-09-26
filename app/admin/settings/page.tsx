import { redirect } from 'next/navigation';
import { verifyAdminSession } from '@/lib/auth';

export default async function AdminSettingsPage() {
  const admin = await verifyAdminSession();
  if (!admin) redirect('/admin/login');

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
        <h1 className="text-3xl font-semibold">Settings</h1>
        <p className="mt-4 text-slate-300">Environment-driven configuration and secure defaults are used for production deployment.</p>
      </div>
    </main>
  );
}
