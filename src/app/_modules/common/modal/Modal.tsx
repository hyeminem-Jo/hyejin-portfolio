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

      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);

      // 스크롤 위치 복원
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
    <>
      <Global
        styles={css`
          body {
            position: fixed;
            top: -${scrollY}px;
            width: 100%;
            overflow: hidden;
          }
        `}
      />
      <S.Overlay onClick={handleOverlayClick}>
        <S.ModalContainer $size={size}>
          <S.Header>
            {title && <S.Title>{title}</S.Title>}
            {showCloseButton && (
              <S.CloseButton onClick={onClose} aria-label='Close modal'>
                <S.CloseIcon>×</S.CloseIcon>
              </S.CloseButton>
            )}
          </S.Header>
          <S.Content>{children}</S.Content>
        </S.ModalContainer>
      </S.Overlay>
    </>
  );
};

export default Modal;
