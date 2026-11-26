'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { BUSINESS_INFO } from '@/data/constants';
import { MessageCircle, Phone, ArrowRight, Gauge, Wind } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = `Hello Saraswati Enterprises, I'm interested in the ${product.brand} ${product.model}. Please share the price, availability and installation details.`;
  const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
  const detailHref = `/products/${product.category}/${product.slug}`;
  function isPlaceholder(value?: string): boolean {
    return !value || value.includes('Model-specific');
  }
  const showCapacity = !isPlaceholder(product.capacity);
  const showSuction = !isPlaceholder(product.suction);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image: full product visible on a clean white stage */}
      <Link
        href={detailHref}
        className="relative block aspect-[4/3] w-full bg-white"
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={`${product.brand} ${product.model}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4 transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
            <span className="text-sm text-gray-500">Photo coming soon</span>
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow">
          {product.brand}
        </span>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5 text-left">
        <div className="flex flex-1 flex-col gap-4">
          <h3 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-snug text-gray-900">
            {product.model}
          </h3>

          {/* Key specs as chips */}
          <div className="flex min-h-[2rem] flex-wrap content-start gap-2 text-xs font-medium text-gray-700">
            {showCapacity && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
                <Gauge size={12} /> {product.capacity}
              </span>
            )}
            {showSuction && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1">
                <Wind size={12} /> {product.suction}
              </span>
            )}
          </div>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <ul className="min-h-[4.5rem] space-y-1 text-sm text-gray-600">
              {product.features.slice(0, 3).map((feature) => (
                <li key={feature} className="line-clamp-1">
                  • {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="mt-4 text-sm font-semibold text-gray-800">
          Contact us for price &amp; availability
        </p>

        {/* CTAs */}
        <div className="mt-auto space-y-2 pt-2">
          <div className="grid grid-cols-2 gap-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-lg bg-green-500 py-2.5 text-sm font-semibold text-white transition hover:bg-green-600"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-1.5 rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <Phone size={16} />
              Call
            </a>
          </div>
          <Link
            href={detailHref}
            className="flex w-full items-center justify-center gap-1.5 rounded-lg border-2 border-blue-600 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-50"
          >
            View Details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
