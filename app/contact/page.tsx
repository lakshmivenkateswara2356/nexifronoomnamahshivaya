import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'Contact',
  description: 'Contact Nexiquill for course information and support.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Connect"
              title="We’re here to help."
              description="Send a message and our team will get back to you with the information you need."
            />
          </div>

          <form className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm text-slate-300">
                Name
                <input className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400" placeholder="Your name" />
              </label>
              <label className="text-sm text-slate-300">
                Email
                <input type="email" className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400" placeholder="you@example.com" />
              </label>
              <label className="text-sm text-slate-300 md:col-span-2">
                Phone
                <input className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400" placeholder="+91 98765 43210" />
              </label>
              <label className="text-sm text-slate-300 md:col-span-2">
                Message
                <textarea rows={5} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400" placeholder="Write your message" />
              </label>
            </div>
            <button type="submit" className="mt-6 inline-flex rounded-full bg-sky-500 px-5 py-3 font-medium text-white hover:bg-sky-400">Send Message</button>
          </form>
        </Container>
      </main>
      <Footer />
    </>
  );
}
