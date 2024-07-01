import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Teste Willian Araujo',
    default: 'Teste Willian Araujo'
  },
  description: 'Teste para vaga de desenvolvedor fullstack na Fastpay',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt' className={inter.className}>
      <body className='bg-zinc-950 text-zinc-50 antialiased overflow-x-hidden'>{children}</body>
    </html>
  );
}
