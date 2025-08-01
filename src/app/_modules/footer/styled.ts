import styled from '@emotion/styled';
import { Title } from '../common/title/styled';

export const Footer = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0;
  background-color: #f5f5f5;
  min-height: 100dvh;
  position: relative;
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
  width: 1200px;
  height: 70%;
  margin: 0 auto;
  padding: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(25px);
  z-index: 10;
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 30px;
`;

export const FooterTextWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const FooterInnerTextTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  color: #000;
`;

export const FooterInnerTextDesc = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  color: #444;
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
`;

export const FooterButtons = styled.div`
  display: flex;
  gap: 20px;
`;
