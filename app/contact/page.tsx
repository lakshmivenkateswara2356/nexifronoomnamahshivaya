import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { ArrowUpRight, Clock3, MessageSquareText } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';
import { courses } from '@/lib/courses';

export const metadata = {
  title: 'Contact',
  description: 'Talk with Nexiquill about your SaaS product, software delivery, AI, cloud, or ongoing engineering needs.',
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string; course?: string }>;
}) {
  const query = await searchParams;
  const isCourseInquiry = query.topic === 'course';
  const selectedCourseSlug = isCourseInquiry && courses.some((course) => course.slug === query.course)
    ? query.course
    : undefined;

  return (
    <>
      <Navbar />
      <main>
        <section className="hero-band py-16 text-[#f6f7f1] sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div><p className="eyebrow"><span className="eyebrow-dot" /> {isCourseInquiry ? 'COURSE ENQUIRY' : 'START A CONVERSATION'}</p><h1 className="mt-6 max-w-xl text-5xl font-semibold leading-[1.04] tracking-normal sm:text-6xl">{isCourseInquiry ? 'Let’s talk about your course.' : 'Tell us what you’re building.'}</h1><p className="mt-5 max-w-lg leading-7 text-white/65">{isCourseInquiry ? 'Send a question about course fees, curriculum, schedule, enrollment, or internship information. Our courses team will follow up.' : 'Share a little about your product, your goals, or the challenge in front of you. We’ll take it from there.'}</p></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border-t border-white/20 pt-4"><MessageSquareText size={19} className="text-[#d8f078]" /><h2 className="mt-4 text-sm font-semibold">{isCourseInquiry ? 'Ask about the program' : 'Useful context helps'}</h2><p className="mt-2 text-sm leading-6 text-white/60">{isCourseInquiry ? 'Tell us which course you mean and what you want to clarify.' : 'A few details about your idea or project are plenty to get started.'}</p></div>
              <div className="border-t border-white/20 pt-4"><Clock3 size={19} className="text-[#d8f078]" /><h2 className="mt-4 text-sm font-semibold">{isCourseInquiry ? 'Talk to the courses team' : 'We&apos;ll follow up'}</h2><p className="mt-2 text-sm leading-6 text-white/60">{isCourseInquiry ? 'Your message will be labeled as a course enquiry for our team.' : 'Leave your email and our team can continue the conversation with you.'}</p></div>
            </div>
          </Container>
        </section>
        <section id={isCourseInquiry ? 'course-inquiry' : undefined} className="py-16 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="section-kicker">{isCourseInquiry ? 'NEXIQUILL ACADEMY' : 'YOUR PROJECT'}</p>
              <h2 className="section-title text-3xl">{isCourseInquiry ? 'What would you like to know?' : 'What can we help you make?'}</h2>
              <p className="mt-4 text-sm leading-6 text-[#687064]">{isCourseInquiry ? 'Choose the course and question type so our team can get back to you with relevant course information.' : 'SaaS development, web applications, AI and automation, cloud infrastructure, modernization, or ongoing product engineering.'}</p>
              {!isCourseInquiry ? <a href="/services" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#47533c] hover:text-[#20251f]">Explore services <ArrowUpRight size={15} /></a> : null}
            </div>
            <ContactForm inquiryType={isCourseInquiry ? 'course' : 'general'} selectedCourseSlug={selectedCourseSlug} />
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
