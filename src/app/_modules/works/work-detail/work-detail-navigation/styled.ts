import styled from '@emotion/styled';
import Link from 'next/link';
import { BREAKPOINT } from '@/app/_constant/breakpoint';
import { INNER_WIDTH } from '@/app/_constant/commonSize';

export const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: ${INNER_WIDTH}px;
  margin: 0 auto;
  padding: 120px 0;
`;

export const NavigationItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  border-top: 1px solid #bbb;
  padding: 20px;
  transition: all 0.3s ease;

  &:last-child {
    border-bottom: 1px solid #bbb;
  }

  &:hover {
    h4 {
      color: #ff8200;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: ${BREAKPOINT}px) {
    min-width: 100%;
    max-width: 100%;
    padding: 15px;
    aspect-ratio: initial;
  }
`;

export const NavigationTitle = styled.h4`
  font-size: 19px;
  font-weight: 600;
  color: #222;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: all 0.3s ease;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 15px;
  }
`;

export const NavigationArrow = styled.span`
  font-size: 20px;
  color: #444;
  font-weight: bold;
`;

export const NavigationProjectDate = styled.span`
  display: block;
  font-size: 14px;
  color: #666;
  margin-left: auto;
`;
