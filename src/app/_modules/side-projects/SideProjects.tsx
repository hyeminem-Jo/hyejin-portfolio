'use client';

import * as S from './styled';

import Inner from '../common/layout/Inner';
import Title from '../common/title/Title';
import Image from 'next/image';

const sideProjectsList = [
  {
    title: 'Side Projects',
    image: '/images/side-projects/side-projects-1.png',
    description: 'Side Projects',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.google.com',
  },
];

const SideProjects = () => {
  return (
    <S.SideProjects>
      <Inner>
        <Title text='SIDE PROJECT' isCenter />
        <S.SideProjectsInner>
          <S.SideProjectsInnerBox>
            <div>
              <Image
                src='/images/side-projects/side-projects-1.png'
                alt='side-projects-1'
                width={500}
                height={500}
              />
              <div>
                <h3>
                  <span>01</span>
                  <span>Side Projects</span>
                </h3>
              </div>
            </div>
          </S.SideProjectsInnerBox>
          <S.SideProjectsInnerBox>
            <div>
              <Image
                src='/images/side-projects/side-projects-1.png'
                alt='side-projects-1'
                width={500}
                height={500}
              />
              <div>
                <h3>
                  <span>01</span>
                  <span>Side Projects</span>
                </h3>
              </div>
            </div>
          </S.SideProjectsInnerBox>
        </S.SideProjectsInner>
      </Inner>
    </S.SideProjects>
  );
};

export default SideProjects;
