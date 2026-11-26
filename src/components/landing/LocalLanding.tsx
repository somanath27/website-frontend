import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, MapPin, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/constants';

export interface LandingConfig {
  eyebrow: string;
  title: string;
  subtitle: string;
  heroImage: string;
  heroImageAlt: string;
  whatsappMessage: string;
  services: { title: string; description: string }[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
  serviceType: string;
  primaryLink: { label: string; href: string };
}

const whatsappLink = (text: string) => {
  const number = BUSINESS_INFO.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

export default function LocalLanding({ config }: { config: LandingConfig }) {
  const waHero = whatsappLink(config.whatsappMessage);
  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: config.title,
      serviceType: config.serviceType,
      provider: {
        '@type': 'LocalBusiness',
        name: BUSINESS_INFO.name,
        telephone: BUSINESS_INFO.phone,
      },
      areaServed: [
        { '@type': 'City', name: 'Soro' },
        { '@type': 'City', name: 'Balasore' },
        {
          '@type': 'AdministrativeArea',
          name: 'Nearby villages and rural areas of Balasore district',
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: config.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 pt-36 pb-16 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
              {config.eyebrow}
            </p>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight md:text-5xl">
              {config.title}
            </h1>
            <p className="mt-4 text-lg text-blue-100">{config.subtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
              >
                <Phone size={20} /> Call {BUSINESS_INFO.phone}
              </a>
              <a
                href={waHero}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
              >
                <MessageCircle size={20} /> WhatsApp Booking
              </a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-blue-100">
              <MapPin size={16} /> Serving Soro, Balasore and nearby villages
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-white shadow-2xl">
            <Image
              src={config.heroImage}
              alt={config.heroImageAlt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-6"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          What we offer
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {config.services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-md"
            >
              <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm text-gray-600">
                {s.description}
              </p>
              <a
                href={whatsappLink(`${config.whatsappMessage} - ${s.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex font-semibold text-green-600 hover:text-green-700"
              >
                Book this service →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage + benefits */}
      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Why choose Saraswati Enterprises
            </h2>
            <ul className="mt-6 space-y-3">
              {config.benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-green-600"
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-blue-50 p-8">
            <h2 className="text-2xl font-bold text-gray-900">Areas we serve</h2>
            <ul className="mt-5 space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" /> Soro town
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" /> Balasore city and
                district
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-600" /> Nearby villages
                and rural areas
              </li>
            </ul>
            <p className="mt-6 text-sm text-gray-600">
              Not sure if we reach your village? Call or WhatsApp us with your
              location.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="text-center text-3xl font-bold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="mt-8 space-y-4">
          {config.faqs.map((f) => (
            <details
              key={f.question}
              className="group rounded-xl bg-white p-5 shadow-sm"
            >
              <summary className="cursor-pointer list-none font-semibold text-gray-900">
                {f.question}
              </summary>
              <p className="mt-3 text-gray-600">{f.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-5xl px-4">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-10 text-center text-white shadow-xl">
          <h2 className="text-3xl font-bold">Book your visit today</h2>
          <p className="mt-3 text-blue-100">
            Call, WhatsApp us, or browse our products first.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 hover:bg-blue-50"
            >
              Call {BUSINESS_INFO.phone}
            </a>
            <a
              href={waHero}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
            >
              WhatsApp Us
            </a>
            <Link
              href={config.primaryLink.href}
              className="rounded-lg border-2 border-white px-6 py-3 font-semibold hover:bg-white/10"
            >
              {config.primaryLink.label}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
