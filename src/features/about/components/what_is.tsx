import { about_data } from '../data/about';

export function AboutWhatIs() {
  const { title, columns } = about_data.whatIs;

  return (
    <section className="border-border bg-foreground/70 border-b">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2
          className="text-primary text-xl font-semibold md:text-2xl"
          style={{ fontFamily: 'var(--font-ernesto)' }}
        >
          {title}
        </h2>

        <div className="mt-4 grid gap-8 md:grid-cols-2">
          {columns.map((col, idx) => (
            <p key={idx} className="text-muted text-sm leading-relaxed">
              {col}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
