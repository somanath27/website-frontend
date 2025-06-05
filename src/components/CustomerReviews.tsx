'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Star } from 'lucide-react';
import generateKey from '@/utils/generateKey';

const reviews = [
  {
    name: 'Suman Sahu',
    comment:
      'Amazing service! The technician was punctual and very professional. My RO is working like new again.',
    avatar: '/assets/images/user1.jpg',
    rating: 5,
  },
  {
    name: 'Pooja Patel',
    comment:
      'Fast response and genuine spare parts used. I would highly recommend their service!',
    avatar: '/assets/images/user2.jpg',
    rating: 4,
  },
  {
    name: 'Ravi Kumar',
    comment:
      'Booking was easy and the technician explained everything clearly. Very satisfied!',
    avatar: '/assets/images/user3.jpg',
    rating: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-indigo-800 mb-4">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Hear directly from our satisfied customers who trust us to keep their
          water safe and pure.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((review, index) => (
          <motion.div
            key={generateKey()}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-indigo-200 transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-indigo-100">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-indigo-800">
                  {review.name}
                </h4>
                <div className="flex items-center gap-1 text-yellow-400">
                  {Array.from({ length: review.rating }).map(() => (
                    <Star key={generateKey()} size={18} fill="currentColor" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {review.comment}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
