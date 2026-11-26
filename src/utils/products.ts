import { Product } from '@/types/product';

// Only products whose photo was downloaded to /assets/images/products/web/ are shown.
export default function getPhotoProducts(list: Product[]): Product[] {
  return list.filter((p) => Boolean(p.image?.includes('/products/web/')));
}
