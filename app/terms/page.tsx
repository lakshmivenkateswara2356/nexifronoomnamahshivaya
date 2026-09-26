import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Nexiquill terms and conditions placeholder policy.',
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <Container className="max-w-3xl rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
          <SectionHeading eyebrow="Terms" title="Terms & Conditions" />
          <p className="mt-6 text-slate-300">[NEXIQUILL TO PROVIDE FINAL LEGAL POLICY]</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
