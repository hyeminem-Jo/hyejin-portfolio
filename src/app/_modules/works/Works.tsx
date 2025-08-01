'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Inner from '../common/layout/Inner';
import Title from '../common/title/Title';
import Button from '../common/button/Button';
import { useRouter } from 'next/navigation';

const companyList = [
  {
    name: '넥스트컬쳐',
    companyLogo: '/assets/images/logo/nextculture-logo.ico',
    companyPeriod: '2024.10 - 2025.07',
    projectList: [
      {
        projectName: '소플 고도화',
        projectDesc: '소플 고도화',
        projectPeriod: '2024.01 - 2024.06',
        skillList: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        projectWorkList: [
          'Next.js 서버 컴포넌트를 활용한 API 라우터 최소화 및 SEO 대응',
          'TypeScript를 활용한 타입 안정성 확보 및 개발 생산성 향상',
          'Tailwind CSS를 활용한 반응형 디자인 구현',
          'Framer Motion을 활용한 부드러운 애니메이션 효과 구현',
          'React Hook을 활용한 상태 관리 최적화',
          'Next.js App Router를 활용한 라우팅 구조 개선',
        ],
        projectLink: 'https://www.solp.co.kr',
        projectImgList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
      {
        projectName: '소플 고도화222',
        projectDesc: '소플 고도화22222',
        projectPeriod: '2024.01 - 2024.06',
        skillList: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        projectWorkList: [
          'Next.js 서버 컴포넌트를 활용한 API 라우터 최소화 및 SEO 대응',
          'TypeScript를 활용한 타입 안정성 확보 및 개발 생산성 향상',
          'Tailwind CSS를 활용한 반응형 디자인 구현',
          'Framer Motion을 활용한 부드러운 애니메이션 효과 구현',
          'React Hook을 활용한 상태 관리 최적화',
          'Next.js App Router를 활용한 라우팅 구조 개선',
        ],
        projectLink: 'https://www.solp.co.kr',
        projectImgList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
    ],
  },
  {
    name: '이모션글로벌',
    companyLogo: '/assets/images/logo/emotion-logo.png',
    companyPeriod: '2022.07 - 2024.09',
    projectList: [
      {
        projectName: '신세계 백화점',
        projectDesc: '신세계 백화점',
        projectPeriod: '2024.01 - 2024.06',
        skillList: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        projectWorkList: [
          'Next.js 서버 컴포넌트를 활용한 API 라우터 최소화 및 SEO 대응',
          'TypeScript를 활용한 타입 안정성 확보 및 개발 생산성 향상',
          'Tailwind CSS를 활용한 반응형 디자인 구현',
          'Framer Motion을 활용한 부드러운 애니메이션 효과 구현',
          'React Hook을 활용한 상태 관리 최적화',
          'Next.js App Router를 활용한 라우팅 구조 개선',
        ],
        projectLink: 'https://www.solp.co.kr',
        projectImgList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
      {
        projectName: '소플 고도화222',
        projectDesc: '소플 고도화22222',
        projectPeriod: '2024.01 - 2024.06',
        skillList: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
        projectWorkList: [
          'Next.js 서버 컴포넌트를 활용한 API 라우터 최소화 및 SEO 대응',
          'TypeScript를 활용한 타입 안정성 확보 및 개발 생산성 향상',
          'Tailwind CSS를 활용한 반응형 디자인 구현',
          'Framer Motion을 활용한 부드러운 애니메이션 효과 구현',
          'React Hook을 활용한 상태 관리 최적화',
          'Next.js App Router를 활용한 라우팅 구조 개선',
        ],
        projectLink: 'https://www.solp.co.kr',
        projectImgList: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
      },
    ],
  },
];

const Works = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const router = useRouter();

  return (
    <S.Works>
      <Inner>
        <Title text='WORK EXPERIENCE' isCenter />
        <S.WorksInner>
          <S.WorksInnerBox>
            <S.WorksCompanyList>
              {companyList.map((company) => (
                <S.WorksCompanyItem key={company.name}>
                  <S.WorksCompanyItemLeft>
                    <S.WorksCompanyLogoWrap>
                      <S.WorksCompanyLogo src={company.companyLogo} alt={company.name} fill />
                    </S.WorksCompanyLogoWrap>
                    <S.WorksCompanyInfo>
                      <S.WorksCompanyName>{company.name}</S.WorksCompanyName>
                      <S.WorksCompanyPeriod>{company.companyPeriod}</S.WorksCompanyPeriod>
                    </S.WorksCompanyInfo>
                  </S.WorksCompanyItemLeft>
                  <S.WorksCompanyItemRight>
                    <S.WorksProjectList>
                      {company.projectList.map((project) => (
                        <S.WorksProjectItem key={project.projectName}>
                          <S.WorksProjectNameAndLink>
                            <S.WorksProjectName>{project.projectName}</S.WorksProjectName>
                            <Button
                              size='sm'
                              text='Link 보기'
                              onClick={() => {
                                router.push(project.projectLink);
                              }}
                            />
                            <Button
                              size='sm'
                              text='화면 보기'
                              onClick={() => {
                                // router.push(project.projectLink);
                              }}
                            />
                          </S.WorksProjectNameAndLink>
                          <S.WorksProjectInfo>
                            <S.WorksProjectPeriod>{project.projectPeriod}</S.WorksProjectPeriod>
                            <S.WorksProjectDesc>{project.projectDesc}</S.WorksProjectDesc>
                            <S.WorksProjectSkillList>
                              {project.skillList.map((skill) => (
                                <S.WorksProjectSkillItem key={skill}>
                                  {skill}
                                </S.WorksProjectSkillItem>
                              ))}
                            </S.WorksProjectSkillList>
                          </S.WorksProjectInfo>
                          <S.WorksProjectWorkList>
                            {project.projectWorkList.map((work, index) => (
                              <S.WorksProjectWorkItem key={`${project.projectName}-work-${index}`}>
                                {work}
                              </S.WorksProjectWorkItem>
                            ))}
                          </S.WorksProjectWorkList>
                        </S.WorksProjectItem>
                      ))}
                    </S.WorksProjectList>
                  </S.WorksCompanyItemRight>
                </S.WorksCompanyItem>
              ))}
            </S.WorksCompanyList>
          </S.WorksInnerBox>
        </S.WorksInner>
      </Inner>
    </S.Works>
  );
};

export default Works;
