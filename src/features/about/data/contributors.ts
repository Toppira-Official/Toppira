import type { ContributorsSectionData } from '../types/contributors';

import aliMoradiProfile from '~assets/profiles/ali_moradi.png';
import mohammadRamezaniProfile from '~assets/profiles/mohammad_ramezani.jpg';

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
    {
      id: '2',
      name: 'Mohammad Ramezani',
      handle: '@DaRiaN0Dev',
      role: 'Contributor',
      expertise: 'Frontend Developer, React, NextJS, TailwindCSS.',
      location: 'Remote',
      githubUrl: 'https://github.com/DaRiaN0Dev',
      avatarUrl: mohammadRamezaniProfile,
      isCore: true,
    },
  ],
};
