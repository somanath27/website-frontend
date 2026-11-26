import type { Metadata } from 'next';
import LocalLanding, { LandingConfig } from '@/components/landing/LocalLanding';

export const metadata: Metadata = {
  title: 'Water Purifiers in Soro, Balasore | KENT, Livpure & Kenstar',
  description:
    'Buy KENT, Livpure and Kenstar water purifiers in Soro and Balasore. Installation, repair and service by Saraswati Enterprises.',
};

const config: LandingConfig = {
  eyebrow: 'Water Purifiers in Soro',
  title: 'KENT, Livpure & Kenstar Water Purifiers in Soro',
  subtitle:
    'Compare models, get installation and service support, and enquire about current availability.',
  heroImage: '/assets/images/products/web/kent-supreme-plus-neo-2y.jpg',
  heroImageAlt: 'KENT Supreme Plus Neo water purifier',
  whatsappMessage: 'Hi, I want to buy a water purifier in Soro',
  serviceType: 'Water purifier sales',
  primaryLink: {
    label: 'Compare All Models',
    href: '/products/water-purifiers',
  },
  services: [
    {
      title: 'KENT Purifiers',
      description: 'KENT RO and UV purifiers. Explore models and features.',
    },
    {
      title: 'Livpure Purifiers',
      description: 'Livpure RO purifiers with multi-stage purification.',
    },
    {
      title: 'Kenstar Purifiers',
      description: 'Kenstar models available on enquiry.',
    },
    {
      title: 'Installation',
      description: 'Installation and setup included in our service.',
    },
  ],
  benefits: [
    'We sell KENT, Livpure and Kenstar',
    'Call or WhatsApp for current price and availability',
    'Local installation and after-sales support',
    'Help choosing the right model',
  ],
  faqs: [
    {
      question: 'What is the price of a water purifier?',
      answer:
        'Prices vary by model and change over time. Call or WhatsApp us for the current price and availability.',
    },
    {
      question: 'Do you deliver to villages near Soro?',
      answer:
        'Yes. We serve Soro, Balasore and nearby villages. Contact us to confirm delivery to your area.',
    },
    {
      question: 'Is installation included?',
      answer:
        'Installation is available. Please ask us when you enquire so we can confirm the details.',
    },
  ],
};

export default function Page() {
  return <LocalLanding config={config} />;
}
