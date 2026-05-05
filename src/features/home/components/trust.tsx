import type React from 'react';
import type { TrustItem } from '../types/trust';
import { trust_data } from '../data/trust';
import clsx from 'clsx';

interface TrustCardProps {
  item: TrustItem;
}

const TrustCard: React.FC<TrustCardProps> = ({ item }) => (
  <div
    className={clsx(
      'border-border bg-surface cursor-pointer rounded-lg border p-6',
      'shadow-accent shadow-sm transition-shadow duration-300 hover:shadow-xl',
    )}
  >
    <div className="mb-4">{item.icon}</div>
    <h3 className="mb-1 text-xl font-semibold">{item.title}</h3>
    <p className="text-muted">{item.description}</p>
  </div>
);

export const Trust: React.FC = () => {
  return (
    <section id="trust" className="bg-foreground py-8">
      <div className="container">
        <div className="mx-auto mb-12 max-w-6xl px-6 text-center">
          <h2 className="text-4xl font-bold">Open Source & Built on Trust</h2>
          <p className="text-muted mx-auto mt-4 max-w-2xl">
            Toppira is transparent, community‑driven, and completely open —
            giving you full control and peace of mind.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
          {trust_data.map((item, index) => (
            <TrustCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
