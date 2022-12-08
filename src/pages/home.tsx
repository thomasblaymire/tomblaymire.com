import styled from 'styled-components';

import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { PostsSection } from '@/components/sections/posts-section';
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
  margin-top: 15rem;
`;

export function Home() {
  return (
    <>
      {/* <Meta /> */}
      <div>
        <HeroSection title={heroTitle} description={heroDescription} socials={true} />
        <Grid>
          <StyledHomeRow>
            <Col size={7}>
              <PostsSection />
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
