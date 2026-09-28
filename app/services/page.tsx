import { ArrowRight, ArrowUpRight, BrainCircuit, Check, CloudCog, Code2, Layers3, LifeBuoy, Workflow } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Services',
  description: 'End-to-end SaaS product development, web applications, AI, cloud engineering, modernization, and ongoing support from Nexiquill.',
};

const services = [
  { icon: Layers3, title: 'SaaS product development', text: 'Create a new product or take an early concept to a production-ready platform. We work across product discovery, UX, architecture, engineering, and launch.', deliverables: ['Product discovery & roadmap', 'Multi-tenant platforms', 'Billing, roles & integrations'] },
  { icon: Code2, title: 'Web application engineering', text: 'Build reliable, responsive applications that make complex work feel simple, with the right foundations for your next stage.', deliverables: ['Customer portals & dashboards', 'Internal business applications', 'API design & integrations'] },
  { icon: BrainCircuit, title: 'AI & workflow automation', text: 'Bring practical AI and automation into the places they can make a measurable difference, with human oversight and thoughtful safeguards.', deliverables: ['AI-enabled product features', 'Knowledge & search experiences', 'Workflow automation'] },
  { icon: CloudCog, title: 'Cloud & DevOps', text: 'Design cloud foundations that are secure, observable, and cost-aware. Improve the path from a code change to a confident release.', deliverables: ['Cloud architecture & migration', 'CI/CD and infrastructure as code', 'Monitoring & reliability'] },
  { icon: Workflow, title: 'Modernization & integration', text: 'Reduce friction in existing systems, connect disconnected tools, and make your core technology easier to evolve.', deliverables: ['Legacy application upgrades', 'System & data integrations', 'Performance and security improvements'] },
  { icon: LifeBuoy, title: 'Ongoing product engineering', text: 'Keep product momentum after launch with a steady engineering partner for iteration, maintenance, and new capabilities.', deliverables: ['Roadmap delivery', 'Maintenance & technical support', 'Continuous improvement'] },
];

const stages = [
  ['01', 'Align', 'A shared understanding of the problem, users, and outcomes.'],
  ['02', 'Shape', 'A practical plan, considered experience, and technical direction.'],
  ['03', 'Deliver', 'Working software shipped in small, visible increments.'],
  ['04', 'Evolve', 'Support and iteration as the product meets the real world.'],
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-band py-20 text-[#f6f7f1] sm:py-28">
          <Container className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div><p className="eyebrow"><span className="eyebrow-dot" /> OUR SERVICES</p><h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.04] tracking-normal sm:text-6xl">From first sketch to software that scales.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">A connected team for the full product journey: strategy, design, software engineering, cloud, AI, launch, and what comes after.</p></div>
            <div className="border-l border-white/20 pl-6 lg:ml-auto lg:max-w-sm"><p className="text-xs font-semibold tracking-[0.14em] text-[#d8f078]">ONE COLLABORATIVE TEAM</p><p className="mt-4 text-sm leading-7 text-white/65">Bring us a specific delivery challenge or a product idea that still needs shaping. We can join where you need us and work through the next stage together.</p><a href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#d8f078] hover:text-white">Start a conversation <ArrowUpRight size={15} /></a></div>
          </Container>
        </section>

        <section className="py-20 sm:py-24">
          <Container><div className="max-w-2xl"><p className="section-kicker">CAPABILITIES</p><h2 className="section-title">The right expertise, connected around your product.</h2></div>
            <div className="mt-12 divide-y divide-[#20251f]/15 border-y border-[#20251f]/15">{services.map(({ icon: Icon, title, text, deliverables }, index) => <article key={title} className="grid gap-7 py-8 md:grid-cols-[56px_1fr_0.9fr] md:gap-8"><div className="flex items-start justify-between md:block"><span className="grid h-11 w-11 place-items-center rounded-md bg-[#e9ecdf] text-[#3e4a35]"><Icon size={20} /></span><span className="text-xs text-[#92998d] md:mt-5 md:block">0{index + 1}</span></div><div><h3 className="text-xl font-semibold tracking-normal">{title}</h3><p className="mt-3 max-w-xl text-sm leading-7 text-[#687064]">{text}</p></div><ul className="space-y-2.5 text-sm text-[#596253]">{deliverables.map((item) => <li key={item} className="flex items-start gap-2.5"><Check size={15} className="mt-0.5 shrink-0 text-[#6d874e]" />{item}</li>)}</ul></article>)}</div>
          </Container>
        </section>

        <section className="bg-[#e9ecdf] py-20 sm:py-24"><Container><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><div><p className="section-kicker">FROM FIRST CALL TO WHAT&apos;S NEXT</p><h2 className="section-title">A clear path, without the handoffs.</h2></div><div className="grid gap-x-8 sm:grid-cols-2">{stages.map(([number, title, text]) => <article key={number} className="border-t border-[#20251f]/20 py-5"><span className="text-xs text-[#849078]">{number} / 04</span><h3 className="mt-3 font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-[#687064]">{text}</p></article>)}</div></div></Container></section>

        <section className="py-20 sm:py-24"><Container><div className="flex flex-col gap-7 rounded-lg bg-[#20251f] p-8 text-[#f6f7f1] sm:p-12 md:flex-row md:items-end md:justify-between"><div><p className="text-xs font-semibold tracking-[0.16em] text-[#d8f078]">LET&apos;S FIND THE RIGHT START</p><h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-normal sm:text-4xl">Have a challenge or an idea?</h2><p className="mt-3 max-w-xl text-sm leading-6 text-white/60">Tell us where you want to go. We&apos;ll help make the next step concrete.</p></div><Button href="/contact" className="gap-2 rounded-md bg-[#d8f078] text-[#20251f] shadow-none hover:bg-[#e6fb9a]">Talk to our team <ArrowRight size={16} /></Button></div></Container></section>
      </main>
      <Footer />
    </>
  );
}