import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { ArrowUpRight, Clock3, MessageSquareText } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

export const metadata = {
  title: 'Contact',
  description: 'Talk with Nexiquill about your SaaS product, software delivery, AI, cloud, or ongoing engineering needs.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-band py-16 text-[#f6f7f1] sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div><p className="eyebrow"><span className="eyebrow-dot" /> START A CONVERSATION</p><h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.04] tracking-normal sm:text-6xl">Tell us what you&apos;re building.</h1><p className="mt-5 max-w-lg leading-7 text-white/65">Share a little about your product, your goals, or the challenge in front of you. We&apos;ll take it from there.</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border-t border-white/20 pt-4"><MessageSquareText size={19} className="text-[#d8f078]" /><h2 className="mt-4 text-sm font-semibold">Useful context helps</h2><p className="mt-2 text-sm leading-6 text-white/60">A few details about your idea or project are plenty to get started.</p></div>
              <div className="border-t border-white/20 pt-4"><Clock3 size={19} className="text-[#d8f078]" /><h2 className="mt-4 text-sm font-semibold">We&apos;ll follow up</h2><p className="mt-2 text-sm leading-6 text-white/60">Leave your email and our team can continue the conversation with you.</p></div>
            </div>
          </Container>
        </section>
        <section className="py-16 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div><p className="section-kicker">YOUR PROJECT</p><h2 className="section-title text-3xl">What can we help you make?</h2><p className="mt-4 text-sm leading-6 text-[#687064]">SaaS development, web applications, AI and automation, cloud infrastructure, modernization, or ongoing product engineering.</p><a href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#47533c] hover:text-[#20251f]">Explore services <ArrowUpRight size={15} /></a></div>
            <ContactForm />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
