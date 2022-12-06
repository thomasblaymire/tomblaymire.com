import styled, { css } from 'styled-components';

const DISABLED = css`
  cursor: not-allowed;
  background: #d4d4d4;
  color: #f5f5f5;
`;

const COLOR = {
  primary: css`
    color: #fff;
    background: linear-gradient(#3f3cfe, #e943d5);
  `,
  secondary: css`
    color: #000;
    background: linear-gradient(#c7c7d2, #bcbaba);
  `,
};

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  font-weight: 500;
  outline: none;
  transition: all 0.2s;

  ${(props) => props.color && COLOR[props.color]}
  ${(props) => props.disabled && DISABLED}
`;

export type ButtonProps = {
  onClick?: () => void;
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
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} color={color} disabled={disabled}>
      {children}
    </StyledButton>
  );
};
