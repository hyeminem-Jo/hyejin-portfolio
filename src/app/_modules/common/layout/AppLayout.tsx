'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../header/Header';
import CustomCursor from '../cursor/CustomCursor';
import { useIsMobile } from '../hooks/useIsMobile';
import * as S from './styled';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const { isMobile, isLoaded } = useIsMobile();

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
    <S.AppLayoutContainer>
      <CustomCursor />
      <Header />
      {children}
    </S.AppLayoutContainer>
  );
};

export default AppLayout;
