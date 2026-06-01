import type { Product } from '../types/product';

import toppiraLogo from '~assets/products/toppira.jpg';
import trueFlowLogo from '~assets/products/true-flow.png';

export const products: Product[] = [
  {
    id: 'toppira',
    name: 'Toppira',
    description:
      'Toppira is an open-source software development platform focused on combining everyday applications with artificial intelligence to create better and faster communication.',
    repository: {
      label: 'Github',
      href: 'https://github.com/Toppira-Official',
    },
    website: {
      label: 'Website',
      href: 'https://toppira.com',
    },
    image: toppiraLogo,
  },
  {
    id: 'true-flow',
    name: 'True Flow',
    description:
      'TrueFlow is focused on building modern solutions for HR management, task tracking, team collaboration, and workforce organization. Our mission is to simplify how companies manage their people, projects, and daily operations — all in one powerful ecosystem.',
    repository: {
      label: 'Github',
      href: 'https://github.com/TrueFlow-Official',
    },
    website: {
      label: 'Website',
      href: 'https://trueflow.ir',
    },
    image: trueFlowLogo,
  },
];
