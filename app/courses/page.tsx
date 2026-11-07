import Link from 'next/link';
import { ArrowDownToLine, ArrowRight, BadgeCheck, Clock3, GraduationCap, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/courses/CourseCard';
import { openCourses, closedCourses } from '@/lib/courses';
import { upfrontPaymentUrl } from '@/lib/payment';

export const metadata = {
  title: 'Courses',
  description: 'Explore Nexiquill technology courses, clear program details, batch pricing, and enrollment information.',
};

export default function CoursesPage() {
  const featuredCourse = openCourses.find((course) => course.pricing);

  return (
    <>
      <Navbar />
      <main>
        <section className="hero-band py-16 text-[#f6f7f1] sm:py-24">
          <Container>
            <p className="eyebrow"><span className="eyebrow-dot" /> NEXIQUILL ACADEMY</p>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">Build practical skills. Make your next move.</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/65 sm:text-lg">
              Instructor-led technology programs designed around real projects, modern tools, and a clear view of the fees before you enroll.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#open-programs" className="inline-flex items-center gap-2 rounded-md bg-[#d8f078] px-5 py-3 text-sm font-semibold text-[#20251f] transition-colors hover:bg-[#e6fb9a]">
                Explore courses <ArrowRight size={16} />
              </a>
              <Link href="/hackathon" className="inline-flex items-center gap-2 rounded-md border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10">
                Explore the hackathon
              </Link>
            </div>
          </Container>
        </section>

        {featuredCourse?.pricing ? (
          <section className="py-16 sm:py-20" id="featured-program">
            <Container>
              <div className="grid gap-8 overflow-hidden rounded-lg border border-[#20251f]/10 bg-white shadow-[0_24px_70px_-45px_rgba(32,37,31,0.35)] lg:grid-cols-[1.2fr_0.8fr]">
                <div className="p-7 sm:p-10">
                  <p className="section-kicker">FEATURED FIRST BATCH · 50 SEATS</p>
                  <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[#20251f] sm:text-4xl">{featuredCourse.title}</h2>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#687064]">{featuredCourse.description}</p>
                  <div className="mt-7 grid gap-4 sm:grid-cols-3">
                    <div className="border-t border-[#20251f]/10 pt-4">
                      <Clock3 size={18} className="text-[#536e3a]" />
                      <p className="mt-3 text-sm font-semibold text-[#20251f]">8–12 weeks</p>
                      <p className="mt-1 text-xs text-[#687064]">Live program</p>
                    </div>
                    <div className="border-t border-[#20251f]/10 pt-4">
                      <GraduationCap size={18} className="text-[#536e3a]" />
                      <p className="mt-3 text-sm font-semibold text-[#20251f]">3-month opportunity</p>
                      <p className="mt-1 text-xs text-[#687064]">Paid internship</p>
                    </div>
                    <div className="border-t border-[#20251f]/10 pt-4">
                      <BadgeCheck size={18} className="text-[#536e3a]" />
                      <p className="mt-3 text-sm font-semibold text-[#20251f]">Certificate</p>
                      <p className="mt-1 text-xs text-[#687064]">On completion</p>
                    </div>
                  </div>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link href={`/courses/${featuredCourse.slug}`} className="inline-flex items-center gap-2 rounded-md bg-[#20251f] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#394136]">
                      Full course details <ArrowRight size={15} />
                    </Link>
                    <a href="/api/courses/brochure" className="inline-flex items-center gap-2 rounded-md border border-[#20251f]/15 px-5 py-3 text-sm font-semibold text-[#20251f] transition-colors hover:bg-[#f6f7f1]">
                      Download brochure PDF <ArrowDownToLine size={15} />
                    </a>
                  </div>
                </div>

                <div className="bg-[#e9ecdf] p-7 sm:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#596253]">First-batch offer</p>
                      <p className="mt-3 text-4xl font-semibold tracking-tight text-[#20251f]">₹{featuredCourse.pricing.batchFee.toLocaleString('en-IN')}</p>
                    </div>
                    <Sparkles size={20} className="mt-1 text-[#536e3a]" />
                  </div>
                  <p className="mt-1 text-sm text-[#687064]">Regular fee <span className="line-through">₹{featuredCourse.pricing.regularFee.toLocaleString('en-IN')}</span></p>
                  <div className="my-6 border-t border-[#20251f]/15" />
                  <dl className="space-y-4 text-sm">
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="text-[#596253]">Upfront seat booking</dt>
                      <dd className="font-semibold text-[#20251f]">₹{featuredCourse.pricing.bookingFee.toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="text-[#596253]">Remaining after paid internship offer</dt>
                      <dd className="font-semibold text-[#20251f]">₹{featuredCourse.pricing.remainingFee.toLocaleString('en-IN')}</dd>
                    </div>
                    <div className="flex items-baseline justify-between gap-4">
                      <dt className="text-[#596253]">Enrollment deadline</dt>
                      <dd className="font-semibold text-[#20251f]">{featuredCourse.pricing.enrollmentDeadline}</dd>
                    </div>
                  </dl>
                  <p className="mt-5 text-xs leading-5 text-[#687064]">First-batch price applies to the first {featuredCourse.pricing.seatLimit} seats. The remaining fee timing is as stated in the course offer.</p>
                  <a href={upfrontPaymentUrl} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#20251f] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#394136]">
                    Book your seat for ₹{featuredCourse.pricing.bookingFee} <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </Container>
          </section>
        ) : null}

        <section className="bg-[#e9ecdf] py-16 sm:py-20" id="open-programs">
          <Container>
            <div className="max-w-2xl">
              <p className="section-kicker">LEARN WITH PURPOSE</p>
              <h2 className="section-title">Choose your learning path.</h2>
              <p className="mt-4 leading-7 text-[#687064]">Explore the open programs below. Each course page covers its learning outcomes, technologies, projects, and enrollment information.</p>
            </div>
            <div className="mt-9 grid items-stretch gap-5 md:grid-cols-2">
              {openCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </Container>
        </section>

        {closedCourses.length > 0 ? (
          <section className="py-16 sm:py-20">
            <Container>
              <h2 className="text-2xl font-semibold text-[#20251f]">Other programs</h2>
              <p className="mt-2 text-sm text-[#687064]">These batches are currently closed. Contact us for future availability.</p>
              <div className="mt-7 grid gap-5 md:grid-cols-2">
                {closedCourses.map((course) => (
                  <article key={course.slug} className="rounded-lg border border-[#20251f]/10 bg-white p-6">
                    <span className="rounded-full bg-[#f3eee1] px-3 py-1 text-xs font-medium text-[#8a6c2f]">Enrollment closed</span>
                    <h3 className="mt-4 text-xl font-semibold text-[#20251f]">{course.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#687064]">{course.shortDescription}</p>
                    <Link href={`/courses/${course.slug}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#47533c] hover:text-[#20251f]">
                      View course <ArrowRight size={15} />
                    </Link>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
