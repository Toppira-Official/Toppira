import type { ContributorsSectionData } from "../types/contributors";

export const contributors_data: ContributorsSectionData = {
  eyebrow: 'Contributors',
  title: 'People behind Toppira',
  subtitle: 'Built in public, together.',
  description:
    'Toppira is an open-source project shaped by developers, designers, and infrastructure engineers from different time zones and backgrounds.',
  contributors: [
    {
      id: '1',
      name: 'Jamal Mahmoudi',
      handle: '@jamal',
      role: 'Core maintainer',
      expertise: 'Full-stack engineering, DX, Next.js, Node.js',
      location: 'Remote',
      githubUrl: 'https://github.com/your-github',
      twitterUrl: 'https://x.com/your-handle',
      isCore: true,
    },
    {
      id: '2',
      name: 'Core Collaborator #1',
      handle: '@collab1',
      role: 'Core maintainer',
      expertise: 'DevOps, observability, cloud infrastructure',
      location: 'EU',
      githubUrl: 'https://github.com/example',
      isCore: true,
    },
    {
      id: '3',
      name: 'Contributor #1',
      handle: '@contrib1',
      role: 'Contributor',
      expertise: 'Frontend, design systems',
      location: 'Remote',
      githubUrl: 'https://github.com/example2',
    },
    {
      id: '4',
      name: 'Advisor #1',
      role: 'Advisor',
      expertise: 'Product & developer experience',
      location: 'US',
      websiteUrl: 'https://example.com',
    },
  ],
};
