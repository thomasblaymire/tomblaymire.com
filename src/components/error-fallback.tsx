import styled from 'styled-components';

import { ErrorMessage } from '@/components/error-message';

interface FallbackError {
  error: Error;
}

const StyledCustomError = styled.div`
  height: '100%';
  display: 'flex';
  flex-direction: 'column';
  justify-content: flex;
  align-items: center;
`;

export function ErrorFallback({ error }: FallbackError): JSX.Element {
  return (
    <StyledCustomError>
      <ErrorMessage error={error} />
    </StyledCustomError>
  );
}
