import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { TimelineSection } from '@/components/sections/timeline-section';
import { heroDescription, heroTitle } from '@/content/uses';

export function Uses() {
  return (
    <>
      <HeroSection title={heroTitle} description={heroDescription} socials={true} />
      <TimelineSection />
      <FooterSection />
    </>
  );
}
