export const siteConfig = {
  name: 'Toppira',
  tagline: 'Apps + AI → Better & Faster Communication',
  description:
    'Toppira is an open-source platform that combines everyday applications with artificial intelligence to enable better and faster communication — without replacing the tools you already know.',
  url: (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '') || 'https://toppira.com',
  locale: 'en_US',
  twitterHandle: '@toppira',
  githubUrl: 'https://github.com/Toppira-Official',
  linkedinUrl: 'https://linkedin.com/company/toppira',
  googleSiteVerification: import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined,
  defaultOgImage: '/og-image.png',
} as const;

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export const pagesSeo = {
  home: {
    title: 'Toppira — Open-Source AI Platform for Smarter Workflows',
    description:
      'Toppira enhances familiar tools like reminders, notes, calendars, and todos with context-aware AI. Open-source, transparent, and built for individuals, teams, and developers.',
    path: '/',
    keywords: [
      'Toppira',
      'open source',
      'AI platform',
      'productivity',
      'workflow automation',
      'context-aware AI',
      'software development',
    ],
  },
  about: {
    title: 'About Toppira — Our Vision & Principles',
    description:
      'Learn about Toppira’s mission to augment existing tools with AI, our open-source values, and the principles that guide transparent, human-centered software.',
    path: '/about',
    keywords: ['about Toppira', 'open source mission', 'AI ethics', 'developer platform'],
  },
  products: {
    title: 'Toppira Products — Open-Source Projects',
    description:
      'Explore Toppira’s open-source products, including Human Streams — a social network built for authentic human moments and connection.',
    path: '/products',
    keywords: ['Toppira products', 'Human Streams', 'open source apps', 'Echo system'],
  },
  notFound: {
    title: 'Page Not Found — Toppira',
    description: 'The page you are looking for does not exist or is still under development.',
    path: '/404',
  },
} satisfies Record<string, PageSeo>;

export const sitemapRoutes = ['/', '/about', '/products'] as const;

export function absoluteUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${normalizedPath === '/' ? '' : normalizedPath}`;
}

export function buildPageTitle(title: string): string {
  if (title.includes(siteConfig.name)) return title;
  return `${title} | ${siteConfig.name}`;
}
