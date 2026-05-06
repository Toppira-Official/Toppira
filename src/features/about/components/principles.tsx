import type React from 'react';
import { about_data } from '../data/about';
import type { Principle } from '../types/about';

export const AboutPrinciples: React.FC = () => {
  const { title, principles } = about_data.principles;

  return (
    <section className="bg-background">
      <div className="container md:px-20">
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          className="text-primary font-ernesto text-4xl"
        >
          {title}
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="900"
          className="mt-6 grid gap-6 md:grid-cols-3"
        >
          {principles.map((principle, idx) => (
            <PrincipleCard
              key={principle.id}
              principle={principle}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PrincipleCardProps {
  principle: Principle;
  index: number;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle, index }) => {
  const { title, description } = principle;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={250 + index * 150}
      data-aos-duration="800"
      className="border-border bg-surface/80 flex h-full flex-col rounded-2xl border p-5 shadow-sm"
    >
      <h3
        data-aos="fade-up"
        data-aos-delay={350 + index * 150}
        className="text-primary"
      >
        {title}
      </h3>

      <p
        data-aos="fade-up"
        data-aos-delay={450 + index * 150}
        data-aos-duration="800"
        className="text-muted mt-3 text-xs leading-relaxed"
      >
        {description}
      </p>
    </div>
  );
};
