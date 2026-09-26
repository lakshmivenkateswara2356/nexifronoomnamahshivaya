import { ArrowRight, BrainCircuit, BriefcaseBusiness, Code2, Layers3, Sparkles, TerminalSquare } from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { openCourses, closedCourses } from '@/lib/courses';

const trustHighlights = [
  { icon: Code2, title: 'Learn', text: 'Industry-relevant technical curriculum.' },
  { icon: Layers3, title: 'Build', text: 'Practical projects and assignments.' },
  { icon: BriefcaseBusiness, title: 'Intern', text: 'Opportunities to apply technical skills.' },
  { icon: Sparkles, title: 'Grow', text: 'Career preparation and professional development.' },
];

const technologies = ['Python', 'JavaScript', 'React', 'Node.js', 'HTML5', 'CSS3', 'REST APIs', 'SQL', 'MongoDB', 'Git', 'Docker', 'Linux', 'Generative AI', 'LLMs', 'Cloud'];

const whyCards = [
  { icon: BrainCircuit, title: 'Industry-Relevant Skills' },
  { icon: Code2, title: 'Practical Learning' },
  { icon: Sparkles, title: 'AI-First Development' },
  { icon: TerminalSquare, title: 'Real-World Projects' },
  { icon: BriefcaseBusiness, title: 'Career Preparation' },
  { icon: Layers3, title: 'Technology-Focused Curriculum' },
];

