'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import Inner from '../common/layout/Inner';
import Title from '../common/title/Title';
import { BREAKPOINT } from '@/app/_constant/breakpoint';

const skillList = [
  {
    title: 'Language',
    list: [
      {
        name: 'JavaScript',
        color: '#F7DF1E',
      },
      {
        name: 'TypeScript',
        color: '#5B9BD5',
      },
      {
        name: 'HTML',
        color: '#FFB366',
      },
      {
        name: 'CSS',
        color: '#FF6B35',
      },
      {
        name: 'Scss',
        color: '#FF69B4',
      },
    ],
  },
  {
    title: 'Frontend',
    list: [
      {
        name: 'Next.js (React)',
        color: '#61DAFB',
      },
      {
        name: 'Jotai',
        color: '#FF6B6B',
      },
      {
        name: 'Redux',
        color: '#9B7EDE',
      },
      {
        name: 'React-Query',
        color: '#FF6B9D',
      },
      {
        name: 'React-Hook-Form',
        color: '#4ECDC4',
      },
      {
        name: 'Emotion',
        color: '#A8E6CF',
      },
      {
        name: 'TailwindCSS',
        color: '#06B6D4',
      },
    ],
  },
  {
    title: 'Backend / DevOps',
    list: [
      {
        name: 'Supabase',
        color: '#3ECF8E',
      },
      {
        name: 'Vercel',
        color: '#9CA3AF',
      },
    ],
  },
];

const skillDescList = [
  'React와 TypeScript 기반으로 개발하며, Next.js(App Router, Server Component)를 활용해 SSR과 SEO에 대응합니다.',
  '시멘틱 마크업을 지향하고 웹 접근성과 크로스브라우징에 최적화된 코드를 작성합니다.',
  'SCSS 및 Styled-components, Emotion, Tailwind CSS를 상황에 맞게 활용하여 스타일링을 구현합니다.',
  'Redux와 Jotai로 상태 관리를 구현하며, 프로젝트 특성에 맞는 상태 관리 방식을 선택합니다.',
  'axios와 React Query를 통한 CRUD 구현, 데이터 캐싱 및 성능 최적화를 경험했습니다.',
  'Swiper, GSAP, Infinite Scroll 등을 활용하여 다양한 UI 인터랙션을 구현합니다.',
  'React-Hook-Form과 yup, zod를 활용하여 유효성 검증 및 효율적인 폼 관리를 구현합니다.',
  'Supabase를 이용해 간단한 백엔드 환경과 CRUD 기능을 구축한 경험이 있으며, Vercel을 통해 배포를 진행합니다.',
  '개발 과정에서 Cursor 등 AI 도구를 적극적으로 활용하며, 협업 도구로는 GitLab을 사용합니다.',
  '디자인 협업은 Figma와 Photoshop을 활용하여 디자이너와 원활하게 소통합니다.',
];

// 1. 디자인 파일을 구조적으로 분석해 높은 재현성을 가진 UI를 구현합니다.
// Figma·Photoshop의 레이아웃 의도, 컴포넌트 구조, 인터랙션 요소를 빠르게 파악해
// 픽셀 단위의 정교한 화면을 React 기반으로 정확히 옮겨냅니다.

// 2. 웹 접근성과 시멘틱 마크업을 우선하는 코드를 작성합니다.
// 스크린리더 대응, ARIA 속성 사용, 키보드 네비게이션 등
// ‘모든 사용자에게 열려 있는 UI’를 목표로 개발합니다.

// 3. React Query를 활용한 데이터 캐싱·요청 최적화에 강합니다.
// 의존성 관리, 비동기 상태 처리, Stale-While-Revalidate 패턴 등
// 실제 프로젝트에서 API 성능과 사용자 응답성을 개선해왔습니다.

// 4. React-Hook-Form + Zod로 안정적인 폼 유효성 검증을 구축합니다.
// 스키마 기반 검증, 비동기 검증, Step Form 구성 등
// 복잡한 입력 흐름에서도 유지보수가 쉽도록 설계합니다.

// 5. Cursor 등 AI 도구를 활용해 개발 속도와 코드 품질을 끌어올립니다.
// 컴포넌트 설계, 리팩토링, 테스트 케이스 생성 등을 AI와 함께 수행하며
// 반복 업무를 자동화해 개발 생산성을 높입니다.

const Skill = () => {
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${BREAKPOINT + 1}px)`, () => {
      const boxList = boxRefs.current;

      boxList.forEach((box, i) => {
        if (box) {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: box,
                start: '0% 20%',
                end: '0% 0%',
                scrub: 1,
              },
            })
            .to(
              box,
              {
                transform: 'rotateX(-10deg) scale(0.9)',
                transformOrigin: 'top',
                filter: 'brightness(0.95)',
                duration: 1,
                ease: 'none',
              },
              0,
            );
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <S.Skill id='skills'>
      <Inner title='SKILLS'>
        <S.SkillInnerBoxWrap>
          <S.SkillInner
            ref={(el) => {
              boxRefs.current[0] = el;
            }}
          >
            <S.SkillInnerBox>
              {skillList.map((item) => (
                <S.SkillInnerBoxList key={item.title}>
                  <S.SkillInnerBoxTitle>{item.title}</S.SkillInnerBoxTitle>
                  <S.SkillInnerBoxSkillList>
                    {item.list.map((item) => (
                      <S.SkillInnerBoxSkill key={item.name} $color={item.color}>
                        {item.name}
                      </S.SkillInnerBoxSkill>
                    ))}
                  </S.SkillInnerBoxSkillList>
                </S.SkillInnerBoxList>
              ))}
            </S.SkillInnerBox>
          </S.SkillInner>
          <S.SkillInner
            ref={(el) => {
              boxRefs.current[1] = el;
            }}
          >
            <S.SkillInnerDesc>
              <S.SkillDescTitle>⚙️ How To Use?</S.SkillDescTitle>
              <S.SkillDescBox>
                {skillDescList.map((item) => (
                  <S.SkillDescItem key={item}>{item}</S.SkillDescItem>
                ))}
              </S.SkillDescBox>
            </S.SkillInnerDesc>
          </S.SkillInner>
        </S.SkillInnerBoxWrap>
      </Inner>
    </S.Skill>
  );
};

export default Skill;
