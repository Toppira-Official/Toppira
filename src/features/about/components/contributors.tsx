import { contributors_data } from '../data/contributors';
import type { Contributor } from '../types/contributors';
import { FaGithub, FaGlobe, FaXTwitter } from 'react-icons/fa6';

export function ContributorsSection() {
  const { eyebrow, title, subtitle, description, contributors } =
    contributors_data;

  return (
    <section className="bg-foreground border-border border-t">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
              {eyebrow}
            </p>
          )}

          <h2
            className="text-primary mt-2 text-xl font-semibold md:text-2xl"
            style={{ fontFamily: 'var(--font-ernesto)' }}
          >
            {title}
          </h2>

          {subtitle && (
            <p className="text-accent mt-1 text-xs font-medium tracking-[0.2em] uppercase">
              {subtitle}
            </p>
          )}

          {description && (
            <p className="text-muted mt-4 text-sm leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contributors.map((contributor) => (
            <ContributorCard key={contributor.id} contributor={contributor} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ContributorCardProps {
  contributor: Contributor;
}

function ContributorCard({ contributor }: ContributorCardProps) {
  const {
    name,
    handle,
    role,
    location,
    expertise,
    githubUrl,
    twitterUrl,
    websiteUrl,
    avatarUrl,
    isCore,
  } = contributor;

  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <article className="border-border bg-surface/90 hover:bg-surface-2 flex h-full flex-col rounded-2xl border p-5 shadow-sm transition-transform duration-150 hover:-translate-y-0.5">
      <div className="flex items-center gap-3">
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="border-border h-10 w-10 rounded-full border object-cover"
          />
        ) : (
          <div className="border-border bg-background text-accent flex h-10 w-10 items-center justify-center rounded-full border text-xs font-semibold">
            {initials}
          </div>
        )}

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-primary text-sm font-semibold">{name}</h3>
            {isCore && (
              <span className="border-border bg-primary/5 text-accent rounded-full border px-2 py-0.5 text-[10px] font-medium">
                Core
              </span>
            )}
          </div>
          <p className="text-muted text-[11px]">
            {role}
            {location ? ` · ${location}` : ''}
          </p>
          {handle && <p className="text-accent text-[11px]">{handle}</p>}
        </div>
      </div>

      {expertise && (
        <p className="text-muted mt-4 text-xs leading-relaxed">{expertise}</p>
      )}

      {(githubUrl || twitterUrl || websiteUrl) && (
        <div className="text-accent mt-4 flex items-center gap-3 text-xs">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary inline-flex items-center gap-1"
            >
              <FaGithub className="h-3 w-3" />
              <span>GitHub</span>
            </a>
          )}
          {twitterUrl && (
            <a
              href={twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary inline-flex items-center gap-1"
            >
              <FaXTwitter className="h-3 w-3" />
              <span>X</span>
            </a>
          )}
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary inline-flex items-center gap-1"
            >
              <FaGlobe className="h-3 w-3" />
              <span>Website</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
}
