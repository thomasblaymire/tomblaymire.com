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
      position: absolute;
      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
      text-align: center;
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
