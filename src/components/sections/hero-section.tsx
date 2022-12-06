import styled from 'styled-components';

import { Logo } from '@/components/logo';
import { Col, Grid, Row } from '@/styles/grid';

const StyledHeroSection = styled.section`
  margin-top: 10rem;
`;

const StyledHeroContent = styled.div`
  max-width: 70rem;
`;

const StyledSectionTitle = styled.h1`
  margin-top: 2.25rem;
  font-size: 5rem;
  line-height: 6rem;
  letter-spacing: -0.025em;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textColor};
`;

const StylesSectionDescription = styled.p`
  margin-top: 1.75rem;
  font-size: 1.75rem;
  line-height: 2.7rem;
  color: ${({ theme }) => theme.colors.textColorSub};
`;

const StylesSectionSocials = styled.h1``;

export type HeroSectionProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  socials: boolean;
};

function HeroSection({ title, description, socials }: HeroSectionProps) {
  return (
    <StyledHeroSection>
      <StyledHeroContent>
        <Grid>
          <Row>
            <Col size={1}>
              <Logo />
            </Col>
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
