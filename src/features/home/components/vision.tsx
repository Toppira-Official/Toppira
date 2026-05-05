import type React from 'react';
import { vision_data } from '../data/vision';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-muted mb-6 text-sm tracking-widest uppercase">
          {vision_data.badge}
        </p>

        <blockquote className="text-primary text-4xl leading-tight md:text-5xl lg:text-6xl">
          {vision_data.title}
          <br />
          <span className="from-primary to-primary/70 bg-linear-to-r bg-clip-text text-transparent">
            {vision_data.highlight}
          </span>
        </blockquote>

        <p className="text-muted mx-auto mt-10 max-w-2xl text-lg">
          {vision_data.description}
        </p>
      </div>
    </section>
  );
};
