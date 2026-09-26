import { cn } from '@/lib/utils';
import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  type?: 'button' | 'submit';
};

export function Button({
  children,
  className,
  href,
  onClick,
  variant = 'primary',
  type = 'button',
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400';
  const variants = {
    primary: 'bg-sky-500 text-white shadow-lg shadow-sky-900/30 hover:bg-sky-400',
    secondary: 'bg-white/8 text-white border border-white/10 hover:bg-white/12',
    ghost: 'text-sky-200 hover:bg-sky-500/10',
  };

  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={cn(base, variants[variant], className)}>
      {children}
    </button>
  );
}
