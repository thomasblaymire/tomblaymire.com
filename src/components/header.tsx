import styled from 'styled-components';

import { Navigation } from '@/components/navigation';
import { navLinks } from '@/content/links';
import { useLightMode } from '@/hooks/useLightMode';

const StyledHeader = styled.header`
  padding-top: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
`;

export function Header() {
  const [theme, toggleTheme] = useLightMode();

  return (
    <StyledHeader>
      <Navigation items={navLinks} />
    </StyledHeader>
  );
}
