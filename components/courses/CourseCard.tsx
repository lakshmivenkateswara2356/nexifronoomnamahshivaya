import { Button } from '@/components/ui/Button';
import type { CourseItem } from '@/lib/courses';

export function CourseCard({ course }: { course: CourseItem }) {
  return (
    <article className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-lg shadow-slate-950/30">
      <div className="flex items-center justify-between gap-4">
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${course.status === 'OPEN' ? 'bg-emerald-500/15 text-emerald-200' : 'bg-amber-500/15 text-amber-200'}`}>
          {course.status === 'OPEN' ? 'Enrollment Open' : 'Enrollment Closed'}
        </span>
        <span className="text-lg font-semibold text-sky-300">₹{course.fee}</span>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-white">{course.title}</h3>
      <p className="mt-3 text-sm text-slate-300">{course.shortDescription}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {course.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[11px] text-slate-200">{tech}</span>
        ))}
      </div>
      <div className="mt-6 flex gap-3">
        <Button href={`/courses/${course.slug}`}>View Course</Button>
        {course.status === 'OPEN' ? <Button href="/enroll" variant="secondary">Enroll Now</Button> : null}
      </div>
    </article>
  );
}
