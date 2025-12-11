import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { INNER_WIDTH } from '@/app/_constant/commonSize';

interface CursorCircleProps {
  $isHovering: boolean;
  $isClicking: boolean;
}

export const CursorCircle = styled.div<CursorCircleProps>`
  position: fixed;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #ff8200;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease-out, height 0.2s ease-out, background-color 0.2s ease-out;

  ${({ $isHovering, $isClicking }) =>
    $isHovering &&
    !$isClicking &&
    css`
      width: 40px;
      height: 40px;
      background-color: #ffd700;
      opacity: 0.8;
    `}

  ${({ $isHovering, $isClicking }) =>
    $isClicking &&
    !$isHovering &&
    css`
      width: 20px;
      height: 20px;
    `}

  @media (max-width: ${INNER_WIDTH}px) {
    display: none;
  }
`;
