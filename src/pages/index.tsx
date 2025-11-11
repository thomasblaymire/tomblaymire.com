import { ErrorFallback } from '@/components/error-fallback';
import { Header } from '@/components/header';
import { Router } from '@/routes';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

interface BaseAppProps {
  toggleTheme: () => void;
  theme: string;
}

export function BaseApp({ toggleTheme, theme }: BaseAppProps): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <main className="flex justify-center min-h-screen top-0 right-0 bottom-0 left-0 mx-0 my-0 px-50 bg-black tablet:px-5 tablet:border-l tablet:border-r tablet:border-[hsla(0,0%,100%,0.1)] laptopL:mx-60 laptopL:px-40">
        <div
          className={`w-full ${theme === 'light' ? 'bg-white' : 'bg-[rgb(24,24,27)]'}`}
        >
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
