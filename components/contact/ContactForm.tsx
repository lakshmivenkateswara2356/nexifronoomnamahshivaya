'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { courses } from '@/lib/courses';

type Feedback = { type: 'success' | 'error'; message: string } | null;

type ContactFormProps = {
  inquiryType?: 'general' | 'course';
  selectedCourseSlug?: string;
};

const courseQuestionTypes = [
  'Fees and payment',
  'Curriculum and projects',
  'Class schedule and duration',
  'Enrollment and seat availability',
  'Internship and career support',
  'Other course question',
];

export function ContactForm({ inquiryType = 'general', selectedCourseSlug }: ContactFormProps) {
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);
  const isCourseInquiry = inquiryType === 'course';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const course = courses.find((item) => item.slug === formData.get('course'));
    const questionType = formData.get('questionType');
    const message = isCourseInquiry
      ? `[Course enquiry]\nCourse: ${course?.title || 'Not specified'}\nTopic: ${questionType || 'Not specified'}\n\n${String(formData.get('message') || '')}`
      : formData.get('message');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message,
        }),
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'We could not send your message. Please try again.');
      }

      setFeedback({ type: 'success', message: result.data?.message || 'Thanks. Your message has been received.' });
      form.reset();
    } catch (error) {
      setFeedback({ type: 'error', message: error instanceof Error ? error.message : 'We could not send your message. Please try again.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-[#20251f]/10 bg-white p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-[#465043]">Name <span className="text-[#9aa193]">*</span>
          <input name="name" autoComplete="name" required minLength={2} className="mt-2 w-full rounded-md border border-[#20251f]/15 bg-[#fafbf7] px-3.5 py-3 text-sm text-[#20251f] outline-none transition focus:border-[#72854e] focus:ring-2 focus:ring-[#d8f078]/50" placeholder="Your name" />
        </label>
        <label className="text-sm font-medium text-[#465043]">{isCourseInquiry ? 'Email' : 'Work email'} <span className="text-[#9aa193]">*</span>
          <input type="email" name="email" autoComplete="email" required className="mt-2 w-full rounded-md border border-[#20251f]/15 bg-[#fafbf7] px-3.5 py-3 text-sm text-[#20251f] outline-none transition focus:border-[#72854e] focus:ring-2 focus:ring-[#d8f078]/50" placeholder={isCourseInquiry ? 'you@example.com' : 'you@company.com'} />
        </label>
        <label className="text-sm font-medium text-[#465043] sm:col-span-2">Phone <span className="font-normal text-[#9aa193]">Optional</span>
          <input type="tel" name="phone" autoComplete="tel" className="mt-2 w-full rounded-md border border-[#20251f]/15 bg-[#fafbf7] px-3.5 py-3 text-sm text-[#20251f] outline-none transition focus:border-[#72854e] focus:ring-2 focus:ring-[#d8f078]/50" placeholder="Your phone number" />
        </label>
        {isCourseInquiry ? (
          <>
            <label className="text-sm font-medium text-[#465043] sm:col-span-2">Course <span className="text-[#9aa193]">*</span>
              <select name="course" required defaultValue={selectedCourseSlug || ''} className="mt-2 w-full rounded-md border border-[#20251f]/15 bg-[#fafbf7] px-3.5 py-3 text-sm text-[#20251f] outline-none transition focus:border-[#72854e] focus:ring-2 focus:ring-[#d8f078]/50">
                <option value="" disabled>Select a course</option>
                {courses.map((course) => <option key={course.slug} value={course.slug}>{course.title}</option>)}
              </select>
            </label>
            <label className="text-sm font-medium text-[#465043] sm:col-span-2">What is your question about? <span className="text-[#9aa193]">*</span>
              <select name="questionType" required defaultValue="" className="mt-2 w-full rounded-md border border-[#20251f]/15 bg-[#fafbf7] px-3.5 py-3 text-sm text-[#20251f] outline-none transition focus:border-[#72854e] focus:ring-2 focus:ring-[#d8f078]/50">
                <option value="" disabled>Select a topic</option>
                {courseQuestionTypes.map((type) => <option key={type} value={type}>{type}</option>)}
              </select>
            </label>
          </>
        ) : null}
        <label className="text-sm font-medium text-[#465043] sm:col-span-2">{isCourseInquiry ? 'Your course question' : 'What are you working on?'} <span className="text-[#9aa193]">*</span>
          <textarea name="message" required minLength={10} rows={5} className="mt-2 w-full resize-y rounded-md border border-[#20251f]/15 bg-[#fafbf7] px-3.5 py-3 text-sm text-[#20251f] outline-none transition focus:border-[#72854e] focus:ring-2 focus:ring-[#d8f078]/50" placeholder={isCourseInquiry ? 'Tell us what you would like to know about the selected course...' : 'A little about your product, goals, or current challenge...'} />
        </label>
      </div>
      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-md bg-[#20251f] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#394136] disabled:cursor-wait disabled:opacity-60">{sending ? 'Sending...' : 'Send inquiry'} {!sending && <ArrowUpRight size={16} />}</button>
        <p className="text-xs leading-5 text-[#858d81]">Your details are used only to respond to this inquiry.</p>
      </div>
      {feedback && <p role="status" aria-live="polite" className={`mt-5 border-t pt-4 text-sm ${feedback.type === 'success' ? 'border-[#9bb27a] text-[#435b35]' : 'border-[#d8967d] text-[#9a4c35]'}`}>{feedback.message}</p>}
    </form>
  );
}