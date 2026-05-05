import type React from 'react';
import { hero_date } from '../data/hero';
import { useTheme } from '@/features/shared/store/theme';

import imgLight from '~assets/hero/toppira_light.png';
import imgDark from '~assets/hero/toppira_dark.png';
import clsx from 'clsx';

export const Hero: React.FC = () => {
  const theme = useTheme((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <section className="container grid grid-cols-2 gap-8 py-34">
      <div>
        <h2 className="font-ernesto mb-4 text-6xl">{hero_date.question}</h2>
        <div className="space-y-2 leading-6">
          {hero_date.answers.map((el, i) => (
            <p key={`hero_answers_${i}`}>{el}</p>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <img
          className={clsx('h-2/3 max-h-full rounded-xl drop-shadow-2xl', {
            'drop-shadow-white': isDark,
            'drop-shadow-black': !isDark,
          })}
          src={isDark ? imgDark : imgLight}
          alt="hero_img"
        />
      </div>
    </section>
  );
};
