import { ArrowUpRight, CalendarDays, CircleDollarSign, GraduationCap, Trophy } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';

export const metadata = {
  title: 'Tech Hackathon',
  description: 'Join the Nexiquill tech hackathon. Registration closes 25 November 2026, with prizes worth up to ₹1 lakh.',
};

const whatsappUrl = 'https://wa.me/919505325418?text=Hi%20Nexiquill%2C%20I%27d%20like%20to%20know%20about%20the%20tech%20hackathon.';

export default function HackathonPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero-band overflow-hidden py-16 text-[#f6f7f1] sm:py-24">
          <Container className="relative">
            <div className="absolute -right-10 top-0 hidden h-64 w-64 rounded-full border border-white/10 sm:block" />
            <div className="absolute -right-2 top-8 hidden h-48 w-48 rounded-full border border-white/10 sm:block" />
            <div className="relative max-w-3xl">
              <p className="eyebrow"><span className="eyebrow-dot" /> NEXIQUILL TECH HACKATHON</p>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Build something bold. Compete for a share of the spotlight.</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
                Bring your ideas to a technology challenge built around making, problem-solving, and showing what you can do.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#d8f078] px-5 py-3 text-sm font-semibold text-[#20251f] transition-colors hover:bg-[#e6fb9a]">
                  Ask about registration <ArrowUpRight size={16} />
                </a>
                <a href="#winners" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  Winner announcements
                </a>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16">
          <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <article className="rounded-lg border border-[#20251f]/10 bg-white p-6">
              <CircleDollarSign size={20} className="text-[#536e3a]" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#687064]">Prize opportunity</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-[#20251f]">Up to ₹1 lakh</p>
              <p className="mt-2 text-sm leading-6 text-[#687064]">Prize money for the tech hackathon. Final prize structure and eligibility: contact the organizers.</p>
            </article>
            <article className="rounded-lg border border-[#20251f]/10 bg-white p-6">
              <CalendarDays size={20} className="text-[#536e3a]" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#687064]">Registration closes</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-[#20251f]">25 November 2026</p>
              <p className="mt-2 text-sm leading-6 text-[#687064]">Get in touch with Nexiquill before registration closes to confirm how to take part.</p>
            </article>
            <article className="rounded-lg border border-[#20251f]/10 bg-white p-6">
              <Trophy size={20} className="text-[#536e3a]" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#687064]">Build. Present. Compete.</p>
              <p className="mt-2 text-xl font-semibold text-[#20251f]">Make your work count</p>
              <p className="mt-2 text-sm leading-6 text-[#687064]">Challenge format, team rules, and judging details are available from the organizing team.</p>
            </article>
            <article className="rounded-lg border border-[#20251f]/10 bg-[#e9ecdf] p-6">
              <GraduationCap size={20} className="text-[#536e3a]" />
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[#596253]">Course learner eligibility</p>
              <p className="mt-2 text-xl font-semibold text-[#20251f]">Taken a Nexiquill course?</p>
              <p className="mt-2 text-sm leading-6 text-[#596253]">You are eligible to participate in the tech hackathon. Contact the organizers for registration and event requirements.</p>
            </article>
          </Container>
        </section>

        <section className="bg-[#e9ecdf] py-16 sm:py-20" id="winners">
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="section-kicker">THE WINNERS</p>
              <h2 className="section-title">Great ideas deserve their moment.</h2>
              <p className="mt-4 text-sm leading-7 text-[#687064]">This hackathon is upcoming. Winners and prize recipients have not been announced yet; we will share confirmed results here after judging.</p>
            </div>
            <div className="rounded-lg border border-[#20251f]/10 bg-white p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-[#e9ecdf] text-[#536e3a]"><Trophy size={20} /></span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#687064]">Results pending</p>
                  <h3 className="mt-2 text-xl font-semibold text-[#20251f]">Winner showcase coming after the event</h3>
                  <p className="mt-3 text-sm leading-6 text-[#687064]">No participant names or placements are listed before the results are officially confirmed.</p>
                </div>
              </div>
              <div className="mt-7 border-t border-[#20251f]/10 pt-5">
                <p className="text-sm font-medium text-[#20251f]">Want to participate?</p>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#47533c] hover:text-[#20251f]">
                  Message Nexiquill on WhatsApp <ArrowUpRight size={15} />
                </a>
                <p className="mt-2 text-xs text-[#687064]">+91 95053 25418</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16">
          <Container>
            <div className="flex flex-col gap-6 rounded-lg bg-[#20251f] p-7 text-[#f6f7f1] sm:p-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[#d8f078]">REGISTRATION CLOSES 25 NOVEMBER 2026</p>
                <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">Have questions about the challenge?</h2>
                <p className="mt-2 text-sm text-white/60">Ask the team for registration, eligibility, and event details.</p>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#d8f078] px-5 py-3 text-sm font-semibold text-[#20251f] transition-colors hover:bg-[#e6fb9a]">
                Contact the organizers <ArrowUpRight size={15} />
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
