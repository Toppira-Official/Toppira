import { FaGithub, FaGlobe } from 'react-icons/fa6';
import type { Product } from '../types/product';
import type React from 'react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group border-border bg-background relative flex flex-col overflow-hidden rounded-2xl border shadow-sm transition hover:shadow-lg">
      {product.image && (
        <div className="bg-muted aspect-video w-full overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {product.badge && (
          <span className="bg-primary/10 text-primary mb-3 inline-block rounded-full px-3 py-1 text-xs">
            {product.badge}
          </span>
        )}

        <h3 className="text-xl">{product.name}</h3>

        <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
          {product.description}
        </p>

        <div className="mt-6 flex items-center gap-4">
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
