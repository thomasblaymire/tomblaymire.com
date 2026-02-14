import { useCallback, useEffect, useRef } from 'react';

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
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // handle what happens on click outside of modal
  const handleClickOutside = () => handleClose();

  // handle what happens on escape key press
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') handleClose();
  }, []);

  useOnClickOutside(modalRef, handleClickOutside);

  useEffect(() => {
    if (isActive) {
      // attach the event listener if the modal is shown
      document.addEventListener('keydown', handleKeyPress);
      // remove the event listener
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }
  }, [handleKeyPress, isActive]);

  return (
    <div className={cn(isActive ? 'flex' : 'none')}>
      <div className="fixed top-0 left-0 z-1040 w-screen h-screen opacity-50" />
      <div
        className="fixed top-0 left-0 z-1050 w-full h-full overflow-x-hidden overflow-y-auto outline-0 bg-[rgba(0,0,0,0.8)] backdrop-blur-xs flex justify-center items-start opacity-100"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div
          className={cn(
            'z-100 bg-[rgb(24,24,27)] rounded-[2.5rem] relative my-7 mx-auto p-12 top-12',
            'shadow-[0_0_0_0px_#fff,0_0_0_calc(1px+0px)_rgb(39_39_42/1),0_0_#0000,0_0_#0000]',
            className,
          )}
          ref={modalRef}
        >
          <div className="flex items-center justify-between w-full text-[17px] leading-[34px] font-bold [&_h2]:text-[rgb(161,161,170)] [&_h2]:font-medium [&_h2]:leading-6 [&_h2]:text-[1.35rem]">
            {title ? <h2>{title}</h2> : null}
            <button
              className="flex justify-end text-[1.4rem] font-bold leading-none bg-transparent opacity-30 cursor-pointer border-none p-0 [&_img]:h-8 [&_img]:w-8 [&_img]:text-[rgb(161,161,170)]"
              data-dismiss="modal"
              aria-label="Close"
              onClick={handleClose}
            >
              <img src={close} alt="Close" />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
