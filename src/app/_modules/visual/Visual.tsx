'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LogoWrap from '../common/logo-wrap/LogoWrap';

const Visual = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
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
  });

  return (
    <S.Visual className='visual'>
      <S.MainTextList className='mainText'>
        <S.MainTextInner>
          <S.MainText>FRONTEND</S.MainText>
        </S.MainTextInner>
        <S.MainTextInner>
          <S.MainText>PORTFOLIO 🙆🏻‍♀️</S.MainText>
        </S.MainTextInner>
      </S.MainTextList>
      <S.SubText className='subText'>
        Designing & developing user-friendly web experiences.
        <br />
        <span>On screen. And behind the scenes.</span>
      </S.SubText>
      <LogoWrap className='logoWrap' />
    </S.Visual>
  );
};

export default Visual;
