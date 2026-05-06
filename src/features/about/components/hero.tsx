import type React from 'react';
import { about_data } from '../data/about';

export const AboutHero: React.FC = () => {
  const { eyebrow, title, highlight, paragraphs, snapshot } = about_data.hero;

  return (
    <section className="container">
      <div className="flex flex-col gap-8 md:items-center md:justify-between lg:flex-row">
        <div className="max-w-xl">
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-accent text-xs tracking-[0.2em] uppercase"
          >
            {eyebrow}
          </p>

          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="800"
            className="text-primary font-ernesto mt-4 text-4xl font-semibold tracking-tight"
          >
            {title}
            <span
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-accent block"
            >
              {highlight}
            </span>
          </h1>

          {paragraphs.map((p, idx) => (
            <p
              key={idx}
              data-aos="fade-up"
              data-aos-delay={350 + idx * 150}
              data-aos-duration="800"
              className="text-muted mt-4 text-sm leading-relaxed"
            >
              {p}
            </p>
          ))}
        </div>

        <div
          data-aos="fade-left"
          data-aos-delay="500"
          data-aos-duration="900"
          className="mt-8 w-full max-w-sm md:mt-0"
        >
          <div className="border-border bg-foreground/60 rounded-2xl border p-5 shadow-sm backdrop-blur">
            <p
              data-aos="fade-up"
              data-aos-delay="650"
              className="text-accent text-xs tracking-[0.25em] uppercase"
            >
              {snapshot.label}
            </p>

            <dl className="mt-4 space-y-3 text-sm">
              {snapshot.items.map((item, i) => (
                <div
                  key={item.label}
                  data-aos="fade-up"
                  data-aos-delay={750 + i * 120}
                  data-aos-duration="700"
                  className="flex items-center justify-between"
                >
                  <dt className="text-muted">{item.label}</dt>
                  <dd className="text-primary">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
