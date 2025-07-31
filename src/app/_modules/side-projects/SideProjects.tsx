'use client';

import * as S from './styled';

import Inner from '../common/layout/Inner';
import Title from '../common/title/Title';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

const sideProjectsList = [
  {
    title: 'J-stagram (인스타그램 클론)',
    image: '/assets/images/side-project/side-project-05.png',
    introduction: '회원가입, 로그인, 및 실시간 채팅 기능을 구현한 인스타그램 클론 프로젝트',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.google.com',
  },
  {
    title: '나의 할 일(To Do List)',
    image: '/assets/images/side-project/side-project-01.png',
    introduction:
      '하루 일과를 관리하는 할 일 목록 프로젝트 (할 일 등록, 삭제, 수정 및 검색 기능 구현)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.google.com',
  },
  {
    title: 'Netflix (넷플릭스 클론)',
    image: '/assets/images/side-project/side-project-02.png',
    introduction:
      '여러 영화를 검색하고 영화 정보를 확인할 수 있는 넷플릭스 클론 프로젝트 (무한 스크롤링, 검색 기능)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.google.com',
  },
  {
    title: '갤러리(Gallery)',
    image: '/assets/images/side-project/side-project-03.png',
    introduction:
      '여러 이미지를 저장하거나 삭제할 수 있는 갤러리 프로젝트 (파일 등록 및 삭제 기능 구현)',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.google.com',
  },
];

const SideProjects = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const boxRefs = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(() => {
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
              // markers: true,
            },
          })
          .to(
            box,
            {
              transform: 'rotateX(-10deg) scale(0.9)',
              transformOrigin: 'top',
              filter: 'brightness(0.95)',
              // duration: 1,
              // ease: 'power4.out',
            },
            0,
          );
      }
    });
  });

  return (
    <S.SideProjects>
      <Inner>
        <Title text='SIDE PROJECT' isCenter />
        <S.SideProjectsInner>
          {sideProjectsList.map((item, index) => (
            <S.SideProjectsInnerBox
              key={`${item.title}-${index}`}
              ref={(el) => {
                boxRefs.current[index] = el;
              }}
            >
              <S.SideProjectsImageWrap>
                <Image src={item.image} alt={item.title} width={500} height={500} />
              </S.SideProjectsImageWrap>
              <S.SideProjectsInfo>
                <S.SideProjectsTitle>{item.title}</S.SideProjectsTitle>
                <S.SideProjectsDesc>{item.introduction}</S.SideProjectsDesc>
                <S.SideProjectsSkills>
                  {item.skills.map((skill, index) => (
                    <li key={`${skill}-${index}`}>{skill}</li>
                  ))}
                </S.SideProjectsSkills>
              </S.SideProjectsInfo>
            </S.SideProjectsInnerBox>
          ))}
        </S.SideProjectsInner>
      </Inner>
    </S.SideProjects>
  );
};

export default SideProjects;
