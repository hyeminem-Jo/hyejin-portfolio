import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';
import styled from '@emotion/styled';
import { HEADER_HEIGHT, HEADER_HEIGHT_MD, HEADER_HEIGHT_SM } from '@/app/_constant/commonSize';

export const Visual = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100dvh - ${HEADER_HEIGHT}px);
  padding: 0 30px;

  @media (max-width: ${BREAKPOINT}px) {
    height: calc(100dvh - ${HEADER_HEIGHT_MD}px);
    padding: 0 30px 100px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    height: calc(100dvh - ${HEADER_HEIGHT_SM}px);
    padding: 0 20px 100px;
  }

  &.mobile .logoWrap #f,
  &.mobile .logoWrap #e,
  &.mobile .logoWrap #h,
  &.mobile .logoWrap #j {
    transform: none !important;
  }
`;

export const VisualText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  @media (max-width: ${BREAKPOINT}px) {
    justify-content: center !important;
  }
`;

export const MainTextList = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
  font-size: 60px;
  line-height: 1;
  width: 100%;

  @media (max-width: ${BREAKPOINT}px) {
    /* margin-top: 60px; */
    line-height: 0.8;
    align-items: flex-start;
  }
`;

export const MainTextInner = styled.span`
  overflow: hidden;

  &:nth-of-type(1) i {
    animation-delay: 0.3s;
  }
  &:nth-of-type(2) i {
    animation-delay: 0.5s;
  }
`;

export const MainText = styled.h3`
  display: inline-block;
  transition: transform 0.5s linear;
  font-style: normal;
  opacity: 0;
  font-family: var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 600;
  letter-spacing: -0.02em;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  animation: slideUp 0.7s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 45px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    font-size: 42px;
    line-height: 0.8;
  }
`;

export const SubText = styled.h4`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-right: auto;
  padding-bottom: 20px;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #555;
  opacity: 0;
  transform: translateX(-50px);
  font-family: var(--font-poppins), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  @media (max-width: ${BREAKPOINT}px) {
    flex: initial;
    justify-content: flex-start;
    line-height: 1.5;
    margin-top: 40px;
    margin-bottom: 100px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    margin-top: 50px;
    margin-bottom: 0;
  }
`;
