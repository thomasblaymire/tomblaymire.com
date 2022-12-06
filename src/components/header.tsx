import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { Logo } from '@/components/logo';
import { Navigation } from '@/components/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { navLinks } from '@/content/links';

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const StyledHeader = styled.header`
  padding-top: 2.5rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  flex: 1 1 0%;
`;

const StyledHeaderLogo = styled.div`
  display: flex;
  align-items: center;
  flex: 1 1 0%;

  img {
    width: 4.5rem;
    display: flex;
  }
`;

export function Header({ toggleTheme, theme }: HeaderProps) {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  return (
    <StyledHeader>
      <StyledHeaderLogo>
        {!isHomepage ? (
          <Link to="/">
            <Logo />
          </Link>
        ) : null}
      </StyledHeaderLogo>
      <Navigation items={navLinks} />
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
    </StyledHeader>
  );
}
