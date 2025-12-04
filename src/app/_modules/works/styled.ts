import styled from '@emotion/styled';
import { BREAKPOINT, BREAKPOINT_SM } from '@/app/_constant/breakpoint';
import Image from 'next/image';
import Link from 'next/link';

export const Works = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 160px 0 120px;
  background-color: #e5e7eb;

  @media (max-width: ${BREAKPOINT}px) {
    padding: 0 0 80px;
  }
`;

export const WorksInner = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  z-index: 10;

  @media (max-width: ${BREAKPOINT}px) {
    margin-top: 40px;
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

export const WorksList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  row-gap: 50px;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const WorksItemOverview = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  padding: 20px;
  opacity: 0;
  transition: all 0.3s ease;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 15px;
  font-weight: 500;
  text-align: center;

  &.works-item-overview {
    opacity: 0;
  }
`;

export const WorksItemLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-weight: 600;
  letter-spacing: -0.02em;
  border-radius: 30px;
  background-color: #fff;
  color: #222;
  transition: all 0.3s ease;

  &:hover {
    background-color: #222;
    color: #fff;
  }
`;

export const WorksItem = styled.li`
  position: relative;
  width: calc((100% - 30px) / 2);
  aspect-ratio: 1/1.2;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  background: white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &:hover .works-item-overview {
    opacity: 1;
  }

  @media (max-width: ${BREAKPOINT}px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const WorksItemImageWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

export const WorksItemImage = styled(Image)`
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
`;

export const WorksItemInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;
  width: 100%;
  height: 100%;
  padding: 30px;
  color: #fff;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
    pointer-events: none;
    z-index: 1;
    border-radius: 0 0 15px 15px;
  }

  @media (max-width: ${BREAKPOINT}px) {
    padding: 16px;
  }
`;

export const ProjectName = styled.h4`
  font-size: 40px;
  font-weight: 700;
  z-index: 2;
  white-space: pre-line;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 18px;
  }
`;

export const ProjectPeriod = styled.p`
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
  z-index: 2;
`;

export const CompanyHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: ${BREAKPOINT}px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
  }
`;

export const CompanyLogo = styled.img`
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: 8px;
  background: white;
  padding: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: ${BREAKPOINT}px) {
    width: 50px;
    height: 50px;
  }
`;

export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CompanyName = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #222;
  margin: 0;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 20px;
  }
`;

export const CompanyPeriod = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0;
  font-weight: 500;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 14px;
  }
`;

export const ProjectDesc = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #fff;
  margin: 0 0 16px 0;

  @media (max-width: ${BREAKPOINT}px) {
    font-size: 14px;
  }
`;

export const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
`;

export const SkillTag = styled.span`
  background-color: #e3f2fd;
  color: #1976d2;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #bbdefb;
  transition: all 0.2s ease;

  &:hover {
    background-color: #bbdefb;
    transform: translateY(-1px);
  }

  @media (max-width: ${BREAKPOINT}px) {
    padding: 4px 8px;
    font-size: 12px;
  }
`;

// // 이미지 슬라이더 모달을 위한 스타일
// export const ImageSliderContainer = styled.div`
//   width: 100%;
//   /* max-width: 800px; */
//   margin: 0 auto;

//   /* 좌우 화살표 스타일 */
//   .slick-prev,
//   .slick-next {
//     position: absolute;
//     top: 50%;
//     transform: translateY(-50%);
//     z-index: 10;
//     width: 50px;
//     height: 50px;
//     background: rgba(255, 255, 255, 0.8);
//     border: none;
//     border-radius: 50%;
//     font-size: 24px;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     display: flex !important;
//     align-items: center;
//     justify-content: center;

//     &:hover {
//       background: rgba(255, 255, 255, 1);
//       /* transform: translateY(-50%) scale(1.1); */
//     }

//     &::before {
//       font-family: Arial, sans-serif;
//       font-weight: bold;
//       color: #222;
//     }
//   }

//   .slick-prev {
//     left: -10px;
//     &::before {
//       content: '<';
//     }
//   }

//   .slick-next {
//     right: -10px;
//     &::before {
//       content: '>';
//     }
//   }

//   .slick-arrow {
//     font-size: 0;
//     box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

//     @media (max-width: ${BREAKPOINT}px) {
//       width: 40px;
//       height: 40px;
//     }
//   }

//   .slick-dots {
//     position: static;

//     @media (max-width: ${BREAKPOINT}px) {
//       display: none !important;
//     }
//   }
// `;

// export const SliderImage = styled.div`
//   display: flex !important;
//   justify-content: center;
//   align-items: center;
//   height: 600px;
//   padding: 20px;
//   background: #f8f8f8;
//   border-radius: 8px;

//   img {
//     max-width: 100%;
//     max-height: 100%;
//     object-fit: contain;
//   }

//   @media (max-width: ${BREAKPOINT}px) {
//     height: 300px;
//   }
// `;

// // 모달 스타일
// export const ModalContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 35px;
// `;

// export const ModalImageWrap = styled.div`
//   width: 100%;
//   height: 300px;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

//   @media (max-width: ${BREAKPOINT}px) {
//     height: 200px;
//   }
// `;

// export const ModalSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 12px;
// `;

// export const ModalSectionTitle = styled.h3`
//   font-size: 18px;
//   font-weight: 600;
//   color: #222;
//   margin: 0;
//   border-bottom: 2px solid #f0f0f0;
//   padding-bottom: 8px;

//   @media (max-width: ${BREAKPOINT}px) {
//     font-size: 16px;
//   }
// `;

// export const ModalDescription = styled.p`
//   font-size: 16px;
//   line-height: 1.6;
//   color: #555;
//   margin: 0;

//   @media (max-width: ${BREAKPOINT}px) {
//     font-size: 14px;
//   }
// `;

// export const ModalSkills = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 8px;

//   @media (max-width: ${BREAKPOINT}px) {
//     gap: 6px;
//   }
// `;

// export const SkillTag = styled.span`
//   background-color: #f0f0f0;
//   color: #333;
//   padding: 6px 12px;
//   border-radius: 10px;
//   font-size: 14px;
//   font-weight: 500;
//   border: 1px solid #e0e0e0;
//   transition: all 0.2s ease;

//   @media (max-width: ${BREAKPOINT}px) {
//     padding: 4px 8px;
//     font-size: 12px;
//   }
// `;

// export const ModalLinks = styled.div`
//   display: flex;
//   gap: 12px;
//   flex-wrap: wrap;

//   @media (max-width: ${BREAKPOINT}px) {
//     flex-direction: column;
//   }
// `;

// export const LinkButton = styled.a`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   padding: 10px 20px;
//   background-color: #222;
//   color: #fff;
//   text-decoration: none;
//   border-radius: 6px;
//   font-weight: 500;
//   font-size: 14px;
//   transition: all 0.3s ease;
//   border: 1px solid #222;

//   &:hover {
//     background-color: #fff;
//     color: #222;
//     transform: translateY(-2px);
//     box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   }

//   &:focus {
//     outline: 2px solid #007bff;
//     outline-offset: 2px;
//   }

//   @media (max-width: ${BREAKPOINT}px) {
//     padding: 12px 16px;
//     font-size: 13px;
//   }
// `;
