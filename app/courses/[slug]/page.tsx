import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { getCourseBySlug } from '@/lib/courses';

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="py-16">
        <Container className="space-y-8">
          <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-sky-300">
                  {course.status === 'OPEN' ? 'Enrollment Open' : 'Enrollment Closed'}
                </p>
                <h1 className="mt-3 text-4xl font-semibold text-white">{course.title}</h1>
              </div>
              <div className="text-left lg:text-right">
                <p className="text-sm text-slate-300">Course Fee</p>
                <p className="text-3xl font-semibold text-sky-300">₹{course.fee}</p>
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-slate-300">{course.description}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={course.status === 'OPEN' ? '/enroll' : '#'} variant={course.status === 'OPEN' ? 'primary' : 'secondary'}>
                {course.status === 'OPEN' ? 'Enroll for ₹299' : 'Enrollment Closed'}
              </Button>
              <Link href="/courses" className="inline-flex rounded-full border border-white/10 px-5 py-3 text-sm text-white hover:bg-white/5">
                Back to Courses
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
                <h2 className="text-2xl font-semibold text-white">What you will learn</h2>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {course.learningOverview.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
                <h2 className="text-2xl font-semibold text-white">Technologies</h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {course.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-200">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
                <h2 className="text-2xl font-semibold text-white">Projects</h2>
                <ul className="mt-5 space-y-3 text-slate-300">
                  {course.projects.map((project) => (
                    <li key={project}>• {project}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
                <h2 className="text-2xl font-semibold text-white">Fee information</h2>
                <p className="mt-4 text-slate-300">Initial enrollment: ₹299</p>
                <p className="mt-3 text-slate-300">An additional ₹24,700 program fee may become payable when the applicable internship/placement condition specified in the program terms is met.</p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
                <h2 className="text-2xl font-semibold text-white">Frequently asked questions</h2>
                <div className="mt-5 space-y-4 text-slate-300">
                  {course.faq.map((faqItem) => (
                    <div key={faqItem.question}>
                      <h3 className="font-medium text-white">{faqItem.question}</h3>
                      <p className="mt-1">{faqItem.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
