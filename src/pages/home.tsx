import { CTA } from '@/features/home/components/cta';
import { HowItWorks } from '@/features/home/components/how_it_works';
import { Trust } from '@/features/home/components/trust';
import { UseCases } from '@/features/home/components/usecase';
import { USP } from '@/features/home/components/USP';
import { Vision } from '@/features/home/components/vision';
import type React from 'react';
import { Hero } from '~features/home/components/hero';
import { ProblemSolution } from '~features/home/components/problem_solution';

export const Home: React.FC = () => {
  return (
    <div className="mt-20 space-y-20">
      <Hero />
      <ProblemSolution />
      <USP />
      <HowItWorks />
      <UseCases />
      <Trust />
      <Vision />
      <CTA />
    </div>
  );
};
