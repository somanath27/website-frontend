'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, PhoneCallIcon, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import CustomMarquee from './CustomMarquee';
import { BUSINESS_INFO } from '@/data/constants';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Water Purifiers', href: '/products/water-purifiers' },
  { name: 'Kitchen Chimneys', href: '/products/kitchen-chimneys' },
  { name: 'RO Services', href: '/ro-service-soro' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* 👇 Marquee Added */}
      <CustomMarquee />

      <header className="fixed inset-x-0 top-8 z-50 h-16 bg-gradient-to-r from-white via-white to-gray-100 shadow">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/assets/images/logo.png"
              alt="Saraswati Enterprises Logo"
              width={100}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 font-medium text-sm">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                className="text-[#101010] transition hover:text-blue-500"
              >
                {name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center gap-2 text-[#101010] font-medium hover:text-blue-600 transition"
              title="Call now"
            >
              <PhoneCallIcon size={18} className="text-blue-500" />
              <span className="text-sm">{BUSINESS_INFO.phone}</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hello, I'm interested in your products/services`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-3 py-2 rounded-lg font-medium text-sm hover:bg-green-600 transition"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <Link
              href="/booking"
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-[#101010] focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden space-y-4 bg-gradient-to-b from-blue-600 to-indigo-600 px-6 py-6 max-h-96 overflow-y-auto">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-base font-medium text-white transition hover:text-yellow-300"
              >
                {name}
              </Link>
            ))}

            {/* Mobile Phone */}
            <div className="mt-4 pt-4 border-t border-white/20">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center gap-2 text-white font-medium text-base hover:underline"
              >
                <PhoneCallIcon size={20} className="text-yellow-300" />
                {BUSINESS_INFO.phone}
              </a>
            </div>

            {/* Mobile WhatsApp */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hello, I'm interested in your products/services`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-600 transition"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>

            {/* Mobile Book Now */}
            <Link
              href="/booking"
              onClick={() => setMenuOpen(false)}
              className="block w-full text-center rounded-lg bg-yellow-400 px-4 py-2 text-base font-semibold text-[#101010] hover:bg-yellow-300 transition"
            >
              Book Now
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
