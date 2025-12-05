import styled from '@emotion/styled';

interface CursorProps {
  $isHovering: boolean;
  $isClicking: boolean;
}

interface CursorSvgProps {
  $isHovering: boolean;
  $isClicking: boolean;
}

export const Cursor = styled.div<CursorProps>`
  position: fixed;
  width: 36px;
  height: 36px;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease-out;
  transform: translate(-6px, -6px)
    scale(
      ${({ $isHovering, $isClicking }) => {
        const baseScale = $isHovering ? 1.2 : 1;
        return $isClicking ? baseScale * 0.8 : baseScale;
      }}
    );

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const CursorSvg = styled.svg<CursorSvgProps>`
  width: 100%;
  height: 100%;
`;

export const CursorPath = styled.path<CursorSvgProps>`
  fill: ${({ $isClicking }) => ($isClicking ? '#ff8200' : 'chocolate')};
  transition: fill 0.15s ease-out;
`;
