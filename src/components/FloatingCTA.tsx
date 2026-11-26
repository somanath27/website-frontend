'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/data/constants';

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40 md:hidden">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hello Saraswati Enterprises, I'm interested in your products/services`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${BUSINESS_INFO.phone}`}
        className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-transform hover:scale-110"
        title="Call now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
}
