import type { Metadata } from 'next';
import LocalLanding, { LandingConfig } from '@/components/landing/LocalLanding';

export const metadata: Metadata = {
  title: 'Kitchen Chimney Dealer in Soro, Balasore | Hindware Chimneys',
  description:
    'Hindware kitchen chimneys in Soro and Balasore. Chimney installation, cleaning and repair by Saraswati Enterprises across nearby villages.',
};

const config: LandingConfig = {
  eyebrow: 'Kitchen Chimney Dealer in Soro',
  title: 'Hindware Kitchen Chimneys in Soro & Balasore',
  subtitle:
    'Smoke and grease removal for every kitchen, with installation, cleaning and repair in Soro and nearby villages.',
  heroImage: '/assets/images/products/web/hindware-bldc-chimneys.jpg',
  heroImageAlt: 'Hindware kitchen chimneys',
  whatsappMessage: 'Hi, I want a kitchen chimney in Soro',
  serviceType: 'Kitchen chimney sales and installation',
  primaryLink: { label: 'Browse Chimneys', href: '/products/kitchen-chimneys' },
  services: [
    {
      title: 'Chimney Sales',
      description:
        'Hindware chimneys in BLDC and auto-clean models. Explore options.',
    },
    {
      title: 'Installation',
      description: 'Professional installation and duct work for your kitchen.',
    },
    {
      title: 'Cleaning',
      description:
        'Cleaning of filters, motor and body to keep suction strong.',
    },
    {
      title: 'Repair',
      description: 'Troubleshooting and repair assistance for chimney issues.',
    },
  ],
  benefits: [
    'Hindware chimneys from a local dealer',
    'Installation and service in Soro and Balasore',
    'Service for nearby villages and rural areas',
    'Help choosing the right size for your kitchen',
  ],
  faqs: [
    {
      question: 'Do you sell and install Hindware chimneys?',
      answer:
        'Yes. We sell Hindware chimneys and provide installation in Soro, Balasore and nearby villages.',
    },
    {
      question: 'Do you clean chimneys?',
      answer:
        'Yes. We offer cleaning and maintenance. Call or WhatsApp to book a visit.',
    },
    {
      question: 'How do I get the price?',
      answer:
        'Prices depend on the model. Call or WhatsApp us for current price and availability.',
    },
  ],
};

export default function Page() {
  return <LocalLanding config={config} />;
}
