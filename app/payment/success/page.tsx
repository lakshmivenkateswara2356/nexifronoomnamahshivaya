import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function PaymentSuccessPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <Container className="max-w-3xl rounded-[28px] border border-emerald-500/20 bg-slate-900/80 p-8 text-center">
          <h1 className="text-4xl font-semibold text-white">You&apos;re Successfully Enrolled!</h1>
          <div className="mt-8 space-y-4 text-left text-slate-300">
            <p><strong className="text-white">Enrollment ID:</strong> NQ-20260926-XXXX</p>
            <p><strong className="text-white">Candidate Name:</strong> Example Candidate</p>
            <p><strong className="text-white">Course:</strong> Python Full Stack + GenAI</p>
            <p><strong className="text-white">Amount:</strong> ₹299</p>
            <p><strong className="text-white">Status:</strong> Payment Successful</p>
          </div>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Button href="/">Go to Home</Button>
            <Button href="/courses" variant="secondary">View Course</Button>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
