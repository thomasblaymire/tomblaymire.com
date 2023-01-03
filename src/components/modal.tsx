import { useCallback, useEffect, useRef } from 'react';
import styled from 'styled-components';

import close from '@/assets/icons/close.svg';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

interface StyledModalProps {
  isActive: boolean;
}

const StyledOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  opacity: 0.5;
`;

const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: start;
  opacity: 1;
`;

const StyledModalContainer = styled.div<StyledModalProps>`
  display: ${({ isActive }) => (isActive ? `flex` : `none`)};
`;

const StyledModal = styled.div`
  z-index: 100;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 2.5rem;
  position: relative;
  margin: 1.75rem auto;
  padding: 3rem;
  top: 3rem;
  box-shadow: 0 0 0 0px #fff, 0 0 0 calc(1px + 0px) rgb(39 39 42/1), 0 0 #0000, 0 0 #0000;
`;

const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 17px;
  line-height: 34px;
  font-weight: 700;

  h2 {
    color: rgb(161 161 170/1);
    font-weight: 500;
    line-height: 1.5rem;
    font-size: 1.35rem;
  }
`;

const StyledClose = styled.button`
  display: flex;
  justify-content: flex-end;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  background: none;
  opacity: 0.3;
  cursor: pointer;
  border: none;
  padding: 0;
  img {
    height: 2rem;
    width: 2rem;
    color: rgb(161 161 170/1);
  }
`;

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
    <StyledModalContainer isActive={isActive}>
      <StyledOverlay />
      <StyledModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
        <StyledModal className={className} ref={modalRef}>
          <StyledModalHeader>
            {title ? <h2>{title}</h2> : null}
            <StyledClose data-dismiss="modal" aria-label="Close" onClick={handleClose}>
              <img src={close} alt="Close" />
            </StyledClose>
          </StyledModalHeader>
          <div>{children}</div>
        </StyledModal>
      </StyledModalWrapper>
    </StyledModalContainer>
  );
};
