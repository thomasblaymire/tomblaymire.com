import { ReactChildren, ReactNode } from 'react';
import styled from 'styled-components';

interface ColumnProps {
  size: number;
  collapse?: number;
  children: ReactNode | ReactChildren;
}

interface MediaOptions {
  xs: (styles: number) => string;
  sm: (styles: number) => string;
  md: (styles: number) => string;
  lg: (styles: number) => string;
  xl: (styles: number) => string;
}

// type Collapse = [key: string];

const media: MediaOptions = {
  xs: (styles: number) => `
    @media only screen and (max-width: 0px) {
      ${styles}
    }
  `,
  sm: (styles: number) => `
    @media only screen and (max-width: 576px) {
      ${styles}
    }
  `,
  md: (styles: number) => `
    @media only screen and (max-width: 768px) {
      ${styles}
    }
  `,
  lg: (styles: number) => `
    @media only screen and (max-width: 992px) {
      ${styles}
    }
  `,
  xl: (styles: number) => `
    @media only screen and (max-width: 1200px) {
      ${styles}
    }`,
};

export const Container = styled.div`
  display: flex;
`;

export const Grid = styled.div``;

export const Row = styled.div`
  display: flex;
`;

export const Col = styled.div<ColumnProps>`
  flex: ${({ size }) => size};
  ${({ collapse }) =>
    collapse &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    media[collapse](`
    display: none;
  `)}
`;
