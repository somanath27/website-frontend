'use client';

import generateKey from '@/utils/generateKey';
import Image from 'next/image';
import Link from 'next/link';

const aboutCards = [
  {
    title: 'Expert RO Technicians',
    description:
      'Our certified professionals are trained to handle all brands and models of RO systems, ensuring top-quality service every time.',
    image: '/assets/images/slide1.jpeg',
  },
  {
    title: 'Genuine Products & Spares',
    description:
      'We use 100% genuine RO spare parts to enhance the durability and performance of your system.',
    image: '/assets/images/slide2.jpeg',
  },
  {
    title: 'Quick & Easy Booking',
    description:
      'Schedule your RO service in just a few taps, with same-day service availability in most areas.',
    image: '/assets/images/slide3.jpeg',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 px-4 sm:px-8 bg-gray-50 pb-12">
      {/* Intro Section */}
      <h1 className="text-4xl text-center sm:text-5xl font-bold text-indigo-800 mb-6">
        About Saraswati Enterprises
      </h1>

      <section className="max-w-5xl mx-auto text-center px-4 py-2">
        <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-2">
          Reliable Water Purifier Services at Your Doorstep
        </h2>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          10 Years of Experience
        </p>

        <p className="text-gray-700 text-base sm:text-lg max-w-3xl mx-auto mb-8">
          At Saraswati Enterprises Ro, we are committed to providing exceptional
          water purifier services. With years of experience in the industry, our
          team of certified technicians is dedicated to ensuring your water is
          always pure and safe. We pride ourselves on our customer-centric
          approach and strive to exceed your expectations with every service.
        </p>

        <Link href="/about">
          <button
            type="button"
            className="bg-indigo-700 hover:bg-indigo-800 text-white px-6 py-2 rounded-lg transition duration-300"
          >
            Read More
          </button>
        </Link>
      </section>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {aboutCards.map((card) => (
          <div
            key={generateKey()}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-indigo-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
