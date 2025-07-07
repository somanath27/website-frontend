'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white py-12 px-4 sm:px-8 mt-16">
      <motion.div
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/assets/images/logo-portrait.png"
              alt="RO Service Logo"
              width={80}
              height={30}
              priority
              className="rounded-full"
            />
            <h3 className="text-xl font-bold">Saraswati Enterprises</h3>
          </div>
          <p className="text-sm text-gray-300">
            Delivering trusted RO services for over years. Your water, our
            priority.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <Mail size={16} /> saraswatienterprises.ro@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 94392 63319
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Soro, Odisha, India
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-white">
            <Link href="https://facebook.com" target="_blank">
              <Facebook className="hover:text-blue-500" />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Instagram className="hover:text-pink-500" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <Twitter className="hover:text-sky-400" />
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-600 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Saraswati Enterprises. All rights
        reserved.
      </div>
    </footer>
  );
}
