import type React from 'react';
import { about_data } from '../data/about';

export const AboutWhatIs: React.FC = () => {
  const { title, columns } = about_data.whatIs;

  return (
    <section className="bg-foreground/70 py-8">
      <div className="container">
        <h2 className="font-ernesto text-4xl">{title}</h2>

        <div className="mt-4 grid gap-4 md:grid-cols-2 md:gap-8">
          {columns.map((col, idx) => (
            <p key={idx} className="text-muted text-sm leading-relaxed">
              {col}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
