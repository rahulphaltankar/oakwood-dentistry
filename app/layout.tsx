import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import FloatingContact from '@/components/FloatingContact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oakwood Advanced Dentistry | Premium Private Dentist in London',
  description: 'Advanced cosmetic and restorative dentistry delivered with uncompromising, pain-free care by Dr. Sarah Jenkins. Book your smile assessment today.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
