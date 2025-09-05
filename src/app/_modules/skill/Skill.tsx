'use client';

import * as S from './styled';

import Inner from '../common/layout/Inner';
import Title from '../common/title/Title';

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
  'React 및 TypeScript를 기반으로 개발했습니다.',
  'SSR 환경의 경우 Next.js 서버 컴포넌트를 활용한 API 라우터 최소화 및 SEO 에 대응하였으며, App Router를 활용하여 라우팅 구조를 개선하였습니다.',
  '상태관리의 경우 주로 Redux를 사용하여 중앙 집중식 관리를 구현하였으며, 이후 개인프로젝트에서 Jotai를 통해 더 간편한 구조의 상태관리를 구현한 경험이 있습니다.',
  '데이터 연동으로는 axios 를 활용하여 다양한 CRUD 를 구현하였으며, 이후 React-Query 을 활용하여 서버상태에도 최적화된 데이터 패칭 및 캐싱을 구현하였습니다.',
  '불필요한 리렌더링 최소화 및 네트워크 요청속도 개선, 반복되는 요청 중복 방지 등 다양한 프론트엔드 성능 개선 경험을 가지고 있습니다.',
  'React-Hook-Form 및 yup 와 zod 를 활용하여 유효성 체크 및 효율적인 폼 관리를 구현하였습니다.',
  '스타일링 라이브러리로는 Styled-component 를 사용하였으며, 추후 업데이트 이슈를 고려하여 Emotion을 활용하였습니다. \n관리자페이지 등 디자인이 비중이 적은 페이지에서는 Tailwind CSS를 활용하여 간단하게 css 를 형성 및 반응형 디자인을 구현하였습니다.',
  'Swiper, GSAP 등을 활용하여 다양한 화면 인터렉션을 구현하였으며, react-infinite-scroll-component 를 통해 인피니트 스크롤링 기능을 구현하였습니다.',
  '개인프로젝트에서 Supabase를 활용하여 더욱 쉽고 간단한 백엔드 환경을 구축하였으며, CRUD 를 구현하였습니다. \n배포의 경우 Vercel을 활용하여 간편한 배포를 구현하였습니다.',
];

const Skill = () => {
  return (
    <S.Skill id='skills'>
      <Inner>
        <Title text='SKILLS' isCenter />
        <S.SkillInner>
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
        <S.SkillInner>
          <S.SkillInnerDesc>
            <S.SkillDescTitle>⚙️ How To Use?</S.SkillDescTitle>
            <S.SkillDescBox>
              {skillDescList.map((item) => (
                <S.SkillDescItem key={item}>{item}</S.SkillDescItem>
              ))}
            </S.SkillDescBox>
          </S.SkillInnerDesc>
        </S.SkillInner>
      </Inner>
    </S.Skill>
  );
};

export default Skill;
