'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'Why Regular RO Maintenance Matters',
    excerpt:
      'Discover the importance of timely RO servicing and how it extends your purifier’s lifespan.',
    image: '/assets/images/maintainance.png',
    date: 'June 15, 2025',
    href: '/blog/ro-maintenance',
  },
  {
    id: 2,
    title: 'Top Signs Your RO Filter Needs Replacement',
    excerpt:
      'Learn the warning signs that indicate your water filter may no longer be safe.',
    image: '/assets/images/replacement.webp',
    date: 'July 1, 2025',
    href: '/blog/ro-filter-signs',
  },
  {
    id: 3,
    title: 'Benefits of RO Water for Your Family’s Health',
    excerpt:
      'Explore how RO purified water contributes to your family’s overall well-being.',
    image: '/assets/images/benefits.jpg',
    date: 'July 5, 2025',
    href: '/blog/ro-water-health',
  },
];

export default function BlogsPage() {
  return (
    <main className="mx-auto mt-40 max-w-7xl px-4 text-[#101010]">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20 text-center"
      >
        <h1 className="text-4xl font-extrabold md:text-5xl mb-4">
          Expert Tips & Water Wisdom
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600">
          Stay informed with helpful articles on RO systems, water safety, and
          healthy living.
        </p>
      </motion.section>

      <section className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 mb-24">
        {blogs.map((blog, i) => (
          <motion.article
            key={blog.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <p className="text-sm text-gray-500 mb-2">{blog.date}</p>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {blog.title}
              </h2>
              <p className="text-gray-700 text-sm mb-4">{blog.excerpt}</p>
              <Link
                href={blog.href}
                className="inline-block text-sm font-medium text-blue-600 hover:underline"
              >
                Read More →
              </Link>
            </div>
          </motion.article>
        ))}
      </section>

      <section className="text-center mb-24">
        <h2 className="text-3xl font-bold mb-4">Want More Tips?</h2>
        <p className="text-lg text-gray-600 mb-6">
          Subscribe to our newsletter to receive the latest updates on RO water
          care and service alerts.
        </p>
        <Link
          href="/subscribe"
          className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700 transition"
        >
          Subscribe Now
        </Link>
      </section>
    </main>
  );
}
