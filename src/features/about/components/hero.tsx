import type React from 'react';
import { about_data } from '../data/about';

export const AboutHero: React.FC = () => {
  const { eyebrow, title, highlight, paragraphs, snapshot } = about_data.hero;

  return (
    <section className="container">
      <div className="flex flex-col gap-8 px-6 py-16 md:items-center md:justify-between lg:flex-row">
        <div className="max-w-xl">
          <p className="text-accent text-xs tracking-[0.2em] uppercase">
            {eyebrow}
          </p>
          <h1 className="text-primary font-ernesto mt-4 text-4xl font-semibold tracking-tight">
            {title}
            <span className="text-accent block">{highlight}</span>
          </h1>

          {paragraphs.map((p, idx) => (
            <p key={idx} className="text-muted mt-4 text-sm leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        <div className="mt-8 w-full max-w-sm md:mt-0">
          <div className="border-border bg-foreground/60 rounded-2xl border p-5 shadow-sm backdrop-blur">
            <p className="text-accent text-xs tracking-[0.25em] uppercase">
              {snapshot.label}
            </p>
            <dl className="mt-4 space-y-3 text-sm">
              {snapshot.items.map((item) => (
                <div
                  key={item.label}
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
