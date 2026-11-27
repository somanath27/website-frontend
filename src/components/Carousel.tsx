'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/constants';

const whatsappUrl = (text: string) => {
  const number = BUSINESS_INFO.whatsapp.replace(/\D/g, '');
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
};

const slides = [
  {
    image: '/assets/images/products/web/kent-grand-star.jpg',
    alt: 'KENT Grand Star water purifier',
    eyebrow: 'KENT · Livpure · Kenstar',
    title: 'Find the Right Water Purifier for Your Home',
    points: [
      'Sales & support in Soro & Balasore',
      'Installation & lifetime support',
      'Quality spare parts',
    ],
    ctaPrimary: {
      text: 'Explore Water Purifiers',
      href: '/products/water-purifiers',
    },
    ctaSecondary: {
      text: 'WhatsApp Us',
      href: whatsappUrl("Hi, I'm interested in water purifiers"),
    },
  },
  {
    image: '/assets/images/products/web/hindware-bldc-chimneys.jpg',
    alt: 'Hindware kitchen chimneys',
    eyebrow: 'Hindware Kitchen Chimneys',
    title: 'A Smoke-Free Kitchen, Every Day',
    points: [
      'BLDC motors with low power use',
      'Auto-clean and filter-friendly models',
      'Installation & cleaning in Soro',
    ],
    ctaPrimary: {
      text: 'Explore Chimneys',
      href: '/products/kitchen-chimneys',
    },
    ctaSecondary: {
      text: 'Get a Free Consultation',
      href: whatsappUrl("Hi, I'm interested in kitchen chimneys"),
    },
  },
  {
    image: '/assets/images/products/web/kent-ro-water-purifiers.jpg',
    alt: 'RO water purifier installation and service',
    eyebrow: 'RO Service & Repair',
    title: 'Reliable RO Service at Your Doorstep',
    points: [
      'Installation, repair & AMC',
      'Serving Soro & nearby villages',
      'Quick response from local technicians',
    ],
    ctaPrimary: { text: 'Book RO Service', href: '/ro-service-soro' },
    ctaSecondary: {
      text: `Call ${BUSINESS_INFO.phone}`,
      href: `tel:${BUSINESS_INFO.phone}`,
    },
  },
];

const AUTOPLAY_MS = 6000;

function SlideButton({
  href,
  text,
  primary,
}: {
  href: string;
  text: string;
  primary: boolean;
}) {
  const base = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold transition ${
    primary
      ? 'bg-blue-600 text-white shadow-lg hover:bg-blue-700'
      : 'border-2 border-blue-600 text-blue-700 hover:bg-blue-50'
  }`;
  if (href.startsWith('http') || href.startsWith('tel:')) {
    const external = href.startsWith('http');
    return (
      <a
        href={href}
        className={base}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {text}
      </a>
    );
  }
  return (
    <Link href={href} className={base}>
      {text}
    </Link>
  );
}

export default function Carousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      className="relative mt-16 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* All slides share one grid cell so the section height fits the tallest slide */}
      <div className="grid">
        {slides.map((slide, index) => (
          <div
            key={slide.title}
            aria-hidden={index !== active}
            className={`col-start-1 row-start-1 min-w-0 transition-opacity duration-700 ${
              index === active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <div className="mx-auto grid w-full max-w-7xl min-w-0 items-center gap-8 px-4 pb-16 pt-10 md:grid-cols-2 md:pt-16 lg:gap-12">
              <div className="order-2 min-w-0 space-y-5 md:order-1">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  {slide.eyebrow}
                </p>
                <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h1>
                <ul className="space-y-2">
                  {slide.points.map((p) => (
                    <li
                      key={p}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle2
                        size={18}
                        className="shrink-0 text-green-600"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                  <SlideButton
                    href={slide.ctaPrimary.href}
                    text={slide.ctaPrimary.text}
                    primary
                  />
                  <SlideButton
                    href={slide.ctaSecondary.href}
                    text={slide.ctaSecondary.text}
                    primary={false}
                  />
                </div>
                <div className="flex flex-wrap gap-4 pt-2 text-sm text-gray-600">
                  <a
                    href={`tel:${BUSINESS_INFO.phone}`}
                    className="inline-flex items-center gap-1 hover:text-blue-600"
                  >
                    <Phone size={16} /> {BUSINESS_INFO.phone}
                  </a>
                  <a
                    href={whatsappUrl('Hello, I need help')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-green-600"
                  >
                    <MessageCircle size={16} /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="order-1 min-w-0 md:order-2">
                <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 768px) 90vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            onClick={() => setActive(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === active ? 'bg-blue-600' : 'bg-blue-300 hover:bg-blue-400'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
