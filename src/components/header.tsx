import { Link, useLocation } from 'react-router-dom';

import { Logo } from '@/components/logo';
import { Navigation } from '@/components/navigation';
import { ThemeToggle } from '@/components/theme-toggle';
import { navLinks } from '@/content/pages/links';

interface HeaderProps {
  toggleTheme: () => void;
  theme: string;
}

export function Header({ toggleTheme, theme }: HeaderProps) {
  const location = useLocation();
  const isHomepage = location.pathname === '/';
  return (
    <header className="pt-[2.5rem] text-[1.5rem] flex justify-center flex-1">
      <div className="flex items-center flex-1 [&_img]:w-[4.5rem] [&_img]:flex">
        {!isHomepage ? (
          <Link to="/" aria-label="Tom Blaymire - Go to homepage">
            <Logo />
          </Link>
        ) : null}
      </div>
      <Navigation items={navLinks} />
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
    </header>
  );
}
