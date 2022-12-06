import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { Loading } from '@/components/loading';
import { darkTheme, GlobalStyle, lightTheme, THEME } from '@/helpers/style';
import { useLightMode } from '@/hooks/useLightMode';
import { BaseApp } from '@/pages';

function App() {
  const [theme, toggleTheme] = useLightMode();
  const themePreference = theme === THEME.LIGHT ? darkTheme : lightTheme;

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
