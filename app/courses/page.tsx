import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/courses/CourseCard';
import { openCourses, closedCourses } from '@/lib/courses';

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main className="py-16">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="Choose Your Learning Path"
            description="Build practical skills in modern software development and AI."
          />

          <div className="mt-10">
            <h2 className="mb-6 text-2xl font-semibold text-white">Open for Enrollment</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {openCourses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-semibold text-white">Current Batches</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {closedCourses.map((course) => (
                <article key={course.slug} className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">Enrollment Closed</span>
                    <span className="text-lg font-semibold text-sky-300">₹{course.fee}</span>
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-white">{course.title}</h3>
                  <p className="mt-3 text-slate-300">This batch has already started. New enrollments are currently unavailable.</p>
                  <div className="mt-6">
                    <a href={`/courses/${course.slug}`} className="inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white hover:bg-white/10">View Course</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
