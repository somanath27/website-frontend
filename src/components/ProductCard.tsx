'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { BUSINESS_INFO } from '@/data/constants';
import { MessageCircle, Phone } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = `Hello Saraswati Enterprises, I'm interested in the ${product.model}. Please share the price, availability and installation details.`;
  const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden border border-gray-100">
      {/* Image */}
      <div className="relative w-full h-48 bg-gray-100">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.model}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-100 to-blue-50">
            <span className="text-sm text-gray-500">Product Image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
            {product.brand}
          </p>
          <h3 className="text-lg font-semibold text-gray-900 mt-1 line-clamp-2">
            {product.model}
          </h3>
        </div>

        {/* Key Specs */}
        <div className="space-y-1 text-sm text-gray-600">
          {product.capacity && <p>📦 Capacity: {product.capacity}</p>}
          {product.suction && <p>💨 Suction: {product.suction}</p>}
          {product.warranty && <p>✓ Warranty: {product.warranty}</p>}
        </div>

        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="text-xs text-gray-700 space-y-1">
            {product.features.slice(0, 2).map((feature, idx) => (
              <p key={idx}>• {feature}</p>
            ))}
            {product.features.length > 2 && (
              <p className="text-blue-600 font-medium">+{product.features.length - 2} more</p>
            )}
          </div>
        )}

        {/* Price */}
        {product.price ? (
          <p className="text-lg font-bold text-blue-600">${product.price}</p>
        ) : (
          <p className="text-sm font-semibold text-gray-700">Contact us for pricing</p>
        )}

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 bg-green-500 text-white py-2 rounded-md text-xs font-semibold hover:bg-green-600 transition"
          >
            <MessageCircle size={14} />
            WhatsApp
          </a>
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center justify-center gap-1 bg-blue-600 text-white py-2 rounded-md text-xs font-semibold hover:bg-blue-700 transition"
          >
            <Phone size={14} />
            Call
          </a>
        </div>

        {/* Details Link */}
        <Link
          href={`/products/${product.category}/${product.slug}`}
          className="block w-full text-center py-2 border-2 border-blue-600 text-blue-600 rounded-md text-sm font-semibold hover:bg-blue-50 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
