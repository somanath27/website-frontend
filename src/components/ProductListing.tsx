'use client';

import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

interface ProductListingProps {
  products: Product[];
  brands: string[];
  searchPlaceholder: string;
}

export default function ProductListing({
  products,
  brands,
  searchPlaceholder,
}: ProductListingProps) {
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    const matchesTerm = (p: Product) => {
      if (!term) return true;
      const haystack = [p.model, p.brand, ...p.features]
        .join(' ')
        .toLowerCase();
      return haystack.includes(term);
    };
    return products.filter(
      (p) => (!selectedBrand || p.brand === selectedBrand) && matchesTerm(p)
    );
  }, [products, selectedBrand, searchTerm]);

  const chipClass = (active: boolean) => {
    const base = 'rounded-full px-4 py-2 text-sm font-semibold transition';
    return active
      ? `${base} bg-blue-600 text-white shadow`
      : `${base} bg-gray-100 text-gray-700 hover:bg-gray-200`;
  };

  return (
    <section>
      {/* Toolbar */}
      <div className="sticky top-24 z-30 mb-10 rounded-2xl border border-gray-100 bg-white/95 p-4 shadow-md backdrop-blur md:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search
              size={18}
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="search"
              aria-label="Search products"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-gray-300 py-2.5 pl-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setSelectedBrand(null)}
              className={chipClass(selectedBrand === null)}
            >
              All Brands
            </button>
            {brands.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => setSelectedBrand(brand)}
                className={chipClass(selectedBrand === brand)}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          Showing{' '}
          <span className="font-semibold text-gray-800">{filtered.length}</span>{' '}
          of {products.length} products
        </p>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-gray-300 bg-white py-16 text-center">
          <p className="text-lg font-semibold text-gray-800">
            No products match your search.
          </p>
          <p className="mt-2 text-gray-500">
            Try another model or brand, or call us for help choosing.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchTerm('');
              setSelectedBrand(null);
            }}
            className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Clear filters
          </button>
        </div>
      )}
    </section>
  );
}
