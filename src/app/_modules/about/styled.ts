import styled from '@emotion/styled';

export const About = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100dvh;
`;

export const AboutInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 70px;
  height: 65dvh;
  border-radius: 20px;
  padding: 50px 80px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(25px);
`;

export const AboutInnerBoxTitleInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
`;

export const AboutInnerBoxMiddle = styled.strong`
  font-size: 28px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  font-style: italic;
  color: chocolate;
`;

export const AboutInnerBoxDesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  color: #222;
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
`;

export const AboutTextAni = styled.div`
  margin-top: 80px;
  color: #444;

  button {
    position: relative;
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
`;
