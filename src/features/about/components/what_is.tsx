import type React from 'react';
import { about_data } from '../data/about';

export const AboutWhatIs: React.FC = () => {
  const { title, columns } = about_data.whatIs;

  return (
    <section className="bg-foreground/70 py-8">
      <div className="container">
        <h2
          data-aos="fade-up"
          data-aos-duration="800"
          className="font-ernesto text-4xl"
        >
          {title}
        </h2>

        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="900"
          className="mt-4 grid gap-4 md:grid-cols-2 md:gap-8"
        >
          {columns.map((col, idx) => (
            <p
              key={idx}
              data-aos="fade-up"
              data-aos-delay={250 + idx * 150}
              data-aos-duration="800"
              className="text-muted text-sm leading-relaxed"
            >
              {col}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
