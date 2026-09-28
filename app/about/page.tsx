import { ArrowUpRight, Compass, Handshake, ScanSearch } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'About Nexiquill',
  description: 'Meet Nexiquill, an end-to-end product engineering partner for ambitious teams.',
};

const principles = [
  { icon: ScanSearch, title: 'Understand before building', text: 'We make space for the real problem, the people using the product, and the constraints around it.' },
  { icon: Compass, title: 'Choose the useful next step', text: 'Good engineering is focused. We prioritize the work that creates clarity and momentum.' },
  { icon: Handshake, title: 'Work as one team', text: 'Open communication and shared ownership keep the product moving after launch, too.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-band py-20 text-[#f6f7f1] sm:py-28">
          <Container>
            <p className="eyebrow"><span className="eyebrow-dot" /> ABOUT NEXIQUILL</p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-normal sm:text-6xl">We bring product thinking and engineering into the same room.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">Nexiquill partners with teams to imagine, build, and evolve software that solves meaningful problems. Strategy, design, engineering, and delivery work better when they move together.</p>
          </Container>
        </section>

        <section className="py-20 sm:py-24">
          <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><p className="section-kicker">OUR POINT OF VIEW</p><h2 className="section-title">Technology should make the next move clearer.</h2></div>
            <div className="space-y-5 text-base leading-8 text-[#687064]"><p>Building software is more than writing code. It is understanding a business, shaping an experience, making sound technical choices, and being accountable for how the product performs in the real world.</p><p>We work across that whole journey. Whether you are validating a new SaaS idea, improving an established platform, or bringing AI into a workflow, we help turn the next step into a product your team can stand behind.</p><a href="/services" className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-[#47533c] hover:text-[#20251f]">Explore our services <ArrowUpRight size={15} /></a></div>
          </Container>
        </section>

        <section className="bg-[#e9ecdf] py-20 sm:py-24">
          <Container><p className="section-kicker">HOW WE SHOW UP</p><h2 className="section-title max-w-2xl">A thoughtful partner at every stage.</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">{principles.map(({ icon: Icon, title, text }, index) => <article key={title} className="border-t border-[#20251f]/20 pt-5"><div className="flex items-center justify-between"><Icon size={20} className="text-[#536e3a]" /><span className="text-xs text-[#89917f]">0{index + 1}</span></div><h3 className="mt-7 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#687064]">{text}</p></article>)}</div>
          </Container>
        </section>

        <section className="py-20 sm:py-24"><Container><div className="flex flex-col gap-6 rounded-lg bg-[#20251f] p-8 text-[#f6f7f1] sm:p-12 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-semibold tracking-[0.16em] text-[#d8f078]">BUILD WITH NEXIQUILL</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-normal sm:text-4xl">Bring us the challenge. We&apos;ll bring the right team.</h2></div><a href="/contact" className="inline-flex items-center gap-2 rounded-md bg-[#d8f078] px-5 py-3 text-sm font-semibold text-[#20251f] transition-colors hover:bg-[#e6fb9a]">Talk to us <ArrowUpRight size={15} /></a></div></Container></section>
      </main>
      <Footer />
    </>
  );
}
