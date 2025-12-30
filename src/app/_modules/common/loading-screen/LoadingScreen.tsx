'use client';

import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import * as S from './styled';
import { useLoading } from './LoadingContext';
import { BREAKPOINT } from '@/app/_constant/breakpoint';

const logoList = [
  { id: 'f', src: '/assets/images/logo/fat-logo-01.png', alt: 'F' },
  { id: 'e', src: '/assets/images/logo/fat-logo-02.png', alt: 'E' },
  { id: 'h', src: '/assets/images/logo/fat-logo-03.png', alt: 'H' },
  { id: 'j', src: '/assets/images/logo/fat-logo-04.png', alt: 'J' },
];

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const { setLoadingComplete } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const logoItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const exitAnimationStarted = useRef(false);

  // 해시가 없는 경우에만 로딩 화면 표시
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 해시가 있으면 로딩 화면을 표시하지 않음
      if (window.location.hash) {
        setShouldShow(false);
        setIsLoading(false);
        setLoadingComplete(true); // 해시가 있으면 즉시 완료 처리
      } else {
        setShouldShow(true);
        setLoadingComplete(false); // 로딩 화면이 표시되면 완료 상태 초기화
      }
    }
  }, [setLoadingComplete]);

  useEffect(() => {
    if (!shouldShow) {
      setIsLoading(false);
      return;
    }

    let isCompleted = false;
    const minLoadingTime = 1750; // 최소 로딩
    const maxLoadingTime = 5000; // 최대 로딩
    const startTime = Date.now();

    const completeLoading = () => {
      if (isCompleted) return;
      isCompleted = true;

      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        setIsLoading(false);
      }, remainingTime);
    };

    // 최대 시간 후 강제로 완료
    const maxTimer = setTimeout(() => {
      completeLoading();
    }, maxLoadingTime);

    // window.load 이벤트 대기
    const handleLoad = () => {
      // DOM이 완전히 렌더링될 때까지 약간의 지연
      setTimeout(() => {
        completeLoading();
      }, 300);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad, { once: true });
    }

    return () => {
      clearTimeout(maxTimer);
      window.removeEventListener('load', handleLoad);
    };
  }, [shouldShow]);

  useGSAP(() => {
    if (!isLoading && !exitAnimationStarted.current && containerRef.current) {
      exitAnimationStarted.current = true;
      setIsExiting(true);

      const isMobile = window.innerWidth <= BREAKPOINT;
      const maxRadius = Math.sqrt(
        window.innerWidth * window.innerWidth + window.innerHeight * window.innerHeight,
      );

      if (isMobile) {
        // border-radius 애니메이션
        gsap.to(containerRef.current, {
          borderBottomLeftRadius: `${maxRadius}px`,
          borderBottomRightRadius: `${maxRadius}px`,
          duration: 0.8,
          ease: 'power2.in',
        });

        // 아래에서 위로 올라가는 애니메이션 (x는 이동하지 않음)
        gsap.to(containerRef.current, {
          y: '-100vh',
          duration: 1,
          ease: 'power2.in',
          onComplete: () => {
            setIsAnimationComplete(true);
            setLoadingComplete(true);
          },
        });

        if (logoWrapRef.current) {
          gsap.to(logoWrapRef.current, {
            y: '100vh',
            duration: 1,
            ease: 'power2.in',
          });
        }
      } else {
        // 1080px 초과: 왼쪽 아래 모서리에서 시작해서 부채꼴 모양으로 둥글어지면서 사라짐
        // border-radius 애니메이션
        gsap.to(containerRef.current, {
          borderBottomLeftRadius: `${maxRadius}px`,
          duration: 0.8,
          ease: 'power2.in',
        });

        // 퇴장 애니메이션
        gsap.to(containerRef.current, {
          x: '100vw',
          y: '-100vh',
          duration: 1,
          ease: 'power2.in',
          onComplete: () => {
            setIsAnimationComplete(true);
            setLoadingComplete(true);
          },
        });

        // FEHJ는 반대 방향으로 이동하여 그 자리에 고정
        if (logoWrapRef.current) {
          gsap.to(logoWrapRef.current, {
            x: '-100vw',
            y: '100vh',
            duration: 1,
            ease: 'power2.in',
          });
        }
      }
    }
  }, [isLoading, setLoadingComplete]);

  useGSAP(() => {
    if (!shouldShow || isExiting) return;

    // 각 로고 아이콘이 차례로 opacity: 0 → 1로 fade in
    logoList.forEach((logo, index) => {
      const element = logoItemRefs.current[index];
      if (element) {
        // 각 아이콘을 opacity: 0에서 1로 fade in
        gsap.to(element, {
          opacity: 1,
          duration: 0.5,
          delay: index * 0.15,
          ease: 'power2.out',
          onComplete: () => {
            // fade in 완료 후 위아래 반복 애니메이션 시작
            gsap.to(element, {
              y: -10,
              duration: 0.5,
              ease: 'power2.inOut',
              yoyo: true,
              repeat: -1,
            });
          },
        });
      }
    });
  }, [shouldShow, isExiting]);

  if (!shouldShow || isAnimationComplete) {
    return null;
  }

  return (
    <S.LoadingScreenContainer ref={containerRef} className='loading-screen'>
      <S.LoadingLogoWrap ref={logoWrapRef} className='loading-logo-wrap'>
        {logoList.map((logo, index) => (
          <S.LoadingLogoItem
            key={logo.id}
            ref={(el) => {
              logoItemRefs.current[index] = el;
            }}
          >
            <Image src={logo.src} alt={logo.alt} width={80} height={80} />
          </S.LoadingLogoItem>
        ))}
      </S.LoadingLogoWrap>
    </S.LoadingScreenContainer>
  );
};

export default LoadingScreen;
