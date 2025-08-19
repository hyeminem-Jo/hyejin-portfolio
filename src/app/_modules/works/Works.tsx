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

const companyList = [
  {
    name: '넥스트컬쳐',
    companyLogo: '/assets/images/logo/nextculture-logo.ico',
    companyPeriod: '2024.10 - 2025.07',
    projectList: [
      {
        projectName: '소플 고도화 2차',
        projectDesc:
          '상공업의 경쟁력 강화와 기업의 경제 발전을 지원하는 대한상공회의소 소통플랫폼의 전반적인 신규 기능 및 디자인 개편 고도화 작업을 2차로 진행하였습니다. \n 메인페이지 외 다양한 페이지 구현 및 디자인 개편 작업을 진행하였습니다.',
        projectPeriod: '2025.05 - 2025.07',
        skillList: ['React', 'Next.js', 'TypeScript', 'Redux', 'Emotion'],
        projectWorkList: [
          '메인 페이지를 담당하여 메인피드 화면을 구현하였으며, 메인 피드, 실시간 알림 배너 및 카드 배너 기능 등을 구현',
          '설문을 통해 사용자의 성향을 분석하고, 결과값에 따라 데이터를 조회하거나 조건부로 화면이 변경되는 기능 구현',
          '투표 기능이 있는 게시글의 경우 OX 퀴즈, 정답 여부의 퀴즈를 통해 사용자의 투표 결과를 조회하고, 투표 결과에 따라 화면이 변경되는 기능 구현',
          'Story book 을 도입하여 팀원간의 컴포넌트 공유 및 디자인 통일성 유지',
        ],
        projectLink: 'https://sople.me/',
        projectImgList: [],
      },
      {
        projectName: '소플 고도화 1차',
        projectDesc:
          '대한상의 플랫폼인 소플에 AI 기능 도입을 위한 고도화 작업을 1차로 진행하였습니다. \n AI 검색 기능 및 AI 글쓰기 신규 구현 및 경제뉴스룸 페이지 고도화를 진행하였습니다.',
        projectPeriod: '2025.03 - 2025.04',
        skillList: ['React', 'Next.js', 'TypeScript', 'Styled-components'],
        projectWorkList: [
          '검색기능에서 대한상의에서 제공되는 자료를 바탕으로 한 ai와 일반 (gpt-o) 기반의 ai 검색 결과를 조회 및 반응하는 기능 구현',
          'AI 글쓰기에서 사용자가 원하는 방향에 따른 AI 글 혹은 투표 내용을 받아온 후 게시글을 업로드할 수 있는 기능 구현',
          '경제뉴스룸 목록에 검색 기능 추가 및 상세페이지에 신규 기능을 추가하여 더 사용성이 풍부한 페이지로 구현',
          'Redux를 통한 중앙데이터를 관리하는 과정에서 불필요한 리렌더링이 일어나는 부분을 발견 후 문제 해결',
        ],
        projectImgList: [
          '/assets/images/works/sople1/sople1-07.png',
          '/assets/images/works/sople1/sople1-05.png',
          '/assets/images/works/sople1/sople1-01.png',
          '/assets/images/works/sople1/sople1-02.png',
          '/assets/images/works/sople1/sople1-03.png',
          '/assets/images/works/sople1/sople1-04.png',
          '/assets/images/works/sople1/sople1-06.png',
          '/assets/images/works/sople1/sople1-08.png',
          '/assets/images/works/sople1/sople1-09.png',
          '/assets/images/works/sople1/sople1-10.png',
          '/assets/images/works/sople1/sople1-11.png',
          '/assets/images/works/sople1/sople1-12.png',
          '/assets/images/works/sople1/sople1-13.png',
          '/assets/images/works/sople1/sople1-14.png',
          '/assets/images/works/sople1/sople1-15.png',
        ],
      },
      {
        projectName: 'YEEP 구축',
        projectDesc:
          '노스페이스 회사 필리핀지사의 전 사원을 관리할 수 있는 프로그램의 사용자 앱 및 관리자 페이지 구축을 진행하였습니다.',
        projectPeriod: '2025.02 - 2025.04',
        skillList: ['React', 'React Native', 'TypeScript', 'Tailwind CSS'],
        projectWorkList: [
          '사용자 앱에서 사용자의 정보 및 공지사항, 회사 소식 등 페이지별 게시글을 조회하는 기능 구현',
          '관리자 페이지는 웹으로 진행되었으며 사용자 앱의 데이터를 검색,조회하고 관리할 수 있는 기능 구현',
          'Chart.js를 활용하여 사용자 앱의 데이터를 시각화하여 표시하는 기능 구현',
        ],
        projectImgList: [
          '/assets/images/works/yeep/yeep-06.png',
          '/assets/images/works/yeep/yeep-01.png',
          '/assets/images/works/yeep/yeep-02.png',
          '/assets/images/works/yeep/yeep-03.png',
          '/assets/images/works/yeep/yeep-04.png',
          '/assets/images/works/yeep/yeep-05.png',
          '/assets/images/works/yeep/yeep-07.png',
          '/assets/images/works/yeep/yeep-08.png',
          '/assets/images/works/yeep/yeep-09.png',
          '/assets/images/works/yeep/yeep-10.png',
          '/assets/images/works/yeep/yeep-11.png',
          '/assets/images/works/yeep/yeep-12.png',
          '/assets/images/works/yeep/yeep-13.png',
          '/assets/images/works/yeep/yeep-14.png',
        ],
      },
      {
        projectName: '자사 홈페이지 구축',
        projectDesc: '오래된 자사 홈페이지를 리뉴얼하고자 구축을 진행하였습니다.',
        projectPeriod: '2025.01 - 2025.02',
        skillList: ['React', 'Styled-components'],
        projectWorkList: [
          '회사에 대한 정보를 제공하며, 탭 및 스크롤 인터렉션을 활용하여 사용자가 쉽게 정보를 확인할 수 있도록 구현',
          '모바일 환경을 고려하여 반응형 디자인 구현',
        ],
        projectImgList: [
          '/assets/images/works/homepage/hompage-01.png',
          '/assets/images/works/homepage/hompage-02.png',
          '/assets/images/works/homepage/hompage-03.png',
          '/assets/images/works/homepage/hompage-04.png',
          '/assets/images/works/homepage/hompage-05.png',
        ],
      },
      {
        projectName: 'KCMF 사용자/관리자 페이지 구축',
        projectDesc:
          '시청자미디어재단에서 참여형 방송 문화를 위해 시청자가 방송사를 선택하여 직접 프로그램을 제작 및 신청할 수 있는 플랫폼이며, 사용자 및 관리자 페이지를 구축하였습니다.',
        projectPeriod: '2024.10 - 2025.01',
        skillList: ['React', 'Next.js', 'TypeScript', 'Redux', 'Styled-components'],
        projectWorkList: [
          '프로그램 신청 페이지, 방송사 선택페이지, 마이페이지, 공지사항 등 사용자 페이지 구현',
          '콘텐츠 업로드를 비롯하여 회원가입, 본인인증, 회원정보 수정 등 회원 관리 기능 구현',
          '관리자 페이지에서는 회원 관리, 프로그램 관리, 방송사 관리 등 관리자 페이지 구현',
        ],
        projectLink: 'https://pa.kcmf.or.kr/',
        projectImgList: [
          '/assets/images/works/kcmf/kcmf-01.png',
          '/assets/images/works/kcmf/kcmf-02.png',
          '/assets/images/works/kcmf/kcmf-03.png',
          '/assets/images/works/kcmf/kcmf-04.png',
          '/assets/images/works/kcmf/kcmf-05.png',
          '/assets/images/works/kcmf/kcmf-06.png',
          '/assets/images/works/kcmf/kcmf-07.png',
          '/assets/images/works/kcmf/kcmf-08.png',
          '/assets/images/works/kcmf/kcmf-09.png',
          '/assets/images/works/kcmf/kcmf-10.png',
          '/assets/images/works/kcmf/kcmf-11.png',
          '/assets/images/works/kcmf/kcmf-12.png',
          '/assets/images/works/kcmf/kcmf-13.png',
          '/assets/images/works/kcmf/kcmf-14.png',
          '/assets/images/works/kcmf/kcmf-15.png',
        ],
      },
    ],
  },
  {
    name: '이모션글로벌',
    companyLogo: '/assets/images/logo/emotion-logo.png',
    companyPeriod: '2022.07 - 2024.09',
    projectList: [
      {
        projectName: '신세계 백화점 구축 및 운영',
        projectDesc:
          '100만명 이상의 활동 고객을 보유한 신세계 백화점의 APP을 비롯한 WEB, 어드민 운영을 진행하였습니다.',
        projectPeriod: '2023.12 - 2024.09',
        skillList: ['React', 'Next.js', 'TypeScript', 'Styled-components', 'Redux', 'React-Query'],
        projectWorkList: [
          'APP 사용자의 메인페이지/온보딩페이지 ui/ux 개선 작업 진행하였으며, \n커뮤니티 페이지의 기존 axios 처리방식에서 리액트 쿼리로 대체하여 캐싱 및 손쉬운 업데이트로 성능 개선',
          'APP 어드민 페이지에서 이벤트 폼 입력기능 및 팝업 기능 개선 작업 진행',
          'APP 이벤트 페이지 구현 및 운영',
          'WEB 홈페이지 및 매거진, 켐페인 페이지 퍼블리싱 및 인터렉션 구현',
        ],
        projectImgList: [
          '/assets/images/works/sinsegae/sinsegae-01.jpg',
          '/assets/images/works/sinsegae/sinsegae-02.png',
          '/assets/images/works/sinsegae/sinsegae-03.png',
          '/assets/images/works/sinsegae/sinsegae-04.png',
          '/assets/images/works/sinsegae/sinsegae-05.jpg',
          '/assets/images/works/sinsegae/sinsegae-06.png',
          '/assets/images/works/sinsegae/sinsegae-07.gif',
          '/assets/images/works/sinsegae/sinsegae-08.png',
          '/assets/images/works/sinsegae/sinsegae-09.jpg',
          '/assets/images/works/sinsegae/sinsegae-10.png',
          '/assets/images/works/sinsegae/sinsegae-11.png',
          '/assets/images/works/sinsegae/sinsegae-12.png',
        ],
      },
      {
        projectName: '삼성전자 비스포크 웨딩 펀딩 캠페인 사이트 구축',
        projectDesc:
          '비스포크 웨딩 펀딩(BESPOKE Wedding FUNding) 은 삼성전자가 신혼부부의 새로운 시작을 응원하는 캠페인입니다. \n캠페인에 참여한 예비 부부를 대상으로 웨딩 펀딩 프로그램에 필요한 기능들을 구현하였습니다.',
        projectPeriod: '2023.08 - 2023.10',
        skillList: ['React', 'Next.js', 'Emotion'],
        projectWorkList: [
          '축하금 관리, 약관, 회원정보 수정 및 등록 기능 구현',
          '축하금 기한 정보를 변경하는 부분에서 react-hook-form 을 이용하여 select box, input 기능 구현',
        ],
        projectImgList: [
          '/assets/images/works/wedding/wedding-01.png',
          '/assets/images/works/wedding/wedding-02.png',
          '/assets/images/works/wedding/wedding-03.png',
          '/assets/images/works/wedding/wedding-04.png',
          '/assets/images/works/wedding/wedding-05.png',
          '/assets/images/works/wedding/wedding-06.png',
          '/assets/images/works/wedding/wedding-07.png',
          '/assets/images/works/wedding/wedding-08.png',
        ],
      },
      {
        projectName: '자사 업무관리 프로그램(PMS) 구축 및 운영',
        projectDesc:
          '사원 정보, 업무일지 및 프로젝트 진행현황을 파악할 수 있는 어드민 페이지입니다. 현재 본인이 속한 파트 뿐만이 아닌 다른 파트에서도 어떤 업무가 진행중인지 한 눈에 알 수 있고, 프로젝트에 대한 현황 정보가 객관적인 지표로 표시되어 있습니다. 반응형으로 대응하였으며 구축 및 운영을 진행하였습니다',
        projectPeriod: '2023.05 - 2023.11',
        skillList: ['React', 'Next.js', 'Emotion'],
        projectWorkList: [
          '업무 등록, 업무 일지 작성 페이지 구현 및 이메일 서명 기능 구현 및 배포',
          '프로젝트, 참여자, 등급 등을 한 눈에 알아볼 수 있도록 엑셀 프로그램과 유사한 형태로 구현',
        ],
        projectImgList: [
          '/assets/images/works/pms/pms-01.jpg',
          '/assets/images/works/pms/pms-02.png',
          '/assets/images/works/pms/pms-03.png',
          '/assets/images/works/pms/pms-04.jpg',
          '/assets/images/works/pms/pms-05.jpg',
        ],
      },
      {
        projectName: '삼성 지속가능성경영 사이트 운영',
        projectDesc:
          '환경, 사회, 거버넌스 분야에 걸쳐 삼성전자의 전략과 주요 성과를 담은 보고서 형식의 웹사이트',
        projectPeriod: '2023.04 - 2023.12',
        skillList: ['javascript', 'jQuery', 'scss'],
        projectWorkList: [
          '지속가능경영 메인 및 서브페이지 운영 및 구축',
          '세로 슬라이드 페이지, 캠페인 참여 입력폼 페이지 등 새로운 기능이 추가된 페이지 구현',
          '웹표준 및 웹접근성 작업 (background 로 삽입된 이미지 처리, 스크린 리더기 등)',
        ],
        projectLink: 'https://www.samsung.com/sec/sustainability/main/',
        projectImgList: [
          // '/assets/images/works/pms/pms-01.jpg',
          // '/assets/images/works/pms/pms-02.png',
          // '/assets/images/works/pms/pms-03.png',
          // '/assets/images/works/pms/pms-04.jpg',
          // '/assets/images/works/pms/pms-05.jpg',
        ],
      },
      {
        projectName: '자사(이모션글로벌) 홈페이지 고도화',
        projectDesc:
          '자회사인 이모션 글로벌 홈페이지이며, 본사에 대한 정보, 포트폴리오, 의뢰 서비스, 입사지원 서비스 등을 제공하는 웹사이트 입니다. 고도화 및 운영 업무를 진행하였습니다.',
        projectPeriod: '2022.11 - 2023.02',
        skillList: ['Vue.js', 'Nuxt.js', 'SWR', 'Emotion', 'scss'],
        projectWorkList: [
          '퍼블리싱 및 인터렉션 구현, 상세 데이터 조회 및 수정/등록 기능 구현',
          '메인 페이지 외 서브페이지(회사소개 페이지, 입사 지원 페이지 등) 고도화 작업 (적응형)',
        ],
        projectLink: 'https://www.emotion.co.kr/',
      },
      {
        projectName: '대상 사이트(종가, 오푸드) 운영',
        projectDesc:
          '종가(JONGGA)와 오푸드(O’Food)는 대상의 글로벌 브랜드로, 제품의 통합 커뮤니케이션 플랫폼입니다. 고도화 및 운영 업무를 진행하였습니다.',
        projectPeriod: '2022.08 - 2022.12',
        skillList: ['Vue.js', 'Nuxt.js', 'SWR', 'Emotion', 'scss'],
        projectWorkList: [
          'jsp 환경에서 css, jQuery 를 사용하여 작업, 종가 /오푸드 메인 및 서브페이지 퍼블리싱 및 인터렉션 구현',
        ],
        projectLink: 'https://ofoodglobal.com/',
      },
      {
        projectName: '메타클럽 프로젝트 구축',
        projectDesc:
          '메타클럽은 상품권 전환 및 포인트를 충전할 수 있는 포인트 테크 플랫폼으로, 문화상품권, 도서문화상품권의 핀번호를 등록하여 다양한 곳에서 사용할 수 있게 해줍니다. 구축으로 진행되었습니다.',
        projectPeriod: '2022.08 - 2022.11',
        skillList: ['Vue.js', 'Nuxt.js', 'SWR', 'scss'],
        projectWorkList: [
          '포인트 충전 및 포인트 전환 페이지 개발 및 퍼블리싱 구현 (상품권 갯수 입력, PIN 번호 입력칸 및 입력 제한 기능 구현 등)',
        ],
        projectImgList: [
          '/assets/images/works/metapoint/metapoint-01.png',
          '/assets/images/works/metapoint/metapoint-02.png',
          '/assets/images/works/metapoint/metapoint-03.png',
          '/assets/images/works/metapoint/metapoint-04.png',
        ],
      },
    ],
  },
];

