'use client';

import { useState } from 'react';
import products from '@/data/products.json';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';

export default function ChimneysPage() {
  const chimneys = (products as Product[]).filter(
    (p) => p.category === 'kitchen-chimneys'
  );

  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = chimneys.filter((p) =>
    p.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Modern Kitchen Chimneys for a Better Cooking Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover stylish Hindware kitchen chimneys designed to manage cooking fumes, 
            grease, and odors. Professional installation & maintenance services available.
          </p>
        </div>

        {/* Search */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <input
            type="text"
            placeholder="Search by model name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            <p className="text-lg text-gray-600">No chimneys found matching your search.</p>
          </div>
        )}
      </div>
    </main>
  );
}
