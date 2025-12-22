import styled from '@emotion/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';
import Link from 'next/link';
import Image from 'next/image';

export const SideProjects = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px 0 110px;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 10px 0 150px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    padding: 0 0 30px;
  }
`;

export const SideProjectsInner = styled.ul`
  position: relative;
  display: flex;
  overflow: visible;
  margin-top: 40px;
  transition: none !important;
  gap: 70px;
  will-change: transform;
  left: -50px;

  @media (max-width: ${BREAKPOINT}px) {
    position: static;
    left: 0;
    flex-wrap: wrap;
    gap: 30px;
    margin-top: 30px;
    overflow: visible;
    margin-left: 0;
    padding: 0 30px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    padding: 0 20px;
  }
`;

export const SideProjectsInnerBox = styled.li`
  flex: 0 0 800px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.05);
  transition: none !important;
  overflow: hidden;

  @media (max-width: ${BREAKPOINT}px) {
    flex: initial;
    flex-direction: column;
    width: calc((100% - 30px) / 2);
    height: auto;
    aspect-ratio: 1/1;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    width: 100%;
    border-radius: 10px;
    aspect-ratio: initial;
  }
`;

export const SideProjectsImageWrap = styled.div`
  flex: 1.5;
  position: relative;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    bottom: 0 !important;
  }

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    height: auto;

    img {
      aspect-ratio: 2/1;
      object-position: center;
    }
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    /* flex: initial;
    aspect-ratio: initial;
    height: 180px; */
  }
`;

export const SideProjectsInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 0;
    padding: 20px;
    width: 100%;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
  }
`;

export const SideProjectsInfoTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 10px;
  }
`;

export const SideProjectsButtons = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 5px;

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 25px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    margin-top: 15px;
  }
`;

export const SideProjectsTitle = styled.h4`
  font-size: 24px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;
  }

  @media (max-width: ${BREAKPOINT_SM}px) {
    font-size: 19px;
  }
`;

export const SideProjectsDesc = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: #555;
  line-height: 1.6;
  white-space: pre-line;

  @media (max-width: ${BREAKPOINT_SM}px) {
    white-space: initial;
  }
`;

export const SideProjectsSkills = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 400;
  color: #555;

  @media (max-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const SideProjectsSkillsItem = styled.li`
  padding: 5px 10px;
  font-weight: 500;
  letter-spacing: -0.02em;
  border-radius: 8px;
  background-color: #e5e5e5;
  color: #222;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

const baseButtonLinkStyles = `
  display: inline-block;
  padding: 7px 18px;
  font-weight: 500;
  letter-spacing: -0.02em;
  border-radius: 50px;
  background-color: #222;
  color: #fff;
  border: 1px solid #222;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #fff;
    color: #222;
    border: 1px solid #222;
  }
`;

export const SideProjectsSkillsLink = styled(Link)`
  ${baseButtonLinkStyles}
`;

export const SideProjectsSkillsButton = styled.button`
  ${baseButtonLinkStyles}
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalImageWrap = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  @media (max-width: ${BREAKPOINT}px) {
    height: 200px;
  }
`;

export const ModalImage = styled(Image)`
  width: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const ModalSectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 60px 80px;
`;

export const ModalSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ModalSectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin: 0;
  border-bottom: 2px solid #f0f0f0;
  padding-bottom: 8px;

  /* @media (max-width: ${BREAKPOINT}px) {
    font-size: 16px;
  } */
`;

export const ModalDescription = styled.p`
  font-size: 17px;
  line-height: 1.6;
  font-weight: 500;
  color: #222;
  margin: 0;

  /* @media (max-width: ${BREAKPOINT}px) {
    font-size: 14px;
  } */
`;

export const ModalMeaningfulPoint = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #222;
  margin: 0;
  white-space: pre-line;
`;

export const ModalFuncList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
`;

export const ModalFuncListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ModalFuncListItemText = styled.span`
  position: relative;
  font-size: 16px;
  line-height: 1.6;
  color: #222;
  margin: 0;

  &::before {
    content: '•';
    font-weight: bold;
    margin-right: 8px;
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
`;

export const ModalLinks = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
  }
`;
