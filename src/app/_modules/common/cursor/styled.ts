import styled from '@emotion/styled';

interface CursorProps {
  $isHovering: boolean;
}

export const Cursor = styled.div<CursorProps>`
  position: fixed;
  width: 36px;
  height: 36px;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease-out;
  transform: translate(-6px, -6px) scale(${({ $isHovering }) => ($isHovering ? 1.3 : 1)});
  mix-blend-mode: difference;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const CursorSvg = styled.svg<CursorProps>`
  width: 100%;
  height: 100%;
`;
