'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Inner from '../common/layout/Inner';
import Title from '../common/title/Title';
import Button from '../common/button/Button';
import { useRouter } from 'next/navigation';
import { useIsMobile } from '../common/hooks/useIsMobile';
import Modal from '../common/modal/Modal';
import { useState, useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { BREAKPOINT_SM } from '@/app/_constant/breakpoint';
import { companyList } from '@/app/_data/companyList';
import { Project } from '@/app/_constant/type';

const Buttons = ({
  projectLink,
  projectImgList,
  onImageClick,
  onProjectClick,
  isMobile,
}: {
  projectLink: string;
  projectImgList: string[];
  onImageClick: () => void;
  onProjectClick: () => void;
  isMobile: boolean;
}) => {
  const router = useRouter();

  return (
    <>
      {projectLink && (
        <Button
          size='sm'
          text='Link'
          onClick={() => {
            window.open(projectLink, '_blank');
          }}
        />
      )}
      {/* {projectImgList.length > 0 && !isMobile && (
        <Button size='sm' text='화면 보기' onClick={onImageClick} />
      )} */}
      <Button size='sm' text='History' onClick={onProjectClick} />
    </>
  );
};

const Works = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const { isMobile } = useIsMobile(BREAKPOINT_SM);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCompanyIndex, setActiveCompanyIndex] = useState(0);
  const companyRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleImageClick = (images: string[]) => {
    setSelectedImages(images);
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImages([]);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  useGSAP(() => {
    if (isMobile) return;

    const triggers: ScrollTrigger[] = [];

    companyRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const trigger = ScrollTrigger.create({
        trigger: ref,
        start: 'top 20%',
        end: 'bottom 20%',
        onEnter: () => setActiveCompanyIndex(index),
        onEnterBack: () => setActiveCompanyIndex(index),
      });

      triggers.push(trigger);
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, [isMobile]);

  const activeCompany = companyList[activeCompanyIndex] || companyList[0];

  return (
    <S.Works id='work'>
      <Inner
        title={`WORKS`}
        stickyContent={
          <S.CompanyHeader>
            <S.CompanyLogo src={activeCompany.companyLogo} alt={activeCompany.name} />
            <S.CompanyInfo>
              <S.CompanyName>{activeCompany.name}</S.CompanyName>
              <S.CompanyPeriod>{activeCompany.companyPeriod}</S.CompanyPeriod>
            </S.CompanyInfo>
          </S.CompanyHeader>
        }
      >
        <S.WorksInner>
          <S.WorksInnerBox>
            <S.WorksCompanyList>
              {companyList.map((company, index) => (
                <div
                  key={company.name}
                  ref={(el) => {
                    companyRefs.current[index] = el;
                  }}
                >
                  <S.WorksList>
                    {' '}
                    {company.projectList.map((project) => (
                      <S.WorksItem key={project.projectName}>
                        <S.WorksItemImageWrap>
                          <S.WorksItemImage
                            src={
                              project?.projectThumbnail || (project?.projectImgList?.[0] as string)
                            }
                            alt={project.projectName}
                            width={400}
                            height={600}
                            placeholder='blur'
                            blurDataURL='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZGllbnQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjAlIj4KICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZjlmYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgICAgPHN0b3Agb2Zmc2V0PSI1MCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlOWVjZWY7c3RvcC1vcGFjaXR5OjEiIC8+CiAgICAgIDxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2Y4ZjlmYTtzdG9wLW9wYWNpdHk6MSIgLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgPC9kZWZzPgogIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhZGllbnQpIiAvPgo8L3N2Zz4='
                            quality={80}
                            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                          />
                        </S.WorksItemImageWrap>

                        <S.WorksItemOverview className='works-item-overview'>
                          <S.ProjectName style={{ color: 'white', margin: 0 }}>
                            {project.projectName}
                          </S.ProjectName>
                          <S.ProjectDesc>{project.projectDesc}</S.ProjectDesc>
                          <S.WorksItemLink href={`/work/${project.id}`}>View More</S.WorksItemLink>
                        </S.WorksItemOverview>
                        <S.WorksItemInfo>
                          <S.ProjectName>{project.projectName}</S.ProjectName>
                          <S.ProjectPeriod>{project.projectPeriod}</S.ProjectPeriod>
                        </S.WorksItemInfo>
                      </S.WorksItem>
                    ))}
                  </S.WorksList>
                </div>
              ))}
            </S.WorksCompanyList>
          </S.WorksInnerBox>
        </S.WorksInner>
      </Inner>

      {/* 이미지 슬라이더 모달 */}
      {/* <Modal
        title='화면 이미지'
        isOpen={isImageModalOpen}
        onClose={handleCloseImageModal}
        size='lg'
        showCloseButton={true}
        closeOnOverlayClick={true}
      >
        <S.ImageSliderContainer></S.ImageSliderContainer>
          <Slider {...sliderSettings}>
            {selectedImages.map((imageUrl, index) => (
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
      </Modal> */}
    </S.Works>
  );
};

export default Works;
