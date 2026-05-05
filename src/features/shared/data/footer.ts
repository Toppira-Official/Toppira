import type { FooterData } from '../types/footer';

export const footer_data: FooterData = {
  brand: {
    name: 'Toppira',
    description:
      'An open-source platform that makes your existing tools smarter with context-aware AI, automation, and seamless workflows.',
  },
  sections: [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '/#usp' },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Use Cases', href: '/#usecases' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: 'https://github.com/Toppira-Official' },
        { label: 'Guides', href: 'https://linkedin.com/company/toppira' },
        { label: 'FAQ', href: 'https://linkedin.com/company/toppira' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'GitHub', href: 'https://github.com/Toppira-Official' },
        { label: 'LinkedIn', href: 'https://linkedin.com/company/toppira' },
      ],
    },
  ],
  bottomText: 'Built openly. Designed for smarter workflows.',
};
