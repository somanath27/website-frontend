'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import generateKey from '@/utils/generateKey';
import { BUSINESS_INFO } from '@/data/constants';

const slides = [
  {
    desktopImage: '/assets/images/water-banner.jpg',
    mobileImage: '/assets/images/banner-mobile.webp',
    title: 'Find the Right Water Purifier for Your Home',
    subtitle: 'Explore trusted brands: KENT, Livpure, Kenstar',
    description: 'Professional guidance, installation & lifetime support in Soro & nearby villages',
    ctaPrimary: { text: 'Explore Water Purifiers', href: '/products/water-purifiers' },
    ctaSecondary: { text: 'Enquire on WhatsApp', href: `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in water purifiers` },
  },
  {
    desktopImage: '/assets/images/softner-banner.jpg',
    mobileImage: '/assets/images/banner-mobile-2.webp',
    title: 'Modern Kitchen Chimneys',
    subtitle: 'Hindware chimneys for superior air quality',
    description: 'Professional installation & maintenance services across Soro & Balasore',
    ctaPrimary: { text: 'Explore Chimneys', href: '/products/kitchen-chimneys' },
    ctaSecondary: { text: 'Get Free Consultation', href: `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in kitchen chimneys` },
  },
  {
    desktopImage: '/assets/images/banner6.webp',
    mobileImage: '/assets/images/banner-mobile-3.webp',
    title: 'Reliable RO Service at Your Doorstep',
    subtitle: 'Installation, repair & maintenance in Soro & nearby villages',
    description: 'Fast response | Expert technicians | Quality spare parts',
    ctaPrimary: { text: 'Book RO Service', href: '/ro-service-soro' },
    ctaSecondary: { text: 'Call Now', href: `tel:${BUSINESS_INFO.phone}` },
  },
  {
    desktopImage: '/assets/images/water-banner.jpg',
    mobileImage: '/assets/images/banner-mobile.webp',
    title: 'Serving Soro, Balasore & Nearby Villages',
    subtitle: 'Local business | Doorstep service | 15+ years experience',
    description: 'Your trusted partner for water purifiers, chimneys & service needs',
    ctaPrimary: { text: 'Learn More', href: '/about' },
    ctaSecondary: { text: 'Contact Us', href: '/contact' },
  },
];

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div className="w-full">
      <Slider
        dots={settings.dots}
        infinite={settings.infinite}
        speed={settings.speed}
        slidesToShow={settings.slidesToShow}
        slidesToScroll={settings.slidesToScroll}
        autoplay={settings.autoplay}
        autoplaySpeed={settings.autoplaySpeed}
        arrows={settings.arrows}
        pauseOnHover={settings.pauseOnHover}
      >
        {slides.map((slide) => (
          <div key={generateKey()} className="relative">
            <div className="w-full mt-16 h-[400px] sm:h-[500px] md:h-[600px] lg:h-[500px] relative">
              {/* Mobile Image */}
              <div className="block sm:hidden">
                <Image
                  src={slide.mobileImage}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Desktop Image */}
              <div className="hidden sm:block">
                <Image
                  src={slide.desktopImage}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Overlay & Content */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                <div className="max-w-2xl pl-6 sm:pl-12 text-white space-y-4">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg font-semibold">
                    {slide.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-gray-200 max-w-xl">
                    {slide.description}
                  </p>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    {slide.ctaPrimary.href.startsWith('http') || slide.ctaPrimary.href.startsWith('tel:') ? (
                      <a
                        href={slide.ctaPrimary.href}
                        target={slide.ctaPrimary.href.startsWith('http') ? '_blank' : undefined}
                        rel={slide.ctaPrimary.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition inline-block text-center max-w-fit"
                      >
                        {slide.ctaPrimary.text}
                      </a>
                    ) : (
                      <Link
                        href={slide.ctaPrimary.href}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition inline-block text-center max-w-fit"
                      >
                        {slide.ctaPrimary.text}
                      </Link>
                    )}

                    {slide.ctaSecondary.href.startsWith('http') || slide.ctaSecondary.href.startsWith('tel:') ? (
                      <a
                        href={slide.ctaSecondary.href}
                        target={slide.ctaSecondary.href.startsWith('http') ? '_blank' : undefined}
                        rel={slide.ctaSecondary.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="border-2 border-white hover:bg-white/10 text-white font-semibold py-2 px-6 rounded-lg transition inline-block text-center max-w-fit"
                      >
                        {slide.ctaSecondary.text}
                      </a>
                    ) : (
                      <Link
                        href={slide.ctaSecondary.href}
                        className="border-2 border-white hover:bg-white/10 text-white font-semibold py-2 px-6 rounded-lg transition inline-block text-center max-w-fit"
                      >
                        {slide.ctaSecondary.text}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
