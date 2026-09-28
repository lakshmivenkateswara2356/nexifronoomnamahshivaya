'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Feedback = { type: 'success' | 'error'; message: string } | null;

export function ContactForm() {
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<Feedback>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSending(true);
    setFeedback(null);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          message: formData.get('message'),
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
        <label className="text-sm font-medium text-[#465043]">Work email <span className="text-[#9aa193]">*</span>
          <input type="email" name="email" autoComplete="email" required className="mt-2 w-full rounded-md border border-[#20251f]/15 bg-[#fafbf7] px-3.5 py-3 text-sm text-[#20251f] outline-none transition focus:border-[#72854e] focus:ring-2 focus:ring-[#d8f078]/50" placeholder="you@company.com" />
        </label>
        <label className="text-sm font-medium text-[#465043] sm:col-span-2">Phone <span className="font-normal text-[#9aa193]">Optional</span>
          <input type="tel" name="phone" autoComplete="tel" className="mt-2 w-full rounded-md border border-[#20251f]/15 bg-[#fafbf7] px-3.5 py-3 text-sm text-[#20251f] outline-none transition focus:border-[#72854e] focus:ring-2 focus:ring-[#d8f078]/50" placeholder="Your phone number" />
        </label>
        <label className="text-sm font-medium text-[#465043] sm:col-span-2">What are you working on? <span className="text-[#9aa193]">*</span>
          <textarea name="message" required minLength={10} rows={5} className="mt-2 w-full resize-y rounded-md border border-[#20251f]/15 bg-[#fafbf7] px-3.5 py-3 text-sm text-[#20251f] outline-none transition focus:border-[#72854e] focus:ring-2 focus:ring-[#d8f078]/50" placeholder="A little about your product, goals, or current challenge..." />
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