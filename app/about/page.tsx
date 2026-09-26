import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const metadata = {
  title: 'About',
  description: 'Learn more about Nexiquill and our AI + software engineering learning approach.',
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <Container className="space-y-10">
          <SectionHeading
            eyebrow="About"
            title="Nexiquill is building a future-ready technology learning experience."
            description="We design practical, career-focused learning journeys for software engineering and Generative AI."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
              <h3 className="text-2xl font-semibold text-white">Our approach</h3>
              <p className="mt-4 text-slate-300">
                Nexiquill focuses on contemporary software engineering, product thinking, and applied AI workflows so learners can build meaningful technical skills in a realistic, focused environment.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
              <h3 className="text-2xl font-semibold text-white">What we emphasize</h3>
              <ul className="mt-4 space-y-3 text-slate-300">
                <li>• Practical project-driven learning</li>
                <li>• Modern development workflows</li>
                <li>• Career-oriented skill-building</li>
                <li>• AI-enabled engineering practices</li>
              </ul>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
