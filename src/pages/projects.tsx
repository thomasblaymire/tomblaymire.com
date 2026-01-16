import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { heroDescription, heroTitle, metaTitle } from '@/content/projects-page';
import { Grid, Row } from '@/styles/grid';

export function Projects() {
  return (
    <>
      <Meta title={metaTitle} description={heroDescription} />
      <HeroSection
        title={heroTitle}
        description={heroDescription}
        socials={false}
        logo={false}
      />
      <Grid>
        <Row className="mt-16 tablet:mt-32">
          <ProjectsSection />
        </Row>
      </Grid>
      <FooterSection />
    </>
  );
}
