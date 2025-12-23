'use client';

import * as S from './styled';

import Inner from '../common/layout/Inner';
import Title from '../common/title/Title';
import Image from 'next/image';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState, useEffect } from 'react';
import { useIsMobile } from '../common/hooks/useIsMobile';
import { BREAKPOINT } from '@/app/_constant/breakpoint';
import Modal from '../common/modal/Modal';
import Button from '../common/button/Button';

// GSAP ScrollTrigger 플러그인 등록
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const sideProjectsList = [
  {
    title: 'J-stagram',
    image: '/assets/images/side-project/side-project-05.png',
    introduction: `게시글 작성 및 실시간 채팅이 \n가능한 SNS 웹서비스`,
    funcList: [
      '주요 기능: 회원가입, 로그인, 게시글 작성, 실시간 채팅 기능',
      '이메일 or 카카오로그인 중 선택 가능하며, 카카오 로그인의 경우 Oauth 방식으로 구현',
      'Supabase 의 RealTime 기능을 활용하여 실시간으로 채팅이 가능하도록 구현',
      'Jotai 를 사용하여 내 정보 상태관리를 구현',
      '반응형으로 제작',
    ],
    meaningfulPoint: (
      <>
        프론트 작업만 해온 경험을 넘어 백엔드까지 구현된 "완성된 서비스" 에 도전해보고 싶었습니다.{' '}
        <br />그 결과, Supabase 를 활용하여 <strong>전반적인 CRUD 를 구현해보는 경험</strong>을 가질
        수 있었습니다.
        <br />
        특히 Supabase 의 RealTime 기능을 활용하여 데이터를 실시간으로 구독하는 방식으로{' '}
        <strong>실시간 채팅 기능을 구현해보는 경험</strong>을 가질 수 있었습니다.
        <br />
        로그인 기능 역시 Supabase 의 Auth 기능을 활용하여 이메일{' '}
        <strong>OTP 인증과 소셜로그인 기능을 간편하게 구현</strong>할 수 있었습니다.
        <br />
        또한 사진 업로드 기능을 구현할 때 대용량 파일을 업로드하는 과정에서 Signed URL(서명된 URL)
        방식을 알게 되었는데,
        <br />
        이를 활용하여 서버 부하 없이 안전하게 파일을 업로드 할 수 있었습니다.
      </>
    ),
    skills: ['React', 'Next.js', 'TypeScript', 'React-query', 'Jotai', 'Supabase'],
    link: 'https://hyejin-toy-project.vercel.app/j-stagram',
    github: 'https://github.com/hyeminem-Jo/j-stagram/blob/main/README.md',
  },
  {
    title: 'Portfolio Site',
    image: '/assets/images/side-project/side-project-06.png',
    introduction: `나에 대한 소개 및 프로젝트 경험을 \n담은 포트폴리오 사이트`,
    funcList: [
      '주요 기능: Works / My Projects 등 프로젝트 경험 페이지 구현, 상세페이지 이미지 슬라이드, 이메일 전송 기능',
      'GSAP 을 활용한 애니메이션 효과와 Emotion 을 사용하여 스타일링을 진행',
      'Email.js 를 활용한 이메일 전송 기능 구현',
      '반응형으로 제작',
    ],
    meaningfulPoint: (
      <>
        저의 스펙을 소개하는 포트폴리오 사이트로 어떻게 하면 효과적으로 저의 프로젝트 경험을 소개할
        수 있을까 고민하며 제작하였습니다. <br />
        사용자 경험을 해치지 않는 선에서 심심하지 않도록{' '}
        <strong>GSAP 을 활용해 인터렉션을 구현</strong>하면서 반응형으로 제작하였습니다. <br />
        또한 포트폴리오 사이트가 잘 검색될 수 있도록 SEO 기능에 최적화된 Next.js 를 사용하였는데,{' '}
        <br />
        이때 미흡했던{' '}
        <strong>
          SEO 에 대한 이해와 MetaData 작성 및 동적 메타데이터와 관련해서도 고민
        </strong>하여 <br />
        개발을 하게되는 과정을 경험하게 되었습니다. <br />
        이외에도 이메일 전송 기능을 구현할 때, 이전에 하드코딩으로 구현하였던 것에서 <br />
        Email.js 라는 라이브러리를 활용해보면서 더 간편하게 기능을 적용할 수 있었습니다.
      </>
    ),
    skills: ['React', 'Next.js', 'TypeScript', 'Emotion', 'Email.js'],
    link: 'https://hyejin-portfolio.vercel.app/',
    github: 'https://hyejin-portfolio.vercel.app/',
  },
  {
    title: 'Jinny-Game',
    image: '/assets/images/side-project/side-project-03.jpg',
    introduction: '여러 게임을 즐길 수 있는 웹 게임 플랫폼',
    funcList: [
      '주요 기능: 게임 목록 페이지, 게임 상세페이지, 다양한 종류(쿵쿵따, 숫자야구, 지뢰게임 등)의 게임 기능',
      '바닐라 자바스크립트로 구현한 게임 기능',
      'SASS 를 활용한 스타일링 및 게임 배경/캐릭터 디자인 직접 제작',
      'Parcel 을 활용한 간단한 번들링',
    ],
    meaningfulPoint: (
      <>
        AI 코딩이 필수가 된 시대임에도 불구하고 이론에 대한 기반 지식은 필수적입니다. <br />
        처음 프론트엔드로 입문할 당시, 해당 프로젝트를 통해{' '}
        <strong>Vanilla JavaScript 로 하드코딩</strong>하는 경험을 쌓았으며 <br />
        이후 코드를 생성하는 만큼 중요한 "디버깅 능력"을 기를 수 있었습니다. <br />각 게임마다
        <strong>JavaScript의 기본 메서드부터 개념, 알고리즘 등을 학습</strong>하고, 이를 게임 개발에
        직접 적용해보는 실전 경험을 쌓았습니다. <br />
        특히 피셔-예이츠 셔플 알고리즘, 재귀 함수, 클래스 상속과 객체지향 프로그래밍 등 핵심
        개념들을 게임을 통해 배울 수 있었습니다. <br />
        또한 게임은 시각적 요소가 중요하다고 판단하여{' '}
        <strong>직접 캐릭터를 제작하고 게임 상황에 맞는 화면을 기획</strong>했습니다.
      </>
    ),
    // \n또한 다양한 디바이스에서 사용할 수 있도록 반응형으로 업데이트를 진행했습니다`,
    skills: ['JavaScript', 'HTML', 'CSS', 'SASS', 'Parcel'],
    link: 'https://jinny-game.netlify.app/',
    github: 'https://github.com/hyeminem-Jo/Jinny-game',
  },
];

