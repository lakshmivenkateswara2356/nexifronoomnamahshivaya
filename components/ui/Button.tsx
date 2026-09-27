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
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300';
  const variants = {
    primary: 'bg-blue-600 text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500',
    secondary: 'bg-white text-slate-800 border border-slate-200 shadow-sm hover:bg-slate-50',
    ghost: 'text-blue-600 hover:bg-blue-50',
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
