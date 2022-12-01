import { Meta } from "components/meta";
import styles from "../styles/Home.module.css";
import { heroDescription, heroTitle } from "content/home";
import { HeroSection } from "components/sections/hero-section";
import { HeaderSection } from "components/sections/header-section";

export default function Home() {
  return (
    <div className={styles.container}>
      <Meta />

      <HeaderSection />

      <HeroSection
        title={heroTitle}
        description={heroDescription}
        socials={true}
      />

      <main className={styles.main}>MAIN BAY</main>
    </div>
  );
}
