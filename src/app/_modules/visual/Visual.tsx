'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoWrap from '../common/logo-wrap/LogoWrap';
import { useIsMobile } from '../common/hooks/useIsMobile';
import { useEffect, useRef } from 'react';

const Visual = () => {
  const { isMobile, isLoaded } = useIsMobile();
  const logoRefs = useRef<(HTMLSpanElement | null)[]>([]);

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useEffect(() => {
    if (!isLoaded) return;

    const timer = setTimeout(() => {
      const logoElements = document.querySelectorAll('.logoWrap span');
      const subTextElement = document.querySelector('.subText');

      if (logoElements.length > 0) {
        const tl = gsap.timeline();

        logoElements.forEach((logo, index) => {
          tl.to(
            logo,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
            },
            (index + 0.5) * 0.3,
          );
        });

        if (subTextElement) {
          tl.to(
            subTextElement,
            {
              opacity: 1,
              x: 0,
              duration: 0.5,
              ease: 'power2.out',
            },
            1.5,
          );
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isLoaded]);

  useGSAP(() => {
    if (!isLoaded || isMobile) return;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '.visual',
          start: '100% 100%',
          end: '100% 0%',
          scrub: true,
        },
      })
      .to(
        '.logoWrap #f',
        {
          x: -150,
          y: 250,
          rotation: 20,
          ease: 'none',
          duration: 5,
        },
        0,
      )
      .to(
        '.logoWrap #e',
        {
          x: -30,
          y: 150,
          rotation: -10,
          ease: 'none',
          duration: 5,
        },
        0,
      )
      .to(
        '.logoWrap #h',
        {
          x: 100,
          y: 200,
          rotation: -30,
          ease: 'none',
          duration: 5,
        },
        0,
      )
      .to(
        '.logoWrap #j',
        {
          x: 50,
          y: 450,
          rotation: 20,
          ease: 'none',
          duration: 5,
        },
        0,
      );
  }, [isLoaded, isMobile]);

  return (
    <S.Visual id='visual' className={`visual ${isMobile ? 'mobile' : ''}`}>
      <S.MainTextList className='mainText'>
        <S.MainTextInner>
          <S.MainText>FE DEVELOPER</S.MainText>
        </S.MainTextInner>
        <S.MainTextInner>
          <S.MainText>PORTFOLIO</S.MainText>
        </S.MainTextInner>
      </S.MainTextList>
      <S.SubText className='subText'>
        Designing & developing <br className='mo-only' />
        user-friendly web experiences.
        <br />
        <span>On screen. And behind the scenes.</span>
      </S.SubText>
      <LogoWrap className={`logoWrap ${isMobile ? 'mobile' : ''}`} />
    </S.Visual>
  );
};

export default Visual;
