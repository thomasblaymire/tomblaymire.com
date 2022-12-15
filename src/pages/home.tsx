import { useEffect } from 'react';
import styled from 'styled-components';

import { Meta } from '@/components/meta';
import { Posts } from '@/components/posts';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { Subscribe } from '@/components/subscribe';
import { Work } from '@/components/work';
import { heroDescription, heroTitle } from '@/content/home';
import { device } from '@/helpers/device';
import { Col, Grid, Row } from '@/styles/grid';

const StyledSpacer = styled.div`
  padding-left: 0;
  @media ${device.tablet} {
    padding-left: 4rem;
  }
`;

const StyledHomeRow = styled(Row)`
  margin-top: 13rem;
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
          <StyledHomeRow>
            <Col size={7}>
              <Posts limit={3} />
            </Col>
            <Col size={5}>
              <StyledSpacer>
                <Subscribe />
                <Work />
              </StyledSpacer>
            </Col>
          </StyledHomeRow>
        </Grid>
        <FooterSection />
      </div>
    </>
  );
}
