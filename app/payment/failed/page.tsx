import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { upfrontPaymentUrl } from '@/lib/payment';

export default function PaymentFailedPage() {
  return (
    <>
      <Navbar />
      <main className="py-16 sm:py-20">
        <Container className="max-w-3xl rounded-lg border border-[#20251f]/10 bg-white p-7 text-center shadow-[0_16px_50px_-36px_rgba(32,37,31,0.28)] sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a6c2f]">Payment not confirmed</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#20251f] sm:text-4xl">Your seat booking is not complete yet.</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#687064]">If your bank shows a charge, please contact Nexiquill before trying again. Otherwise, you can retry the seat-booking payment or return to the courses page.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href={upfrontPaymentUrl}>Try Again — ₹299 booking</Button>
            <Button href="/courses" variant="secondary">Back to Courses</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
