'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, IndianRupee, Headset } from 'lucide-react';

const stats = [
  { label: 'Happy Customers', value: 10000 },
  { label: 'RO Services Completed', value: 8500 },
  { label: 'Years of Experience', value: 5 },
];

const whyUs = [
  {
    icon: CheckCircle,
    title: 'Experienced Technicians',
    desc: 'Our certified experts ensure timely and professional service.',
  },
  {
    icon: IndianRupee,
    title: 'Transparent Pricing',
    desc: 'Fair, upfront rates with no hidden costs.',
  },
  {
    icon: Headset,
    title: '7‑Day Support',
    desc: 'Friendly assistance, whenever you need it.',
  },
];

const testimonials = [
  {
    name: 'Rahul S.',
    comment:
      'Excellent service! My RO system works perfectly now. Highly recommended!',
  },
  {
    name: 'Pooja M.',
    comment:
      'Technicians are professional and quick. Very happy with the service.',
  },
  {
    name: 'Amit K.',
    comment: 'Affordable and reliable RO maintenance. I’ll use them again!',
  },
];

const faqs = [
  {
    question: 'How often should I service my RO purifier?',
    answer:
      'It is recommended to service your RO purifier every 6 to 12 months.',
  },
  {
    question: 'Do you provide genuine filters?',
    answer: 'Yes, we only use certified and high‑quality RO filters.',
  },
  {
    question: 'Is there a warranty on your service?',
    answer: 'Yes, all our services come with a 30‑day satisfaction warranty.',
  },
];

export default function AboutPage() {
  const [counterValues, setCounterValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounterValues((prev) => {
          const updated = [...prev];
          if (updated[index] < stat.value) {
            updated[index] += Math.ceil(stat.value / 60);
          } else {
            updated[index] = stat.value;
          }
          return updated;
        });
      }, 25);
    });
    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <main className="mx-auto mt-20 max-w-7xl px-4 text-[#101010]">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mb-20 flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 py-24 text-center text-white shadow-xl"
      >
        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
          Pure Water, Pure Life
        </h1>
        <p className="max-w-3xl text-lg md:text-xl">
          We’re on a mission to keep every home in Odisha hydrated with clean,
          safe and affordable drinking water through reliable RO services.
        </p>
        <Link
          href="/booking"
          className="mt-8 inline-block rounded-lg bg-white/10 px-8 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/20"
        >
          Book a Service
        </Link>
        <Image
          src="/assets/images/hero-water.svg"
          alt="Splash background"
          fill
          className="pointer-events-none absolute inset-0 -z-10 object-cover opacity-10"
        />
      </motion.section>

      {/* Mission */}
      <section className="mb-20 flex flex-col items-center gap-12 md:flex-row">
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/images/mission.jpg"
            alt="Our Mission"
            width={640}
            height={426}
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-3xl font-bold">Our Mission</h2>
          <p className="leading-relaxed text-gray-700">
            Access to pure water is not a luxury—it&apos;s a fundamental right.
            By combining cutting‑edge purification technology with heartfelt
            local service, we safeguard the health of families across Odisha’s
            cities and villages.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Certified technicians, genuine parts and a passion for excellence
            power everything we do—from installation and repair to annual
            maintenance plans.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Thousands of households already trust us. We’re committed to
            continuing innovation, transparent pricing and lasting
            relationships—one clean glass at a time.
          </p>
        </motion.div>
      </section>

      {/* Counters */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold">Our Impact</h2>
        <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-xl bg-white p-8 shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="text-4xl font-extrabold text-blue-600">
                {(counterValues[i] ?? 0).toLocaleString()}+
              </p>
              <p className="mt-2 text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold">Why Choose Us</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {whyUs.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex flex-col items-center rounded-xl bg-white p-8 text-center shadow transition hover:shadow-md"
            >
              <Icon className="mb-4 h-10 w-10 text-blue-600" />
              <h3 className="mb-2 text-lg font-semibold">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map(({ name, comment }) => (
            <blockquote
              key={name}
              className="rounded-xl bg-white p-8 shadow-md transition hover:shadow-lg"
            >
              <p className="mb-4 italic text-gray-700">“{comment}”</p>
              <footer className="text-right text-sm font-semibold">
                – {name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="mb-10 text-center text-3xl font-bold">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-lg bg-white p-6 shadow"
            >
              <summary className="cursor-pointer list-none text-lg font-medium text-blue-600 transition group-open:text-blue-800">
                {question}
              </summary>
              <p className="mt-3 text-gray-700">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto mb-24 max-w-4xl rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-12 text-center text-white shadow-lg">
        <h2 className="mb-4 text-3xl font-bold">Need RO Service Today?</h2>
        <p className="mb-8 text-lg">
          Book a service with us now and enjoy hassle‑free clean water delivered
          to your doorstep.
        </p>
        <Link
          href="/booking"
          className="inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
        >
          Book Now
        </Link>
      </section>
    </main>
  );
}
