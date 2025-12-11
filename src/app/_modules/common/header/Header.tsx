'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import * as S from './styled';
import { useIsMobile } from '../hooks/useIsMobile';
import { usePathname, useRouter } from 'next/navigation';
import Button from '@/app/_modules/common/button/Button';
import { companyList } from '@/app/_data/companyList';

const menuItems = [
  { href: '#visual', text: 'HOME' },
  { href: '#about', text: 'ABOUT' },
  { href: '#skills', text: 'SKILLS' },
  { href: '#work', text: 'WORKS' },
  { href: '#my-projects', text: 'MY PROJECTS' },
];

const Header = () => {
  const { isMobile } = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('visual');
  const [isMenuScrolling, setIsMenuScrolling] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isWorkDetailPage = pathname?.startsWith('/work/');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getProjectNotionLink = () => {
    if (pathname.includes('/work/')) {
      const projectId = parseInt(pathname.split('/work/')[1]);
      for (const company of companyList) {
        const project = company.projectList.find((p) => p.id === projectId);
        if (project && project.projectNotionLink) {
          return project.projectNotionLink;
        }
      }
    }
    return null;
  };

  const notionLink = getProjectNotionLink();

  // 공통 스크롤 위치 계산 함수
  const calculateScrollPosition = (element: HTMLElement): number => {
    const headerHeight = isMobile ? 65 : 70;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop - headerHeight;
  };

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      setIsScrolled(scrollTop > 0);

      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          width: `${progress}%`,
          duration: 0.1,
          ease: 'none',
        });
      }

      if (isMenuScrolling) return;

      const sections = ['visual', 'about', 'skills', 'work', 'my-projects'];
      const headerHeight = isMobile ? 65 : 70;

      // 활성 섹션 즉시 업데이트 (메뉴 색상 변경)
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= headerHeight + 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // URL 해시 업데이트는 디바운스 적용
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        for (let i = sections.length - 1; i >= 0; i--) {
          const section = document.getElementById(sections[i]);
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= headerHeight + 100) {
              if (sections[i] === 'visual') {
                if (window.location.hash) {
                  window.history.replaceState(null, '', window.location.pathname);
                }
              } else {
                const newHash = `#${sections[i]}`;
                if (window.location.hash !== newHash) {
                  window.history.replaceState(null, '', newHash);
                }
              }
              break;
            }
          }
        }
      }, 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, [isMobile, isMenuScrolling]);

  // 페이지 로드 시 URL 해시에 따라 스크롤
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const performScroll = (element: HTMLElement) => {
        const targetPosition = calculateScrollPosition(element);

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
        setActiveSection(hash);
      };

      // 요소를 찾기 위해 재시도 로직 추가 (ScrollTrigger 초기화 대기)
      const attemptScroll = (retryCount = 0) => {
        const targetElement = document.getElementById(hash);

        if (targetElement) {
          performScroll(targetElement);
        } else if (retryCount < 10) {
          // 최대 10번까지 재시도 (약 1초)
          setTimeout(() => {
            attemptScroll(retryCount + 1);
          }, 100);
        }
      };

      // 초기 지연 후 시도
      setTimeout(() => {
        attemptScroll();
      }, 100);
    }
  }, [isMobile]);

  const handleMenuClick = (href: string) => {
    const targetId = href.replace('#', '');

    const performScroll = (element: HTMLElement) => {
      const targetPosition = calculateScrollPosition(element);

      // 메뉴 클릭 시 즉시 활성화 및 스크롤 중 상태 설정
      setIsMenuScrolling(true);

      // URL 해시 즉시 업데이트 (메뉴 클릭 시에는 바로 적용)
      if (targetId === 'visual') {
        setActiveSection('visual');
        window.history.pushState(null, '', window.location.pathname);
      } else {
        setActiveSection(targetId);
        window.history.pushState(null, '', href);
      }

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });

      // 스크롤 완료 후 상태 해제 (스크롤 애니메이션 시간 고려)
      setTimeout(() => {
        setIsMenuScrolling(false);
      }, 1000);
    };

    // 요소를 찾기 위해 즉시 시도
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      performScroll(targetElement);
    } else {
      // 요소를 찾지 못한 경우 재시도 (ScrollTrigger 초기화 대기)
      setTimeout(() => {
        const retryElement = document.getElementById(targetId);
        if (retryElement) {
          performScroll(retryElement);
        }
      }, 100);
    }

    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <S.HeaderContainer $isWorkDetailPage={isWorkDetailPage} $isScrolled={isScrolled}>
      <S.HeaderContent>
        {!usePathname().includes('/work') ? (
          <S.HeaderContentLeft>
            <S.HeaderLogo
              onClick={() => {
                handleMenuClick('#visual');
              }}
            >
              <Image
                src='/assets/images/portfolio-logo.webp'
                alt='logo'
                width={isMobile ? 40 : 45}
                height={isMobile ? 40 : 45}
              />
            </S.HeaderLogo>
            <S.ProgressBarContainer>
              <S.ProgressBarWrapper>
                <S.ProgressBar ref={progressBarRef} />
              </S.ProgressBarWrapper>
              <S.PortfolioText>PORTFOLIO</S.PortfolioText>
            </S.ProgressBarContainer>
          </S.HeaderContentLeft>
        ) : (
          <Button
            text='← Go To List'
            size='sm'
            onClick={() => {
              router.push('/#work');
            }}
          />
        )}

        {!usePathname().includes('/work') ? (
          <>
            <S.HeaderNav className={isMenuOpen ? 'menu-open' : ''}>
              {menuItems.map((item) => (
                <S.HeaderNavItem
                  key={item.text}
                  href={item.href}
                  className={`${isMenuOpen ? 'menu-open' : ''} ${
                    activeSection === item.href.replace('#', '') ? 'active' : ''
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMenuClick(item.href);
                  }}
                >
                  {item.text}
                </S.HeaderNavItem>
              ))}
            </S.HeaderNav>
            <S.HamburgerButton onClick={toggleMenu} className={isMenuOpen ? 'active' : ''}>
              {[1, 2, 3].map((_, index) => (
                <S.HamburgerLine key={index} className='line' />
              ))}
            </S.HamburgerButton>
          </>
        ) : (
          <>
            {notionLink ? (
              <Button
                text='Notion 보기'
                size='sm'
                mode='light'
                onClick={() => {
                  if (notionLink) {
                    window.open(notionLink, '_blank');
                  }
                }}
              />
            ) : null}
          </>
        )}
      </S.HeaderContent>
    </S.HeaderContainer>
  );
};

export default Header;
