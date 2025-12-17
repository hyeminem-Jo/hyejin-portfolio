import styled from '@emotion/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';

export const About = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100dvh;
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  @media (max-width: ${BREAKPOINT}px) {
    height: auto;
  }
`;

export const AboutInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 70px;
  border-radius: 20px;
  padding: 60px 80px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(25px);

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 60px;
    flex-direction: column;
    height: auto;
    padding: 30px 40px 20px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    margin-top: 0;
    padding: 20px 20px;
  }
`;

export const AboutInnerImage = styled.div`
  position: absolute;
  top: -20px;
  right: 10px;
  transform: rotate(-13deg);
  width: 400px;
  height: 450px;
  overflow: hidden;
  border: 10px solid #fff;
  border-bottom: none;
  background-color: #fff;
  box-shadow: 12px 14px 2px 0 rgba(0, 0, 0, 0.1);
  opacity: 0;

  img {
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINT}px) {
    top: -10px;
    width: 40%;
    height: auto;
    aspect-ratio: 8/9;

    img {
      width: 110%;
      height: calc(100% - 80px);
      object-position: center center;
      object-fit: cover;
    }
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    width: 75%;
    aspect-ratio: 5/6;
  }
`;

export const AboutInnerImageInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fff;
  opacity: 1;
`;

export const AboutInnerImageInfoItem = styled.span`
  color: #555;
  font-size: 18px;
  font-weight: 600;
`;

export const AboutInnerBoxTitleInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media (max-width: ${BREAKPOINT}px) {
    height: auto;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    gap: 20px;
    padding-top: 300px;
  }
`;

export const AboutInnerBoxDesc = styled.div`
  position: relative;
  width: 63%;
  font-size: 18px;
  line-height: 1.5;
  color: #222;

  i {
    color: #888;
  }

  @media (max-width: ${BREAKPOINT}px) {
    width: 55%;
    margin-top: 20px;
    font-size: 16px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    width: 100%;
    font-size: 14px;
  }
`;

export const AboutInnerBoxDescBold = styled.h3`
  display: block;
  margin-bottom: 40px;
  font-size: 33px;
  color: chocolate;
  font-weight: 600;
  font-family: 'Paperozi', sans-serif;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 30px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    margin-bottom: 20px;
  }
`;

export const AboutQuestionText = styled.strong`
  display: block;
  margin-top: 30px;
  font-weight: 600;
  color: #333;
  font-size: 21px;
  font-family: 'Paperozi', sans-serif;
  line-height: 1.6;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 19px;
  }
`;

export const AboutAnswerText = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 18px;
  line-height: 1.5;
  color: #333;

  strong {
    font-weight: 600;
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`;

export const AboutInnerBoxText = styled.div`
  font-size: 16px;
`;

export const AboutImage = styled.div`
  flex-shrink: 0;
  width: 350px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }

  @media (max-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const AboutTextAni = styled.div`
  margin-top: 80px;
  color: #444;

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 40px;
  }
`;

export const AboutTextAniBtns = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  position: relative;
  margin: 120px 0 0 auto;

  @media (max-width: ${BREAKPOINT}px) {
    margin: 120px auto 0;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    margin: 160px auto 0;
  }
`;

export const AboutTextAniList = styled.ul`
  position: relative;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const AboutTextAniItem = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 65px;
  letter-spacing: -0.05em;
  transform: translateX(30px);
  opacity: 0;
  list-style: none;
  color: #444;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 40px;
  }
`;
