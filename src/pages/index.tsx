import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

import { ErrorFallback } from '@/components/error-fallback';
import { Header } from '@/components/header';
import { Router } from '@/routes';

interface BaseAppProps {
  toggleTheme: () => void;
  theme: string;
}

export function BaseApp({ toggleTheme, theme }: BaseAppProps): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main
        className={`flex justify-center min-h-screen top-0 right-0 bottom-0 left-0 mx-0 my-0 px-8 tablet:mx-20 tablet:px-20 tablet:border-l tablet:border-r tablet:border-[hsla(0,0%,100%,0.1)] laptop:mx-[15rem] laptop:px-32 laptopL:mx-[32rem] laptopL:px-40 ${theme === 'light' ? 'bg-white' : 'bg-[rgb(24,24,27)]'}`}
      >
        <div className="w-full max-w-[1200px]">
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BrowserRouter>
              <Header toggleTheme={toggleTheme} theme={theme} />
              <Router />
            </BrowserRouter>
          </ErrorBoundary>
        </div>
      </main>
    </ErrorBoundary>
  );
}
