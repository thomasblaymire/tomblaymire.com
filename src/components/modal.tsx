import React from 'react';
import styled from 'styled-components';

import close from '@/assets/icons/close.svg';

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
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
`;

const StyledModalContainer = styled.div<StyledModalProps>`
  display: ${({ isActive }) => (isActive ? `flex` : `none`)};
`;

const StyledModal = styled.div`
  z-index: 100;
  background: rgb(24 24 27/1);
  border-radius: 1.5rem;
  position: relative;
  margin: 1.75rem auto;
  padding: 2rem;
`;

const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  font-size: 17px;
  line-height: 34px;
  font-weight: 700;
`;

const StyledClose = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1;
  color: ${({ theme }) => theme.colors.textColor};
  background: none;
  opacity: 0.3;
  cursor: pointer;
  border: none;
  height: 24px;
  width: 24px;
  img {
    color: rgb(161 161 170/1);
    width: 2rem;
    height: 2rem;
    display: block;
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
}: ModalProps): JSX.Element => (
  <StyledModalContainer isActive={isActive}>
    <StyledOverlay />
    <StyledModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
      <StyledModal className={className}>
        <StyledModalHeader>
          {title ? <h3>{title}</h3> : null}
          <StyledClose data-dismiss="modal" aria-label="Close" onClick={handleClose}>
            <img src={close} alt="Close" />
          </StyledClose>
        </StyledModalHeader>
        <div>{children}</div>
      </StyledModal>
    </StyledModalWrapper>
  </StyledModalContainer>
);
