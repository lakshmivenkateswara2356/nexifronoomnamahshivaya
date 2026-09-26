"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@nexiquill.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Invalid login');
      }

      router.push('/admin');
      router.refresh();
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'Unable to sign in');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-6">
      <Container className="max-w-md rounded-[30px] border border-white/10 bg-slate-900/80 p-8">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-sky-300">Admin</p>
          <h1 className="mt-3 text-3xl font-semibold text-white">Login</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm text-slate-300">
            Email
            <input value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none"/>
          </label>
          <label className="block text-sm text-slate-300">
            Password
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none"/>
          </label>
          {error ? <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">{error}</div> : null}
          <button type="submit" className="w-full rounded-full bg-sky-500 px-5 py-3 font-medium text-white hover:bg-sky-400">
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
      </Container>
    </main>
  );
}
