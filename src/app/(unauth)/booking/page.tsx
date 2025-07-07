'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneCall } from 'lucide-react';

export default function BookNowComingSoon() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <motion.div
        className="max-w-xl text-center bg-white shadow-xl rounded-2xl p-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="text-3xl font-bold text-blue-700 mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring' }}
        >
          Booking Launching Soon 🚀
        </motion.h1>
        <p className="text-gray-600 text-lg mb-6">
          We&apos;re working hard behind the scenes to launch our online booking
          system. You’ll soon be able to schedule RO services right from your
          device.
        </p>
        <p className="text-gray-700 mb-6">
          Stay tuned for updates and get ready for a smoother service
          experience!
        </p>

        <div className="space-y-3">
          <Link
            href="https://wa.me/919439263319?text=Hi, I’m interested in your RO service!"
            target="_blank"
            className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600 transition"
          >
            <PhoneCall size={18} />
            Message Us on WhatsApp
          </Link>
          <Link
            href="/"
            className="block text-sm text-blue-500 hover:underline mt-4"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
