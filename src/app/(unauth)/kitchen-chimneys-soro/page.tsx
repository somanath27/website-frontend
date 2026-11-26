import { Metadata } from 'next';
import Link from 'next/link';
import products from '@/data/products.json';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import { BUSINESS_INFO } from '@/data/constants';
import { Phone, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kitchen Chimneys in Soro | Hindware Chimneys & Installation',
  description: 'Buy & install Hindware kitchen chimneys in Soro. Professional installation, cleaning & maintenance services.',
};

export default function KitchenChimneyPage() {
  const chimneys = (products as Product[]).filter(p => p.category === 'kitchen-chimneys');

  return (
    <main className="w-full mx-auto pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Modern Kitchen Chimneys for Your Home
          </h1>
          <p className="text-xl mb-4 text-blue-100">
            Hindware Chimneys - Design, Suction & Quality
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Professional installation & maintenance services in Soro & nearby areas
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
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in kitchen chimneys`}
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

      {/* Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Hindware Kitchen Chimneys</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {chimneys.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/products/kitchen-chimneys"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View All Chimneys
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Installation', desc: 'Professional setup & configuration' },
              { title: 'Cleaning', desc: 'Regular maintenance & deep cleaning' },
              { title: 'Repair', desc: 'Quick repair & troubleshooting' },
            ].map((service, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need chimney ${service.title.toLowerCase()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Upgrade Your Kitchen Now</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              <Phone size={20} />
              Call
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=I want to know more about kitchen chimneys`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition"
            >
              <MessageCircle size={20} />
              Chat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
