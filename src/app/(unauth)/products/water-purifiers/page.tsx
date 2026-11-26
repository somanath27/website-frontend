import type { Metadata } from 'next';
import products from '@/data/products.json';
import getPhotoProducts from '@/utils/products';
import ProductListing from '@/components/ProductListing';
import { Product } from '@/types/product';
import { BRANDS, BUSINESS_INFO } from '@/data/constants';
import { MessageCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Water Purifiers in Soro, Balasore | KENT, Livpure, Kenstar | Saraswati Enterprises',
  description:
    'Browse KENT, Livpure and Kenstar water purifiers in Soro and Balasore. Installation, repair and maintenance in nearby villages.',
};

export default function WaterPurifiersPage() {
  const waterPurifiers = getPhotoProducts(products as Product[]).filter(
    (p) => p.category === 'water-purifiers'
  );
  const whatsapp = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Hello, I'd like help choosing a water purifier")}`;

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-600 pt-36 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
            Water Purifiers
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold md:text-5xl">
            Find the right water purifier for your home
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            KENT, Livpure and Kenstar purifiers, with installation, repair and
            maintenance across Soro, Balasore and nearby villages.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-green-500 px-5 py-3 font-semibold text-white hover:bg-green-600"
            >
              <MessageCircle size={18} /> Enquire on WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 hover:bg-blue-50"
            >
              <Phone size={18} /> Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-10">
        <ProductListing
          products={waterPurifiers}
          brands={BRANDS['water-purifiers']}
          searchPlaceholder="Search by model, brand or feature..."
        />
      </div>
    </main>
  );
}
