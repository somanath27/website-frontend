import { Metadata } from 'next';
import Link from 'next/link';
import products from '@/data/products.json';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import { BUSINESS_INFO } from '@/data/constants';
import { Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Buy Water Purifiers in Soro | KENT, Livpure, Kenstar',
  description: 'Shop water purifiers from KENT, Livpure & Kenstar in Soro. Professional installation & support. Affordable prices with warranty.',
};

export default function WaterPurifiersLandingPage() {
  const waterPurifiers = (products as Product[]).filter(p => p.category === 'water-purifiers');

  return (
    <main className="w-full mx-auto pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Quality Water Purifiers in Soro
          </h1>
          <p className="text-xl mb-4 text-blue-100">
            KENT • Livpure • Kenstar - Buy, Install & Service
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Professional installation & lifetime support with genuine spare parts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition text-lg"
            >
              <Phone size={24} />
              Call
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I want to buy a water purifier`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition text-lg"
            >
              <MessageCircle size={24} />
              Enquire
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Water Purifiers</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {waterPurifiers.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/products/water-purifiers"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View All Models
            </Link>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              'Authorized dealer for KENT, Livpure & Kenstar',
              'Professional installation & setup',
              'Genuine spare parts with warranty',
              'Post-sale support & maintenance',
              'Competitive pricing in Soro',
              'Free consultation & water testing',
            ].map((point, idx) => (
              <div key={idx} className="flex gap-3 items-start bg-blue-50 p-4 rounded-lg">
                <div className="text-green-500 font-bold text-xl flex-shrink-0">✓</div>
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Water Purifier Today</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              <Phone size={20} />
              Call {BUSINESS_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=I want to buy a water purifier`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition"
            >
              <MessageCircle size={20} />
              Chat Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
