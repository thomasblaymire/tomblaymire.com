import styled from 'styled-components';

import { Meta } from '@/components/meta';
import { FooterSection } from '@/components/sections/footer-section';
import { ImageSection } from '@/components/sections/image-section';
import { Socials } from '@/components/socials';
import { heroTitle } from '@/content/about';
import { device, sizes } from '@/helpers/device';
import { Col, Grid, PageRow } from '@/styles/grid';

const StyledSpacer = styled.div`
  padding-left: 0;
  @media ${device.laptop} {
    padding-left: 10rem;
  }
`;

const StyledAboutContent = styled.div`
  margin-bottom: 5rem;
  @media ${device.laptop} {
    margin-bottom: 0rem;
  }

  h1 {
    color: ${({ theme }) => theme.colors.textHeading};
  }

  p {
    color: ${({ theme }) => theme.colors.textColor};
    &:not(:first-child) {
      margin-top: calc(3.5rem * calc(1 - 0));
      margin-bottom: calc(3.5rem * 0);
    }
  }
`;

const StyledAboutCol = styled(Col)`
  @media (max-width: ${sizes.laptop}) {
    flex-basis: 100%;
  }
`;

export function About() {
  return (
    <>
      <Meta
        title="About - Tom Blaymire"
        description="Since my early days I have had the opportunity to expand my knowledge in the Front End space and have shifted into more of a Software Engineering role"
      />
      <Grid>
        <PageRow>
          <StyledAboutCol size={6}>
            <StyledAboutContent>
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
                Until recently I have spent the last three years working in Sydney,
                Australia primarily for Stan who are one of the leading video streaming
                platforms. Here I worked on various exiting features such as the
                integration of live sport streaming for <strong>Champions League</strong>,{' '}
                <strong>Wimbledon</strong> and <strong>Rugby League</strong> along with
                building new platform features to help with user retention and experience.
              </p>

              <p>
                My last 6 months at Stan I have been working as a remote contractor back
                in the UK. During this time I have been mentoring new developers along
                with performing large scale architecture refactoring including building
                new <strong>Node JS</strong> CLI features, <strong>TypeScript</strong>{' '}
                re-writing, splitting of legacy classes along with device performance
                improvements via our custom <strong>Webpack</strong> configurations.
              </p>
            </StyledAboutContent>
          </StyledAboutCol>
          <Col size={6}>
            <StyledSpacer>
              <ImageSection />
              <Socials />
            </StyledSpacer>
          </Col>
        </PageRow>
      </Grid>
      <FooterSection />
    </>
  );
}
