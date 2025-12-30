import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_constant/breakpoint';

export const LoadingScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #ff6b35; /* 주황색 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  overflow: hidden;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  transform-origin: left bottom;

  @media (max-width: ${BREAKPOINT}px) {
    transform-origin: center bottom;
  }
`;

export const LoadingLogoWrap = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
`;

export const LoadingLogoItem = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
