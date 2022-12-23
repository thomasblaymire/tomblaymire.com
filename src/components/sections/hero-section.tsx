import styled from 'styled-components';

import { Logo } from '@/components/logo';
import { device } from '@/helpers/device';
import { Col, Grid, Row } from '@/styles/grid';

const StyledHeroSection = styled.section`
  margin-top: 6rem;
  padding-left: 0rem;
  padding-bottom: 6rem;
  border-bottom: 1px solid;
  border-color: rgba(63, 63, 70, 0.4);

  @media ${device.tablet} {
    margin-top: 8rem;
    border: none;
    padding-bottom: 0;
  }
`;

const StyledHeroContent = styled.div`
  max-width: 70rem;
`;

const StyledSectionTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textColor};
  margin-top: 2.25rem;
`;

const StylesSectionDescription = styled.p`
  margin-top: 1.75rem;
  color: ${({ theme }) => theme.colors.textColorSub};
`;

const StylesSectionSocials = styled.h1``;

export type HeroSectionProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  socials: boolean;
  logo?: boolean;
};

function HeroSection({ title, description, socials, logo }: HeroSectionProps) {
  return (
    <StyledHeroSection>
      <StyledHeroContent>
        <Grid>
          <Row>
            <Col size={1}>{logo ? <Logo /> : null}</Col>
          </Row>
          <Row>
            <Col size={1}>
              <StyledSectionTitle>{title}</StyledSectionTitle>
            </Col>
          </Row>
        </Grid>
        <StylesSectionDescription>{description}</StylesSectionDescription>
        {socials ? <StylesSectionSocials>{socials}</StylesSectionSocials> : null}{' '}
      </StyledHeroContent>
    </StyledHeroSection>
  );
}

export { HeroSection };
