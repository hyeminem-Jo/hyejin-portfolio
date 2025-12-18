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

  @media (max-width: ${BREAKPOINT_SM}px) {
    min-height: auto;
    padding-bottom: 120px;
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
  margin: 0 auto;
  padding: 75px 80px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(25px);
  z-index: 10;

  @media (max-width: ${BREAKPOINT}px) {
    width: calc(100% - 60px);
    padding: 60px 60px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    position: static;
    top: auto;
    left: auto;
    transform: none;
    /* top: 30%;
    transform: translate(-50%, -30%); */
    gap: 40px;
    width: calc(100% - 40px);
    padding: 30px 15px;
  }
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 50px;

  @media (max-width: ${BREAKPOINT_SM}px) {
  }
`;

export const StyledTitle = styled(Title)`
  text-align: left;

  @media (max-width: ${BREAKPOINT_SM}px) {
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

export const FooterContentWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 100px;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 50px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const FooterContentRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FooterContentComment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  height: 100%;
  font-size: 22px;
  line-height: 1.5;
  color: #555;

  @media (max-width: ${BREAKPOINT_SM}px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const FooterForm = styled.form`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  @media (max-width: ${BREAKPOINT_SM}px) {
    width: 100%;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const ErrorMessage = styled.span`
  color: #ff8200;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
`;
