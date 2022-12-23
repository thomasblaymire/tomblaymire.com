import styled from 'styled-components';

import { Meta } from '@/components/meta';
import { Posts } from '@/components/posts';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { Subscribe } from '@/components/subscribe';
import { Work } from '@/components/work';
import { heroDescription, heroTitle } from '@/content/home';
import { device } from '@/helpers/device';
import { Col, Grid, PageRow } from '@/styles/grid';

const StyledSpacer = styled.div`
  padding-left: 0;
  padding-top: 5rem;
  @media ${device.tablet} {
    padding-left: 10rem;
  }
`;

export function Home() {
  return (
    <>
      {/* <Meta /> */}
      <div>
        <HeroSection
          title={heroTitle}
          description={heroDescription}
          socials={true}
          logo={true}
        />
        <Grid>
          <PageRow>
            <Col size={6}>
              <Posts limit={3} />
            </Col>
            <Col size={5}>
              <StyledSpacer>
                <Subscribe />
                <Work />
              </StyledSpacer>
            </Col>
          </PageRow>
        </Grid>
        <FooterSection />
      </div>
    </>
  );
}
