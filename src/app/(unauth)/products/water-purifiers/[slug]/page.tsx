import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import products from '@/data/products.json';
import { Product } from '@/types/product';
import { BUSINESS_INFO } from '@/data/constants';
import { generateProductSchema, generateBreadcrumbSchema } from '@/utils/seo';
import { ProductCTAButtons, ProductDetailsCTA } from './ProductActions';

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = (products as Product[]).find(
    (p) => p.slug === resolvedParams.slug && p.category === 'water-purifiers'
  );

  if (!product) {
    return {};
  }

  const title = `${product.model} - ${product.brand} Water Purifier | Saraswati Enterprises`;
  const description = `Explore ${product.brand} ${product.model} water purifier with ${product.capacity} capacity. Get installation, repair & maintenance in Soro, Balasore. WhatsApp: ${BUSINESS_INFO.whatsapp}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `${BUSINESS_INFO.website}/products/water-purifiers/${resolvedParams.slug}`,
    },
  };
}

export async function generateStaticParams() {
  const waterPurifiers = (products as Product[]).filter(
    (p) => p.category === 'water-purifiers'
  );
  return waterPurifiers.map((p) => ({ slug: p.slug }));
}

function getRelatedProducts(product: Product, count: number = 3) {
  return (products as Product[])
    .filter(
      (p) =>
        p.category === product.category &&
        p.id !== product.id &&
        p.brand === product.brand
    )
    .slice(0, count);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = (products as Product[]).find(
    (p) => p.slug === resolvedParams.slug && p.category === 'water-purifiers'
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product);
  const whatsappMessage = encodeURIComponent(
    `Hello, I'm interested in the ${product.model}. Please share the price, warranty, and installation details.`
  );

  const breadcrumbs: Array<{ name: string; url?: string }> = [
    { name: 'Home', url: '/' },
    { name: 'Products', url: '/products' },
    { name: 'Water Purifiers', url: '/products/water-purifiers' },
    { name: product.model },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateProductSchema(product)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbs)),
        }}
      />

      <main className="min-h-screen bg-gray-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumbs */}
          <nav className="mb-8">
            <ol className="flex gap-2 text-sm text-gray-600 flex-wrap">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-gray-400">/</span>}
                  {crumb.url ? (
                    <Link href={crumb.url} className="text-blue-600 hover:underline">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-gray-900 font-medium">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Product Image */}
            <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-center min-h-96">
              {product.image ? (
                <div className="relative w-full h-96">
                  <Image
                    src={product.image}
                    alt={`${product.brand} ${product.model}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              ) : (
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-gray-500">No Image</span>
                  </div>
                </div>
              )}
            </div>

            {/* Product Details */}
            <div>
              <div className="mb-6">
                <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
                  {product.brand}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {product.model}
                </h1>
                <p className="text-gray-600 text-lg mb-4">
                  Premium water purification for your home
                </p>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Specifications
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category</span>
                    <span className="font-medium text-gray-900">
                      {product.category.replace('-', ' ')}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Capacity</span>
                    <span className="font-medium text-gray-900">
                      {product.capacity}
                    </span>
                  </div>
                  {product.suction && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Flow Rate</span>
                      <span className="font-medium text-gray-900">
                        {product.suction}
                      </span>
                    </div>
                  )}
                  {product.warranty && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Warranty</span>
                      <span className="font-medium text-gray-900">
                        {product.warranty}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    Key Features
                  </h2>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-green-600 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Price Section */}
              <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
                <p className="text-gray-700 font-medium mb-4">
                  For the latest price, availability, and installation details
                </p>
              </div>

              {/* CTA Buttons */}
              <ProductCTAButtons
                productModel={product.model}
                whatsappUrl={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${whatsappMessage}`}
                phoneUrl={`tel:${BUSINESS_INFO.phoneRaw}`}
              />
            </div>
          </div>

          {/* Description & Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                About This Product
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The {product.model} from {product.brand} is a high-quality water purification
                system designed to meet the needs of modern households. With a capacity of{' '}
                {product.capacity}, it delivers clean, safe drinking water for your family.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our team at Saraswati Enterprises provides professional installation, maintenance,
                and repair services for this product in Soro, Balasore, and nearby villages.
              </p>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">●</span>
                  <div>
                    <p className="font-medium text-gray-900">Professional Installation</p>
                    <p className="text-sm text-gray-600">Expert setup and testing</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">●</span>
                  <div>
                    <p className="font-medium text-gray-900">Regular Maintenance</p>
                    <p className="text-sm text-gray-600">Filter replacement & cleaning</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">●</span>
                  <div>
                    <p className="font-medium text-gray-900">Repair & Troubleshooting</p>
                    <p className="text-sm text-gray-600">Fast doorstep service</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">●</span>
                  <div>
                    <p className="font-medium text-gray-900">Spare Parts</p>
                    <p className="text-sm text-gray-600">Genuine components available</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related {product.brand} Products
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative bg-gray-200 h-40 w-full">
                      {relatedProduct.image ? (
                        <Image
                          src={relatedProduct.image}
                          alt={`${relatedProduct.brand} ${relatedProduct.model}`}
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-600 font-medium">
                        {relatedProduct.brand}
                      </p>
                      <h3 className="font-bold text-gray-900 mb-2">
                        {relatedProduct.model}
                      </h3>
                      <p className="text-sm text-gray-600 mb-4">
                        {relatedProduct.capacity}
                      </p>
                      <Link
                        href={`/products/water-purifiers/${relatedProduct.slug}`}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium transition text-sm"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQ Section */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  What is the warranty period?
                </h3>
                <p className="text-gray-700">
                  Warranty details vary by product and purchase date. Contact us for
                  verification of your specific unit's warranty coverage.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Do you provide installation service?
                </h3>
                <p className="text-gray-700">
                  Yes! We provide professional installation at your doorstep in Soro,
                  Balasore, and nearby villages. Enquire for details and scheduling.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  How often should filters be replaced?
                </h3>
                <p className="text-gray-700">
                  Filter replacement frequency depends on water quality and usage.
                  Typically every 6-12 months. Our team will guide you on the best
                  maintenance schedule.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Is doorstep service available in my area?
                </h3>
                <p className="text-gray-700">
                  We serve Soro town, nearby areas, villages, and surrounding regions in
                  Balasore. Contact us with your location to confirm availability.
                </p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contact Saraswati Enterprises for installation, pricing, and service inquiries
            </p>
            <ProductDetailsCTA
              whatsappUrl={`https://wa.me/${BUSINESS_INFO.whatsappRaw}?text=${encodeURIComponent(
                `Hi, I'm interested in the ${product.model}. Please send me details.`
              )}`}
              phoneUrl={`tel:${BUSINESS_INFO.phoneRaw}`}
              source="product-detail-cta"
            />
          </div>
        </div>
      </main>
    </>
  );
}
