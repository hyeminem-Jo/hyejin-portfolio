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
import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { BREAKPOINT_SM } from '@/app/_constant/breakpoint';
import { companyList } from '@/app/_data/companyList';

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
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleImageClick = (images: string[]) => {
    setSelectedImages(images);
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImages([]);
  };

  const handleProjectClick = (project: any) => {
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

  return (
    <S.Works id='works'>
      <Inner>
        <Title text='WORK EXPERIENCE' isCenter />
        <S.WorksInner>
          <S.WorksInnerBox>
            <S.WorksCompanyList>
              {companyList.map((company) => (
                <div key={company.name}>
                  <S.CompanyHeader>
                    <S.CompanyLogo src={company.companyLogo} alt={company.name} />
                    <S.CompanyInfo>
                      <S.CompanyName>{company.name}</S.CompanyName>
                      <S.CompanyPeriod>{company.companyPeriod}</S.CompanyPeriod>
                    </S.CompanyInfo>
                  </S.CompanyHeader>
                  <S.WorksList>
                    {' '}
                    {company.projectList.map((project) => (
                      <S.WorksItem key={project.projectName}>
                        <S.WorksItemImage
                          src={
                            project?.projectThumbnail || (project?.projectImgList?.[0] as string)
                          }
                          alt={project.projectName}
                          width={400}
                          height={200}
                        />
                        <S.WorksItemOverview className='works-item-overview'>
                          <S.ProjectName style={{ color: 'white', margin: 0 }}>
                            {project.projectName}
                          </S.ProjectName>
                          <S.ProjectDesc>{project.projectDesc}</S.ProjectDesc>
                          <S.WorksItemLink href={`/work/${project.id}`}>Detail</S.WorksItemLink>
                        </S.WorksItemOverview>
                        <S.WorksItemInfo>
                          <S.ProjectName>{project.projectName}</S.ProjectName>
                          <S.ProjectPeriod>{project.projectPeriod}</S.ProjectPeriod>
                          {/* <S.SkillList>
                            {project.skillList.map((skill, index) => (
                              <S.SkillTag key={index}>{skill}</SSkillTag>
                            ))}
                          </S.SkillList> */}
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
        <S.ImageSliderContainer>
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
