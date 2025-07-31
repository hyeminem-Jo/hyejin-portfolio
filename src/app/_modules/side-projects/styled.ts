import styled from '@emotion/styled';

export const SideProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 120px 0 130px;
  /* background-color: #555; */
`;

export const SideProjectsInner = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  perspective: 900px;
`;

export const SideProjectsInnerBox = styled.li`
  position: -webkit-sticky;
  position: sticky;
  top: 130px;
  filter: brightness(1);
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 50px 80px;
  z-index: 10;
  background-color: #fff;
  border-radius: 20px;
  height: 350px;
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.05);
`;

export const SideProjectsImageWrap = styled.div`
  flex: 1;
  position: relative;
  aspect-ratio: 1.6/1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    bottom: 0 !important;
  }
`;

export const SideProjectsInfo = styled.div`
  flex: 5;
`;

export const SideProjectsTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
`;

export const SideProjectsDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #555;
`;

export const SideProjectsSkills = styled.ul`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  color: #555;

  li {
    background-color: #f5f5f5;
    padding: 5px 10px;
  }
`;
