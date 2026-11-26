import type { Metadata } from 'next';
import LocalLanding, { LandingConfig } from '@/components/landing/LocalLanding';

export const metadata: Metadata = {
  title: 'RO Installation in Soro, Balasore | Water Purifier Installation',
  description:
    'Professional RO and water purifier installation in Soro, Balasore and nearby villages. KENT, Livpure and Kenstar installed by our local team.',
};

const config: LandingConfig = {
  eyebrow: 'RO Installation in Soro',
  title: 'Professional RO Installation in Soro & Balasore',
  subtitle:
    'Correct setup, safe connections and usage guidance for KENT, Livpure and Kenstar water purifiers.',
  heroImage: '/assets/images/products/web/livpure-allura.jpg',
  heroImageAlt: 'Livpure Allura water purifier ready for installation',
  whatsappMessage: 'Hi, I need RO installation in Soro',
  serviceType: 'Water purifier installation',
  primaryLink: {
    label: 'Browse Water Purifiers',
    href: '/products/water-purifiers',
  },
  services: [
    {
      title: 'New Installation',
      description:
        'Installation of a new water purifier at your home or office.',
    },
    {
      title: 'Relocation',
      description:
        'Safe removal and re-installation when you move the purifier.',
    },
    {
      title: 'Connection Setup',
      description: 'Inlet, drain and power connections checked before use.',
    },
    {
      title: 'Usage Guidance',
      description: 'Quick walkthrough on filter care and routine upkeep.',
    },
  ],
  benefits: [
    'Installation by our local technicians',
    'Help choosing the right model for your water supply',
    'Support in Soro, Balasore and nearby villages',
    'Price confirmed before work starts',
  ],
  faqs: [
    {
      question: 'Do you install water purifiers in rural areas?',
      answer:
        'Yes. We install in Soro, Balasore and nearby villages. Call or WhatsApp us to confirm your location.',
    },
    {
      question: 'Can you help me choose a purifier?',
      answer:
        'Yes. We can suggest KENT, Livpure or Kenstar models based on your needs and budget.',
    },
    {
      question: 'Will you move my purifier to a new house?',
      answer:
        'Yes. We offer relocation service. Contact us to arrange a visit.',
    },
  ],
};

export default function Page() {
  return <LocalLanding config={config} />;
}
