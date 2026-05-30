import { ProductsGrid } from '@/features/product/components/products';
import { Seo } from '@/features/shared/components/seo';
import { pagesSeo } from '@/features/shared/config/seo';
import type React from 'react';

export const Products: React.FC = () => {
  return (
    <>
      <Seo {...pagesSeo.products} />
      <main className="my-20 space-y-20">
        <ProductsGrid />
      </main>
    </>
  );
};
