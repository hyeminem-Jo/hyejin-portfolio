'use client';

import React, { useRef, useState, useEffect } from 'react';
import { companyList } from '@/app/_data/companyList';
import { Company, Project, ProblemSolving, MainFunction, FunctionDesc } from '@/app/_constant/type';
import * as S from './styled';
import Image from 'next/image';
import ScrollTop from '@/app/_modules/common/scroll-top/ScrollTop';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Modal from '@/app/_modules/common/modal/Modal';
import { FaChevronRight } from 'react-icons/fa';
import WorkDetailNavigation from './work-detail-navigation/WorkDetailNavigation';

const WorkDetail = ({ id }: { id: string }) => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const visualRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  let targetProject: Project | null = null;
  let targetCompany: Company | null = null;

  for (const company of companyList) {
    const project = company.projectList.find((p) => p.id === Number(id));
    if (project) {
      targetProject = project;
      targetCompany = company;
      break;
    }
  }

  if (!targetProject) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  const formatText = (text: string) => {
    return text?.split(/(\[[^\]]+\]|<[^>]+>)/).map((part: string, index: number) => {
      if (part?.match(/^\[[^\]]+\]$/)) {
        return <S.CodeStyle key={index}>{part.slice(1, -1)}</S.CodeStyle>;
      } else if (part?.match(/^<[^>]+>$/)) {
        return <S.BoldStyle key={index}>{part.slice(1, -1)}</S.BoldStyle>;
      } else {
        return part;
      }
    });
  };

  const getAllProjects = () => {
    const allProjects: Array<{ project: Project; company: Company }> = [];
    companyList.forEach((company) => {
      company.projectList.forEach((project) => {
        allProjects.push({ project, company });
      });
    });

    return allProjects.sort((a, b) => a.project.id - b.project.id);
  };

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((item) => item.project.id === Number(id));
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  // 페이지 진입 시 스크롤을 맨 위로 이동 (모바일 대응)
  useEffect(() => {
    // 즉시 스크롤 위치 초기화
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 모바일에서 스크롤 복원 방지를 위한 짧은 시간 동안 스크롤 위치 모니터링
    const scrollCheck = setInterval(() => {
      if (
        window.scrollY > 0 ||
        document.documentElement.scrollTop > 0 ||
        document.body.scrollTop > 0
      ) {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }, 10);

    setTimeout(() => {
      clearInterval(scrollCheck);
    }, 500);

    return () => {
      clearInterval(scrollCheck);
    };
  }, [id]);

  useEffect(() => {
    document.body.style.overscrollBehavior = 'none';
    document.documentElement.style.overscrollBehavior = 'none';

    return () => {
      document.body.style.overscrollBehavior = '';
      document.documentElement.style.overscrollBehavior = '';
    };
  }, []);

  useGSAP(() => {
    if (!bgRef.current || !visualRef.current || !contentRef.current || !targetProject) return;

    const bg = bgRef.current;
    const imageUrl = targetProject.projectDetailImage;

    if (imageUrl) {
      bg.style.backgroundImage = `url(${imageUrl})`;
      bg.style.backgroundPosition = '50% 50%';

      // visualRef에 pin 적용
      ScrollTrigger.create({
        trigger: visualRef.current,
        start: 'top top',
        pin: true,
        pinSpacing: false,
      });

      // 패럴랙스 효과
      gsap.to(bg, {
        backgroundPosition: `50% ${-window.innerHeight / 2}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: visualRef.current,
          start: 'bottom bottom',
          scrub: true,
        },
      });

      // contentRef에 pin 적용
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: 'top top',
        end: 'top bottom',
        pin: true,
        pinSpacing: false,
      });

      gsap.to(introRef.current, {
        yPercent: -500,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });
    }
  }, [targetProject]);

  return (
    <S.WorkDetailContainer ref={containerRef}>
      <S.WorkDetailVisual ref={visualRef}>
        <S.WorkDetailImageBg ref={bgRef} />
        <S.WorkDetailIntro ref={introRef}>
          <S.ProjectTitle>{targetProject.projectName}</S.ProjectTitle>
          <S.ProjectInfoList>
            <S.ProjectInfoListInner>
              <S.ProjectInfoItem>
                <S.ProjectInfoTitle>작업 기간</S.ProjectInfoTitle>
                <S.ProjectInfoDesc>{targetProject.projectPeriod}</S.ProjectInfoDesc>
              </S.ProjectInfoItem>
              <S.ProjectInfoItem>
                <S.ProjectInfoTitle>업무/기여도</S.ProjectInfoTitle>
                <S.ProjectInfoDesc>
                  {targetProject.projectRole} / {targetProject.projectContribution}
                </S.ProjectInfoDesc>
              </S.ProjectInfoItem>
              {targetProject.projectLink && (
                <S.ProjectInfoItem>
                  <S.ProjectInfoTitle>링크</S.ProjectInfoTitle>
                  <S.ProjectInfoDesc>
                    {Array.isArray(targetProject.projectLink) ? (
                      targetProject.projectLink.map((link, index) => (
                        <React.Fragment key={index}>
                          {index > 0 && <br />}
                          <S.ProjectInfoDescLink
                            href={link}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {link}
                          </S.ProjectInfoDescLink>
                        </React.Fragment>
                      ))
                    ) : (
                      <S.ProjectInfoDescLink
                        href={targetProject.projectLink}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {targetProject.projectLink}
                      </S.ProjectInfoDescLink>
                    )}
                  </S.ProjectInfoDesc>
                </S.ProjectInfoItem>
              )}
            </S.ProjectInfoListInner>
            <S.ProjectInfoListInner>
              <S.ProjectInfoItem>
                <S.ProjectInfoTitle>기기 환경</S.ProjectInfoTitle>
                <S.ProjectInfoDesc>{targetProject.projectDevice}</S.ProjectInfoDesc>
              </S.ProjectInfoItem>
              <S.ProjectInfoItem>
                <S.ProjectInfoTitle>사용 기술</S.ProjectInfoTitle>
                <S.SkillList>
                  {targetProject.skillList.map((skill: string, index: number) => (
                    <S.SkillTag key={index}>{skill}</S.SkillTag>
                  ))}
                </S.SkillList>
              </S.ProjectInfoItem>
            </S.ProjectInfoListInner>
          </S.ProjectInfoList>
        </S.WorkDetailIntro>
      </S.WorkDetailVisual>
      <S.WorkDetailContentBg ref={contentRef}>
        {/* <S.WorkDetailHeader>
          <S.WorkDetailThumbnail
            src={targetProject.projectDetailImage}
            alt={targetProject.projectName}
            width={550}
            height={350}
            priority={true}
            placeholder='blur'
            blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTUwIiBoZWlnaHQ9IjM1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZjlmYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlOWVjZWY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZjlmYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZGllbnQpIiAvPgo8L3N2Zz4='
            quality={85}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
          <S.WorkDetailIntro>
            <S.ProjectTitle>{targetProject.projectName}</S.ProjectTitle>
            <S.ProjectInfoList>
              {targetProject.projectLink && (
                <S.ProjectInfoItem>
                  <S.ProjectInfoTitle>링크</S.ProjectInfoTitle>
                  <S.ProjectInfoDesc>
                    {Array.isArray(targetProject.projectLink) ? (
                      targetProject.projectLink.map((link, index) => (
                        <div key={index}>
                          <Link
                            href={link}
                            style={{ color: '#007bff', wordBreak: 'break-all' }}
                            target='_blank'
                            rel='noopener noreferrer'
                          >
                            {link}
                          </Link>
                          {index < targetProject.projectLink!.length - 1 && <br />}
                        </div>
                      ))
                    ) : (
                      <Link
                        href={targetProject.projectLink}
                        style={{ color: '#007bff', wordBreak: 'break-all' }}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {targetProject.projectLink}
                      </Link>
                    )}
                  </S.ProjectInfoDesc>
                </S.ProjectInfoItem>
              )}

              <S.ProjectInfoItem>
                <S.ProjectInfoTitle>작업 기간</S.ProjectInfoTitle>
                <S.ProjectInfoDesc>{targetProject.projectPeriod}</S.ProjectInfoDesc>
              </S.ProjectInfoItem>
              <S.ProjectInfoItem>
                <S.ProjectInfoTitle>업무/기여도</S.ProjectInfoTitle>
                <S.ProjectInfoDesc>
                  {targetProject.projectRole} / {targetProject.projectContribution}
                </S.ProjectInfoDesc>
              </S.ProjectInfoItem>
              <S.ProjectInfoItem>
                <S.ProjectInfoTitle>기기 환경</S.ProjectInfoTitle>
                <S.ProjectInfoDesc>{targetProject.projectDevice}</S.ProjectInfoDesc>
              </S.ProjectInfoItem>
              <S.ProjectInfoItem>
                <S.ProjectInfoTitle>사용 기술</S.ProjectInfoTitle>
                <S.SkillList>
                  {targetProject.skillList.map((skill: string, index: number) => (
                    <S.SkillTag key={index}>{skill}</S.SkillTag>
                  ))}
                </S.SkillList>
              </S.ProjectInfoItem>
            </S.ProjectInfoList>
          </S.WorkDetailIntro>
        </S.WorkDetailHeader> */}

        <S.WorkDetailContentWrap>
          <S.WorkDetailContent>
            <S.Section>
              <S.SectionTitle>개요</S.SectionTitle>
              <S.ProjectDescription>
                {formatText(targetProject.projectDescDetail || '')}
              </S.ProjectDescription>
            </S.Section>

            <S.Section>
              <S.SectionTitle>진행 방식</S.SectionTitle>
              <S.ProjectDescription>
                {formatText(targetProject.projectProcess || '')}
              </S.ProjectDescription>
            </S.Section>

            <S.Section>
              <S.SectionTitle>주요 작업 내용</S.SectionTitle>
              <S.FunctionList>
                {targetProject.projectMainFunction?.map((func: MainFunction, index: number) => (
                  <S.FunctionItem key={index}>
                    <S.FunctionPage>{func.page}</S.FunctionPage>
                    {func.desc && func.desc.length > 0 && (
                      <S.FunctionDescList>
                        {func.desc?.map((descItem: FunctionDesc, descIndex: number) => (
                          <S.FunctionDescItem key={descIndex}>
                            <S.FunctionMainDesc>
                              {formatText(descItem.mainDesc)}{' '}
                              {descItem.pageLink && (
                                <S.StyleLink
                                  href={descItem.pageLink}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  📄 페이지 링크
                                </S.StyleLink>
                              )}
                              {descItem.blogLink && (
                                <S.StyleLink
                                  href={descItem.blogLink}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  Blog
                                  <FaChevronRight />
                                </S.StyleLink>
                              )}
                            </S.FunctionMainDesc>
                            {descItem.subDesc && descItem.subDesc.length > 0 && (
                              <S.FunctionSubDescList>
                                {descItem.subDesc.map(
                                  (
                                    sub: string | { desc: string; blogLink: string },
                                    subIndex: number,
                                  ) => (
                                    <S.FunctionSubDesc key={subIndex}>
                                      - {formatText(typeof sub === 'string' ? sub : sub.desc)}{' '}
                                      {typeof sub === 'object' && sub.blogLink && (
                                        <S.StyleLink
                                          href={sub.blogLink}
                                          target='_blank'
                                          rel='noopener noreferrer'
                                        >
                                          Blog
                                          <FaChevronRight />
                                        </S.StyleLink>
                                      )}
                                    </S.FunctionSubDesc>
                                  ),
                                )}
                              </S.FunctionSubDescList>
                            )}
                          </S.FunctionDescItem>
                        ))}
                      </S.FunctionDescList>
                    )}
                  </S.FunctionItem>
                ))}
              </S.FunctionList>
            </S.Section>

            {targetProject.projectProblemSolving &&
              targetProject.projectProblemSolving.length > 0 && (
                <S.Section>
                  <S.SectionTitle>💫 Trouble shooting</S.SectionTitle>
                  <S.ProjectProblemSolvingList>
                    {targetProject.projectProblemSolving?.map((problem: ProblemSolving) => (
                      <S.ProjectProblemSolvingItem key={problem.title}>
                        <S.ProjectProblemSolvingTitle>{problem.title}</S.ProjectProblemSolvingTitle>
                        <S.ProjectProblemAndSolving>
                          <strong>문제:</strong> {formatText(problem.problem)}
                        </S.ProjectProblemAndSolving>
                        <S.ProjectProblemAndSolving>
                          <strong>해결:</strong> {formatText(problem.solving)}{' '}
                          {problem.blogLink && (
                            <S.StyleLink
                              href={problem.blogLink}
                              target='_blank'
                              rel='noopener noreferrer'
                            >
                              Blog
                              <FaChevronRight />
                            </S.StyleLink>
                          )}
                        </S.ProjectProblemAndSolving>
                      </S.ProjectProblemSolvingItem>
                    ))}
                  </S.ProjectProblemSolvingList>
                </S.Section>
              )}

            {targetProject.projectImgList && targetProject.projectImgList.length > 0 && (
              <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                size='lg'
                showCloseButton={true}
                closeOnOverlayClick={true}
                isImageModal={true}
                imageList={targetProject.projectImgList}
                currentImageIndex={currentImageIndex}
                onImageChange={setCurrentImageIndex}
              />
            )}
          </S.WorkDetailContent>
        </S.WorkDetailContentWrap>
        <S.WorkDetailContentBottom>
          {targetProject.projectImgList && targetProject.projectImgList.length > 0 && (
            <S.WorkDetailContentBottomWrap>
              <S.WorkDetailContentBottomTitle>📸 Images</S.WorkDetailContentBottomTitle>
              <S.ImageGridContainer>
                {targetProject.projectImgList.map((imageUrl: string, index: number) => (
                  <S.ImageCard
                    key={index}
                    $isActive={currentImageIndex === index}
                    onClick={() => {
                      setCurrentImageIndex(index);
                      setIsModalOpen(true);
                    }}
                  >
                    <Image
                      src={imageUrl}
                      alt={`화면 이미지 ${index + 1}`}
                      width={300}
                      height={200}
                      style={{ objectFit: 'cover' }}
                      quality={80}
                      placeholder='blur'
                      blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZjlmYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlOWVjZWY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZjlmYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZGllbnQpIiAvPgo8L3N2Zz4='
                      sizes='(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px'
                      onError={(e) => {
                        console.error('이미지 로드에 실패했습니다.', imageUrl);
                      }}
                    />
                  </S.ImageCard>
                ))}
              </S.ImageGridContainer>
            </S.WorkDetailContentBottomWrap>
          )}
          <WorkDetailNavigation
            prevProject={prevProject}
            nextProject={nextProject}
            currentProjectName={targetProject.projectName}
          />
        </S.WorkDetailContentBottom>
      </S.WorkDetailContentBg>

      <ScrollTop />
    </S.WorkDetailContainer>
  );
};

export default WorkDetail;
