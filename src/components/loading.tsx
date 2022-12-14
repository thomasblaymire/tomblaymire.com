import styled, { css } from 'styled-components';

import spinner from '@/assets/loading.svg';

interface LoadingProps {
  position?: string;
  width?: string;
  height?: string;
}

const StyledLoading = styled.div<LoadingProps>`
  ${({ position }) =>
    position === 'center' &&
    css`
      display: flex;
      justify-content: center;
    `}

  svg {
    color: white;
  }
`;

export const Loading = ({ position, width, height }: LoadingProps): JSX.Element => (
  <StyledLoading position={position} width={width} height={height}>
    <img src={spinner} alt="Loading..." />
  </StyledLoading>
);
