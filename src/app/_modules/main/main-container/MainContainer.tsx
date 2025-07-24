'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Visual from '../../visual/Visual';

const MainContainer = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  return (
    <S.MainContainer>
      <Visual />
      <div style={{ height: '100dvh', backgroundColor: 'white' }}>cscdsc</div>
      <div style={{ height: '100dvh', backgroundColor: 'white' }}>cscdsc</div>
    </S.MainContainer>
  );
};

export default MainContainer;
