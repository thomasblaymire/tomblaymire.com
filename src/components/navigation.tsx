import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { device } from '@/helpers/device';
import { useMediaQuery } from '@/hooks/useMediaQuery';

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

const StyledMobileNavigation = styled.nav`
  ul {
    display: flex;
    flex-direction: column;
  }

  a {
    border-bottom-color: rgb(229, 231, 235);
    border-bottom-width: 0.15rem;
    line-height: 1.5rem;
    font-weight: 500;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    &:hover {
      color: rgb(20 184 166/1);
    }
  }
`;

const StyledModal = styled(Modal)`
  width: 100%;
  margin: 0 1rem;
`;

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

interface MobileNavigationProps {
  children: React.ReactNode;
}

function MobileNavigation({ children }: MobileNavigationProps) {
  return <StyledMobileNavigation>{children}</StyledMobileNavigation>;
}

export function Navigation({ items, type }: NavigationProps): JSX.Element {
  const [toggle, setToggle] = useState(false);
  const isTablet = useMediaQuery(device.tablet);

  return (
    <>
      {!isTablet ? (
        <>
          <StyledToggle>
            <StyledToggleButton onClick={() => setToggle(!toggle)}>
              Menu
            </StyledToggleButton>
          </StyledToggle>
          {toggle ? (
            <StyledModal isActive={toggle} handleClose={() => setToggle(false)}>
              <MobileNavigation>{renderNavItems(items)}</MobileNavigation>
            </StyledModal>
          ) : null}
        </>
      ) : (
        <StyledNavigation type={type}>{renderNavItems(items)}</StyledNavigation>
      )}
    </>
  );
}
