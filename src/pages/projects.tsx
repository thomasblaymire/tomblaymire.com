import styled from 'styled-components';

import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { heroDescription, heroTitle, metaTitle } from '@/content/projects';
import { device } from '@/helpers/device';
import { Grid, Row } from '@/styles/grid';

const StyledProjectsRow = styled(Row)`
  margin-top: 4rem;
  @media ${device.tablet} {
    margin-top: 8rem;
  }
`;

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
        <StyledProjectsRow>
          <ProjectsSection />
        </StyledProjectsRow>
      </Grid>
      <FooterSection />
    </>
  );
}
