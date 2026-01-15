import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { ImageSection } from '@/components/sections/image-section';
import { Socials } from '@/components/socials';
import { heroTitle } from '@/content/about';
import { Col, Grid, PageRow } from '@/styles/grid';

export function About() {
  return (
    <>
      <Meta
        title="About - Tom Blaymire"
        description="Since my early days I have had the opportunity to expand my knowledge in the Front End space and have shifted into more of a Software Engineering role"
      />
      <Grid>
        <PageRow>
          <Col size={6} className="max-laptop:!flex-[0_0_100%]">
            <div className="mb-20 laptop:mb-0 [&_h1]:text-[rgb(39,39,42)] dark:[&_h1]:text-[rgb(244,244,245)] [&_p]:text-[rgb(82,82,91)] dark:[&_p]:text-[rgb(161,161,170)] [&_p:not(:first-child)]:mt-14">
              <h1>{heroTitle}</h1>
              <p>
                I started my career as a Jr Developer at Emis Health where I learnt on the
                job how to build websites and intranets using <strong>Wordpress</strong>,{' '}
                <strong>HTML</strong>, <strong>CSS</strong> and <strong>PHP</strong> for
                various medical practices across the UK.
              </p>
              <p>
                Since my early days I have had the opportunity to expand my knowledge in
                the Front End space and have shifted into more of a Software Engineering
                role working primarily working with <strong>JavaScript</strong> and{' '}
                <strong>React</strong> in various different agile development teams to
                build new features, revamp existing codebase architecture and mentor new
                developers.
              </p>
              <p>
                I spent three years working in Sydney, Australia primarily for Stan, one
                of the leading video streaming platforms. There I worked on exciting
                features such as the integration of live sport streaming for{' '}
                <strong>Champions League</strong>, <strong>Wimbledon</strong> and{' '}
                <strong>Rugby League</strong> along with building new platform features to
                help with user retention and experience.
              </p>

              <p>
                Now based in London and working remotely, I continue to focus on building
                scalable frontend architectures. My experience spans mentoring developers,
                performing large-scale architecture refactoring, building{' '}
                <strong>Node JS</strong> CLI tools, <strong>TypeScript</strong>{' '}
                migrations, and optimising application performance.
              </p>
            </div>
          </Col>
          <Col size={6} className="max-laptop:!flex-[0_0_100%]">
            <div className="pl-0 laptop:pl-40">
              <ImageSection />
              <Socials />
            </div>
          </Col>
        </PageRow>
      </Grid>
      <FooterSection />
    </>
  );
}
