'use client';

import Image from 'next/image';
import generateKey from '@/utils/generateKey';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Installation',
    description:
      'Professional RO system installation for optimal performance and safety.',
    icon: '/assets/images/services.jpg',
  },
  {
    title: 'Regular Service',
    description:
      'Routine maintenance including filter replacement, cleaning & diagnostics.',
    icon: '/assets/images/installation.jpg',
  },
  {
    title: 'Thousands of Happy Clients',
    description:
      'Trusted by households & offices across the region for over 10 years.',
    icon: '/assets/images/happy-client.jpg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function Services() {
  return (
    <section className="w-full bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-indigo-800 mb-4">
          Water Purifier Services
        </h2>
        <p className="text-xl sm:text-2xl font-medium text-gray-700 mb-2">
          We Keep Your Purifier at its Best!
        </p>
        <p className="max-w-3xl mx-auto text-gray-600 text-base sm:text-lg mb-10">
          Regular service is essential to keep your water purifier running
          efficiently and effectively. Our routine services include filter
          replacement, cleaning, and system diagnostics to ensure your purifier
          continues to provide high-quality water.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={generateKey()}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
              }}
              className="bg-white rounded-xl p-6 flex flex-col items-center text-center transition-all"
            >
              <div className="w-20 h-20 mb-4 relative rounded-full overflow-hidden border-4 border-indigo-100 shadow-sm">
                <Image
                  src={service.icon}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
