import { ReactNode } from 'react';

interface ColumnProps {
  size: number;
  collapse?: number;
  children?: ReactNode;
  className?: string;
}

interface ContainerProps {
  children?: ReactNode;
  className?: string;
}

export const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`flex ${className}`}>{children}</div>
);

export const Grid = ({ children, className = '' }: ContainerProps) => (
  <div className={className}>{children}</div>
);

export const Row = ({ children, className = '' }: ContainerProps) => (
  <div className={`flex flex-wrap ${className}`}>{children}</div>
);

export const PageRow = ({ children, className = '' }: ContainerProps) => (
  <div className={`flex flex-wrap mt-24 tablet:mt-52 ${className}`}>{children}</div>
);

export const Col = ({ size, children, className = '' }: ColumnProps) => (
  <div style={{ flex: size }} className={className}>
    {children}
  </div>
);
