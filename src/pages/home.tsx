import styled from 'styled-components';

import { Posts } from '@/components/posts';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { Subscribe } from '@/components/subscribe';
import { Work } from '@/components/work';
import { heroDescription, heroTitle } from '@/content/home';
import { device, sizes } from '@/helpers/device';
import { Col, Grid, PageRow } from '@/styles/grid';

const StyledSpacer = styled.div`
  padding-left: 0;
  padding-top: 5rem;
  @media ${device.laptop} {
    padding-left: 10rem;
  }
`;

const StyledPostsCol = styled(Col)`
  @media (max-width: ${sizes.laptop}) {
    flex-basis: 100%;
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
            <StyledPostsCol size={6}>
              <Posts limit={3} />
            </StyledPostsCol>
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
