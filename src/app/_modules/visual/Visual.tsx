'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

const logoList = [
  { id: 'j', src: '/assets/images/logo/L_J.png', alt: 'J' },
  { id: 'y', src: '/assets/images/logo/L_Y.png', alt: 'Y' },
  { id: 'o', src: '/assets/images/logo/L_O.png', alt: 'O' },
  { id: 'u', src: '/assets/images/logo/L_U.png', alt: 'U' },
];

const MainContainer = () => {
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
        '.logoWrap #j',
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
        '.logoWrap #y',
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
        '.logoWrap #o',
        {
          x: 100,
          y: 100,
          rotation: -10,
          ease: 'none',
          duration: 5,
        },
        0,
      )
      .to(
        '.logoWrap #u',
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
        Creation, production & distribution of podcasts.
        <br />
        <span>In Toulouse. And everywhere else.</span>
      </S.SubText>
      <S.LogoWrap className='logoWrap'>
        {logoList.map((logo) => (
          <span id={logo.id} key={logo.id}>
            <Image src={logo.src} alt={logo.alt} width={100} height={100} />
          </span>
        ))}
      </S.LogoWrap>
    </S.Visual>
  );
};

export default MainContainer;
