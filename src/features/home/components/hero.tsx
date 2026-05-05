import type React from 'react';
import { hero_date } from '../data/hero';
import { useTheme } from '@/features/shared/store/theme';

import imgLight from '~assets/hero/toppira_light.png';
import imgDark from '~assets/hero/toppira_dark.png';

export const Hero: React.FC = () => {
  const theme = useTheme((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <section id='hero' className="container grid grid-cols-2 gap-8">
      <div className="col-span-2 md:col-span-1">
        <h2 className="font-ernesto mb-4 text-4xl sm:text-6xl">
          {hero_date.question}
        </h2>
        <div className="space-y-2 text-sm leading-6 sm:text-base">
          {hero_date.answers.map((el, i) => (
            <p key={`hero_answers_${i}`}>{el}</p>
          ))}
        </div>
      </div>

      <div className="hidden max-h-80 justify-center md:flex">
        <img
          className={
            'drop-shadow-accent rounded-xl object-cover drop-shadow-2xl'
          }
          src={isDark ? imgDark : imgLight}
          alt="hero_img"
        />
      </div>
    </section>
  );
};
