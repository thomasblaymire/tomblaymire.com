import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/components/button';

interface NavItem {
  path: string;
  name: string;
}

interface NavigationProps {
  items: NavItem[];
  type?: 'basic';
}

interface NavbarProps {
  type?: 'basic';
}

const StyledNavigation = styled.nav<NavbarProps>`
  ul {
    list-style: none;
    display: flex;
    background-color: rgba(39, 39, 42, 0.9);
    border: solid 1px hsla(0, 0%, 100%, 0.1);
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 9999px;

    ${({ type }) =>
      type === 'basic' &&
      `
        background: transparent;
        border: none;
        padding: 0;
  `}
  }

  a {
    line-height: 1.5rem;
    font-weight: 500;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
    &:hover {
      color: rgb(20 184 166/1);
    }
  }
`;

const StyledToggle = styled.div`
  pointer-events: auto;
  display: flex;
  flex: 1 1 0%;
  justify-content: flex-end;
`;
const StyledToggleButton = styled(Button)`
  background-color: rgba(39, 39, 42, 0.9);
  border: solid 1px hsla(0, 0%, 100%, 0.1);
  border-radius: 9999px;
  pointer-events: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const StyledMobileNavigation = styled.nav``;

function renderNavItems(items: NavItem[]) {
  return (
    <ul>
      {items.map(({ path, name }, index: number) => (
        <Link key={index} to={path}>
          <li>{name}</li>
        </Link>
      ))}
    </ul>
  );
}

function MobileNavigation({ children }: any) {
  return <StyledMobileNavigation>{children}</StyledMobileNavigation>;
}

export function Navigation({ items, type }: NavigationProps): JSX.Element {
  const [toggle, setToggle] = useState(false);

  const isMobile = true;

  return (
    <>
      {isMobile ? (
        <>
          <StyledToggle>
            <StyledToggleButton onClick={() => setToggle(!toggle)}>
              Menu
            </StyledToggleButton>
          </StyledToggle>
          {toggle ? <MobileNavigation>{renderNavItems(items)}</MobileNavigation> : null}
        </>
      ) : (
        <StyledNavigation type={type}>{renderNavItems(items)}</StyledNavigation>
      )}
    </>
  );
}
