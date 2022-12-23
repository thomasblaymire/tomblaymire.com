import styled from 'styled-components';

import { Meta } from '@/components/meta';
import { Posts } from '@/components/posts';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { heroDescription, heroTitle } from '@/content/articles';
import { Col, Grid, PageRow } from '@/styles/grid';

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
          <PageRow>
            <Col size={9}>
              <Posts />
            </Col>
            <Col size={4} />
          </PageRow>
        </Grid>
        <FooterSection />
      </div>
    </>
  );
}
