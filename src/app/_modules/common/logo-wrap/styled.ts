import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { BREAKPOINT } from '@/app/_constant/breakpoint';

interface LogoImageWrapProps {
  $isVisual?: boolean;
}

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const LogoImageWrap = styled.span<LogoImageWrapProps>`
  width: 24%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${({ $isVisual }) => ($isVisual ? 0 : 1)};
  transform: ${({ $isVisual }) => ($isVisual ? 'translateY(20px)' : 'translateY(0)')};

  @media (max-width: ${BREAKPOINT}px) {
    ${({ $isVisual }) =>
      $isVisual &&
      css`
        &:nth-of-type(1),
        &:nth-of-type(2) {
          position: relative;
          bottom: 90px;
        }
      `}
  }
`;
