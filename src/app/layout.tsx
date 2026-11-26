import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/global.css';
import { ReactNode } from 'react';
import { cn } from '@/utils/helpers';
import FloatingActions from '@/components/FloatingActions';
import Script from 'next/script';
import { generateLocalBusinessSchema } from '@/utils/seo';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Saraswati Enterprises | Water Purifier Services in Odisha',
  description:
    'Saraswati Enterprises offers top-quality water purifier sales, service, and installation in Soro, Balasore, Odisha. Clean water for every home.',
  keywords: [
    'Water Purifier Soro',
    'Water Purifier Service Soro',
    'Soro Water Purifier',
    'Saraswati Enterprises',
    'RO Installation in soro',
    'Water Purifier Repair',
    'Water Filter in Soro',
  ],
  openGraph: {
    title: 'Saraswati Enterprises | Water Purifier Sales & Services',
    description:
      'Get clean, safe drinking water with Saraswati Enterprises. We provide reliable water purifier services in Odisha.',
    url: 'https://www.saraswatienterprises.net.in',
    siteName: 'Saraswati Enterprises',
    images: [
      {
        url: 'https://www.saraswatienterprises.net.in/assets/images/products/web/kent-grand-star.jpg',
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
  metadataBase: new URL('https://www.saraswatienterprises.net.in'),
  alternates: { canonical: '/' },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const googleAdsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
  return (
    <html lang="en">
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
      />

      {/* Google Analytics */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAdsId}');
        `}
      </Script>
      <body
        className={cn(
          inter.className,
          'bg-white text-white min-h-screen m-0 min-w-[320px]'
        )}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
