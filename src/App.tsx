import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { Loading } from '@/components/loading';
import { darkTheme, GlobalStyle, lightTheme } from '@/helpers/style';
import { useLightMode } from '@/hooks/useLightMode';
import { BaseApp } from '@/pages';

enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

function App() {
  const [theme, toggleTheme] = useLightMode();
  const themePreference = theme === THEME.LIGHT ? lightTheme : darkTheme;

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={themePreference}>
        <GlobalStyle />
        <BaseApp toggleTheme={toggleTheme} theme={theme} />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
