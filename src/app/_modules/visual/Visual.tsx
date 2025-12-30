'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoWrap from '../common/logo-wrap/LogoWrap';
import { useIsMobile } from '../common/hooks/useIsMobile';
import { useEffect } from 'react';
import { BREAKPOINT_SM } from '@/app/_constant/breakpoint';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Visual = () => {
  const { isMobile, isLoaded } = useIsMobile();

  useEffect(() => {
    if (!isLoaded) return;

    let initialAnimationCompleted = false;

    const animateElements = (isResize = false) => {
      const logoElements = document.querySelectorAll('.logoWrap span');
      const subTextElement = document.querySelector('.subText');

      if (logoElements.length > 0) {
        // 리사이즈 시에는 즉시 보이도록 설정
        if (isResize && initialAnimationCompleted) {
          logoElements.forEach((logo) => {
            gsap.set(logo, { opacity: 1, y: 0 });
          });
          if (subTextElement) {
            gsap.set(subTextElement, { opacity: 1, x: 0 });
          }
          return;
        }

        const tl = gsap.timeline({
          onComplete: () => {
            // 초기 애니메이션 완료 후 스타일 저장 (opacity 1인 상태)
            if (!initialAnimationCompleted) {
              ScrollTrigger.saveStyles('.logoWrap span, .logoWrap span *, .subText');
              initialAnimationCompleted = true;
            }
          },
        });

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
    };

    const timer = setTimeout(() => animateElements(false), 100);

    // 리사이즈 시 요소들이 보이도록 보장
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        animateElements(true);
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoaded]);

  useGSAP(() => {
    if (!isLoaded) return;

    const mm = gsap.matchMedia();

    mm.add(`(min-width: ${BREAKPOINT_SM + 1}px)`, () => {
      const timeline = gsap
        .timeline({
          scrollTrigger: {
            trigger: '.visual',
            start: '100% 100%',
            end: '100% 0%',
            scrub: 0.3,
            invalidateOnRefresh: true,
          },
        })
        .to(
          '.logoWrap #f',
          {
            x: -150,
            y: 250,
            rotation: 20,
            ease: 'none',
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
          },
          0,
        );

      ScrollTrigger.refresh();

      return () => {
        timeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === '.visual') {
            trigger.kill();
          }
        });
      };
    });

    return () => mm.revert();
  }, [isLoaded]);

  return (
    <S.Visual id='visual' className={`visual ${isMobile ? 'mobile' : ''}`}>
      <S.VisualText>
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
      </S.VisualText>
      <LogoWrap className={`logoWrap ${isMobile ? 'mobile' : ''}`} />
    </S.Visual>
  );
};

export default Visual;
