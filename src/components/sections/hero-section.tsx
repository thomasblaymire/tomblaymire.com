import styled from "styled-components";

const StyledSectionTitle = styled.h1``;
const StylesSectionDescription = styled.h1``;
const StylesSectionSocials = styled.h1``;

export type HeroSectionProps = {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  socials: boolean;
};

function HeroSection({ title, description, socials }: HeroSectionProps) {
  return (
    <section>
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <StylesSectionDescription>{description}</StylesSectionDescription>
      {socials ? <StylesSectionSocials>{socials}</StylesSectionSocials> : null}
    </section>
  );
}

export { HeroSection };
