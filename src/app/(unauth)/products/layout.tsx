import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Water Purifiers & Kitchen Chimneys | Saraswati Enterprises Soro',
  description:
    'Browse KENT, Livpure and Kenstar water purifiers and Hindware kitchen chimneys from Saraswati Enterprises, Soro, Balasore.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
  },
};

export default function ProductLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div className="text-left mx-auto max-w-[1280px]">{children}</div>;
}
