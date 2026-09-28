import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';

export function Footer() {
  return (
    <footer className="border-t border-[#20251f]/15 bg-[#e9ecdf] text-[#20251f]">
      <Container className="flex flex-col gap-10 py-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div>
            <Image src="/nexiquill-logo.svg" alt="Nexiquill, where IQ matters" width={800} height={150} className="h-10 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-[#687064]">
              An end-to-end product engineering partner for ambitious teams building what&apos;s next.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#596253]">Company</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#687064]">
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#596253]">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#687064]">
              <li><Link href="/terms">Terms</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[#20251f]/15 pt-6 text-xs text-[#7a8375] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nexiquill Pvt. Ltd. All rights reserved.</p>
          <p>Thoughtful software. Built for what&apos;s next.</p>
        </div>
      </Container>
    </footer>
  );
}
