'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Visual from '../../visual/Visual';
import About from '../../about/About';
import Skill from '../../skill/Skill';
import Works from '../../works/Works';
import SideProjects from '../../side-projects/SideProjects';

const MainContainer = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  return (
    <S.MainContainer>
      <Visual />
      <About />
      <Skill />
      <Works />
      <SideProjects />
      <div style={{ height: '100dvh', border: '1px solid red' }}></div>
    </S.MainContainer>
  );
};

export default MainContainer;
