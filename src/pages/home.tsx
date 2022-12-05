import { Meta } from '@/components/meta';
import { HeroSection } from '@/components/sections/hero-section';
import { heroDescription, heroTitle } from '@/content/home';

export function Home() {
  return (
    <>
      {/* <Meta /> */}
      <div>
        <HeroSection title={heroTitle} description={heroDescription} socials={true} />
      </div>
    </>
  );
}
