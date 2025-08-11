import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_constant/breakpoint';

interface ModalContainerProps {
  $size: 'sm' | 'md' | 'lg';
}

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return '400px';
      case 'md':
        return '600px';
      case 'lg':
        return '800px';
      default:
        return '600px';
    }
  }};
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  animation: modalSlideIn 0.3s ease-out;

  @keyframes modalSlideIn {
    from {
      opacity: 0;
      transform: translateY(-20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: ${BREAKPOINT}px) {
    max-width: 95vw;
    margin: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #e5e5e5;
  background-color: #fafafa;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 16px 20px;
  }
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #222;
  line-height: 1.4;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  color: #666;

  &:hover {
    background-color: #f0f0f0;
    color: #222;
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`;

export const CloseIcon = styled.span`
  font-size: 24px;
  font-weight: 300;
  line-height: 1;
`;

export const Content = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 20px;
  }
`;
