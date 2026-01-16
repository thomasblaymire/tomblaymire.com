import { cn } from '../helpers/cn';

export type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'base' | 'link';
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
  'aria-expanded'?: boolean;
  'aria-controls'?: string;
  'aria-haspopup'?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
  type?: 'button' | 'submit' | 'reset';
};

export const Button = ({
  onClick,
  children,
  color = 'primary',
  disabled,
  className,
  'aria-label': ariaLabel,
  'aria-expanded': ariaExpanded,
  'aria-controls': ariaControls,
  'aria-haspopup': ariaHasPopup,
  type = 'button',
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-expanded={ariaExpanded}
      aria-controls={ariaControls}
      aria-haspopup={ariaHasPopup}
      className={cn(
        // Base styles
        'cursor-pointer border-none rounded-[50px] font-medium transition-all duration-200',
        // Color variants
        color === 'primary' && 'text-white',
        color === 'secondary' &&
          'text-black bg-gradient-to-r from-[#c7c7d2] to-[#bcbaba]',
        color === 'base' &&
          'bg-[rgba(39,39,42,0.9)] border border-solid border-[hsla(0,0%,100%,0.1)] flex',
        color === 'link' && 'bg-transparent',
        // Disabled state
        disabled && 'cursor-not-allowed bg-[#d4d4d4] text-[#f5f5f5]',
        className,
      )}
    >
      {children}
    </button>
  );
};
