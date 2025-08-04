import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_constant/breakpoint';
import Image from 'next/image';
import Link from 'next/link';

export const Works = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 80px 0 120px;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 0 100px;
  }
`;

export const WorksInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  margin-top: 70px;
  z-index: 10;

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 60px;
  }
`;

export const WorksInnerBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const WorksCompanyList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 80px;
  }
`;

export const WorksCompanyItem = styled.li`
  display: flex;
  gap: 20px;
  align-items: flex-start; /* stretch 대신 flex-start 사용 */

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
  }
`;

export const WorksCompanyItemLeft = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1;
  /* border: 1px solid red; */

  @media (max-width: ${BREAKPOINT}px) {
    position: static;
    flex-direction: row;
    align-items: center;
  }
`;

export const WorksCompanyLogoWrap = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #fff;
  border-radius: 10px;

  @media (max-width: ${BREAKPOINT}px) {
    width: auto;
    height: 60px;
    aspect-ratio: 1/1;
  }
`;

export const WorksCompanyLogo = styled(Image)`
  border: 1px solid;
  top: 50% !important;
  left: 50% !important;
  width: 90% !important;
  height: 90% !important;
  transform: translate(-50%, -50%);
  object-fit: contain;
`;

export const WorksCompanyItemRight = styled.div`
  flex: 5;
  background-color: #fff;
  padding: 50px 40px;
  border-radius: 20px;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 25px 20px;
  }
`;

export const WorksCompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const WorksCompanyName = styled.h4`
  font-size: 30px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 28px;
  }
`;

export const WorksCompanyPeriod = styled.span`
  font-size: 16px;
  font-weight: 400;
  opacity: 0.5;
  line-height: 1;
`;

export const WorksProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const WorksProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const WorksProjectNameAndLink = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const WorksProjectName = styled.div`
  font-size: 28px;
  font-weight: 700;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 25px;
  }
`;

export const WorksProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const WorksProjectDesc = styled.p`
  font-size: 16px;
  font-weight: 400;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  max-width: 70%;

  @media (max-width: ${BREAKPOINT}px) {
    max-width: 100%;
  }
`;

export const WorksProjectPeriod = styled.p`
  font-size: 16px;
  font-weight: 400;
  opacity: 0.5;
`;

export const WorksProjectLink = styled(Link)`
  color: #fff;
  border: 1px solid;
`;

export const WorksProjectWorkList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 10px;
  }
`;

export const WorksProjectWorkItem = styled.li`
  list-style: disc;
  margin-left: 20px;
`;

export const WorksProjectSkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const WorksProjectSkillItem = styled.li`
  padding: 7px 12px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.02em;
  border-radius: 8px;
  background-color: #222;
  color: #fff;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 5px 10px;
  }
`;

export const WorksButtonList = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 10px;
`;
