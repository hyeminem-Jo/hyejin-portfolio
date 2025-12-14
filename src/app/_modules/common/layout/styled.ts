import styled from '@emotion/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';
import { HEADER_HEIGHT, HEADER_HEIGHT_MD, HEADER_HEIGHT_SM } from '@/app/_constant/commonSize';

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
  padding-top: ${({ $isWorkDetailPage }) => ($isWorkDetailPage ? '0' : `${HEADER_HEIGHT}px`)};

  @media (max-width: ${BREAKPOINT}px) {
    padding-top: ${({ $isWorkDetailPage }) => ($isWorkDetailPage ? '0' : `${HEADER_HEIGHT_MD}px`)};
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    padding-top: ${({ $isWorkDetailPage }) => ($isWorkDetailPage ? '0' : `${HEADER_HEIGHT_SM}px`)};
  }
`;