const Buttons = ({
  projectLink,
  projectImgList,
  onImageClick,
  isMobile,
}: {
  projectLink: string;
  projectImgList: string[];
  onImageClick: () => void;
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
      {projectImgList.length > 0 && !isMobile && (
        <Button size='sm' text='화면 보기' onClick={onImageClick} />
      )}
    </>
  );
};

const Works = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  const { isMobile } = useIsMobile(BREAKPOINT_SM);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleImageClick = (images: string[]) => {
    setSelectedImages(images);
    setIsImageModalOpen(true);
  };

  const handleCloseImageModal = () => {
    setIsImageModalOpen(false);
    setSelectedImages([]);
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
                            {!isMobile && (
                              <Buttons
                                projectLink={project.projectLink || ''}
                                projectImgList={project.projectImgList || []}
                                onImageClick={() => handleImageClick(project.projectImgList || [])}
                                isMobile={isMobile}
                              />
                            )}
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
                          {isMobile && (
                            <S.WorksButtonList>
                              <Buttons
                                projectLink={project.projectLink || ''}
                                projectImgList={project.projectImgList || []}
                                onImageClick={() => handleImageClick(project.projectImgList || [])}
                                isMobile={isMobile}
                              />
                            </S.WorksButtonList>
                          )}
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

      {/* 이미지 슬라이더 모달 */}
      <Modal
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
      </Modal>
    </S.Works>
  );
};

export default Works;
