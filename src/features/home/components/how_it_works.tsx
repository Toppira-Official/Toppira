import type React from 'react';
import { how_it_works_data } from '../data/how_it_works';

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-foreground py-8">
      <div className="container flex flex-col items-center">
        <h2 className="font-ernesto mb-8 text-4xl">How It Works</h2>

        <ol className="space-y-8">
          {how_it_works_data.steps.map((step, index) => (
            <li key={index} className="flex items-center gap-4 text-lg">
              <div className="bg-primary text-muted flex h-10 w-10 items-center justify-center rounded-full">
                {index + 1}
              </div>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
