import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Refund Policy',
  description: 'Nexiquill refund policy placeholder.',
};

export default function RefundPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <Container className="max-w-3xl rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
          <SectionHeading eyebrow="Refunds" title="Refund Policy" />
          <p className="mt-6 text-slate-300">[NEXIQUILL TO PROVIDE FINAL LEGAL POLICY]</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
