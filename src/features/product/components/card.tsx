import { FaGithub, FaGlobe } from 'react-icons/fa6';
import type { Product } from '../types/product';
import type React from 'react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="group border-border bg-background relative flex h-full flex-col overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-lg"
    >
      <div data-aos="fade-up" className="flex flex-1 flex-col p-6">
        <div className="flex items-start gap-4">
          {product.image && (
            <img
              data-aos="zoom-in"
              src={product.image}
              alt={product.name}
              className="border-border bg-muted h-16 w-16 shrink-0 rounded-full border-2 object-cover shadow-sm transition duration-300 group-hover:scale-105"
            />
          )}

          <div className="min-w-0 flex-1">
            {product.badge && (
              <span className="bg-primary/10 text-primary mb-2 inline-block rounded-full px-3 py-1 text-xs">
                {product.badge}
              </span>
            )}

            <h3 className="text-xl">{product.name}</h3>
          </div>
        </div>

        <p className="text-muted-foreground mt-4 flex-1 text-sm leading-relaxed">
          {product.description}
        </p>

        <div className="mt-6 flex items-center gap-4 pt-2">
          {product.website && (
            <a
              href={product.website.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary inline-flex items-center gap-2 text-sm hover:underline"
            >
              {product.website.label}
              <FaGlobe size={16} />
            </a>
          )}

          {product.repository && (
            <a
              href={product.repository.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary inline-flex items-center gap-2 text-sm hover:underline"
            >
              {product.repository.label}
              <FaGithub size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
