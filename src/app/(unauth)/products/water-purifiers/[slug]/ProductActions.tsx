'use client';

import { trackEvent } from '@/utils/tracking';

interface ProductActionsProps {
  productModel: string;
  whatsappUrl: string;
  phoneUrl: string;
  whatsappMessage: string;
  source?: string;
}

export function ProductCTAButtons({
  productModel,
  whatsappUrl,
  phoneUrl,
}: Omit<ProductActionsProps, 'whatsappMessage' | 'source'>) {
  return (
    <div className="space-y-3">
      <a
        href={whatsappUrl}
        className="block w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center transition"
        onClick={() => trackEvent('click_whatsapp', { product: productModel })}
      >
        Enquire on WhatsApp
      </a>
      <a
        href={phoneUrl}
        className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition"
        onClick={() => trackEvent('click_call', { product: productModel })}
      >
        Call for Details
      </a>
    </div>
  );
}

export function ProductDetailsCTA({
  whatsappUrl,
  phoneUrl,
  source,
}: Omit<ProductActionsProps, 'productModel' | 'whatsappMessage'>) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <a
        href={whatsappUrl}
        className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-bold transition"
        onClick={() =>
          trackEvent('click_whatsapp', { source: source || 'product-detail-cta' })
        }
      >
        WhatsApp Us
      </a>
      <a
        href={phoneUrl}
        className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition"
        onClick={() =>
          trackEvent('click_call', { source: source || 'product-detail-cta' })
        }
      >
        Call Now
      </a>
    </div>
  );
}
