import { visionData } from '../data/vision';

export const Vision = () => {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <p className="text-muted mb-6 text-sm tracking-widest uppercase">
          {visionData.badge}
        </p>

        <blockquote className="text-primary text-4xl leading-tight md:text-5xl lg:text-6xl">
          {visionData.title}
          <br />
          <span className="from-primary to-primary/70 bg-linear-to-r bg-clip-text text-transparent">
            {visionData.highlight}
          </span>
        </blockquote>

        <p className="text-muted mx-auto mt-10 max-w-2xl text-lg">
          {visionData.description}
        </p>
      </div>
    </section>
  );
};
