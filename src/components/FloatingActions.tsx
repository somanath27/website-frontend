'use client';

import { useEffect, useState } from 'react';
import { ChevronUp, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center space-y-4 z-50">
      {/* Phone Call Button */}
      <motion.a
        href="tel:+919439263319"
        className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:bg-green-700"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        title="Call Now"
      >
        <Phone size={16} />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={`https://wa.me/919439263319?text=${encodeURIComponent('Hi Rakesh, I want RO service at my location.')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        title="Chat on WhatsApp"
      >
        <Image
          src="/assets/images/whatsapp.png"
          alt="WhatsApp"
          width={40}
          height={40}
        />
      </motion.a>

      {/* Scroll to Top */}
      {showScroll && (
        <motion.button
          onClick={scrollToTop}
          className="bg-indigo-600 text-white p-3 rounded-full shadow-md hover:bg-indigo-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          title="Scroll to Top"
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </div>
  );
}
