'use client';

import { useState } from 'react';
import products from '@/data/products.json';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';
import { BRANDS } from '@/data/constants';

export default function WaterPurifiersPage() {
  const waterPurifiers = (products as Product[]).filter(
    (p) => p.category === 'water-purifiers'
  );

  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = waterPurifiers.filter((p) => {
    const matchesBrand = !selectedBrand || p.brand === selectedBrand;
    const matchesSearch =
      p.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.brand.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesBrand && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Water Purifiers for Your Home
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore water purifiers from trusted brands like KENT, Livpure, and Kenstar. 
            Get professional installation, consultation, and repair services in Soro & Balasore.
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Search Products
              </label>
              <input
                type="text"
                placeholder="Search by model or brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Brand Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Filter by Brand
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedBrand(null)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    selectedBrand === null
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  All Brands
                </button>
                {BRANDS['water-purifiers'].map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      selectedBrand === brand
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </main>
  );
}
