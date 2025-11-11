import { useEffect, useState } from 'react';

const MODES = {
  DARK: 'dark',
  LIGHT: 'light',
};

export const useLightMode = () => {
  const [theme, setTheme] = useState(MODES.DARK);
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode: string) => {
    window.localStorage.setItem('theme', mode);
    setTheme(mode);

    if (mode === MODES.DARK) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleTheme = () => {
    if (theme === MODES.DARK) {
      return setMode(MODES.LIGHT);
    }
    setMode(MODES.DARK);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme) {
      setMode(localTheme);
    } else {
      // Default to dark mode
      setMode(MODES.DARK);
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted] as const;
};
