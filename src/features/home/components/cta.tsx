import clsx from 'clsx';
import type { CTAAction } from '../types/cta';
import { Link } from 'react-router-dom';
import { cta_data } from '../data/cta';

const buttonVariants = {
  primary: 'bg-primary text-primary-foreground hover:opacity-90',
  secondary: 'bg-surface text-primary border border-border hover:bg-surface/80',
  ghost: 'bg-transparent text-muted hover:text-primary hover:bg-surface',
};

const CTAButton = ({ action }: { action: CTAAction }) => {
  const variant = action.variant ?? 'primary';

  return (
    <Link
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

export const CTA = () => {
  return (
    <section className="bg-foreground py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="border-border bg-surface rounded-3xl border px-8 py-14 text-center shadow-sm md:px-12 md:py-20">
          {cta_data.badge && (
            <p className="text-muted mb-4 text-sm tracking-widest uppercase">
              {cta_data.badge}
            </p>
          )}

          <h2 className="text-primary mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
            {cta_data.title}
          </h2>

          <p className="text-muted mx-auto mt-6 max-w-2xl text-lg leading-8">
            {cta_data.description}
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap">
            {cta_data.actions.map((action, index) => (
              <CTAButton key={index} action={action} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
