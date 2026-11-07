import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  title: {
    default: 'Nexiquill | Product Engineering & Tech Academy',
    template: '%s | Nexiquill',
  },
  description:
    'Nexiquill builds digital products and helps learners develop practical technology skills through projects, courses, and hackathons.',
  openGraph: {
    title: 'Nexiquill',
    description: 'Product engineering and practical technology learning for what comes next.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'Nexiquill',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexiquill',
    description: 'Product engineering, practical technology courses, and hackathons from Nexiquill.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
