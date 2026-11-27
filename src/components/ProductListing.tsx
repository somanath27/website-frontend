import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

interface ProductListingProps {
  products: Product[];
}

export default function ProductListing({ products }: ProductListingProps) {
  return (
    <section className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
