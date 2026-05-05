import { AiOutlineSmile } from 'react-icons/ai';
import { BsPuzzle } from 'react-icons/bs';
import { FiUnlock } from 'react-icons/fi';
import { CiSettings } from 'react-icons/ci';
import type { USPData } from '../types/USP';

export const usp_data: USPData = {
  items: [
    {
      icon: <AiOutlineSmile size={28} className="text-indigo-600" />,
      title: 'AI with shared context across apps',
      description:
        'Toppira integrates AI into familiar tools to enhance workflows without disruption.',
    },
    {
      icon: <BsPuzzle size={28} className="text-indigo-600" />,
      title: 'Works with tools you already know',
      description:
        'No learning curve needed; enhances your current apps seamlessly.',
    },
    {
      icon: <FiUnlock size={28} className="text-indigo-600" />,
      title: 'Fully open-source (free edition)',
      description:
        'Transparency, customization, and community-driven innovation.',
    },
    {
      icon: <CiSettings size={28} className="text-indigo-600" />,
      title: 'Developer-friendly & extensible',
      description: 'Built for customization and easy extension.',
    },
  ],
};
