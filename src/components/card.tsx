import { ReactElement } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  padding: 2.5rem;
  border-width: 1px;
  border-radius: 1rem;
  border-color: rgba(63, 63, 70, 0.4);

  h2 {
    color: rgb(244 244 245 / 1);
    font-weight: 600;
    line-height: 1.5rem;
    font-size: 1.5rem;
    display: flex;
  }

  p {
    color: rgb(161 161 170 / 1);
    line-height: 2.2rem;
    font-size: 1.4rem;
    display: flex;
    margin-top: 1rem;
  }
`;

interface CardProps {
  children: ReactElement;
}

export function Card({ children }: CardProps) {
  return <StyledCard>{children}</StyledCard>;
}