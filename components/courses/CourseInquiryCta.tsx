import Link from 'next/link';
import { ArrowUpRight, MessageCircleMore } from 'lucide-react';

export function CourseInquiryCta({ courseSlug }: { courseSlug?: string }) {
  const inquiryUrl = courseSlug
    ? `/contact?topic=course&course=${encodeURIComponent(courseSlug)}#course-inquiry`
    : '/contact?topic=course#course-inquiry';

  return (
    <section className="py-16 sm:py-20" aria-labelledby="course-inquiry-heading">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-lg bg-[#20251f] p-7 text-[#f6f7f1] sm:p-10">
          <div className="absolute -right-10 -top-20 h-64 w-64 rounded-full border border-white/10" />
          <div className="relative flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="flex items-center gap-2 text-xs font-semibold tracking-[0.16em] text-[#d8f078]">
                <MessageCircleMore size={15} /> COURSE QUESTIONS
              </p>
              <h2 id="course-inquiry-heading" className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                Let&apos;s talk about your course.
              </h2>
              <p className="mt-3 text-sm leading-6 text-white/65">
                Ask us about course fees, the curriculum, class schedule, enrollment, or internship details. This inquiry goes directly to our courses team.
              </p>
            </div>
            <Link
              href={inquiryUrl}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-[#d8f078] px-5 py-3 text-sm font-semibold text-[#20251f] transition-colors hover:bg-[#e6fb9a]"
            >
              Let&apos;s talk <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
