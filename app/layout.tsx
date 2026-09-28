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
    default: 'Nexiquill | Product Engineering & SaaS Development',
    template: '%s | Nexiquill',
  },
  description:
    'Nexiquill builds SaaS products, web applications, AI solutions, and cloud platforms for ambitious teams, from product discovery through ongoing engineering.',
  openGraph: {
    title: 'Nexiquill',
    description: 'End-to-end product engineering for what comes next.',
    url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    siteName: 'Nexiquill',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexiquill',
    description: 'SaaS development, AI, cloud, and product engineering with one team from idea through iteration.',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#050816] text-white">{children}</body>
    </html>
  );
}
