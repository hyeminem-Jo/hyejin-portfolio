import styled from '@emotion/styled';

interface Props {
  $color: string;
}

export const SideProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 120px 0 130px;
`;

export const SideProjectsInner = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  padding: 50px 80px;
  z-index: 10;
  background-color: #fff;
  border-radius: 20px;
`;

export const SideProjectsInnerBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 70px;
  height: 100%;
  border: 1px solid;
`;
