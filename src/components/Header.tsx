'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, PhoneCallIcon, MessageCircle } from 'lucide-react';
import Image from 'next/image';
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
  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 bg-white shadow-md backdrop-blur-sm">
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
        <nav className="hidden lg:flex items-center gap-8 font-medium text-sm">
          {navLinks.map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="text-gray-700 transition hover:text-blue-600"
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
            className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-bold text-white shadow-md hover:bg-blue-700 hover:shadow-lg transition"
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
        <div className="lg:hidden absolute inset-x-0 top-16 max-h-[calc(100vh-4rem-2rem)] overflow-y-auto border-t border-gray-100 bg-white px-5 pb-6 pt-4 shadow-xl">
          <nav className="flex flex-col divide-y divide-gray-100">
            {navLinks.map(({ name, href }) => (
              <Link
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-base font-medium text-gray-800 transition hover:text-blue-600"
              >
                {name}
              </Link>
            ))}
          </nav>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 rounded-lg border border-blue-600 px-3 py-2.5 text-sm font-semibold text-blue-700"
            >
              <PhoneCallIcon size={18} /> Call Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hello, I'm interested in your products/services`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-lg bg-green-500 px-3 py-2.5 text-sm font-semibold text-white"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
          <Link
            href="/booking"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-base font-semibold text-white"
          >
            Book a Service
          </Link>
        </div>
      )}
    </header>
  );
}
