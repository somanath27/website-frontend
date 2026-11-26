import type { Metadata } from 'next';
import LocalLanding, { LandingConfig } from '@/components/landing/LocalLanding';

export const metadata: Metadata = {
  title: 'RO Service in Soro, Balasore | Water Purifier Repair & Maintenance',
  description:
    'RO service, repair and maintenance in Soro, Balasore and nearby villages. Call or WhatsApp Saraswati Enterprises to book a visit.',
};

const config: LandingConfig = {
  eyebrow: 'RO Service in Soro',
  title: 'Reliable RO Service at Your Doorstep in Soro',
  subtitle:
    'Repair, maintenance and filter service for all major water purifier brands, across Soro, Balasore and nearby villages.',
  heroImage: '/assets/images/products/web/kent-ro-water-purifiers.jpg',
  heroImageAlt: 'RO water purifiers for home service in Soro',
  whatsappMessage: 'Hi, I need RO service in Soro',
  serviceType: 'Water purifier repair and maintenance',
  primaryLink: {
    label: 'View Water Purifiers',
    href: '/products/water-purifiers',
  },
  services: [
    {
      title: 'RO Repair',
      description:
        'Troubleshooting and repair for low flow, leakage, noise and power issues.',
    },
    {
      title: 'Filter Replacement',
      description:
        'Replacement of filters and relevant components with genuine parts.',
    },
    {
      title: 'Regular Maintenance',
      description: 'Scheduled cleaning, filter checks and performance checks.',
    },
    {
      title: 'Installation',
      description:
        'Professional RO installation and setup, with usage guidance.',
    },
  ],
  benefits: [
    'Local team serving Soro, Balasore and nearby villages',
    'Quick response for urgent repairs',
    'Quality spare parts',
    'Price confirmed before work starts',
  ],
  faqs: [
    {
      question: 'Do you service water purifiers in villages near Soro?',
      answer:
        'Yes. We serve Soro, Balasore and nearby villages and rural areas. Call or WhatsApp with your location to confirm.',
    },
    {
      question: 'Which brands do you service?',
      answer: 'We sell and service KENT, Livpure and Kenstar water purifiers.',
    },
    {
      question: 'How do I book a visit?',
      answer:
        'Call +91 94392 63319 or send a WhatsApp message describing the problem.',
    },
  ],
};

export default function Page() {
  return <LocalLanding config={config} />;
}
