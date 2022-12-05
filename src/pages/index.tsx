import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import { ErrorFallback } from '@/components/error-fallback';
import { Header } from '@/components/header';
import { Router } from '@/routes';

const StyledWrapper = styled.main`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin-left: 15rem;
  margin-right: 15rem;
  padding-left: 5rem;
  padding-right: 5rem;
  border-left: solid 0.1px hsla(0, 0%, 100%, 0.1);
  border-right: solid 0.1px hsla(0, 0%, 100%, 0.1);
  background: ${({ theme }) => theme.colors.tertiary};
`;

const StyledInner = styled.div`
  width: 100%;
`;

export function BaseApp(): JSX.Element {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <StyledWrapper>
        <StyledInner>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <BrowserRouter>
              <Header />
              <Router />
            </BrowserRouter>
          </ErrorBoundary>
        </StyledInner>
      </StyledWrapper>
    </ErrorBoundary>
  );
}
