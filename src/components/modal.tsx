import { useCallback, useEffect, useId, useRef } from 'react';

import close from '@/assets/icons/close.svg';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

import { cn } from '../helpers/cn';

interface ModalProps {
  isActive: boolean;
  children: React.ReactNode;
  title?: string;
  className?: string;
  handleClose: () => void;
}

export const Modal = ({
  isActive,
  children,
  title,
  handleClose,
  className,
}: ModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const titleId = useId();

  // handle what happens on click outside of modal
  const handleClickOutside = () => handleClose();

  // handle what happens on escape key press
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();

      // Focus trap - keep focus within modal
      if (event.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement?.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement?.focus();
        }
      }
    },
    [handleClose],
  );

  useOnClickOutside(modalRef, handleClickOutside);

  useEffect(() => {
    if (isActive) {
      // Store the element that had focus before opening
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Focus the close button when modal opens
      setTimeout(() => closeButtonRef.current?.focus(), 0);

      // Prevent body scroll
      document.body.style.overflow = 'hidden';

      // Attach the event listener if the modal is shown
      document.addEventListener('keydown', handleKeyPress);

      return () => {
        document.removeEventListener('keydown', handleKeyPress);
        document.body.style.overflow = '';

        // Return focus to the element that triggered the modal
        previousActiveElement.current?.focus();
      };
    }
  }, [handleKeyPress, isActive]);

  if (!isActive) return <></>;

  return (
    <div className="flex" role="presentation">
      <div
        className="fixed top-0 left-0 z-[1040] w-screen h-screen opacity-50"
        aria-hidden="true"
      />
      <div
        className="fixed top-0 left-0 z-[1050] w-full h-full overflow-x-hidden overflow-y-auto outline-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-[4px] flex justify-center items-start opacity-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
      >
        <div
          className={cn(
            'z-[100] bg-[rgb(24,24,27)] rounded-[2.5rem] relative my-7 mx-auto p-12 top-12',
            'shadow-[0_0_0_0px_#fff,0_0_0_calc(1px+0px)_rgb(39_39_42/1),0_0_#0000,0_0_#0000]',
            className,
          )}
          ref={modalRef}
        >
          <div className="flex items-center justify-between w-full text-[17px] leading-[34px] font-bold [&_h2]:text-[rgb(161,161,170)] [&_h2]:font-medium [&_h2]:leading-[1.5rem] [&_h2]:text-[1.35rem]">
            {title ? <h2 id={titleId}>{title}</h2> : null}
            <button
              ref={closeButtonRef}
              type="button"
              className="flex justify-end text-[1.4rem] font-bold leading-none bg-transparent opacity-30 cursor-pointer border-none p-0 [&_img]:h-8 [&_img]:w-8 [&_img]:text-[rgb(161,161,170)] hover:opacity-60 transition-opacity"
              aria-label="Close navigation menu"
              onClick={handleClose}
            >
              <img src={close} alt="" aria-hidden="true" />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
