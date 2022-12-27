import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { device } from '@/helpers/device';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import {
  NavbarProps,
  NavigationMobileProps,
  NavigationProps,
  NavItem,
} from '@/types/navigation';

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

  li {
    line-height: 1.5rem;
    font-weight: 400;
    font-size: 1.4rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
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
  margin-top: 1.5rem;
  ul {
    display: flex;
    flex-direction: column;
    color: rgb(212 212 216/1);
  }

  li {
    &:not(:first-child) {
      border-top-width: calc(1px * calc(1 - 0));
      border-bottom-width: calc(1px * 0);
      border-color: hsla(240, 5%, 96%, 0.05);
    }

    line-height: 1.5rem;
    font-weight: 500;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  a {
    &:hover {
      color: rgb(20 184 166/1);
    }
  }
`;

const StyledModal = styled(Modal)`
  width: 100%;
  margin: 0 1.5rem;
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    color: rgb(45 212 191/1);
  }
`;

function renderNavItems(
  items: NavItem[],
  setToggle: React.Dispatch<React.SetStateAction<boolean>>,
) {
  return (
    <ul>
      {items.map(({ path, name, isExternal }, index: number) => (
        <li key={index}>
          {isExternal ? (
            <a href={path} target="_blank" rel="noreferrer">
              {name}
            </a>
          ) : (
            <StyledNavLink to={path} onClick={() => setToggle(false)}>
              {name}
            </StyledNavLink>
          )}
        </li>
      ))}
    </ul>
  );
}

function MobileNavigation({ children }: NavigationMobileProps) {
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
            <StyledModal
              title="Navigation"
              isActive={toggle}
              handleClose={() => setToggle(false)}
            >
              <MobileNavigation>{renderNavItems(items, setToggle)}</MobileNavigation>
            </StyledModal>
          ) : null}
        </>
      ) : (
        <StyledNavigation type={type}>
          {renderNavItems(items, setToggle)}
        </StyledNavigation>
      )}
    </>
  );
}
