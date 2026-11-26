import { Metadata } from 'next';
import { BUSINESS_INFO } from '@/data/constants';
import { Phone, MessageCircle, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'RO Water Purifier Installation in Soro | Professional Service',
  description: 'Professional RO installation service in Soro & Balasore. Expert technicians | Warranty | Same-day service.',
};

export default function ROInstallationPage() {
  return (
    <main className="w-full mx-auto pt-32 pb-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Professional RO Installation Service
          </h1>
          <p className="text-xl mb-4 text-blue-100">
            Expert Installation • Quality Setup • Lifetime Support
          </p>
          <p className="text-lg mb-8 text-blue-100">
            Get your water purifier installed by certified technicians in Soro
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
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I need RO installation in Soro`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition text-lg"
            >
              <MessageCircle size={24} />
              Book Service
            </a>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">How Installation Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: '1',
                title: 'Contact',
                desc: 'Call or WhatsApp to book installation'
              },
              {
                step: '2',
                title: 'Inspection',
                desc: 'Site inspection & water quality check'
              },
              {
                step: '3',
                title: 'Installation',
                desc: 'Professional setup & configuration'
              },
              {
                step: '4',
                title: 'Support',
                desc: 'Usage guidance & warranty coverage'
              },
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

      {/* What's Included */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What's Included in Installation</h2>
          <div className="space-y-3">
            {[
              'Professional installation by certified technician',
              'Water quality testing & purifier evaluation',
              'Proper pipe connections & fixture setup',
              'Usage training & maintenance guidance',
              'Warranty card & documentation',
              'Follow-up service within 7 days',
              'Genuine spare parts availability',
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start bg-blue-50 p-4 rounded-lg">
                <CheckCircle size={24} className="text-green-500 flex-shrink-0" />
                <p className="text-gray-700 text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Service Coverage</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Soro Town Center',
              'Residential Areas',
              'Nearby Villages',
            ].map((area, idx) => (
              <div key={idx} className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-blue-600">
                <h3 className="text-xl font-semibold text-gray-900">{area}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: 'What is the installation charge?',
                a: 'Installation charges depend on the model and location. Contact us for a free quote.'
              },
              {
                q: 'How long does installation take?',
                a: 'Typically 2-3 hours including testing and training.'
              },
              {
                q: 'Do you service all purifier brands?',
                a: 'We specialize in KENT, Livpure, and Kenstar water purifiers.'
              },
              {
                q: 'Is installation warranty included?',
                a: 'Yes, all installations come with warranty & post-installation support.'
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

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Book Your Installation Today</h2>
          <p className="text-lg mb-8 text-blue-100">
            Expert service from professionals you can trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center justify-center gap-2 bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition"
            >
              <Phone size={20} />
              Call {BUSINESS_INFO.phone}
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=I need RO installation`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-green-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-green-600 transition"
            >
              <MessageCircle size={20} />
              Book Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
