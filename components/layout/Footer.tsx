import Link from 'next/link';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <Container className="flex flex-col gap-10 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-xl font-bold tracking-[0.2em] text-white">NEXIQUILL</div>
            <p className="mt-4 max-w-xs text-sm text-slate-300">
              AI + Software Engineering learning experiences designed for practical future-ready careers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="/courses">Courses</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/refund-policy">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nexiquill Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.x.com" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
