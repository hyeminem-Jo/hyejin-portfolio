import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_constant/breakpoint';

export interface AppLayoutContainerProps {
  $isWorkDetailPage?: boolean;
}

export const AppLayoutContainer = styled.div<AppLayoutContainerProps>`
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  background-color: whitesmoke;
  color: #222;
  padding-top: ${({ $isWorkDetailPage }) => ($isWorkDetailPage ? '0' : '70px')};

  @media (max-width: ${BREAKPOINT}px) {
    padding-top: ${({ $isWorkDetailPage }) => ($isWorkDetailPage ? '0' : '65px')};
  }
`;
