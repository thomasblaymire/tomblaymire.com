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
      <div className="[&_ul]:flex [&_ul]:flex-col [&_ul]:text-[rgb(212,212,216)] [&_li:not(:first-child)]:border-t [&_li:not(:first-child)]:border-[hsla(240,5%,96%,0.05)] [&_li]:leading-[1.5rem] [&_li]:font-medium [&_li]:py-6 [&_a]:block [&_a]:w-full [&_a:hover]:text-[rgb(20,184,166)]">
        {children}
      </div>
    </nav>
  );
}

export function Navigation({ items, type }: NavigationProps) {
  const [toggle, setToggle] = useState(false);
  const isTablet = useMediaQuery(device.tablet);
  return (
    <>
      {!isTablet ? (
        <>
          <div className="pointer-events-auto flex flex-1 justify-end">
            <Button
              onClick={() => setToggle(!toggle)}
              className="bg-[rgb(239,239,239)] dark:bg-[rgba(39,39,42,0.9)] text-black dark:text-white border border-[hsla(0,0%,0%,0.1)] dark:border-[hsla(0,0%,100%,0.1)] rounded-full pointer-events-auto px-8"
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
            '[&_ul]:list-none [&_ul]:flex',
            '[&_li]:leading-[1.5rem] [&_li]:font-normal [&_li]:text-[1.4rem] [&_li:hover]:text-[rgb(20,184,166)] dark:[&_li:hover]:text-[rgb(20,184,166)]',
            type === 'basic'
              ? '[&_li]:text-[rgb(161,161,170)] [&_li]:px-3 [&_li]:py-0'
              : '[&_ul]:bg-[rgb(239,239,239)] dark:[&_ul]:bg-[rgba(39,39,42,0.9)] [&_ul]:border [&_ul]:border-[hsla(0,0%,0%,0.1)] dark:[&_ul]:border-[hsla(0,0%,100%,0.1)] [&_ul]:px-4 [&_ul]:rounded-full [&_li]:px-5 [&_li]:py-5 [&_li]:text-[rgb(0,0,0)] dark:[&_li]:text-[rgb(212,212,216)]',
          )}
        >
          {renderNavItems(items, setToggle)}
        </nav>
      )}
    </>
  );
}
