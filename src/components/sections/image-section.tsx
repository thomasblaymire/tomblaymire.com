import styled from 'styled-components';

import profile from '@/assets/profilealt.jpg';
import { device } from '@/helpers/device';

const StyledImageSection = styled.section`
  padding-bottom: 5rem;
`;

const StyledImageWrapper = styled.div`
  max-width: none;
  @media ${device.tablet} {
    padding-left: 0.625rem;
    padding-right: 0.625rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    transform: none;
    @media ${device.tablet} {
      transform: translate(0, 0) rotate(3deg) skewX(0) skewY(0) scaleX(1) scaleY(1);
    }
  }
`;

export function ImageSection() {
  return (
    <StyledImageSection>
      <StyledImageWrapper>
        <img src={profile} alt="Tom Blaymire" />
      </StyledImageWrapper>
    </StyledImageSection>
  );
}
