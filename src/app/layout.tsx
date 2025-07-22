import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/global.css';
import { ReactNode } from 'react';
import { cn } from '@/utils/helpers';
import FloatingActions from '@/components/FloatingActions';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Saraswati Enterprises | Water Purifier Services in Odisha',
  description:
    'Saraswati Enterprises offers top-quality water purifier sales, service, and installation in Soro, Balasore, Odisha. Clean water for every home.',
  keywords: [
    'Water Purifier Odisha',
    'Water Purifier Service Balasore',
    'Soro Water Purifier',
    'Saraswati Enterprises',
    'RO Installation',
    'Water Purifier Repair',
    'Odisha Water Filter',
  ],
  openGraph: {
    title: 'Saraswati Enterprises | Water Purifier Sales & Services',
    description:
      'Get clean, safe drinking water with Saraswati Enterprises. We provide reliable water purifier services in Odisha.',
    url: 'https://yourdomain.com',
    siteName: 'Saraswati Enterprises',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saraswati Enterprises Water Purifier',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          'bg-white text-white min-h-screen m-0 flex place-items-center min-w-[320px]'
        )}
      >
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
