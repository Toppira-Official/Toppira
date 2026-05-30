import { ContributorsSection } from '@/features/about/components/contributors';
import { AboutHero } from '@/features/about/components/hero';
import { AboutPrinciples } from '@/features/about/components/principles';
import { AboutWhatIs } from '@/features/about/components/what_is';
import { Seo } from '@/features/shared/components/seo';
import { pagesSeo } from '@/features/shared/config/seo';

export function About() {
  return (
    <>
      <Seo {...pagesSeo.about} />
      <main className="mt-20 space-y-20">
      <AboutHero />
      <AboutWhatIs />
      <AboutPrinciples />
      <ContributorsSection />
    </main>
    </>
  );
}
