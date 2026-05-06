import clsx from 'clsx';
import type { CTAAction } from '../types/cta';
import { Link } from 'react-router-dom';
import { cta_data } from '../data/cta';
import type React from 'react';

const buttonVariants = {
  primary: 'bg-primary text-primary-foreground hover:opacity-90',
  secondary: 'bg-surface text-primary border border-border hover:bg-surface/80',
  ghost: 'bg-transparent text-muted hover:text-primary hover:bg-surface',
};

interface CTAButtonProps {
  action: CTAAction;
  index: number;
}

const CTAButton: React.FC<CTAButtonProps> = ({ action, index }) => {
  const variant = action.variant ?? 'primary';

  return (
    <Link
      data-aos="fade-up"
      data-aos-delay={350 + index * 120}
      data-aos-duration="800"
      to={action.href}
      className={clsx(
        'inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm transition-all duration-200',
        'min-w-[180px]',
        buttonVariants[variant],
      )}
    >
      {action.label}
    </Link>
  );
};

export const CTA: React.FC = () => {
  return (
    <section id="cta" className="bg-foreground py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="border-border bg-surface rounded-3xl border px-8 py-14 text-center shadow-sm md:px-12 md:py-20"
        >
          {cta_data.badge && (
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="700"
              className="text-muted mb-4 text-sm tracking-widest uppercase"
            >
              {cta_data.badge}
            </p>
          )}

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="text-primary mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl"
          >
            {cta_data.title}
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="850"
            className="text-muted mx-auto mt-6 max-w-2xl text-lg leading-8"
          >
            {cta_data.description}
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="350"
            data-aos-duration="900"
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
          >
            {cta_data.actions.map((action, index) => (
              <CTAButton key={index} action={action} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
