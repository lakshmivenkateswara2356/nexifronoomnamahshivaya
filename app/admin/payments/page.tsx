import { redirect } from 'next/navigation';
import { verifyAdminSession } from '@/lib/auth';
import { prisma } from '@/lib/db';

export default async function AdminPaymentsPage() {
  const admin = await verifyAdminSession();
  if (!admin) redirect('/admin/login');

  const payments = await prisma.payment.findMany({
    include: { enrollment: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-semibold">Payments</h1>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/80">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-800 text-slate-200">
              <tr>
                <th className="p-4">Enrollment</th>
                <th className="p-4">Order ID</th>
                <th className="p-4">Payment ID</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment: (typeof payments)[number]) => (
                <tr key={payment.id} className="border-t border-white/10">
                  <td className="p-4">{payment.enrollment.enrollmentNumber}</td>
                  <td className="p-4">{payment.razorpayOrderId || '—'}</td>
                  <td className="p-4">{payment.razorpayPaymentId || '—'}</td>
                  <td className="p-4">₹{payment.amount}</td>
                  <td className="p-4">{payment.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
