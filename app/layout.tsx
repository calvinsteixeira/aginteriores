import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import * as Components from '@/components/index';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Anna Gois Interiores',
  description: 'Transformamos seus ambientes usando a sua personalidade',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Components.Header />
        {children}
        <Components.Footer />
      </body>
    </html>
  );
}
