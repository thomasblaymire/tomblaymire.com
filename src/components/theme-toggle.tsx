import moonIcon from '@/assets/icons/moon.svg';
import sunIcon from '@/assets/icons/sun.svg';
import { Button } from '@/components/button';
import { THEME } from '@/helpers/theme';

interface ThemeToggleProps {
  toggleTheme: () => void;
  theme: string;
}

export function ThemeToggle({ toggleTheme, theme }: ThemeToggleProps) {
  const handleToggle = () => toggleTheme();
  return (
    <div className="flex justify-end items-center leading-6 pl-6 tablet:flex-1 tablet:pl-0">
      <Button
        onClick={handleToggle}
        color="base"
        className="flex bg-[rgb(239,239,239)] dark:bg-[rgba(39,39,42,0.9)] border border-[rgba(0,0,0,0.15)] dark:border-[hsla(0,0%,100%,0.1)] p-4"
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
