import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { ErrorFallback } from '@/components/error-fallback';
import { Header } from '@/components/header';
import { device } from '@/helpers/device';
import { Router } from '@/routes';

interface BaseAppProps {
  toggleTheme: () => void;
  theme: string;
}

const StyledWrapper = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-left: 0;
  margin-right: 0;
  padding: 0 2rem;
  border-left: solid 1px hsla(0, 0%, 100%, 0.1);
  border-right: solid 1px hsla(0, 0%, 100%, 0.1);
  background: rgb(24 24 27/1);

  @media ${device.tablet} {
    margin: 0 5rem;
    padding: 0 5rem;
  }

  @media ${device.laptopL} {
    margin: 0 15rem;
    padding: 0 10rem;
  }
`;

const StyledInner = styled.div`
  width: 100%;
`;

export function BaseApp({ toggleTheme, theme }: BaseAppProps): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StyledWrapper>
        <StyledInner>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BrowserRouter>
              <Header toggleTheme={toggleTheme} theme={theme} />
              <Router />
            </BrowserRouter>
          </ErrorBoundary>
        </StyledInner>
      </StyledWrapper>
    </ErrorBoundary>
  );
}
