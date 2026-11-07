import { redirect } from 'next/navigation';
import { BadgeCheck } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { prisma } from '@/lib/db';

export default async function PaymentSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ enrollmentId?: string }>;
}) {
  const { enrollmentId } = await searchParams;
  if (!enrollmentId) {
    redirect('/payment/failed');
  }

  const enrollment = await prisma.enrollment.findUnique({
    where: { id: enrollmentId },
    include: { course: true },
  });

  if (!enrollment || enrollment.paymentStatus !== 'SUCCESS') {
    redirect('/payment/failed');
  }

  return (
    <>
      <Navbar />
      <main className="py-16 sm:py-20">
        <Container className="max-w-3xl rounded-lg border border-[#20251f]/10 bg-white p-7 text-center shadow-[0_16px_50px_-36px_rgba(32,37,31,0.28)] sm:p-10">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#e9ecdf] text-[#536e3a]"><BadgeCheck size={26} /></span>
          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#687064]">Payment confirmed</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#20251f] sm:text-4xl">Your seat booking is complete.</h1>
          <p className="mt-3 text-sm leading-6 text-[#687064]">Thank you, {enrollment.fullName}. Your enrollment details are below.</p>
          <dl className="mx-auto mt-8 max-w-xl divide-y divide-[#20251f]/10 rounded-md border border-[#20251f]/10 bg-[#fbfcf8] px-5 text-left text-sm">
            <div className="flex flex-wrap justify-between gap-2 py-4"><dt className="text-[#687064]">Enrollment reference</dt><dd className="font-semibold text-[#20251f]">{enrollment.enrollmentNumber}</dd></div>
            <div className="flex flex-wrap justify-between gap-2 py-4"><dt className="text-[#687064]">Course</dt><dd className="font-semibold text-[#20251f]">{enrollment.course.title}</dd></div>
            <div className="flex flex-wrap justify-between gap-2 py-4"><dt className="text-[#687064]">Seat-booking payment</dt><dd className="font-semibold text-[#20251f]">₹{enrollment.amount.toLocaleString('en-IN')}</dd></div>
            <div className="flex flex-wrap justify-between gap-2 py-4"><dt className="text-[#687064]">Status</dt><dd className="font-semibold text-[#536e3a]">Paid</dd></div>
          </dl>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/courses">Explore courses</Button>
            <Button href="/" variant="secondary">Go to home</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
