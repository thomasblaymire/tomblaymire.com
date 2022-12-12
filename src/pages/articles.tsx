import styled from 'styled-components';

import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { PostsSection } from '@/components/sections/posts-section';
import { heroDescription, heroTitle } from '@/content/articles';
import { Col, Grid, Row } from '@/styles/grid';

const StyledArticlesRow = styled(Row)`
  margin-top: 13rem;
`;

export function Articles() {
  return (
    <>
      {/* <Meta /> */}
      <div>
        <HeroSection
          title={heroTitle}
          description={heroDescription}
          socials={false}
          logo={false}
        />
        <Grid>
          <StyledArticlesRow>
            <Col size={9}>
              <PostsSection />
            </Col>
            <Col size={4} />
          </StyledArticlesRow>
        </Grid>
        <FooterSection />
      </div>
    </>
  );
}
