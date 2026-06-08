import type { Metadata } from 'next';
import { Inter, Sorts_Mill_Goudy } from 'next/font/google';
import Navigation from '@/components/Navigation';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-primary',
});

const sortsMillGoudy = Sorts_Mill_Goudy({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Volodymyr – UX Portfolio',
  description: 'UX Designer Portfolio – Volodymyr Onyshchuk',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sortsMillGoudy.variable}`}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
