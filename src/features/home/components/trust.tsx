import type React from 'react';
import type { TrustItem } from '../types/trust';
import { trust_data } from '../data/trust';
import clsx from 'clsx';

interface TrustCardProps {
  item: TrustItem;
  index: number;
}

const TrustCard: React.FC<TrustCardProps> = ({ item, index }) => (
  <div
    data-aos="fade-up"
    data-aos-delay={250 + index * 120}
    data-aos-duration="800"
    className={clsx(
      'border-border bg-surface cursor-pointer rounded-lg border p-6',
      'shadow-accent shadow-sm transition-shadow duration-300 hover:shadow-xl',
    )}
  >
    <div data-aos="zoom-in" data-aos-delay={350 + index * 120} className="mb-4">
      {item.icon}
    </div>

    <h3 className="mb-1 text-xl font-semibold">{item.title}</h3>
    <p className="text-muted">{item.description}</p>
  </div>
);

export const Trust: React.FC = () => {
  return (
    <section id="trust" className="bg-foreground py-8">
      <div className="container">
        <div className="mx-auto mb-12 max-w-6xl px-6 text-center">
          <h2
            data-aos="fade-up"
            data-aos-duration="800"
            className="text-4xl font-bold"
          >
            Open Source & Built on Trust
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="900"
            className="text-muted mx-auto mt-4 max-w-2xl"
          >
            Toppira is transparent, community‑driven, and completely open —
            giving you full control and peace of mind.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="250"
          data-aos-duration="900"
          className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {trust_data.map((item, index) => (
            <TrustCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
