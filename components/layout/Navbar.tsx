"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';

const navItems = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#20251f]/10 bg-[#f6f7f1]/95 text-[#20251f] backdrop-blur-xl">
      <Container className="flex items-center justify-between py-3.5">
        <Link href="/" aria-label="Nexiquill home" className="shrink-0">
          <Image src="/nexiquill-logo.svg" alt="Nexiquill, where IQ matters" width={800} height={150} priority className="h-9 w-auto sm:h-11" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-[#626b5f] transition hover:text-[#20251f]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" className="gap-2 rounded-md bg-[#20251f] px-4 py-2.5 text-white shadow-none hover:bg-[#394136]">
            Let&apos;s talk <ArrowUpRight size={15} />
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex rounded-md border border-[#20251f]/15 p-2 text-[#20251f] md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-[#20251f]/10 bg-[#f6f7f1] md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-1 text-[#626b5f]">
                {item.label}
              </Link>
            ))}
            <Button href="/contact" className="w-full gap-2 rounded-md bg-[#20251f] text-white shadow-none" onClick={() => setOpen(false)}>
              Let&apos;s talk <ArrowUpRight size={15} />
            </Button>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
