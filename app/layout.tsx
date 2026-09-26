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
    default: 'Nexiquill | AI + Software Engineering Learning',
    template: '%s | Nexiquill',
  },
  description:
    'Nexiquill offers modern software engineering and Generative AI education through practical, career-focused learning programs.',
  openGraph: {
    title: 'Nexiquill',
    description: 'Build the skills that build your future.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'Nexiquill',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexiquill',
    description: 'AI + Software Engineering learning for the future.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050816] text-white">{children}</body>
    </html>
  );
}
