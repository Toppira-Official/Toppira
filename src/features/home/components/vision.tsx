import type React from 'react';
import { vision_data } from '../data/vision';

export const Vision: React.FC = () => {
  return (
    <section id="vision" className="bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className="text-muted mb-6 text-sm tracking-widest uppercase"
        >
          {vision_data.badge}
        </p>

        <blockquote
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="900"
          className="text-primary text-4xl leading-tight md:text-5xl lg:text-6xl"
        >
          {vision_data.title}
          <br />
          <span
            data-aos="fade-up"
            data-aos-delay="300"
            className="from-primary to-primary/70 bg-linear-to-r bg-clip-text text-transparent"
          >
            {vision_data.highlight}
          </span>
        </blockquote>

        <p
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-duration="900"
          className="text-muted mx-auto mt-10 max-w-2xl text-lg"
        >
          {vision_data.description}
        </p>
      </div>
    </section>
  );
};
