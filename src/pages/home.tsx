import styled from 'styled-components';

import { Meta } from '@/components/meta';
import { HeroSection } from '@/components/sections/hero-section';
import { PostsSection } from '@/components/sections/posts-section';
import { Subscribe } from '@/components/subscribe';
import { heroDescription, heroTitle } from '@/content/home';
import { Col, Grid, Row } from '@/styles/grid';

const StyledSpacer = styled.div`
  padding-left: 4rem;
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
              </StyledSpacer>
            </Col>
          </StyledHomeRow>
        </Grid>
      </div>
    </>
  );
}
