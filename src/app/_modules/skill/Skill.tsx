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
