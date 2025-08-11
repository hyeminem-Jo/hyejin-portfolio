import React, { useEffect, useState } from 'react';
import { Global, css } from '@emotion/react';
import * as S from './styled';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  closeOnOverlayClick = true,
}: ModalProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = `-${currentScrollY}px`;
      document.body.style.width = '100%';

      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);

      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';

      if (scrollY > 0) {
        window.scrollTo(0, scrollY);
      }
    };
  }, [isOpen, onClose, scrollY]);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (closeOnOverlayClick && event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <S.Overlay onClick={handleOverlayClick}>
      <S.ModalContainer $size={size}>
        <S.Header>
          {title && <S.Title>{title}</S.Title>}
          {showCloseButton && (
            <S.CloseButton onClick={onClose} aria-label='Close modal'>
              <S.CloseIcon>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <line x1='18' y1='6' x2='6' y2='18'></line>
                  <line x1='6' y1='6' x2='18' y2='18'></line>
                </svg>
              </S.CloseIcon>
            </S.CloseButton>
          )}
        </S.Header>
        <S.Content>{children}</S.Content>
      </S.ModalContainer>
    </S.Overlay>
  );
};

export default Modal;
