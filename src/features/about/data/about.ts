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
          'Toppira is built on a simple belief: the tools you already know — reminders, todos, calendars, notes — are not the problem. We don’t ask you to relearn everything. Instead, we combine these familiar apps with AI, so your existing workflows become smarter, more connected, and easier to communicate through.',
      },
      {
        id: 2,
        title: 'Transparent and open by design',
        description:
          'The free edition of Toppira is fully open source. That means our code is visible, auditable, and extensible. You can see how data is handled, how AI is applied, and what decisions are being made. No black boxes, no hidden behavior — transparency, independence, and community participation are built into the platform.',
      },
      {
        id: 3,
        title: 'Keep humans in control',
        description:
          'AI in Toppira is there to assist, not to override. You choose what to automate, which suggestions to accept, and how your workflows should behave. We focus on better and faster communication — clearer intent, fewer misunderstandings, and more relevant information — while ensuring decisions stay in human hands.',
      },
      {
        id: 4,
        title: 'Connect context across tools',
        description:
          'Most tools still live in isolation. You jump between apps and manually connect the dots. Toppira uses AI to bridge these gaps: sharing context across reminders, tasks, calendars, and notes so that what you’re doing, what you’ve done, and what matters next are aligned. Your tools stay familiar; the experience becomes coherent.',
      },
      {
        id: 5,
        title: 'Build with and for the community',
        description:
          'Toppira is a platform, not a closed product. Developers can extend it, teams can adapt it, and organizations can shape it to their needs. Issues, ideas, and contributions from the community help define the roadmap. We see open source not just as a license model, but as a way to build trust and evolve together.',
      },
    ],
  },
};
