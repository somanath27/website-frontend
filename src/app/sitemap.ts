import { MetadataRoute } from 'next';
import products from '@/data/products.json';
import getPhotoProducts from '@/utils/products';
import { Product } from '@/types/product';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.saraswatienterprises.net.in';
  const allProducts = getPhotoProducts(products as Product[]);

  const staticRoutes = [
    { url: '/', lastModified: new Date(), priority: 1.0 },
    { url: '/products', lastModified: new Date(), priority: 0.9 },
    {
      url: '/products/water-purifiers',
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: '/products/kitchen-chimneys',
      lastModified: new Date(),
      priority: 0.9,
    },
    { url: '/ro-service-soro', lastModified: new Date(), priority: 0.9 },
    { url: '/water-purifiers-soro', lastModified: new Date(), priority: 0.8 },
    { url: '/kitchen-chimneys-soro', lastModified: new Date(), priority: 0.8 },
    { url: '/ro-installation-soro', lastModified: new Date(), priority: 0.8 },
    { url: '/about', lastModified: new Date(), priority: 0.7 },
    { url: '/services', lastModified: new Date(), priority: 0.7 },
    { url: '/contact', lastModified: new Date(), priority: 0.7 },
    { url: '/booking', lastModified: new Date(), priority: 0.6 },
  ];

  const productRoutes = allProducts.map((product) => ({
    url: `/products/${product.category}/${product.brand.toLowerCase()}/${product.slug}`,
    lastModified: new Date(),
    priority: 0.7,
  }));

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    priority: route.priority,
  }));
}
