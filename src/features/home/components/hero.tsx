import type React from 'react';
import { hero_date } from '../data/hero';

export const Hero: React.FC = () => {
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
      <div className="flex justify-end">
        <img src={hero_date.img} alt="hero_img" />
      </div>
    </section>
  );
};
