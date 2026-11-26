import { BUSINESS_INFO } from '@/data/constants';

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: BUSINESS_INFO.name,
  description: 'Water purifier and kitchen chimney sales, installation & repair services',
  url: 'https://www.saraswatienterprises.net.in',
  telephone: BUSINESS_INFO.phone,
  email: BUSINESS_INFO.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Soro',
    addressLocality: BUSINESS_INFO.city,
    addressRegion: BUSINESS_INFO.state,
    postalCode: '',
    addressCountry: BUSINESS_INFO.country,
  },
  serviceArea: [
    {
      '@type': 'City',
      name: 'Soro',
    },
    {
      '@type': 'City',
      name: 'Balasore',
    },
  ],
  image: '/assets/images/logo.png',
  priceRange: '₹',
  areaServed: 'IN',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: BUSINESS_INFO.phone,
  },
});

export const generateProductSchema = (product: {
  model: string;
  brand: string;
  capacity?: string;
  warranty?: string;
  features: string[];
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${product.brand} ${product.model}`,
  brand: {
    '@type': 'Brand',
    name: product.brand,
  },
  description: `${product.brand} ${product.model} with features: ${product.features.join(', ')}`,
  warranty: product.warranty || 'Warranty information available upon inquiry',
});

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  area?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.name,
  description: service.description,
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS_INFO.name,
  },
  areaServed: service.area || 'IN',
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url?: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: item.name,
    ...(item.url && { item: `https://www.saraswatienterprises.net.in${item.url}` }),
  })),
});

export const generateFAQSchema = (faqs: Array<{ q: string; a: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
});

export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: BUSINESS_INFO.name,
  url: 'https://www.saraswatienterprises.net.in',
  logo: '/assets/images/logo.png',
  sameAs: [],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'Customer Service',
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
  },
});
