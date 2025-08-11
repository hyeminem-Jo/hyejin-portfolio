import { BREAKPOINT } from '@/app/_constant/breakpoint';
import styled from '@emotion/styled';

interface Props {
  $color: string;
}

export const Skill = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 120px 0 100px;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 80px 0 100px;
  }
`;

export const SkillInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
  padding: 50px 80px;
  z-index: 10;
  background-color: #fff;
  border-radius: 20px;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
    gap: 20px;
    padding: 35px 30px;
    margin-top: 35px;
  }
`;

export const SkillInnerDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const SkillDescTitle = styled.h3`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-left: -10px;
`;

export const SkillDescBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SkillDescItem = styled.li`
  /* display: flex;
  align-items: center;
  gap: 10px; */
  list-style: disc !important;
  white-space: pre-line;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: -0.02em;
  line-height: 1.5;
`;

export const SkillInnerBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 70px;
  height: 100%;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 50px;
  }
`;

export const SkillInnerBoxList = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
  }
`;

export const SkillInnerBoxItem = styled.strong``;

export const SkillInnerBoxTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: ${BREAKPOINT}px) {
    /* text-align: center; */
  }
`;

export const SkillInnerBoxSkillList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media (max-width: ${BREAKPOINT}px) {
    /* justify-content: center; */
  }
`;

export const SkillInnerBoxSkill = styled.li<Props>`
  padding: 7px 12px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.02em;
  border-radius: 8px;
  background-color: ${({ $color }) => $color};
  color: #222;
`;
