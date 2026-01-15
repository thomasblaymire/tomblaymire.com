import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { Loading } from '@/components/loading';
import { useLightMode } from '@/hooks/useLightMode';
import { BaseApp } from '@/pages';

function App() {
  const [theme, toggleTheme] = useLightMode();

  return (
    <HelmetProvider>
      <Suspense fallback={<Loading />}>
        <BaseApp toggleTheme={toggleTheme} theme={theme} />
      </Suspense>
    </HelmetProvider>
  );
}

export default App;
