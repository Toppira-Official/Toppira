import type React from 'react';
import { products } from '../data/products';
import { ProductCard } from './card';

export const ProductsGrid: React.FC = () => {
  return (
    <section className="bg-background">
      <div className="container">
        <div className="mb-12">
          <h2 className="font-ernesto text-4xl">Our Products</h2>
          <p className="text-muted mt-4">
            Products built to improve life and enable better, faster
            communication through the integration of familiar apps and AI.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
