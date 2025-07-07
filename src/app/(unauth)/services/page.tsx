'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, RefreshCw, Zap } from 'lucide-react';

const services = [
  {
    title: 'RO Installation',
    description:
      'Quick and professional installation of new RO systems for homes and offices.',
    icon: Wrench,
  },
  {
    title: 'RO Maintenance',
    description:
      'Regular cleaning and maintenance to ensure your purifier performs efficiently.',
    icon: RefreshCw,
  },
  {
    title: 'Filter Replacement',
    description:
      'Genuine filters replaced at recommended intervals to maintain water purity.',
    icon: ShieldCheck,
  },
  {
    title: 'RO Repair',
    description:
      'Fix issues with pressure, leakage, and taste by certified technicians.',
    icon: Zap,
  },
];

export default function ServicesPage() {
  return (
    <main className="mx-auto mt-40 max-w-7xl px-4 text-[#101010]">
      <section className="text-center mb-20">
        <motion.h1
          className="text-4xl font-extrabold md:text-5xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our RO Services
        </motion.h1>
        <motion.p
          className="max-w-2xl mx-auto text-lg text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          We offer a full range of RO water purifier services designed to keep
          your water safe, clean, and refreshing.
        </motion.p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24">
        {services.map(({ title, description, icon: Icon }) => (
          <motion.div
            key={title}
            className="flex items-start gap-6 rounded-xl bg-white p-6 shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Icon className="mt-1 h-8 w-8 text-blue-600" />
            <div>
              <h3 className="text-xl font-semibold mb-1">{title}</h3>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="text-center mb-24">
        <h2 className="mb-4 text-3xl font-bold">
          Need Help With Your RO System?
        </h2>
        <p className="mb-6 text-lg text-gray-600">
          Whether it&apos;s an urgent repair or routine maintenance, our team is
          ready to help you today.
        </p>
        <Link
          href="/booking"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Book a Service
        </Link>
      </section>
    </main>
  );
}
