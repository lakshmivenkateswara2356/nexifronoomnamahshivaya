"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const navItems = [
  { label: 'Courses', href: '/courses' },
  { label: 'Why Nexiquill', href: '#why-nexiquill' },
  { label: 'Learning Journey', href: '#learning-journey' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="text-xl font-bold tracking-[0.2em] text-white">
          NEXIQUILL
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/enroll" className="px-4 py-2.5">
            Enroll — ₹299
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-full border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950 md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-200">
                {item.label}
              </Link>
            ))}
            <Button href="/enroll" className="w-full" onClick={() => setOpen(false)}>
              Enroll — ₹299
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
