import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/data/constants';
import { Phone, MessageCircle, MapPin, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'RO Service in Soro, Balasore | Water Purifier Repair & Installation',
  description: 'Professional RO repair, installation & maintenance services in Soro & nearby villages. Fast response | Expert technicians | Genuine spare parts.',
  keywords: 'RO service Soro, water purifier repair, RO repair Balasore, water purifier installation',
};

export default function ROServicePage() {
  return (
    <main className="w-full mx-auto pt-32 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Reliable RO Service at Your Doorstep
          </h1>
          <p className="text-xl mb-4 text-blue-100">
            Installation, Repair & Maintenance in Soro, Balasore & Nearby Villages
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Fast Response • Expert Technicians • Quality Spare Parts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition text-lg"
            >
              <Phone size={24} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need RO service in Soro`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition text-lg"
            >
              <MessageCircle size={24} />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Service Coverage */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Service Coverage Areas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Soro Town', desc: 'Full service availability in Soro city center & residential areas' },
              { title: 'Nearby Villages', desc: 'Service coverage in surrounding villages & rural communities' },
              { title: 'Balasore District', desc: 'Extended coverage across Balasore district areas' },
            ].map((area, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center">
                <MapPin size={40} className="text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our RO Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'RO Installation',
                desc: 'Professional installation and setup with water quality testing & usage guidance'
              },
              {
                title: 'RO Repair',
                desc: 'Quick troubleshooting and repair for all water purifier issues'
              },
              {
                title: 'Filter Replacement',
                desc: 'Genuine filter replacements with warranty & performance guarantee'
              },
              {
                title: 'Regular Maintenance',
                desc: 'Scheduled maintenance, cleaning & performance checks'
              },
            ].map((service, idx) => (
              <div key={idx} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.desc}</p>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I'm interested in ${service.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition"
                >
                  Book {service.title}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Why Choose Saraswati Enterprises?</h2>
          <div className="space-y-4">
            {[
              'Local business serving Soro since years',
              'Doorstep service with quick response time',
              'Experienced & trained technicians',
              'Genuine spare parts with warranty',
              'Transparent pricing with no hidden charges',
              'Available for service in nearby villages',
            ].map((point, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-lg">
                <CheckCircle size={24} className="text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Our Service Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Contact Us', desc: 'Call or WhatsApp your requirement' },
              { step: '2', title: 'Schedule', desc: 'Get appointment at your convenience' },
              { step: '3', title: 'Service', desc: 'Expert technician arrives on time' },
              { step: '4', title: 'Follow Up', desc: 'Post-service support & warranty' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="bg-blue-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is your service charge for RO installation?',
                a: 'Service charges vary based on complexity. Contact us for a free inspection & quotation.'
              },
              {
                q: 'Do you provide service in nearby villages?',
                a: 'Yes, we provide doorstep service in villages & rural areas surrounding Soro.'
              },
              {
                q: 'What is your response time?',
                a: 'We typically respond within 2-4 hours during business hours for quick scheduling.'
              },
              {
                q: 'Do you sell genuine spare parts?',
                a: 'Yes, all our spare parts are genuine with warranty & performance guarantee.'
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need RO Service? Contact Us Today</h2>
          <p className="text-xl mb-8 text-blue-100">
            Fast, reliable service from experienced professionals
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition text-lg"
            >
              <Phone size={24} />
              {BUSINESS_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need RO service`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition text-lg"
            >
              <MessageCircle size={24} />
              Chat Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
