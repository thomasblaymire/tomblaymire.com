import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '@/components/error-fallback';

interface BaseAppProps {
  toggleTheme?: string | boolean | (() => void);
  theme: string | boolean | (() => void);
}

export function BaseApp({ toggleTheme, theme }: BaseAppProps): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <main>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Router />
        </ErrorBoundary>
      </main>
    </ErrorBoundary>
  );
}
