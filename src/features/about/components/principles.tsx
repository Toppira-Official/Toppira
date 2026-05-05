import { about_data } from '../data/about';
import type { Principle } from '../types/about';

export function AboutPrinciples() {
  const { title, principles } = about_data.principles;

  return (
    <section className="border-border bg-background border-b">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2
          className="text-primary text-xl font-semibold md:text-2xl"
          style={{ fontFamily: 'var(--font-ernesto)' }}
        >
          {title}
        </h2>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <PrincipleCard key={principle.id} principle={principle} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PrincipleCardProps {
  principle: Principle;
}

function PrincipleCard({ principle }: PrincipleCardProps) {
  const { title, description } = principle;

  return (
    <div className="border-border bg-surface/80 flex h-full flex-col rounded-2xl border p-5 shadow-sm">
      <h3 className="text-primary text-sm font-semibold">{title}</h3>
      <p className="text-muted mt-3 text-xs leading-relaxed">{description}</p>
    </div>
  );
}
