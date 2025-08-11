import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_constant/breakpoint';

export const SideProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 120px 0 110px;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 0 100px;
  }
`;

export const SideProjectsInner = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  perspective: 1200px;
  transform-style: preserve-3d; /* 3D 변환을 위한 속성 추가 */
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
  cursor: pointer;
  transition: box-shadow 0.3s ease; /* transform transition 제거 */
  transform-style: preserve-3d; /* 3D 변환을 위한 속성 추가 */
  backface-visibility: hidden; /* 3D 변환 최적화 */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 -15px 20px rgba(0, 0, 0, 0.1);
  }
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

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ModalImageWrap = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${BREAKPOINT}px) {
    height: 200px;
  }
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ModalSectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #222;
  margin: 0;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 8px;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  }
`;

export const ModalDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin: 0;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 14px;
  }
`;

export const ModalSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SkillTag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e0e0e0;
  transition: all 0.2s ease;

  &:hover {
    background-color: #e0e0e0;
    transform: translateY(-1px);
  }
`;

export const ModalLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
  }
`;

export const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #222;
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;
  border: 1px solid #222;

  &:hover {
    background-color: #fff;
    color: #222;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }

  @media (max-width: ${BREAKPOINT}px) {
    padding: 12px 16px;
    font-size: 13px;
  }
`;
