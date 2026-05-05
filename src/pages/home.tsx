import { USPSection } from '@/features/home/components/USP';
import type React from 'react';
import { Hero } from '~features/home/components/hero';
import { ProblemSolution } from '~features/home/components/problem_solution';

export const Home: React.FC = () => {
  return (
    <div className="my-10 space-y-20 md:my-20 lg:my-30">
      <Hero />
      <ProblemSolution />
      <USPSection />
    </div>
  );
};
