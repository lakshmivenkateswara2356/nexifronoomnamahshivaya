import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function PaymentFailedPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <Container className="max-w-3xl rounded-[28px] border border-red-500/20 bg-slate-900/80 p-8 text-center">
          <h1 className="text-4xl font-semibold text-white">Payment Could Not Be Completed</h1>
          <p className="mt-4 text-slate-300">Your enrollment has not been completed due to a payment issue. Please try again or return to the courses page.</p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/enroll">Try Again</Button>
            <Button href="/courses" variant="secondary">Back to Courses</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
