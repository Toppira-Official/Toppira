import type { ContributorsSectionData } from '../types/contributors';

import aliMoradiProfile from '~assets/profiles/ali_moradi.jpg';

export const contributors_data: ContributorsSectionData = {
  eyebrow: 'Contributors',
  title: 'People behind Toppira',
  subtitle: 'Built in public, together.',
  description:
    'Toppira is an open-source project shaped by developers, designers, and infrastructure engineers from different time zones and backgrounds.',
  contributors: [
    {
      id: '1',
      name: 'Ali Moradi',
      handle: '@Ali127Dev',
      role: 'Core maintainer',
      expertise: 'Full-stack engineering, Go, NestJS, NextJS.',
      location: 'Remote',
      githubUrl: 'https://github.com/Ali127Dev',
      linkedinUrl: 'https://www.linkedin.com/in/Ali127Dev',
      avatarUrl: aliMoradiProfile,
      isCore: true,
    },
  ],
};
