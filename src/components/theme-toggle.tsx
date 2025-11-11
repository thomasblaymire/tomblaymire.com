import moonIcon from '@/assets/icons/moon.svg';
import sunIcon from '@/assets/icons/sun.svg';
import { Button } from '@/components/button';
import { THEME } from '@/helpers/theme';
import { cn } from '../helpers/cn';

interface ThemeToggleProps {
  toggleTheme: () => void;
  theme: string;
}

export function ThemeToggle({ toggleTheme, theme }: ThemeToggleProps) {
  const handleToggle = () => toggleTheme();
  return (
    <div className="flex justify-end items-center leading-[1.5rem] pl-[1.5rem] tablet:flex-1 tablet:pl-0">
      <Button
        onClick={handleToggle}
        color="base"
        className="flex bg-[rgba(39,39,42,0.9)] p-4"
      >
        {theme === THEME.DARK ? (
          <img src={sunIcon} alt="sun" className="w-[20px]" />
        ) : (
          <img src={moonIcon} alt="moon" className="w-[20px]" />
        )}
      </Button>
    </div>
  );
}
