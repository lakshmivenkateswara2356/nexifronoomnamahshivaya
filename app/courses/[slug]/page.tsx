import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, BadgeCheck, BookOpenCheck, Clock3, Code2, GraduationCap } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getCourseBySlug } from '@/lib/courses';
import { upfrontPaymentUrl } from '@/lib/payment';
import { CourseInquiryCta } from '@/components/courses/CourseInquiryCta';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  return {
    title: course?.title ?? 'Course',
    description: course?.shortDescription ?? 'Explore Nexiquill technology courses.',
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="hero-band py-14 text-[#f6f7f1] sm:py-20">
          <Container>
            <Link href="/courses" className="inline-flex items-center gap-2 text-sm text-white/65 transition-colors hover:text-white">
              <ArrowLeft size={15} /> All courses
            </Link>
            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="eyebrow"><span className="eyebrow-dot" /> {course.status === 'OPEN' ? 'ENROLLMENT OPEN' : 'BATCH CLOSED'}</p>
                <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">{course.title}</h1>
                <p className="mt-5 max-w-2xl leading-7 text-white/65">{course.description}</p>
              </div>
              <div className="shrink-0 rounded-lg border border-white/15 bg-white/5 p-5 sm:min-w-64">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">Program duration</p>
                <p className="mt-2 text-2xl font-semibold">{course.duration}</p>
                <p className="mt-1 text-sm text-white/55">Live classes &amp; recordings</p>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-12 sm:py-16">
          <Container className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-6">
              <article className="rounded-lg border border-[#20251f]/10 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-[#e9ecdf] text-[#536e3a]"><BookOpenCheck size={19} /></span>
                  <h2 className="text-xl font-semibold text-[#20251f]">What you will learn</h2>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {course.learningOverview.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-[#596253]">
                      <BadgeCheck size={16} className="mt-1 shrink-0 text-[#6d874e]" />{item}
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-lg border border-[#20251f]/10 bg-white p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-md bg-[#e9ecdf] text-[#536e3a]"><Code2 size={19} /></span>
                  <h2 className="text-xl font-semibold text-[#20251f]">Tools and technologies</h2>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-[#20251f]/10 bg-[#f6f7f1] px-3 py-1.5 text-sm text-[#596253]">{tech}</span>
                  ))}
                </div>
              </article>

              <article className="rounded-lg border border-[#20251f]/10 bg-white p-6 sm:p-8">
                <h2 className="text-xl font-semibold text-[#20251f]">Build real projects</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {course.projects.map((project) => (
                    <li key={project} className="rounded-md bg-[#f6f7f1] p-4 text-sm font-medium text-[#46503f]">{project}</li>
                  ))}
                </ul>
              </article>

              {course.pricing ? (
                <article className="rounded-lg bg-[#20251f] p-6 text-[#f6f7f1] sm:p-8">
                  <div className="flex items-center gap-3">
                    <GraduationCap size={20} className="text-[#d8f078]" />
                    <h2 className="text-xl font-semibold">Internship opportunity</h2>
                  </div>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-white/65">The program includes an opportunity to apply for a 3-month paid internship. The poster advertises stipends of up to ₹15,000 per month; selection and stipend depend on the internship offer.</p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[#d8f078]"><Clock3 size={15} /> After the 8–12 week live program</div>
                  <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-white/65">Top performers may be considered for full-time roles in the ₹6.9–11 LPA range, subject to performance, interviews, role availability, and selection criteria. This is not a guaranteed outcome.</p>
                </article>
              ) : null}
            </div>

            <aside className="h-fit rounded-lg border border-[#20251f]/10 bg-[#e9ecdf] p-6 sm:p-7 lg:sticky lg:top-24">
              {course.pricing ? (
                <>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#596253]">First-batch offer · first {course.pricing.seatLimit} seats</p>
                  <p className="mt-3 text-4xl font-semibold tracking-tight text-[#20251f]">₹{course.pricing.batchFee.toLocaleString('en-IN')}</p>
                  <p className="mt-1 text-sm text-[#687064]">Regular fee <span className="line-through">₹{course.pricing.regularFee.toLocaleString('en-IN')}</span></p>
                  <dl className="mt-6 space-y-4 border-t border-[#20251f]/15 pt-5 text-sm">
                    <div className="flex justify-between gap-4"><dt className="text-[#596253]">Upfront seat booking</dt><dd className="font-semibold text-[#20251f]">₹{course.pricing.bookingFee.toLocaleString('en-IN')}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#596253]">Remaining after receiving an offer letter</dt><dd className="font-semibold text-[#20251f]">₹{course.pricing.remainingFee.toLocaleString('en-IN')}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-[#596253]">Enrollment closes</dt><dd className="text-right font-semibold text-[#20251f]">{course.pricing.enrollmentDeadline}</dd></div>
                  </dl>
                  <p className="mt-5 text-xs leading-5 text-[#687064]">The displayed payment flow currently collects the ₹{course.pricing.bookingFee} seat-booking amount. Remaining-fee timing follows the course offer.</p>
                </>
              ) : (
                <>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#596253]">{course.status === 'OPEN' ? 'Enrollment open' : 'Enrollment closed'}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#20251f]">{course.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#687064]">Contact the Nexiquill team for current batch pricing and enrollment details.</p>
                  <p className="mt-5 text-sm text-[#596253]">Seat booking amount: <strong className="text-[#20251f]">₹{course.fee.toLocaleString('en-IN')}</strong></p>
                </>
              )}
              <div className="mt-6">
                {course.status === 'OPEN' ? (
                  <Button href={upfrontPaymentUrl} className="w-full rounded-md bg-[#20251f] text-white shadow-none hover:bg-[#394136]">
                    Book your seat <ArrowUpRight size={15} />
                  </Button>
                ) : (
                  <Button href="/contact" className="w-full rounded-md bg-[#20251f] text-white shadow-none hover:bg-[#394136]">Ask about the next batch</Button>
                )}
              </div>
              <div className="mt-4 border-t border-[#20251f]/15 pt-4">
                <a href="/api/courses/brochure?v=20261118" className="inline-flex items-center gap-2 text-sm font-semibold text-[#47533c] hover:text-[#20251f]">
                  Download course brochure PDF <ArrowUpRight size={14} />
                </a>
              </div>
              <div className="mt-6 border-t border-[#20251f]/15 pt-5">
                <h2 className="text-sm font-semibold text-[#20251f]">Course FAQs</h2>
                <div className="mt-4 space-y-4">
                  {course.faq.map((faqItem) => (
                    <div key={faqItem.question}>
                      <h3 className="text-sm font-medium text-[#20251f]">{faqItem.question}</h3>
                      <p className="mt-1 text-xs leading-5 text-[#687064]">{faqItem.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </Container>
        </section>
        <CourseInquiryCta courseSlug={course.slug} />
      </main>
      <Footer />
    </>
  );
}
