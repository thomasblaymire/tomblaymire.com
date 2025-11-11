import { Suspense } from 'react';

import { Loading } from '@/components/loading';
import { useLightMode } from '@/hooks/useLightMode';
import { BaseApp } from '@/pages';

function App() {
  const [theme, toggleTheme] = useLightMode();

  return (
    <Suspense fallback={<Loading />}>
      <BaseApp toggleTheme={toggleTheme} theme={theme} />
    </Suspense>
  );
}

export default App;
