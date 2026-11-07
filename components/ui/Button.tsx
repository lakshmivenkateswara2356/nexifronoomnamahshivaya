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
  const base = 'inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8ca460] focus-visible:ring-offset-2';
  const variants = {
    primary: 'bg-[#20251f] text-white shadow-sm shadow-[#20251f]/10 hover:bg-[#394136]',
    secondary: 'border border-[#20251f]/15 bg-white text-[#20251f] shadow-sm hover:bg-[#f6f7f1]',
    ghost: 'text-[#47533c] hover:bg-[#e9ecdf]',
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
