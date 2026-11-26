import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Products | Water Purifiers & Kitchen Chimneys in Soro | Saraswati Enterprises',
  description:
    'Explore KENT, Livpure, Kenstar water purifiers and Hindware kitchen chimneys. Sales, installation and service in Soro and Balasore.',
};

const categories = [
  {
    title: 'Water Purifiers',
    blurb:
      'KENT, Livpure and Kenstar RO, UV and UF purifiers for home drinking water.',
    href: '/products/water-purifiers',
    image: '/assets/images/products/web/kent-grand-star.jpg',
  },
  {
    title: 'Kitchen Chimneys',
    blurb: 'Hindware BLDC and auto-clean chimneys for a smoke-free kitchen.',
    href: '/products/kitchen-chimneys',
    image: '/assets/images/products/web/hindware-bldc-chimneys.jpg',
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <section className="bg-gradient-to-br from-blue-700 to-indigo-700 pt-36 pb-14 text-center text-white">
        <h1 className="text-3xl font-extrabold md:text-5xl">Our Products</h1>
        <p className="mx-auto mt-4 max-w-2xl px-4 text-lg text-blue-100">
          Choose a category to compare models, features and warranty details.
        </p>
      </section>
      <div className="mx-auto mt-12 grid max-w-6xl gap-8 px-4 md:grid-cols-2">
        {categories.map((c) => (
          <Link
            key={c.href}
            href={c.href}
            className="group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[16/10] bg-white">
              <Image
                src={c.image}
                alt={c.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-6 transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900">{c.title}</h2>
              <p className="mt-2 text-gray-600">{c.blurb}</p>
              <span className="mt-4 inline-flex items-center gap-1 font-semibold text-blue-600">
                View products <ArrowRight size={16} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
