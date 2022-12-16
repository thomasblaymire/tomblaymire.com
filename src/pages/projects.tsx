import styled from 'styled-components';

import { Meta } from '@/components/meta';
import { Posts } from '@/components/posts';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { heroDescription, heroTitle } from '@/content/projects';
import { Col, Grid, Row } from '@/styles/grid';

const StyledProjectsRow = styled(Row)`
  margin-top: 8rem;
`;

export function Projects() {
  return (
    <>
      <div>
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
      </div>
    </>
  );
}
