import styled from '@emotion/styled';
import { BREAKPOINT } from '@/app/_constant/breakpoint';
import Image from 'next/image';
import Link from 'next/link';

export const WorkDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    padding: 20px 16px;
  }
`;

export const WorkDetailThumbnail = styled(Image)`
  object-fit: cover;
  border-radius: 12px;

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    height: 200px;
  }
`;

export const WorkDetailHeader = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 60px;
  padding: 40px;
  background: #f8f9fa;
  border-radius: 20px;
  border: 1px solid #e9ecef;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
    gap: 30px;
    padding: 30px 20px;
    margin-bottom: 20px;
  }
`;

export const WorkDetailIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: ${BREAKPOINT}px) {
  }
`;

export const ProjectTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  color: #111;
  margin: 0 0 16px 0;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 25px;
    margin-bottom: 0;
  }
`;

export const ProjectInfoList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 18px;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 15px;
  }
`;

export const ProjectInfoItem = styled.li`
  display: flex;
  gap: 10px;
  font-size: 16px;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 14px;
  }
`;

export const ProjectInfoTitle = styled.p`
  min-width: 100px;
  font-weight: 600;
  color: #222;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 14px;
  }
`;

export const ProjectInfoDesc = styled.p`
  color: #666;
  margin: 0;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 14px;
  }
`;

export const ProjectProblemSolvingList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 35px;

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 20px;
  }
`;

export const ProjectProblemSolvingItem = styled.li`
  color: #666;
  margin: 0;

  & > p:last-child {
    margin-top: 10px;
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 14px;
  }
`;

export const ProjectProblemSolvingTitle = styled.p`
  position: relative;
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 600;
  color: #222;
  letter-spacing: -0.02em;
  padding-left: 20px;

  &::before {
    position: absolute;
    left: -5px;
    top: 0;
    content: '📍';
    margin-right: 8px;
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 15px;
    line-height: 1.3;
    padding-left: 15px;
  }
`;

export const ProjectProblemAndSolving = styled.p`
  color: #222;
  line-height: 1.5;
  letter-spacing: -0.01em;
  padding-left: 20px;

  strong {
    font-weight: 600;
  }

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 15px;
    padding-left: 15px;
  }
`;

export const WorkDetailContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 20px;
  }
`;

export const Section = styled.section`
  background: white;
  padding: 40px;
  border-radius: 16px;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  @media (max-width: ${BREAKPOINT}px) {
    padding: 30px 20px;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin: 0 0 24px 0;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  color: #333;
  margin: 0;
  white-space: pre-line;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 15px;
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;

  @media (max-width: ${BREAKPOINT}px) {
    gap: 7px;
  }
`;

export const SkillTag = styled.span`
  padding: 5px 7px;
  border-radius: 7px;
  font-size: 13px;
  font-weight: 500;
  background-color: #eee;
  border: 1px solid #e0e0e0;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 3px 7px;
    font-size: 12px;
  }
`;

export const FunctionList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
  margin-top: 30px;

  code {
    font-size: 0.8em;
  }

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 20px;
  }
`;

export const FunctionItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FunctionPage = styled.h6`
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin: 0;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 18px;
  }
`;

export const FunctionDescList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FunctionDescItem = styled.li``;

export const FunctionMainDesc = styled.p`
  padding-left: 5px;
  font-size: 17px;
  color: #222;

  &::before {
    content: '•';
    font-weight: bold;
    margin-right: 8px;
  }

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 3px;
    font-size: 15px;
  }
`;

export const FunctionSubDescList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: ${BREAKPOINT}px) {
    padding-left: 10px;
  }
`;

export const FunctionSubDesc = styled.li`
  font-size: 17px;
  line-height: 1.4;
  color: #333;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 15px;
  }
`;

export const ProjectImage = styled(Image)`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`;

// 이미지 슬라이더 스타일
export const ImageSliderContainer = styled.div`
  width: 100%;
  /* max-width: 800px; */
  margin: 0 auto;

  /* 좌우 화살표 스타일 */
  .slick-prev,
  .slick-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    width: 50px;
    height: 50px;
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    font-size: 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex !important;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(255, 255, 255, 1);
      /* transform: translateY(-50%) scale(1.1); */
    }

    &::before {
      font-family: Arial, sans-serif;
      font-weight: bold;
      color: #222;
    }
  }

  .slick-prev {
    left: -10px;
    &::before {
      content: '◀';
      margin-left: -5px;
    }
  }

  .slick-next {
    right: -10px;
    &::before {
      content: '▶';
      margin-right: -5px;
    }
  }

  .slick-arrow {
    font-size: 0;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

    @media (max-width: ${BREAKPOINT}px) {
      width: 40px;
      height: 40px;
    }
  }

  .slick-dots {
    position: static;

    @media (max-width: ${BREAKPOINT}px) {
      display: none !important;
    }
  }
`;

export const SliderImage = styled.div`
  display: flex !important;
  justify-content: center;
  align-items: center;
  height: 600px;
  padding: 20px;
  background: #f8f8f8;
  border-radius: 8px;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: ${BREAKPOINT}px) {
    height: 300px;
  }
`;

export const CodeStyle = styled.code`
  background-color: #f1f3f4;
  color: #d73a49;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 1em;
  font-weight: 600;
  border: 1px solid #e1e4e8;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 0.8em;
  }
`;

export const BoldStyle = styled.span`
  font-weight: 600;
  color: #000;
`;

export const StyleLink = styled(Link)`
  display: inline-block;
  margin-left: 5px;
  font-weight: 600;
  color: #2b7de9;
  text-decoration: underline;
`;

// 이전글/다음글 네비게이션 스타일
export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;
  padding: 30px 40px;
  background: #f8f9fa;
  border-radius: 16px;
  border: 1px solid #e9ecef;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    margin-top: 40px;
    margin-bottom: 30px;
  }
`;

export const NavigationItem = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
  aspect-ratio: 3/1;
  padding: 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  min-width: 200px;
  max-width: 300px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    border-color: #222;
  }

  @media (max-width: ${BREAKPOINT}px) {
    min-width: 100%;
    max-width: 100%;
    padding: 15px;
    aspect-ratio: initial;
  }
`;

export const NavigationLabel = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const NavigationTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #222;
  margin: 0;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 15px;
  }
`;

export const NavigationArrow = styled.span`
  font-size: 20px;
  color: #444;
  font-weight: bold;
`;

// export const NavigationDisabled = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 8px;
//   padding: 20px;
//   background: #f8f9fa;
//   border-radius: 12px;
//   border: 1px solid #e9ecef;
//   min-width: 200px;
//   max-width: 300px;
//   opacity: 0.5;

//   @media (max-width: ${BREAKPOINT}px) {
//     min-width: 100%;
//     max-width: 100%;
//     padding: 15px;
//   }
// `;

export const NavigationCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: #666;
  border: 1px solid #e9ecef;
  padding: 10px 20px;
  border-radius: 50px;
  background: white;

  @media (max-width: ${BREAKPOINT}px) {
    order: -1;
  }
`;

export const NavigationCenterTxt = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  color: #666;
`;
