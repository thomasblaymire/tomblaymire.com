import { darkTheme, GlobalStyle, lightTheme } from 'helpers/style';
import { useLightMode } from 'hooks/useLightMode';
import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

function App() {
  const [theme, toggleTheme] = useLightMode();
  const themePreference = theme === THEME.LIGHT ? lightTheme : darkTheme;
  const props = { toggleTheme, theme };

  return (
    <Suspense fallback={<FullPageSpinner />}>
      <ThemeProvider theme={themePreference}>
        <GlobalStyle />
        <App {...props} />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
