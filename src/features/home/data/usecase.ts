import type { UseCase } from '../types/usecase';

export const useCasesData: UseCase[] = [
  {
    id: 'individuals',
    label: 'Individuals',
    outcomes: [
      'Stay organized and focus on what matters.',
      'Get AI assistance without switching apps.',
    ],
  },
  {
    id: 'teams',
    label: 'Teams',
    outcomes: [
      'Collaborate seamlessly with shared context.',
      'Reduce miscommunication and speed up projects.',
    ],
  },
  {
    id: 'developers',
    label: 'Developers',
    outcomes: [
      'Extend tools with simple APIs.',
      'Automate repetitive workflows easily.',
    ],
  },
  {
    id: 'organizations',
    label: 'Organizations',
    outcomes: [
      'Maintain transparency and audit trails.',
      'Scale collaboration across departments.',
    ],
  },
];
