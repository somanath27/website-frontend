import type { Metadata } from 'next';
import products from '@/data/products.json';
import getPhotoProducts from '@/utils/products';
import ProductListing from '@/components/ProductListing';
import { Product } from '@/types/product';
import { BRANDS, BUSINESS_INFO } from '@/data/constants';
import { MessageCircle, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Kitchen Chimneys in Soro, Balasore | Hindware | Saraswati Enterprises',
  description:
    'Hindware kitchen chimneys in Soro and Balasore. Professional installation, cleaning and repair across nearby villages.',
};

export default function ChimneysPage() {
  const chimneys = getPhotoProducts(products as Product[]).filter(
    (p) => p.category === 'kitchen-chimneys'
  );
  const whatsapp = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent("Hello, I'd like help choosing a kitchen chimney")}`;

  return (
    <main className="min-h-screen bg-gray-50 pb-20">
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 pt-36 pb-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Kitchen Chimneys
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold md:text-5xl">
            Hindware kitchen chimneys for a cleaner kitchen
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-blue-100">
            Chimneys that clear smoke, grease and odour, with installation,
            cleaning and repair in Soro, Balasore and nearby villages.
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
          products={chimneys}
          brands={BRANDS['kitchen-chimneys']}
          searchPlaceholder="Search chimney model or feature..."
        />
      </div>
    </main>
  );
}
