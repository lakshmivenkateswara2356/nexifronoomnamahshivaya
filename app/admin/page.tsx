import { redirect } from 'next/navigation';
import { prisma } from '@/lib/db';
import { verifyAdminSession } from '@/lib/auth';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

export default async function AdminDashboardPage() {
  const admin = await verifyAdminSession();
  if (!admin) {
    redirect('/admin/login');
  }

  const [totalEnrollments, successful, pending, failed, revenue] = await Promise.all([
    prisma.enrollment.count(),
    prisma.enrollment.count({ where: { paymentStatus: 'SUCCESS' } }),
    prisma.enrollment.count({ where: { paymentStatus: 'PENDING' } }),
    prisma.enrollment.count({ where: { paymentStatus: 'FAILED' } }),
    prisma.payment.aggregate({ _sum: { amount: true } }),
  ]);

  const cards = [
    { label: 'Total Enrollments', value: totalEnrollments },
    { label: 'Successful Payments', value: successful },
    { label: 'Pending Payments', value: pending },
    { label: 'Failed Payments', value: failed },
    { label: 'Today\'s Enrollments', value: 0 },
    { label: 'Total Revenue', value: `₹${(revenue._sum.amount || 0)}` },
  ];

  return (
    <>
      <Navbar />
      <main className="py-16">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Admin</p>
              <h1 className="mt-2 text-4xl font-semibold text-white">Dashboard</h1>
            </div>
            <a href="/admin/login" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white">Log out</a>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {cards.map((card) => (
              <div key={card.label} className="rounded-[24px] border border-white/10 bg-slate-900/80 p-6">
                <p className="text-sm text-slate-300">{card.label}</p>
                <p className="mt-4 text-3xl font-semibold text-white">{card.value}</p>
              </div>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
