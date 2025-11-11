import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { Button } from '@/components/button';
import { Modal } from '@/components/modal';
import { device } from '@/helpers/device';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { NavigationMobileProps, NavigationProps, NavItem } from '@/types/navigation';

import { cn } from '../helpers/cn';

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
            <NavLink
              to={path}
              onClick={() => setToggle(false)}
              className={({ isActive }) => cn(isActive && 'text-[rgb(45,212,191)]')}
            >
              {name}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  );
}

function MobileNavigation({ children }: NavigationMobileProps) {
  return (
    <nav className="mt-6">
      <div className="[&_ul]:flex [&_ul]:flex-col [&_ul]:text-[rgb(212,212,216)] [&_li:not(:first-child)]:border-t [&_li:not(:first-child)]:border-[hsla(240,5%,96%,0.05)] [&_li]:leading-[1.5rem] [&_li]:font-medium [&_li]:py-6 [&_a:hover]:text-[rgb(20,184,166)]">
        {children}
      </div>
    </nav>
  );
}

export function Navigation({ items, type }: NavigationProps): JSX.Element {
  const [toggle, setToggle] = useState(false);
  const isTablet = useMediaQuery(device.tablet);
  return (
    <>
      {!isTablet ? (
        <>
          <div className="pointer-events-auto flex flex-1 justify-end">
            <Button
              onClick={() => setToggle(!toggle)}
              className="bg-[rgba(39,39,42,0.9)] border border-[hsla(0,0%,100%,0.1)] rounded-full pointer-events-auto px-8"
            >
              Menu
            </Button>
          </div>
          {toggle ? (
            <Modal
              title="Navigation"
              isActive={toggle}
              handleClose={() => setToggle(false)}
              className="w-full mx-6"
            >
              <MobileNavigation>{renderNavItems(items, setToggle)}</MobileNavigation>
            </Modal>
          ) : null}
        </>
      ) : (
        <nav
          className={cn(
            '[&_ul]:list-none [&_ul]:flex [&_ul]:bg-[rgba(39,39,42,0.9)] [&_ul]:border [&_ul]:border-[hsla(0,0%,100%,0.1)] [&_ul]:px-4 [&_ul]:rounded-full',
            '[&_li]:leading-[1.5rem] [&_li]:font-normal [&_li]:text-[1.4rem] [&_li]:px-5 [&_li]:py-5 [&_li:hover]:text-[rgb(20,184,166)]',
            type === 'basic' && '[&_ul]:bg-transparent [&_ul]:border-none [&_ul]:p-0',
          )}
        >
          {renderNavItems(items, setToggle)}
        </nav>
      )}
    </>
  );
}
