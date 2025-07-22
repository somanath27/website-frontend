'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, PhoneCallIcon } from 'lucide-react';
import Image from 'next/image';
import CustomMarquee from './CustomMarquee';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blogs' },
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
              alt="RO Service Logo"
              width={100}
              height={60}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 font-medium">
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

          {/* Phone and Button */}
          <div className="hidden md:flex items-center gap-4 text-[#101010] font-medium">
            <div className="flex items-center gap-2">
              <PhoneCallIcon
                size={16}
                className="text-blue-500"
                aria-hidden="true"
              />
              <a
                href="tel:+919439263319"
                className="text-[#101010] hover:text-blue-600 hover:underline transition duration-200"
                aria-label="Call +91 9439263319"
              >
                +91 9439263319
              </a>
            </div>
            <Link
              href="/booking"
              className="ml-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
              aria-label="Book Now"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Icon */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-[#101010] focus:outline-none"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden space-y-4 bg-gradient-to-b from-blue-600 to-indigo-600 px-6 py-6">
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

            {/* Phone (mobile) */}
            <div className="mt-4 flex items-center gap-2 text-base font-medium text-white">
              <PhoneCallIcon
                size={20}
                className="text-yellow-300"
                aria-hidden="true"
              />
              <a href="tel:+919439263319" className="hover:underline">
                +91 9439263319
              </a>
            </div>

            {/* Book Now (mobile) */}
            <Link
              href="/booking"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-block w-full rounded-lg bg-yellow-400 px-4 py-2 text-center text-base font-semibold text-[#101010] transition hover:bg-yellow-300"
              aria-label="Book Now"
            >
              Book Now
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
