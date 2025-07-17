'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import generateKey from '@/utils/generateKey';

const slides = [
  {
    desktopImage: '/assets/images/water-banner.jpg',
    mobileImage: '/assets/images/banner-mobile.webp',
    title: 'Pure Water, Healthy Life',
    subtitle: 'Best RO service at your doorstep.',
    description:
      'We offer hassle-free installation, maintenance, and repair of your water purifiers with trusted professionals.',
  },
  {
    desktopImage: '/assets/images/softner-banner.jpg',
    mobileImage: '/assets/images/banner-mobile-2.webp',
    title: 'Expert Technicians',
    subtitle: 'Trained and certified service providers.',
    description:
      'Our skilled team ensures long-lasting performance of your RO system with top-notch expertise.',
  },
  {
    desktopImage: '/assets/images/banner6.webp',
    mobileImage: '/assets/images/banner-mobile-3.webp',
    title: 'Quick Booking',
    subtitle: 'Book your service in a few seconds.',
    description:
      'Convenient booking options with fast response — because clean water shouldn’t wait.',
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
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnHover: false,
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
            <div className="w-full mt-16 h-[500px] sm:h-[500px] md:h-[600px] lg:h-[500px] relative">
              {/* Mobile Image: visible on screens < 640px */}
              <div className="block sm:hidden">
                <Image
                  src={slide.mobileImage}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              {/* Desktop Image: visible on screens >= 640px */}
              <div className="hidden sm:block">
                <Image
                  src={slide.desktopImage}
                  alt={slide.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent rounded-xl flex items-center">
                <div className="max-w-xl pl-6 sm:pl-12 text-white space-y-4">
                  <h2 className="text-3xl sm:text-3xl md:text-4xl font-semibold">
                    {slide.title}
                  </h2>
                  <p className="text-lg sm:text-xl font-medium">
                    {slide.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-gray-200">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
