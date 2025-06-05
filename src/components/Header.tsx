'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import Image from 'next/image';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full h-16 z-50 bg-gradient-to-r from-white via-white to-gray-100 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Name */}
        <div className="flex items-center gap-3">
          <Image
            src="/assets/images/logo-header.webp"
            alt="RO Service Logo"
            width={60}
            height={40}
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-black hover:text-blue-500 transition font-medium "
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2 text-black font-medium">
          <PhoneCall size={20} className="text-blue-500" />
          <a href="tel:+919999999999" className="hover:underline">
            +91 9439263319
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-black"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Side Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gradient-to-b from-blue-600 to-indigo-600 px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-black hover:text-yellow-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Phone Number */}
          <div className="flex items-center gap-2 text-black font-medium mt-4">
            <PhoneCall size={20} className="text-yellow-300" />
            <a href="tel:+919999999999" className="hover:underline">
              +91 99999 99999
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
