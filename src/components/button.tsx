import styled, { css } from 'styled-components';

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

const COLOR = {
  primary: css`
    color: #fff;
    //background: linear-gradient(#3f3cfe, #e943d5);
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
  base: css`
    background: rgba(39, 39, 42, 0.9);
    border: solid 1px hsla(0, 0%, 100%, 0.1);
    display: flex;
  `,
  link: css`
    background: transparent;
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;
  ${({ color }) => color && COLOR[color]}
  ${({ disabled }) => disabled && DISABLED}
`;

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'base' | 'link';
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  onClick,
  children,
  color = 'primary',
  disabled,
  className,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      color={color}
      disabled={disabled}
      className={className}
    >
      {children}
    </StyledButton>
  );
};
