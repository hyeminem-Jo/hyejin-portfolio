import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_constant/breakpoint';

export const About = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100dvh;

  @media (max-width: ${BREAKPOINT}px) {
    height: auto;
  }
`;

export const AboutInner = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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
    padding: 25px 20px 30px;
  }
`;

export const AboutInnerBoxTitleInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* height: 270px; */

  @media (max-width: ${BREAKPOINT}px) {
    height: auto;
  }
`;

export const AboutInnerBoxMiddle = styled.strong`
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  text-align: center;
  margin-bottom: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 24px;
  }
`;

export const AboutInnerBoxDesc = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: #222;
  text-align: center;

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 20px;
    font-size: 16px;
  }
`;

export const AboutInnerBoxDescBold = styled.strong`
  display: block;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 18px;
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

  button {
    position: relative;
    margin: 120px 0 0 auto;
  }

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 40px;
    button {
      margin: 160px auto 0;
    }
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
