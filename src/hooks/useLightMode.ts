import { useEffect, useState } from 'react';

import { THEME } from '@/helpers/theme';

const MODES = {
  DARK: THEME.DARK,
  LIGHT: THEME.LIGHT,
};

export const useLightMode = () => {
  const [theme, setTheme] = useState<THEME>(MODES.DARK);
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode: THEME) => {
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
    const localTheme = window.localStorage.getItem('theme') as THEME;
    if (localTheme && (localTheme === THEME.DARK || localTheme === THEME.LIGHT)) {
      setMode(localTheme);
    } else {
      // Default to dark mode
      setMode(MODES.DARK);
    }
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted] as const;
};
