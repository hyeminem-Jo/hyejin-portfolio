'use client';

import React from 'react';
import { companyList } from '@/app/_data/companyList';
import { Company, Project, ProblemSolving, MainFunction, FunctionDesc } from '@/app/_constant/type';
import * as S from './styled';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';

const WorkDetail = ({ id }: { id: string }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

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

  return (
    <S.WorkDetailContainer>
      <S.WorkDetailHeader>
        <S.WorkDetailThumbnail
          src={targetProject.projectThumbnail}
          alt={targetProject.projectName}
          width={550}
          height={350}
          priority={true}
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
                          style={{ color: '#007bff' }}
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
                      style={{ color: '#007bff' }}
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
            <S.ProjectInfoItem>
              <S.ProjectInfoTitle>소속 회사</S.ProjectInfoTitle>
              <S.ProjectInfoDesc>{targetCompany?.name}</S.ProjectInfoDesc>
            </S.ProjectInfoItem>
          </S.ProjectInfoList>
        </S.WorkDetailIntro>
      </S.WorkDetailHeader>

      <S.WorkDetailContent>
        <S.Section>
          <S.SectionTitle>프로젝트 개요</S.SectionTitle>
          <S.ProjectDescription>
            {formatText(targetProject.projectDescDetail || '')}
          </S.ProjectDescription>
        </S.Section>

        <S.Section>
          <S.SectionTitle>프로젝트 진행 방식</S.SectionTitle>
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
                              ▶️ 블로그 링크
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
                                      ▶️ 블로그 링크
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

        {targetProject.projectProblemSolving && targetProject.projectProblemSolving.length > 0 && (
          <S.Section>
            <S.SectionTitle>이슈 및 해결</S.SectionTitle>
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
                        ▶️ 블로그 보기
                      </S.StyleLink>
                    )}
                  </S.ProjectProblemAndSolving>
                </S.ProjectProblemSolvingItem>
              ))}
            </S.ProjectProblemSolvingList>
          </S.Section>
        )}

        {targetProject.projectImgList && targetProject.projectImgList.length > 0 && (
          <S.Section>
            <S.SectionTitle>프로젝트 이미지</S.SectionTitle>
            <S.ImageSliderContainer>
              <Slider {...sliderSettings}>
                {targetProject.projectImgList.map((imageUrl: string, index: number) => (
                  <S.SliderImage key={index}>
                    <Image
                      src={imageUrl}
                      alt={`화면 이미지 ${index + 1}`}
                      width={800}
                      height={600}
                      style={{ objectFit: 'contain' }}
                      priority={index === 0}
                      onError={(e) => {
                        console.error('이미지 로드에 실패했습니다.', imageUrl);
                      }}
                    />
                  </S.SliderImage>
                ))}
              </Slider>
            </S.ImageSliderContainer>
            {/* <S.ImageGrid>
              {targetProject.projectImgList.map((image: string, index: number) => (
                <S.ProjectImage
                  key={index}
                  src={image}
                  alt={`${targetProject.projectName} 이미지 ${index + 1}`}
                  width={400}
                  height={300}
                />
              ))}
            </S.ImageGrid> */}
          </S.Section>
        )}
      </S.WorkDetailContent>
    </S.WorkDetailContainer>
  );
};

export default WorkDetail;
