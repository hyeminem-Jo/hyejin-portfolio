import styled from '@emotion/styled';
import { Title } from '../common/title/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';
import { INNER_WIDTH } from '@/app/_constant/commonSize';

export const Footer = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0;
  background-color: #f5f5f5;
  min-height: 100dvh;
  position: relative;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0;
    min-height: 90dvh;
  }
`;

export const FooterInner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 60px;
  width: ${INNER_WIDTH}px;
  height: 70%;
  margin: 0 auto;
  padding: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(25px);
  z-index: 10;

  @media (max-width: ${BREAKPOINT}px) {
    width: calc(100% - 40px);
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    top: 30%;
    transform: translate(-50%, -30%);
    gap: 40px;
  }
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media (max-width: ${BREAKPOINT_SM}px) {
    /* gap: 15px; */
  }
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 30px;

  @media (max-width: ${BREAKPOINT_SM}px) {
    margin-bottom: 20px;
  }
`;

export const FooterTextWrapList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const FooterTextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media (max-width: ${BREAKPOINT_SM}px) {
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }
`;

export const FooterInnerTextTitle = styled.h3`
  margin-bottom: 10px;
  font-size: 25px;
  font-weight: 600;
  color: #000;

  @media (max-width: ${BREAKPOINT_SM}px) {
    font-size: 20px;
  }
`;

export const FooterInnerTextDesc = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #555;

  @media (max-width: ${BREAKPOINT_SM}px) {
    font-size: 15px;
    text-align: center;
    color: #777;
  }
`;

export const FooterBottomText = styled.strong`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 40px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  background-color: #fff;

  @media (max-width: ${BREAKPOINT_SM}px) {
    justify-content: center;
  }
`;

export const FooterButtons = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${BREAKPOINT_SM}px) {
    gap: 10px;
  }
`;