const SideProjects = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const wrapperRef = useRef<HTMLUListElement | null>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof sideProjectsList)[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile, isLoaded } = useIsMobile();

  const handleOpenModal = (project: (typeof sideProjectsList)[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // 애니메이션 대상 요소의 원본 스타일을 저장
  useEffect(() => {
    if (typeof window !== 'undefined' && isLoaded) {
      ScrollTrigger.saveStyles('.my-projects-section, .my-projects-section *');
    }
  }, [isLoaded]);

  useGSAP(() => {
    if (!isLoaded) return;
    if (!sectionRef.current || !wrapperRef.current) return;

    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${BREAKPOINT + 1}px)`, () => {
      const section = sectionRef.current;
      const wrapper = wrapperRef.current;
      const sections = gsap.utils.toArray<HTMLLIElement>('.my-projects-section');

      if (!section || !wrapper || sections.length === 0) return;

      const gap = 70;
      const boxWidth = 800;
      const viewportWidth = window.innerWidth;

      const wrapperRect = wrapper.getBoundingClientRect();
      const wrapperLeft = wrapperRect.left;
      const centerOffset = (viewportWidth - boxWidth) / 2 - wrapperLeft;

      gsap.set(wrapper, { x: centerOffset });

      const totalSections = sections.length;
      const scrollDistance = (boxWidth + gap) * (totalSections - 1);

      const snapPoints = sections.map((_, index) => index / (totalSections - 1));

      const animation = gsap.to(wrapper, {
        x: centerOffset - scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollDistance + viewportWidth}`,
          pin: true,
          scrub: 0.5,
          snap: {
            snapTo: (progress) => {
              // 가장 가까운 snap 포인트 찾기
              let closest = snapPoints[0];
              let minDistance = Math.abs(progress - snapPoints[0]);

              snapPoints.forEach((point) => {
                const distance = Math.abs(progress - point);
                if (distance < minDistance) {
                  minDistance = distance;
                  closest = point;
                }
              });

              return closest;
            },
            duration: { min: 0.1, max: 0.3 }, // 빠른 snap
            delay: 0,
          },
          invalidateOnRefresh: true,
        },
      });

      ScrollTrigger.refresh();

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === section) {
            trigger.kill();
          }
        });
      };
    });

    return () => mm.revert();
  }, [isLoaded]);

  return (
    <S.SideProjects id='my-projects' ref={sectionRef}>
      <Inner>
        <Title text={`MY ✨ \nPROJECTS`} />
      </Inner>
      <S.SideProjectsInner ref={wrapperRef}>
        {sideProjectsList.map((item, index) => (
          <S.SideProjectsInnerBox key={`${item.title}-${index}`} className='my-projects-section'>
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
                <S.SideProjectsSkillsButton onClick={() => handleOpenModal(item)}>
                  Detail
                </S.SideProjectsSkillsButton>
                <S.SideProjectsSkillsLink
                  href={item.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Demo
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
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedProject?.title}
        size='lg'
        isDetailModal={true}
      >
        {selectedProject && (
          <S.ModalContent>
            <S.ModalImageWrap>
              <S.ModalImage
                src={selectedProject.image}
                alt={selectedProject.title}
                width={800}
                height={500}
              />
            </S.ModalImageWrap>
            <S.ModalSectionWrap>
              <S.ModalSection>
                <S.ModalSectionTitle>💫 About</S.ModalSectionTitle>
                <S.ModalDescription>{selectedProject.introduction}</S.ModalDescription>
                <S.ModalFuncList>
                  {selectedProject.funcList.map((func, index) => (
                    <S.ModalFuncListItem key={index}>
                      <S.ModalFuncListItemText>{func}</S.ModalFuncListItemText>
                    </S.ModalFuncListItem>
                  ))}
                </S.ModalFuncList>
              </S.ModalSection>
              <S.ModalSection>
                <S.ModalSectionTitle>⚙️ Skills</S.ModalSectionTitle>
                <S.ModalSkills>
                  {selectedProject.skills.map((skill, index) => (
                    <S.SkillTag key={`${skill}-${index}`}>{skill}</S.SkillTag>
                  ))}
                </S.ModalSkills>
              </S.ModalSection>
              <S.ModalSection>
                <S.ModalSectionTitle>💡 Meaningful Point</S.ModalSectionTitle>
                <S.ModalMeaningfulPoint>{selectedProject.meaningfulPoint}</S.ModalMeaningfulPoint>
              </S.ModalSection>
              <S.ModalSection>
                <S.ModalSectionTitle>🔗 Links</S.ModalSectionTitle>
                <S.ModalLinks>
                  <Button isLink href={selectedProject.link} text='View Demo' size='sm' />
                  <Button isLink href={selectedProject.github} text='GitHub' size='sm' />
                </S.ModalLinks>
              </S.ModalSection>
            </S.ModalSectionWrap>
          </S.ModalContent>
        )}
      </Modal>
    </S.SideProjects>
  );
};

export default SideProjects;
