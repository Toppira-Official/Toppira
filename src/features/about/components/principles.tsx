import type React from 'react';
import { about_data } from '../data/about';
import type { Principle } from '../types/about';

export const AboutPrinciples: React.FC = () => {
  const { title, principles } = about_data.principles;

  return (
    <section className="bg-background">
      <div className="container md:px-20">
        <h2 className="text-primary font-ernesto text-4xl">{title}</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <PrincipleCard key={principle.id} principle={principle} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface PrincipleCardProps {
  principle: Principle;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ principle }) => {
  const { title, description } = principle;

  return (
    <div className="border-border bg-surface/80 flex h-full flex-col rounded-2xl border p-5 shadow-sm">
      <h3 className="text-primary">{title}</h3>
      <p className="text-muted mt-3 text-xs leading-relaxed">{description}</p>
    </div>
  );
};
