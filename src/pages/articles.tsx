import { Meta } from '@/components/meta';
import { Posts } from '@/components/posts';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { heroDescription, heroTitle } from '@/content/pages/articles-page';
import { Col, Grid, PageRow } from '@/styles/grid';

export function Articles() {
  return (
    <>
      <Meta title="Articles - Tom Blaymire" description={heroDescription} />
      <div>
        <HeroSection
          title={heroTitle}
          description={heroDescription}
          socials={false}
          logo={false}
        />
        <Grid>
          <PageRow>
            <Col size={9} className="max-laptop:flex-[0_0_100%]!">
              <Posts />
            </Col>
            <Col size={4} className="max-laptop:flex-[0_0_100%]!" />
          </PageRow>
        </Grid>
        <FooterSection />
      </div>
    </>
  );
}
