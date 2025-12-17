import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';

interface LogoImageWrapProps {
  $isVisual?: boolean;
}

export const LogoWrap = styled.div<LogoImageWrapProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  gap: 2px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  @media (max-width: ${BREAKPOINT}px) {
    ${({ $isVisual }) =>
      $isVisual &&
      css`
        flex-direction: column;
      `}
  }
`;

export const LogoGroup = styled.div<LogoImageWrapProps>`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;
  gap: 2px;

  ${({ $isVisual }) =>
    $isVisual &&
    css`
      width: 100%;
      @media (max-width: ${BREAKPOINT}px) {
        &:nth-of-type(1) {
          justify-content: flex-start;
        }
        &:nth-of-type(2) {
          justify-content: flex-end;
        }
      }
    `}
`;

export const LogoImageWrap = styled.span<LogoImageWrapProps>`
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex: 1;
  opacity: 1;
  transform: translateY(0);

  ${({ $isVisual }) =>
    $isVisual &&
    css`
      opacity: 0;
      transform: translateY(20px);

      @media (max-width: ${BREAKPOINT}px) {
        flex: initial;
        width: 33.33333%;
      }

      @media (max-width: ${BREAKPOINT_SM}px) {
        flex: initial;
        width: 50%;
      }
    `}
`;
