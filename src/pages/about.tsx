import { ContributorsSection } from '@/features/about/components/contributors';
import { AboutHero } from '@/features/about/components/hero';
import { AboutPrinciples } from '@/features/about/components/principles';
import { AboutWhatIs } from '@/features/about/components/what_is';

export function About() {
  return (
    <main className="mt-20 space-y-20">
      <AboutHero />
      <AboutWhatIs />
      <AboutPrinciples />
      <ContributorsSection />
    </main>
  );
}
