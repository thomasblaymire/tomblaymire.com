import { Meta } from '@/components/meta';
import { Posts } from '@/components/posts';
import { FooterSection } from '@/components/sections/footer-section';
import { HeroSection } from '@/components/sections/hero-section';
import { Subscribe } from '@/components/subscribe';
import { Work } from '@/components/work';
import { heroDescription, heroTitle, metaTitle } from '@/content/pages/home';
import { Col, Grid, PageRow } from '@/styles/grid';

export function Home() {
  return (
    <>
      <Meta title={metaTitle} description={heroDescription} />
      <div>
        <HeroSection
          title={heroTitle}
          description={heroDescription}
          socials={true}
          logo={true}
        />
        <Grid>
          <PageRow>
            <Col size={6} className="max-laptop:!flex-[0_0_100%]">
              <Posts limit={3} />
            </Col>
            <Col size={5} className="max-laptop:!flex-[0_0_100%]">
              <div className="pl-0 pt-20 laptop:pl-40">
                <Subscribe />
                <Work />
              </div>
            </Col>
          </PageRow>
        </Grid>
        <FooterSection />
      </div>
    </>
  );
}
