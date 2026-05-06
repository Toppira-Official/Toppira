import type React from 'react';
import { contributors_data } from '../data/contributors';
import type { Contributor } from '../types/contributors';
import { FaGithub, FaGlobe, FaLinkedin, FaXTwitter } from 'react-icons/fa6';

export const ContributorsSection: React.FC = () => {
  const { eyebrow, title, subtitle, description, contributors } =
    contributors_data;

  return (
    <section className="bg-foreground border-border">
      <div className="container py-8">
        <div className="max-w-2xl">
          {eyebrow && (
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-accent text-xs tracking-[0.2em] uppercase"
            >
              {eyebrow}
            </p>
          )}

          <h2
            data-aos="fade-up"
            data-aos-delay="120"
            data-aos-duration="800"
            className="text-primary font-ernesto mt-2 text-4xl"
          >
            {title}
          </h2>

          {subtitle && (
            <p
              data-aos="fade-up"
              data-aos-delay="220"
              data-aos-duration="800"
              className="text-accent mt-1 text-xs tracking-[0.2em] uppercase"
            >
              {subtitle}
            </p>
          )}

          {description && (
            <p
              data-aos="fade-up"
              data-aos-delay="320"
              data-aos-duration="900"
              className="text-muted mt-4 text-sm leading-relaxed"
            >
              {description}
            </p>
          )}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="420"
          data-aos-duration="900"
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {contributors.map((contributor, idx) => (
            <ContributorCard
              key={contributor.id}
              contributor={contributor}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ContributorCardProps {
  contributor: Contributor;
  index: number;
}

const ContributorCard: React.FC<ContributorCardProps> = ({
  contributor,
  index,
}) => {
  const {
    name,
    handle,
    role,
    location,
    expertise,
    githubUrl,
    linkedinUrl,
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
    <article
      data-aos="fade-up"
      data-aos-delay={500 + index * 120}
      data-aos-duration="800"
      className="border-border bg-surface/90 hover:bg-surface-2 flex h-full flex-col rounded-2xl border p-5 shadow-sm transition-transform duration-150 hover:-translate-y-0.5"
    >
      <div
        data-aos="fade-up"
        data-aos-delay={600 + index * 120}
        className="flex items-center gap-3"
      >
        {avatarUrl ? (
          <img
            src={avatarUrl}
            alt={name}
            className="border-border h-10 w-10 rounded-full border object-cover"
          />
        ) : (
          <div className="border-border bg-background text-accent flex h-10 w-10 items-center justify-center rounded-full border text-xs">
            {initials}
          </div>
        )}

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <h3 className="text-primary text-sm">{name}</h3>
            {isCore && (
              <span className="border-border bg-primary/5 text-accent rounded-full border px-2 py-0.5 text-[10px]">
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
        <p
          data-aos="fade-up"
          data-aos-delay={700 + index * 120}
          data-aos-duration="800"
          className="text-muted mt-4 text-xs leading-relaxed"
        >
          {expertise}
        </p>
      )}

      {(githubUrl || linkedinUrl || twitterUrl || websiteUrl) && (
        <div
          data-aos="fade-up"
          data-aos-delay={800 + index * 120}
          className="text-accent mt-4 flex items-center gap-3 text-xs"
        >
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
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary inline-flex items-center gap-1"
            >
              <FaLinkedin className="h-3 w-3" />
              <span>LinkedIn</span>
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
};
