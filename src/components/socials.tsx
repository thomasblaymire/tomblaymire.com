import styled from 'styled-components';

import { Card } from '@/components/card';
import { socials } from '@/content/about';
import { device } from '@/helpers/device';

const StyledSocials = styled.div`
  display: flex;
  @media ${device.tablet} {
    margin-top: 2.5rem;
  }
`;

const StyledSocialsList = styled.ul`
  width: 100%;
`;

const StyledSocialListItem = styled.li`
  display: flex;
  &:not(:first-child) {
    margin-top: 2rem;
  }
  &:last-child {
    margin-top: 3rem;
    padding-top: 3rem;
    border-color: rgba(63, 63, 70, 0.4);
    border-top-width: 1px;
  }
  &:hover img {
    filter: invert(52%) sepia(76%) saturate(475%) hue-rotate(124deg) brightness(98%)
      contrast(90%);
  }
`;

const StyledSocialLink = styled.a`
  display: flex;
  align-items: center;
  color: rgb(228 228 231/1);
  font-size: 1.25rem;
  &:hover {
    color: rgb(20 184 166/1);
  }
  img {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const SocialText = styled.span`
  margin-left: 2rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const StyledCard = styled(Card)`
  padding: 0;
  margin: 0;
  border: 0;
`;

export function Socials() {
  return (
    <StyledCard>
      <StyledSocials>
        <StyledSocialsList>
          {socials.map(({ text, icon, alt, link }, index) => (
            <StyledSocialListItem key={index}>
              <StyledSocialLink href={link} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={alt} />
                <SocialText>{text}</SocialText>
              </StyledSocialLink>
            </StyledSocialListItem>
          ))}
        </StyledSocialsList>
      </StyledSocials>
    </StyledCard>
  );
}
