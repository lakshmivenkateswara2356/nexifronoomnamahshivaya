import { ArrowRight, BrainCircuit, BriefcaseBusiness, CheckCircle2, Code2, Layers3, Sparkles, TerminalSquare } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { openCourses, closedCourses } from '@/lib/courses';

const trustHighlights = [
  { icon: Code2, title: 'Easy to follow', text: 'Simple lessons explained in clear and practical language.' },
  { icon: Layers3, title: 'Hands-on learning', text: 'Build projects that help you understand real work.' },
  { icon: BriefcaseBusiness, title: 'Career ready', text: 'Learn the skills that employers look for in tech roles.' },
  { icon: Sparkles, title: 'AI + tech', text: 'Use modern tools with software and AI learning together.' },
];

const technologies = ['Python', 'JavaScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'REST APIs', 'SQL', 'MongoDB', 'Git', 'Docker', 'Linux', 'Generative AI', 'LLMs', 'Cloud'];

const whyCards = [
  { icon: BrainCircuit, title: 'Practical skills' },
  { icon: Code2, title: 'Beginner friendly' },
  { icon: Sparkles, title: 'AI-powered learning' },
  { icon: TerminalSquare, title: 'Real projects' },
  { icon: BriefcaseBusiness, title: 'Career support' },
  { icon: Layers3, title: 'Structured learning' },
];

const projects = ['AI Resume Analyzer', 'AI Interview Assistant', 'E-Commerce Application', 'AI Content Generator', 'Full Stack Dashboard'];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-b from-white to-slate-50">
          <Container className="grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                Learn. Build. Grow.
              </div>
              <h1 className="max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Learn practical tech skills in simple, clear steps.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Build your future with beginner-friendly courses in software development, AI, and real-world projects that are easy to understand and apply.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/courses">Explore Courses</Button>
                <Button href="/enroll" variant="secondary">Enroll for ₹299</Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Beginner-friendly learning</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Real projects</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Career guidance</div>
              </div>
            </div>

            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(37,99,235,0.25)]">
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-slate-500">Course fee</p>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700">Simple plan</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="rounded-2xl border border-blue-200 bg-blue-50 p-4">
                    <p className="text-sm text-blue-700">Step 1: Start today</p>
                    <p className="mt-2 text-3xl font-bold text-slate-900">₹299</p>
                    <p className="mt-1 text-sm text-slate-600">One-time enrollment fee</p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm text-slate-500">Step 2: Program fee</p>
                    <p className="mt-2 text-2xl font-bold text-slate-900">₹24,700</p>
                    <p className="mt-1 text-sm text-slate-600">May be required only when conditions are met</p>
                  </div>
                </div>

                <div className="mt-5 rounded-xl bg-slate-900 p-4 text-sm text-slate-100">
                  <p className="font-medium">What this means</p>
                  <p className="mt-2 leading-6 text-slate-300">
                    You begin with a small ₹299 enrollment. The additional fee is based on the program terms and internship/placement conditions.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-slate-200 py-14">
          <Container>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {trustHighlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-transform duration-200 hover:-translate-y-1">
                  <div className="mb-4 inline-flex rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20" id="learning-journey">
          <Container>
            <SectionHeading
              eyebrow="How it works"
              title="A simple path from student to confident builder"
              description="Each step is clear, practical, and designed to help you learn steadily and grow with confidence."
            />
            <div className="mt-12 space-y-6">
              {[
                ['01', 'Enroll', 'Pay the initial ₹299 to start your journey.'],
                ['02', 'Learn', 'Follow the training, lessons, and guided activities.'],
                ['03', 'Build', 'Practice through projects and assignments.'],
                ['04', 'Apply', 'Use your skills in internship-based learning where available.'],
                ['05', 'Grow', 'Move toward your career goals with preparation and support.'],
              ].map(([step, title, text], index) => (
                <div key={title} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-mono text-lg font-semibold text-white">{step}</div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-blue-700">{step}</p>
                      <h3 className="mt-1 text-xl font-semibold text-slate-900">{title}</h3>
                    </div>
                  </div>
                  <p className="max-w-xl text-slate-600">{text}</p>
                  {index < 4 ? <ArrowRight className="hidden text-blue-600 md:block" size={18} /> : null}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-20">
          <Container>
            <SectionHeading eyebrow="Courses" title="Choose the course that fits your goals" description="Each program is designed to help you learn useful skills with clear steps and hands-on work." />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {openCourses.map((course) => (
                <div key={course.slug} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-700">Enrollment open</p>
                      <h3 className="mt-3 text-3xl font-semibold text-slate-900">{course.title}</h3>
                    </div>
                    <p className="rounded-full bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700">₹{course.fee}</p>
                  </div>
                  <p className="mt-4 text-slate-600">{course.shortDescription}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <Button href={`/courses/${course.slug}`}>View Course</Button>
                    <Button href="/enroll" variant="secondary">Enroll Now</Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <SectionHeading eyebrow="Upcoming / current batches" title="Some batches are already running" description="These batches have already started, so new admissions are currently closed." />
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {closedCourses.map((course) => (
                  <div key={course.slug} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-slate-900">{course.title}</h3>
                      <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700">Closed</span>
                    </div>
                    <p className="mt-5 text-slate-600">This batch has already started. New enrollments are not open right now.</p>
                    <div className="mt-6">
                      <Button href={`/courses/${course.slug}`} variant="secondary">View Course</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-20" id="why-nexiquill">
          <Container>
            <SectionHeading eyebrow="Why choose us" title="A learning experience built for real progress" description="We keep things simple, practical, and focused on skills that matter in the real world." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {whyCards.map(({ icon: Icon, title }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
                  <div className="mb-4 inline-flex rounded-xl bg-violet-50 p-3 text-violet-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-slate-200 bg-slate-50 py-20">
          <Container>
            <SectionHeading eyebrow="Tools you will use" title="Learn the tools that matter in modern tech" description="Build skills across software, web development, AI, and practical digital workflows." align="center" />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm transition-transform duration-200 hover:scale-[1.04]">
                  {tech}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeading eyebrow="Projects" title="Learn by building simple real-world products" description="These project ideas show the kind of practical work students explore during the program." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {projects.map((project) => (
                <div key={project} className="rounded-[24px] border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-5 shadow-sm">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-blue-700">Example</p>
                  <h3 className="text-xl font-semibold text-slate-900">{project}</h3>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-slate-900 py-20 text-white">
          <Container className="rounded-[32px] border border-slate-700 bg-slate-950 p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-blue-300">Fee structure</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Start for ₹299 and learn in a clear step-by-step way.</h2>
              </div>
              <div className="text-left lg:text-right">
                <p className="text-sm text-slate-300">Initial enrollment</p>
                <p className="text-4xl font-semibold text-blue-300">₹299</p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm text-slate-300">Step 1</p>
                <p className="mt-2 text-2xl font-bold text-white">₹299</p>
                <p className="mt-2 text-sm text-slate-400">Pay to enroll in the program.</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm text-slate-300">Step 2</p>
                <p className="mt-2 text-2xl font-bold text-white">₹24,700</p>
                <p className="mt-2 text-sm text-slate-400">May be required under program terms.</p>
              </div>
              <div className="rounded-2xl border border-slate-700 bg-slate-900 p-5">
                <p className="text-sm text-slate-300">Step 3</p>
                <p className="mt-2 text-2xl font-bold text-white">Learn</p>
                <p className="mt-2 text-sm text-slate-400">Study, build, and grow with support.</p>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-700 bg-slate-900/80 p-5 text-slate-200">
              <p>
                The additional fee is only considered when the stated internship or placement condition is met. We explain the details clearly before you proceed.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/enroll">Enroll for ₹299</Button>
              <Button href="/courses" variant="secondary">Explore Programs</Button>
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-8 text-center shadow-sm">
              <p className="text-xs uppercase tracking-[0.22em] text-blue-700">Ready to start?</p>
              <h2 className="mt-4 text-4xl font-semibold text-slate-900">Start building your future today.</h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-600">
                Choose a course, learn step by step, and start your journey in software and AI with confidence.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="/courses">Explore Courses</Button>
                <Button href="/enroll" variant="secondary">Enroll for ₹299</Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
