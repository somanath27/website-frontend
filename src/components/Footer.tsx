'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  MailIcon,
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
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Brand */}
        <div className="md:col-span-3">
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
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center gap-2 text-sm">
              <MailIcon size={16} /> saraswatienterprises.ro@gmail.com
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
        <div className="md:col-span-2">
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
        <div className="md:col-span-2">
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

        {/* Map */}
        <div className="md:col-span-3">
          <h4 className="text-lg font-semibold mb-4">Our Location</h4>
          <div className="w-full h-48 md:h-40 lg:h-56 rounded-md overflow-hidden border border-gray-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.4625345274685!2d86.68638187380591!3d21.292732378662528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1c6fb9a80035e7%3A0x183a87f8b4161a1a!2sSaraswati%20Enterprises!5e0!3m2!1sen!2sin!4v1753435783346!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Saraswati Enterprises Location"
            />
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
