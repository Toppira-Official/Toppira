import { FiUnlock } from 'react-icons/fi';
import { AiOutlineCode } from 'react-icons/ai';
import { PiUsersThree } from 'react-icons/pi';
import { TbPlugConnected } from 'react-icons/tb';
import type { TrustItem } from '../types/trust';

export const trustData: TrustItem[] = [
  {
    icon: <FiUnlock size={28} className="text-primary" />,
    title: 'Fully Open Source',
    description: 'Every line of code is open, forkable, and yours to build on.',
  },
  {
    icon: <AiOutlineCode size={28} className="text-primary" />,
    title: 'Transparent Code',
    description: 'No black boxes — everything is inspectable and reviewable.',
  },
  {
    icon: <PiUsersThree size={28} className="text-primary" />,
    title: 'Community‑Driven Development',
    description: 'Improved by developers, for developers — together.',
  },
  {
    icon: <TbPlugConnected size={28} className="text-primary" />,
    title: 'No Vendor Lock‑In',
    description:
      'Your data, your infrastructure, your rules — always portable.',
  },
];
