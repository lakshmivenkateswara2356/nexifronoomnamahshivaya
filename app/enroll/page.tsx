"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { openCourses } from '@/lib/courses';

export default function EnrollPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: openCourses[0]?.id || '',
    qualification: '',
    graduationYear: '',
    city: '',
    termsAccepted: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Unable to start payment.');
      }

      router.push(`/payment/success?enrollmentId=${result.data.enrollmentId}`);
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Navbar />
      <main className="py-16">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[28px] border border-white/10 bg-slate-900/80 p-8">
            <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Enrollment</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Begin your learning journey.</h1>
            <p className="mt-4 text-slate-300">The initial enrollment fee is ₹299. An additional program fee may become payable only when the relevant condition in the program terms is met.</p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-[28px] border border-white/10 bg-slate-900/80 p-6">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm text-slate-300 md:col-span-2">
                Full Name *
                <input
                  value={form.fullName}
                  onChange={(event) => setForm((current) => ({ ...current, fullName: event.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400"
                  required
                />
              </label>

              <label className="text-sm text-slate-300">
                Email *
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400"
                  required
                />
              </label>

              <label className="text-sm text-slate-300">
                Phone Number *
                <input
                  value={form.phone}
                  onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400"
                  required
                />
              </label>

              <label className="text-sm text-slate-300 md:col-span-2">
                Course *
                <select
                  value={form.courseId}
                  onChange={(event) => setForm((current) => ({ ...current, courseId: event.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400"
                >
                  {openCourses.map((course) => (
                    <option key={course.id} value={course.id}>{course.title}</option>
                  ))}
                </select>
              </label>

              <label className="text-sm text-slate-300">
                Highest Qualification
                <input
                  value={form.qualification}
                  onChange={(event) => setForm((current) => ({ ...current, qualification: event.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400"
                />
              </label>

              <label className="text-sm text-slate-300">
                Graduation Year
                <input
                  type="number"
                  value={form.graduationYear}
                  onChange={(event) => setForm((current) => ({ ...current, graduationYear: event.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400"
                />
              </label>

              <label className="text-sm text-slate-300 md:col-span-2">
                City
                <input
                  value={form.city}
                  onChange={(event) => setForm((current) => ({ ...current, city: event.target.value }))}
                  className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none focus:border-sky-400"
                />
              </label>
            </div>

            <label className="mt-6 flex items-start gap-3 text-sm text-slate-300">
              <input
                type="checkbox"
                checked={form.termsAccepted}
                onChange={(event) => setForm((current) => ({ ...current, termsAccepted: event.target.checked }))}
                className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-950"
              />
              <span>I have read and agree to the Terms &amp; Conditions and program fee information.</span>
            </label>

            {error ? <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</div> : null}

            <div className="mt-8">
              <Button type="submit" className="w-full justify-center">
                {loading ? 'Creating Enrollment...' : 'Continue to Payment — ₹299'}
              </Button>
            </div>
          </form>
        </Container>
      </main>
      <Footer />
    </>
  );
}
