import type React from 'react';
import type { USPItem } from '../types/USP';
import { usp_data } from '../data/USP';
import clsx from 'clsx';

interface USPCardProps {
  item: USPItem;
  index: number;
}

const USPCard: React.FC<USPCardProps> = ({ item, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={250 + index * 120}
      data-aos-duration="800"
      className={clsx(
        'border-border cursor-pointer rounded-lg border p-6',
        'shadow-accent shadow-sm transition-shadow duration-300 hover:shadow-xl',
      )}
    >
      <div
        data-aos="zoom-in"
        data-aos-delay={350 + index * 120}
        className="mb-4"
      >
        {item.icon}
      </div>

      <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>

      <p>{item.description}</p>
    </div>
  );
};

export const USP: React.FC = () => (
  <section id="usp" className="container">
    <div className="mx-auto mb-12 px-6 text-center">
      <h2 data-aos="fade-up" data-aos-duration="800" className="text-4xl">
        What Makes Toppira Different?
      </h2>

      <p
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="900"
        className="mx-auto mt-4 max-w-3xl"
      >
        Why choose Toppira? Here’s what sets us apart from the rest.
      </p>
    </div>

    <div
      data-aos="fade-up"
      data-aos-delay="250"
      data-aos-duration="900"
      className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-4"
    >
      {usp_data.items.map((item, i) => (
        <USPCard key={i} item={item} index={i} />
      ))}
    </div>
  </section>
);
