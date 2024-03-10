import localFont from 'next/font/local'
import type { Metadata } from 'next';
import "@/styles/globals.css";

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';


const sansFont = localFont({
  src: [
    { path: '../../public/fonts/sans-font.woff2', weight: '300' },
  ],
  display: 'swap',
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: "MASON",
  description: "The homepage",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sansFont.className}>
        <Header />
        <main className="px-4 py-14 min-h-lvh">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
