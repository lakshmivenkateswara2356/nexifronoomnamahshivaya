import { verifyAdminSession } from '@/lib/auth';
import { prisma } from '@/lib/db';
import { redirect } from 'next/navigation';

export default async function AdminEnrollmentsPage() {
  const admin = await verifyAdminSession();
  if (!admin) redirect('/admin/login');

  const enrollments = await prisma.enrollment.findMany({
    include: { course: true },
    orderBy: { createdAt: 'desc' },
  });

  return (
    <main className="min-h-screen bg-slate-950 p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-semibold">Enrollments</h1>
        <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-slate-900/80">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-800 text-slate-200">
              <tr>
                <th className="p-4">Enrollment ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Course</th>
                <th className="p-4">Payment Status</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Razorpay Payment ID</th>
                <th className="p-4">Date</th>
              </tr>
            </thead>
            <tbody>
              {enrollments.map((enrollment: (typeof enrollments)[number]) => (
                <tr key={enrollment.id} className="border-t border-white/10">
                  <td className="p-4">{enrollment.enrollmentNumber}</td>
                  <td className="p-4">{enrollment.fullName}</td>
                  <td className="p-4">{enrollment.email}</td>
                  <td className="p-4">{enrollment.phone}</td>
                  <td className="p-4">{enrollment.course.title}</td>
                  <td className="p-4">{enrollment.paymentStatus}</td>
                  <td className="p-4">₹{enrollment.amount}</td>
                  <td className="p-4">{enrollment.razorpayPaymentId || '—'}</td>
                  <td className="p-4">{new Date(enrollment.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
