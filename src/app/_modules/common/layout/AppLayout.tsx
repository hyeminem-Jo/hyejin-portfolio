'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePathname } from 'next/navigation';
import Header from '../header/Header';
import CustomCursor from '../cursor/CustomCursor';
import LoadingScreen from '../loading-screen/LoadingScreen';
import { LoadingProvider } from '../loading-screen/LoadingContext';
import { useIsMobile } from '../hooks/useIsMobile';
import * as S from './styled';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isLoaded } = useIsMobile();
  const pathname = usePathname();
  const isWorkDetailPage = pathname?.startsWith('/work/');
  const isRootPath = pathname === '/';

  useEffect(() => {
    if (!isLoaded || isMobile) return;

    // Lenis 초기화
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    // GSAP ScrollTrigger와 Lenis 통합
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, [isLoaded, isMobile]);

  return (
    <LoadingProvider>
      <S.AppLayoutContainer $isWorkDetailPage={isWorkDetailPage}>
        {isRootPath && <LoadingScreen />}
        <CustomCursor />
        <Header />
        {children}
      </S.AppLayoutContainer>
    </LoadingProvider>
  );
};

export default AppLayout;