const projects = ['AI Resume Analyzer', 'AI Interview Assistant', 'E-Commerce Application', 'AI Content Generator', 'Full Stack Dashboard'];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-hidden">
        <section className="relative border-b border-white/10">
          <Container className="grid items-center gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
            <div className="animate-[fadeIn_0.5s_ease-out]">
              <div className="mb-6 inline-flex rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-sky-200">
                AI + Software Engineering
              </div>
              <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Build the Skills That Build Your Future.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Learn modern software development and Generative AI through practical, career-focused programs designed for the technology industry.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button href="/courses">Explore Courses</Button>
                <Button href="/enroll" variant="secondary">Enroll for ₹299</Button>
              </div>
            </div>

            <div className="relative animate-[fadeIn_0.6s_ease-out]">
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-6 shadow-2xl shadow-sky-900/20">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.22),_transparent_40%)]" />
                <div className="relative space-y-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-rose-400" />
                      <span className="h-3 w-3 rounded-full bg-yellow-400" />
                      <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    </div>
                    <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2 py-1 text-[11px] text-sky-200">AI Studio</span>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-4">
                    <div className="mb-3 flex items-center justify-between text-xs text-slate-400">
                      <span>Project Pulse</span>
                      <span className="text-emerald-400">+24% growth</span>
                    </div>
                    <div className="space-y-3">
                      {[72, 84, 67, 93].map((value, index) => (
                        <div key={value} className="flex items-center gap-3">
                          <span className="w-14 text-xs text-slate-400">{['UI', 'AI', 'API', 'Data'][index]}</span>
                          <div className="h-2 flex-1 rounded-full bg-slate-800">
                            <div className="h-2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500" style={{ width: `${value}%` }} />
                          </div>
                          <span className="text-xs text-slate-300">{value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl border border-sky-500/20 bg-sky-500/10 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-sky-200">Build</p>
                      <p className="mt-4 text-3xl font-semibold">4x</p>
                      <p className="mt-2 text-sm text-slate-300">Product thinking acceleration</p>
                    </div>
                    <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-violet-200">Deploy</p>
                      <p className="mt-4 text-3xl font-semibold">24/7</p>
                      <p className="mt-2 text-sm text-slate-300">Career-focused practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-b border-white/10 py-14">
          <Container>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {trustHighlights.map(({ icon: Icon, title, text }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/3 p-5 transition-transform duration-200 hover:-translate-y-1">
                  <div className="mb-4 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-300">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm text-slate-300">{text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20" id="learning-journey">
          <Container>
            <SectionHeading
              eyebrow="Learning Journey"
              title="A path designed for real career growth"
              description="From your first enrollment to applied learning, project work, and professional readiness."
            />
            <div className="mt-12 space-y-6">
              {[
                ['01', 'REGISTER', 'Start with ₹299 enrollment.'],
                ['02', 'LEARN', 'Attend the program and complete learning activities.'],
                ['03', 'BUILD', 'Work on practical projects.'],
                ['04', 'INTERNSHIP OPPORTUNITY', 'Apply skills in an internship environment where applicable.'],
                ['05', 'CAREER STAGE', 'Participate in applicable career/placement processes.'],
              ].map(([step, title, text], index) => (
                <div key={title} className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/60 p-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-violet-500 font-mono text-lg font-semibold">{step}</div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-sky-300">{step}</p>
                      <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
                    </div>
                  </div>
                  <p className="max-w-xl text-slate-300">{text}</p>
                  {index < 4 ? <ArrowRight className="hidden text-sky-200 md:block" size={18} /> : null}
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-slate-950/60 py-20">
          <Container>
            <SectionHeading eyebrow="Courses" title="Choose Your Learning Path" description="Build practical skills in modern software development and AI." />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {openCourses.map((course) => (
                <div key={course.slug} className="rounded-[28px] border border-sky-500/20 bg-slate-900/80 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-emerald-300">Enrollment Open</p>
                      <h3 className="mt-3 text-3xl font-semibold text-white">{course.title}</h3>
                    </div>
                    <p className="rounded-full bg-sky-500/10 px-3 py-2 text-sm font-semibold text-sky-200">₹{course.fee}</p>
                  </div>
                  <p className="mt-4 text-slate-300">{course.shortDescription}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {course.technologies.slice(0, 6).map((tech) => (
                      <span key={tech} className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-xs text-slate-200">{tech}</span>
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
              <SectionHeading eyebrow="Current Batches" title="Current Batches" description="These batches have already started and new enrollments are unavailable." />
              <div className="mt-10 grid gap-6 lg:grid-cols-2">
                {closedCourses.map((course) => (
                  <div key={course.slug} className="rounded-[28px] border border-white/10 bg-slate-900/70 p-6">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold text-white">{course.title}</h3>
                      <span className="rounded-full border border-amber-400/40 bg-amber-500/10 px-3 py-2 text-xs font-medium text-amber-200">Enrollment Closed</span>
                    </div>
                    <p className="mt-5 text-slate-300">This batch has already started. New enrollments are currently unavailable.</p>
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
            <SectionHeading eyebrow="Why Nexiquill" title="Built for practical, future-facing learning" description="We combine technology training, project-based learning, and career preparation in one focused experience." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {whyCards.map(({ icon: Icon, title }) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-white/3 p-6 transition-transform duration-200 hover:-translate-y-1">
                  <div className="mb-4 inline-flex rounded-xl bg-violet-500/10 p-3 text-violet-200">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-y border-white/10 bg-slate-950/50 py-20">
          <Container>
            <SectionHeading eyebrow="Technologies" title="Technologies You'll Work With" description="Develop hands-on skills across tools and frameworks used in modern software and AI engineering." align="center" />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-sm text-slate-200 shadow-md shadow-slate-950/30 transition-transform duration-200 hover:scale-[1.04]">
                  {tech}
                </span>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <SectionHeading eyebrow="Projects" title="Learn by Building" description="Example project ideas that mirror the type of applied work students explore in the program." />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {projects.map((project) => (
                <div key={project} className="rounded-[24px] border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-5">
                  <p className="mb-2 text-xs uppercase tracking-[0.2em] text-sky-300">Example Project</p>
                  <h3 className="text-xl font-semibold text-white">{project}</h3>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-t border-white/10 bg-slate-950/60 py-20">
          <Container className="rounded-[32px] border border-sky-500/20 bg-slate-900/80 p-8 sm:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Fee Information</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Start Your Learning Journey for ₹299</h2>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-300">Initial Enrollment</p>
                <p className="text-4xl font-semibold text-sky-300">₹299</p>
              </div>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-950/80 p-5 text-slate-200">
              <p>
                An additional ₹24,700 program fee may become payable when the applicable internship/placement condition specified in the program terms is met.
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
            <div className="rounded-[32px] border border-white/10 bg-slate-900/70 p-8 text-center">
              <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Ready to Start?</p>
              <h2 className="mt-4 text-4xl font-semibold text-white">Ready to Start Building?</h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-300">
                Choose your course and begin your technology learning journey.
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
