import { Meta } from '@/components/meta';
import { HeaderSection } from '@/components/sections/header-section';
import { HeroSection } from '@/components/sections/hero-section';
import { heroDescription, heroTitle } from '@/content/home';

import styles from '../styles/Home.module.css';

export function Home() {
  return (
    <div className={styles.container}>
      <Meta />
      <HeaderSection />
      <HeroSection title={heroTitle} description={heroDescription} socials={true} />
      <main className={styles.main}>MAIN BAY</main>
    </div>
  );
}
