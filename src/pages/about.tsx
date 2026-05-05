import { ContributorsSection } from '@/features/about/components/contributors';
import { AboutHero } from '@/features/about/components/hero';
import { AboutPrinciples } from '@/features/about/components/principles';
import { AboutWhatIs } from '@/features/about/components/what_is';

export function About() {
  return (
    <>
      <main className="bg-background text-primary min-h-screen">
        <AboutHero />
        <AboutWhatIs />
        <AboutPrinciples />
        <ContributorsSection />
      </main>
    </>
  );
}
