import styled from 'styled-components';

import logo from '../assets/me.png';

const StyledLogo = styled.div`
  img {
    width: 6rem;
  }
`;

export function Logo() {
  return (
    <StyledLogo>
      <img src={logo} alt="Tom Blaymire" />
    </StyledLogo>
  );
}
