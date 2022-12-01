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
  };

  const toggleTheme = () => {
    if (theme === MODES.DARK) {
      return setMode(MODES.LIGHT);
    }
    setMode(MODES.DARK);
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches &&
    !localTheme
      ? setMode(MODES.LIGHT)
      : localTheme
      ? setTheme(localTheme)
      : setMode(MODES.DARK);
    setComponentMounted(true);
  }, []);

  return [theme, toggleTheme, componentMounted];
};
