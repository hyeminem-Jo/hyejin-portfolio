'use client';

import * as S from './styled';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import LogoWrap from '../common/logo-wrap/LogoWrap';
import Button from '../common/button/Button';
import { useIsMobile } from '../common/hooks/useIsMobile';
import { BREAKPOINT_SM } from '@/app/_constant/breakpoint';

const Footer = () => {
  const { isMobile, isLoaded } = useIsMobile(BREAKPOINT_SM);
  gsap.registerPlugin(useGSAP);
  const duration = 1;
  const ease = 'power1.inOut';

  useGSAP(() => {
    if (!isLoaded || isMobile) return;
    gsap
      .timeline({
        duration: 2,
        scrollTrigger: {
          trigger: '.footer',
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })
      .to(
        '.logoWrap2',
        {
          y: -50,
          scale: 1.1,
          duration,
          ease,
        },
        0,
      )
      .to(
        '.logoWrap2 #f',
        {
          x: -30,
          y: -50,
          rotation: 25,
          duration,
          ease,
        },
        0,
      )
      .to(
        '.logoWrap2 #e',
        {
          x: -30,
          y: -30,
          rotation: -10,
          duration,
          ease,
        },
        0,
      )
      .to(
        '.logoWrap2 #h',
        {
          x: 20,
          y: -80,
          rotation: 5,
          duration,
          ease,
        },
        0,
      )
      .to(
        '.logoWrap2 #j',
        {
          x: -10,
          y: -60,
          rotation: -25,
          duration,
          ease,
        },
        0,
      );
  }, [isLoaded, isMobile]);

  return (
    <S.Footer className='footer'>
      <S.FooterInner>
        <S.FooterText>
          <S.StyledTitle $isCenter={false} $color='black'>
            ETC.
          </S.StyledTitle>
          <S.FooterTextWrap>
            <S.FooterInnerTextTitle>Education</S.FooterInnerTextTitle>
            <S.FooterInnerTextDesc>
              홍익대학교 커뮤니케이션디자인학과 {!isMobile && '(2016 - 2021)'}
            </S.FooterInnerTextDesc>
            {isMobile && <S.FooterInnerTextDesc>2016 - 2021</S.FooterInnerTextDesc>}
          </S.FooterTextWrap>
          <S.FooterTextWrap>
            <S.FooterInnerTextTitle>Contact</S.FooterInnerTextTitle>
            <S.FooterInnerTextDesc>Phone: 010-9275-5637</S.FooterInnerTextDesc>
            <S.FooterInnerTextDesc>Email: konnimey@naver.com</S.FooterInnerTextDesc>
          </S.FooterTextWrap>
        </S.FooterText>
      </S.FooterInner>
      {!isMobile && <LogoWrap className='logoWrap2' />}
      <S.FooterBottomText>
        <p>Portfolio - by Hye Jin</p>
        {!isMobile && <p>Copyright 2025.</p>}
        {!isMobile && <p>Created: 2025.08.01</p>}
      </S.FooterBottomText>
    </S.Footer>
  );
};

export default Footer;
