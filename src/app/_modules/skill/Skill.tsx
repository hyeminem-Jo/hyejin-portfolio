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
        name: 'Tailwind',
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

const Skill = () => {
  return (
    <S.Skill>
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
      </Inner>
    </S.Skill>
  );
};

export default Skill;
