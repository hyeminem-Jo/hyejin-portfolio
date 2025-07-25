import styled from '@emotion/styled';

export const Content1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100dvh - 80px);
  padding: 0 30px;
`;

export const Content1Inner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  height: 60dvh;
  border-radius: 10px;
  background-color: #f0f0f0;
  padding: 30px 80px;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(25px);
`;

export const Content1InnerBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const Content1InnerBoxTitle = styled.div`
  font-size: 60px;
  font-weight: 700;
`;

export const Content1InnerBoxMiddle = styled.strong`
  margin-top: 120px;
  font-size: 30px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  font-style: italic;
`;

export const Content1InnerBoxDesc = styled.p`
  margin-top: 35px;
  font-size: 22px;
  line-height: 1.5;
  color: #222;
`;

export const Content1InnerBoxText = styled.div`
  font-size: 16px;
`;

export const Content1Image = styled.div`
  height: 100%;
  aspect-ratio: 1/1.2;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  img {
    object-fit: cover;
  }
`;

export const Content1TextAni = styled.div`
  margin-top: 60px;
  color: #444;
`;

export const Content1TextAniList = styled.ul`
  position: relative;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Content1TextAniItem = styled.li`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 65px;
  letter-spacing: -0.05em;
  transform: translateX(30px);
  opacity: 0;
  list-style: none;
  color: chocolate;
`;
