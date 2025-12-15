import styled from '@emotion/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';
import { INNER_WIDTH } from '@/app/_constant/commonSize';

interface ModalContainerProps {
  $size: 'sm' | 'md' | 'lg';
}

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  position: relative;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  max-width: ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return '400px';
      case 'md':
        return '600px';
      case 'lg':
        return '1200px';
      default:
        return '600px';
    }
  }};
  width: 100%;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  animation: modalSlideIn 0.3s ease-out;
  border: 2px solid green;

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

export const ImageModalContainer = styled.div`
  position: fixed;
  max-width: 1100px;
  height: calc(100vh - 50px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  width: 100%;
  top: 50px;
  left: calc((100vw - 1100px - 20px) / 2);
  padding-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    left: 0;
    padding: 0 40px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    padding: 0;
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
  flex: 1;
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: #222;
  line-height: 1.4;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  padding: 8px;
  padding-top: 11px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  color: #666;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const Content = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 20px;
  }
`;

export const ImageContent = styled.div`
  position: relative;
  flex: 1;
`;

export const ImageContentInner = styled.div``;

export const ImageCloseButton = styled.button`
  position: fixed;
  top: 40px;
  right: calc((100vw - ${INNER_WIDTH}px - 20px) / 2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: none;
  transition: all 0.2s ease;
  color: #222;
  cursor: pointer;
  z-index: 10;
  background-color: transparent;

  svg {
    width: 40px;
    height: 40px;
    fill: #fff;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: ${BREAKPOINT}px) {
    width: 40px;
    height: 40px;
    top: 10px;
    right: 10px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
`;

// 모달 내 슬라이더 스타일
export const ModalSliderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;

  .slick-prev,
  .slick-next {
    position: fixed;
    top: 50%;
    z-index: 10;
    width: 50px;
    height: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex !important;
    align-items: center;
    justify-content: center;
    &::before {
      display: none;
    }
  }

  .slick-prev {
    left: calc((100vw - ${INNER_WIDTH}px - 20px) / 2);
  }

  .slick-next {
    right: calc((100vw - ${INNER_WIDTH}px - 20px) / 2);
  }

  .slick-arrow {
    font-size: 0;
    z-index: 20;

    @media (max-width: ${BREAKPOINT}px) {
      width: 40px;
      height: 40px;
    }
  }
`;

export const CustomArrow = styled.button`
  width: 100%;
  height: 100%;
  display: flex !important;
  align-items: center;
  justify-content: center;
  color: #fff !important;
  font-size: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 21;

  svg {
    width: 40px;
    height: 40px;
    color: #fff;
    fill: #fff;
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

export const ModalSliderImage = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  border-radius: 8px;

  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: ${BREAKPOINT}px) {
    min-height: 300px;
    padding: 15px;
  }
`;
