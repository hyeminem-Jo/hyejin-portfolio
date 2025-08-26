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
import { useIsMobile } from '../common/hooks/useIsMobile';

const sideProjectsList = [
  {
    title: '나의 할 일',
    image: '/assets/images/side-project/side-project-01.png',
    introduction:
      '일상적인 할 일 관리를 위한 웹 애플리케이션입니다. \n할 일 등록, 삭제, 수정 기능과 함께 검색 기능을 구현하여 \n사용자가 효율적으로 일정을 관리할 수 있도록 했습니다.',

    skills: ['React', 'Next.js', 'TypeScript', 'React-query', 'Supabase'],
    link: 'https://hyejin-toy-project.vercel.app/todo',
    github:
      'https://github.com/hyeminem-Jo/toy-project/tree/main?tab=readme-ov-file#1-%EB%82%98%EC%9D%98-%ED%95%A0-%EC%9D%BCtodo-list',
    demo: 'https://todo-app-demo.vercel.app',
  },
  {
    title: 'J-stagram',
    image: '/assets/images/side-project/side-project-05.png',
    introduction:
      '회원가입, 로그인, 및 메시지 기능의 인스타그램 클론 프로젝트입니다. \n 카카오 소셜로그인 및 supabase 의 리얼타임 기능을 활용하여 \n실시간으로 채팅이 가능하도록 구현하였습니다.\n Jotai 를 사용하여 내 정보 상태관리를 구현하였습니다. \n (일반 회원가입의 경우 이메일 인증 횟수가 제한되어있어 인증 이메일이 발송되지 않을 수 있습니다.)',
    skills: ['React', 'Next.js', 'TypeScript', 'React-query', 'Jotai', 'Supabase'],
    link: 'https://hyejin-toy-project.vercel.app/j-stagram',
    github:
      'https://github.com/hyeminem-Jo/toy-project/tree/main?tab=readme-ov-file#2-%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%ED%81%B4%EB%A1%A0-j-stagram',
    demo: 'https://j-stagram-demo.vercel.app',
  },

  {
    title: '갤러리',
    image: '/assets/images/side-project/side-project-03.png',
    introduction:
      '개인 이미지 갤러리 관리 애플리케이션입니다. \n supabase 의 Storge 기능을 사용하였으며,\n다중 이미지 업로드/삭제 및 체크 여부에 따른 정렬을 구현하였습니다. ',
    skills: ['React', 'Next.js', 'TypeScript', 'React-query', 'Supabase'],
    link: 'https://hyejin-toy-project.vercel.app/gallery',
    github:
      'https://github.com/hyeminem-Jo/toy-project/tree/main?tab=readme-ov-file#3-%ED%8C%8C%EC%9D%BC-%EC%97%85%EB%A1%9C%EB%93%9C-gallery',
    demo: 'https://gallery-app-demo.vercel.app',
  },
  {
    title: 'Netflix',
    image: '/assets/images/side-project/side-project-02.png',
    introduction:
      '여러 영화를 검색하고 영화 정보를 확인할 수 있는 넷플릭스 클론 프로젝트 입니다. \n상세정보를 볼 수 있는 상세페이지가 있으며, react-query 를 활용하여 \n무한 스크롤링과 실시간 검색 기능을 통해 사용자가 원하는 영화를 쉽게 찾을 수 있습니다.',
    description:
      '넷플릭스의 UI/UX를 참고하여 영화 검색 및 정보 확인 기능을 구현했습니다. 무한 스크롤링과 실시간 검색 기능을 통해 사용자가 원하는 영화를 쉽게 찾을 수 있습니다.',
    skills: ['React', 'Next.js', 'TypeScript', 'React-query', 'Jotai', 'Supabase'],
    link: 'https://hyejin-toy-project.vercel.app/movie',
    github:
      'https://github.com/hyeminem-Jo/toy-project/tree/main?tab=readme-ov-file#4-%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4-%ED%81%B4%EB%A1%A0',
    demo: 'https://netflix-clone-demo.vercel.app',
  },
];

const SideProjects = () => {
  const boxRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [selectedProject, setSelectedProject] = useState<(typeof sideProjectsList)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile, isLoaded } = useIsMobile();

  useGSAP(() => {
    if (!isLoaded || isMobile) return;
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
  }, [isLoaded, isMobile]);

  const handleProjectClick = (project: (typeof sideProjectsList)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <S.SideProjects id='side-projects'>
      <Inner>
        <Title text='SIDE PROJECT' isCenter />
        <S.SideProjectsInner>
          {sideProjectsList.map((item, index) => (
            <S.SideProjectsInnerBox
              key={`${item.title}-${index}`}
              ref={(el) => {
                boxRefs.current[index] = el;
              }}
              // onClick={() => handleProjectClick(item)}
            >
              <S.SideProjectsImageWrap>
                <Image src={item.image} alt={item.title} width={500} height={500} />
              </S.SideProjectsImageWrap>
              <S.SideProjectsInfo>
                <S.SideProjectsInfoTop>
                  <S.SideProjectsTitle>{item.title}</S.SideProjectsTitle>
                  <S.SideProjectsDesc>{item.introduction}</S.SideProjectsDesc>
                  <S.SideProjectsSkills>
                    {item.skills.map((skill, index) => (
                      <S.SideProjectsSkillsItem key={`${skill}-${index}`}>
                        {skill}
                      </S.SideProjectsSkillsItem>
                    ))}
                  </S.SideProjectsSkills>
                </S.SideProjectsInfoTop>
                <S.SideProjectsButtons>
                  <S.SideProjectsSkillsLink
                    href={item.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Link
                  </S.SideProjectsSkillsLink>
                  <S.SideProjectsSkillsLink
                    href={item.github}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    GitHub
                  </S.SideProjectsSkillsLink>
                </S.SideProjectsButtons>
              </S.SideProjectsInfo>
            </S.SideProjectsInnerBox>
          ))}
        </S.SideProjectsInner>

        {/* 프로젝트 상세 모달 */}
        {/* <Modal
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
        </Modal> */}
      </Inner>
    </S.SideProjects>
  );
};

export default SideProjects;
