import { ProductsGrid } from '@/features/product/components/products';
import type React from 'react';

export const Products: React.FC = () => {
  return (
    <main className="my-20 space-y-20">
      <ProductsGrid />
    </main>
  );
};
