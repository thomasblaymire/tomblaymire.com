import styled from 'styled-components';

import profile from '@/assets/profilealt.jpg';

const StyledImageSection = styled.section`
  padding-bottom: 4rem;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
    transform: translate(0, 0) rotate(3deg) skewX(0) skewY(0) scaleX(1) scaleY(1);
  }
`;

const StyledImageWrapper = styled.div`
  max-width: none;
  padding-left: 0.625rem;
  padding-right: 0.625rem;
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
