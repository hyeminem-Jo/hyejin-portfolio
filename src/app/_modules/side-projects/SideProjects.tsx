'use client';

import * as S from './styled';

import Inner from '../common/layout/Inner';
import Title from '../common/title/Title';
import Modal from '../common/modal/Modal';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

const sideProjectsList = [
  {
    title: 'J-stagram (인스타그램 클론)',
    image: '/assets/images/side-project/side-project-05.png',
    introduction: '회원가입, 로그인, 및 실시간 채팅 기능을 구현한 인스타그램 클론 프로젝트',
    description:
      'React와 Next.js를 활용하여 인스타그램의 핵심 기능들을 구현했습니다. 회원가입과 로그인 기능, 실시간 채팅, 게시물 업로드 및 피드 기능을 포함하여 실제 SNS와 유사한 사용자 경험을 제공합니다.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.google.com',
    github: 'https://github.com/example/j-stagram',
    demo: 'https://j-stagram-demo.vercel.app',
  },
  {
    title: '나의 할 일(To Do List)',
    image: '/assets/images/side-project/side-project-01.png',
    introduction:
      '하루 일과를 관리하는 할 일 목록 프로젝트 (할 일 등록, 삭제, 수정 및 검색 기능 구현)',
    description:
      '일상적인 할 일 관리를 위한 웹 애플리케이션입니다. 할 일 등록, 삭제, 수정 기능과 함께 검색 기능을 구현하여 사용자가 효율적으로 일정을 관리할 수 있도록 했습니다.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.google.com',
    github: 'https://github.com/example/todo-app',
    demo: 'https://todo-app-demo.vercel.app',
  },
  {
    title: 'Netflix (넷플릭스 클론)',
    image: '/assets/images/side-project/side-project-02.png',
    introduction:
      '여러 영화를 검색하고 영화 정보를 확인할 수 있는 넷플릭스 클론 프로젝트 (무한 스크롤링, 검색 기능)',
    description:
      '넷플릭스의 UI/UX를 참고하여 영화 검색 및 정보 확인 기능을 구현했습니다. 무한 스크롤링과 실시간 검색 기능을 통해 사용자가 원하는 영화를 쉽게 찾을 수 있습니다.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.google.com',
    github: 'https://github.com/example/netflix-clone',
    demo: 'https://netflix-clone-demo.vercel.app',
  },
  {
    title: '갤러리(Gallery)',
    image: '/assets/images/side-project/side-project-03.png',
    introduction:
      '여러 이미지를 저장하거나 삭제할 수 있는 갤러리 프로젝트 (파일 등록 및 삭제 기능 구현)',
    description:
      '개인 이미지 갤러리 관리 애플리케이션입니다. 이미지 업로드, 삭제, 정렬 기능을 구현하여 사용자가 개인 이미지를 체계적으로 관리할 수 있도록 했습니다.',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://www.google.com',
    github: 'https://github.com/example/gallery-app',
    demo: 'https://gallery-app-demo.vercel.app',
  },
];

const SideProjects = () => {
  const boxRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [selectedProject, setSelectedProject] = useState<(typeof sideProjectsList)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            },
          })
          .to(
            box,
            {
              transform: 'rotateX(-10deg) scale(0.9)',
              transformOrigin: 'top',
              filter: 'brightness(0.95)',
            },
            0,
          );
      }
    });
  });

  const handleProjectClick = (project: (typeof sideProjectsList)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

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
              onClick={() => handleProjectClick(item)}
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

        {/* 프로젝트 상세 모달 */}
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={selectedProject?.title}
          size='lg'
        >
          {selectedProject && (
            <S.ModalContent>
              <S.ModalImageWrap>
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  width={600}
                  height={400}
                  style={{ objectFit: 'cover', borderRadius: '8px' }}
                />
              </S.ModalImageWrap>

              <S.ModalSection>
                <S.ModalSectionTitle>프로젝트 소개</S.ModalSectionTitle>
                <S.ModalDescription>{selectedProject.description}</S.ModalDescription>
              </S.ModalSection>

              <S.ModalSection>
                <S.ModalSectionTitle>사용 기술</S.ModalSectionTitle>
                <S.ModalSkills>
                  {selectedProject.skills.map((skill, index) => (
                    <S.SkillTag key={`${skill}-${index}`}>{skill}</S.SkillTag>
                  ))}
                </S.ModalSkills>
              </S.ModalSection>

              <S.ModalSection>
                <S.ModalSectionTitle>링크</S.ModalSectionTitle>
                <S.ModalLinks>
                  <S.LinkButton
                    href={selectedProject.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GitHub
                  </S.LinkButton>
                  <S.LinkButton
                    href={selectedProject.demo}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Live Demo
                  </S.LinkButton>
                </S.ModalLinks>
              </S.ModalSection>
            </S.ModalContent>
          )}
        </Modal>
      </Inner>
    </S.SideProjects>
  );
};

export default SideProjects;
