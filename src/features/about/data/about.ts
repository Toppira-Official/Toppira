import type { AboutData } from '../types/about';

export const about_data: AboutData = {
  hero: {
    eyebrow: 'About Toppira',
    title: 'We don’t replace your tools.',
    highlight: 'We make them smarter.',
    paragraphs: [
      'Toppira is an open-source, AI-enhanced development platform designed for modern engineering teams. Instead of forcing you into yet another monolithic tool, we sit alongside your existing stack—your editor, your CI, your issue tracker—and make them work together more intelligently.',
      'Built by full-stack developers, for full-stack developers, Toppira focuses on transparency, extensibility, and long-term maintainability instead of lock-in and black-box magic.',
    ],
    snapshot: {
      label: 'Snapshot',
      items: [
        { label: 'Focus', value: 'Better living & higher performance' },
        { label: 'Approach', value: 'Human-centered product design' },
        { label: 'Built for', value: 'People, teams, and everyday life' },
        { label: 'Outcome', value: 'Smarter, more effective experiences' },
      ],
    },
  },
  whatIs: {
    title: 'What is Toppira?',
    columns: [
      'Toppira is an open-source software development platform focused on combining everyday applications with artificial intelligence to create better and faster communication. Instead of replacing familiar tools like reminders, notes, calendars, and todos, it enhances them with AI — keeping workflows familiar while adding smart context-aware behavior.',
      'Toppira helps users reduce friction, make quicker decisions, and automate repetitive tasks by allowing AI to understand context across applications. It is designed for individuals, teams, developers, and organizations who want transparency, customization, and community-driven innovation. The free edition is fully open-source, enabling anyone to use, modify, and contribute.',
    ],
  },
  principles: {
    title: 'Principles we build on',
    principles: [
      {
        id: 1,
        title: 'Augment, don’t replace',
        description:
          'Toppira is designed to work with your current tools—not against them. We integrate, we automate, and we suggest, but you stay in control.',
      },
      {
        id: 2,
        title: 'Transparent by default',
        description:
          'From architecture to configuration, we aim for clarity. Open-source code, auditable behavior, and predictable performance are non-negotiable.',
      },
      {
        id: 3,
        title: 'Built for real teams',
        description:
          'The platform is shaped around real-world workflows: code review, incident response, release management, and long‑term maintainability.',
      },
    ],
  },
};
