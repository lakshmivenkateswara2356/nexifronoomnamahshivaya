import { Button } from '@/components/ui/Button';
import type { CourseItem } from '@/lib/courses';
import { upfrontPaymentUrl } from '@/lib/payment';

export function CourseCard({ course }: { course: CourseItem }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-[#20251f]/10 bg-white p-6 shadow-[0_16px_50px_-36px_rgba(32,37,31,0.28)] sm:p-7">
      <div className="flex items-center justify-between gap-4">
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${course.status === 'OPEN' ? 'bg-[#e9ecdf] text-[#42513a]' : 'bg-[#f3eee1] text-[#8a6c2f]'}`}>
          {course.status === 'OPEN' ? 'Enrollment Open' : 'Enrollment Closed'}
        </span>
        <span className="text-right text-sm font-semibold text-[#47533c]">
          {course.pricing ? `₹${course.pricing.batchFee.toLocaleString('en-IN')} first batch` : `₹${course.fee.toLocaleString('en-IN')} seat booking`}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold tracking-tight text-[#20251f]">{course.title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#687064]">{course.shortDescription}</p>
      <p className="mt-3 text-xs font-medium text-[#687064]">{course.duration}{course.pricing ? ` · ${course.pricing.seatLimit} first-batch seats` : ''}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {course.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="rounded-full border border-[#20251f]/10 bg-[#f6f7f1] px-2.5 py-1 text-[11px] text-[#596253]">{tech}</span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        <Button href={`/courses/${course.slug}`}>View Course</Button>
        {course.status === 'OPEN' ? <Button href={upfrontPaymentUrl} variant="secondary">Book a Seat — ₹{course.fee}</Button> : null}
      </div>
    </article>
  );
}
