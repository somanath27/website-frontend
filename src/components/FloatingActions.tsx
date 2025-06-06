'use client';

import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
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
      <motion.a
        href="https://wa.me/919439263319"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
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
        >
          <ChevronUp size={20} />
        </motion.button>
      )}
    </div>
  );
}
