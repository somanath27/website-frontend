import Carousel from '@/components/Carousel';
import AnnouncementBar from '@/components/AnnouncementBar';
import FloatingCTA from '@/components/FloatingCTA';
import { Metadata } from 'next';
import Link from 'next/link';
import products from '@/data/products.json';
import getPhotoProducts from '@/utils/products';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import { BUSINESS_INFO } from '@/data/constants';
import { Phone, MessageCircle, Wrench, TrendingUp, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Saraswati Enterprises | Water Purifiers & Kitchen Chimneys in Soro',
  description:
    'Saraswati Enterprises offers water purifier sales, installation & RO repair services in Soro, Balasore & nearby villages. KENT, Livpure, Kenstar, Hindware chimneys.',
  keywords:
    'RO service Soro, water purifier Balasore, kitchen chimney, RO repair, Hindware',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.saraswatienterprises.net.in',
    title: 'Saraswati Enterprises | Water Purifiers & Services in Soro',
    description:
      'Professional water purifier sales, installation & repair services in Soro & Balasore',
  },
};

export default function HomePage() {
  const allProducts = getPhotoProducts(products as Product[]);
  const waterPurifiers = allProducts
    .filter((p) => p.category === 'water-purifiers')
    .slice(0, 3);
  const chimneys = allProducts
    .filter((p) => p.category === 'kitchen-chimneys')
    .slice(0, 3);

  return (
    <main className="w-full mx-auto">
      <AnnouncementBar />

      {/* Hero Carousel */}
      <Carousel />

      {/* Water Purifiers Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore Water Purifiers for Your Home
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore water purifiers from trusted brands and get professional
              guidance, installation & support
            </p>
          </div>

          {/* Featured Products */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {waterPurifiers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/products/water-purifiers"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View All Water Purifiers
            </Link>
          </div>
        </div>
      </section>

      {/* Kitchen Chimneys Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Modern Kitchen Chimneys for a Better Cooking Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover stylish Hindware kitchen chimneys with modern design,
              powerful suction & convenient cleaning
            </p>
          </div>

          {/* Featured Chimneys */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {chimneys.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link
              href="/products/kitchen-chimneys"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View All Kitchen Chimneys
            </Link>
          </div>
        </div>
      </section>

      {/* RO Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional RO Installation & Repair Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Installation, repair, maintenance & filter replacement with
              doorstep service in Soro & nearby villages
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              {
                icon: Wrench,
                title: 'RO Installation',
                desc: 'Professional setup & configuration',
              },
              {
                icon: TrendingUp,
                title: 'RO Repair',
                desc: 'Expert troubleshooting & fixing',
              },
              {
                icon: Wrench,
                title: 'Filter Replacement',
                desc: 'Genuine spare parts available',
              },
              {
                icon: TrendingUp,
                title: 'Regular Maintenance',
                desc: 'Performance checks & cleaning',
              },
            ].map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-blue-50 p-6 rounded-lg text-center border border-blue-100"
                >
                  <Icon size={40} className="text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">{service.desc}</p>
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in ${service.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition"
                  >
                    Book Service
                  </a>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/ro-service-soro"
              className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Learn More About RO Services
            </Link>
          </div>
        </div>
      </section>

      {/* Kitchen Chimney Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kitchen Chimney Installation & Maintenance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional installation, cleaning, maintenance & repair services
              for Hindware chimneys
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                title: 'Chimney Installation',
                desc: 'Professional installation with warranty support',
              },
              {
                title: 'Chimney Cleaning',
                desc: 'Deep cleaning & maintenance of filters & ducts',
              },
              {
                title: 'Chimney Repair',
                desc: 'Quick repair & troubleshooting services',
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-600"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition"
                >
                  Enquire Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Service Coverage */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving Soro, Balasore & Nearby Villages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reliable doorstep services across Soro town, surrounding rural
              areas & villages in Balasore district
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Soro Town',
                desc: 'Full service coverage in Soro city',
              },
              {
                title: 'Nearby Villages',
                desc: 'Service coverage in surrounding rural areas',
              },
              {
                title: 'Balasore District',
                desc: 'Extended service areas throughout district',
              },
            ].map((area) => (
              <div
                key={area.title}
                className="bg-blue-50 p-6 rounded-lg text-center border border-blue-200"
              >
                <MapPin size={40} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{area.desc}</p>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
                >
                  Call Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Do you provide RO service in Soro?',
                a: 'Yes, we provide comprehensive RO services including installation, repair, maintenance & filter replacement in Soro town & nearby areas.',
              },
              {
                q: 'Do you serve nearby villages?',
                a: 'Yes, we provide doorstep services across villages & rural areas surrounding Soro in the Balasore district.',
              },
              {
                q: 'Which water purifier brands do you sell?',
                a: 'We sell KENT, Livpure, and Kenstar water purifiers with professional installation & after-sales support.',
              },
              {
                q: 'Do you sell Hindware kitchen chimneys?',
                a: 'Yes, we offer a range of Hindware kitchen chimneys with various sizes & features, including installation services.',
              },
              {
                q: 'How can I book RO servicing?',
                a: 'You can call us at +91 94392 63319, message on WhatsApp, or fill the booking form on our website.',
              },
              {
                q: 'What is your service response time?',
                a: 'We aim to respond to all inquiries within 2-4 hours during business hours for fast service booking & assistance.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Home?
          </h2>
          <p className="text-lg mb-8 text-blue-100">
            Contact Saraswati Enterprises for water purifiers, kitchen chimneys
            & professional services
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in your products/services`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Mobile CTA */}
      <FloatingCTA />
    </main>
  );
}
