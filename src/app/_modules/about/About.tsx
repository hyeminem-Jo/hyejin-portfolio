'use client';

import * as S from './styled';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Inner from '../common/layout/Inner';
import Image from 'next/image';
import Button from '../common/button/Button';

const aniTextList = [
  'JUST DO IT ✔️',
  'EVERY MOMENT MATTERS',
  'DREAM BIG. START SMALL',
  'BE THE CHANGE YOU WISH TO SEE IN THE WORLD',
  'STAY HUNGRY, STAY FOOLISH',
];

const About = () => {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  const aniTextRefs = useRef<(HTMLLIElement | null)[]>([]);

  useGSAP(() => {
    const textAniList = aniTextRefs.current;
    const textAni = gsap.timeline({ repeat: -1 });

    textAniList.forEach((el, i) => {
      if (el) {
        // 등장
        textAni.to(
          el,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: 'power4.out',
          },
          i * 1.5, // 순차적으로 등장
        );
        // 퇴장
        textAni.to(
          el,
          {
            opacity: 0,
            x: -100,
            duration: 0.8,
            ease: 'power4.in',
          },
          i * 1.5 + 0.7, // 등장 후 0.7초 후 사라짐
        );
      }
    });
    textAni.play();
  });

  return (
    <S.About>
      <Inner>
        <S.AboutInner>
          <S.AboutImage>
            <Image
              src='/assets/images/profile.JPG'
              alt='프로필 이미지'
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </S.AboutImage>
          <S.AboutInnerBoxTitleInner>
            <S.AboutInnerBoxMiddle>
              &quot;사용자의 경험을 디자인하는 <br className='mo-only' />
              프론트엔드 개발자&quot;
            </S.AboutInnerBoxMiddle>
            <S.AboutInnerBoxDesc>
              안녕하세요, 4년차에 접어든 프론트엔드 개발자 조혜진입니다. <br />
              저는 평소 “역지사지” 를 생활 신조로 가지는데, 이는 서비스를 구현할 때에도 마찬가지
              입니다. 늘 사용자의 관점이 되어 ‘어떻게 구현해야 가장 사용자 친화적인 형태로 사용할 수
              있을까?’ 하는 마음가짐으로 업무에 임하며, 견고하고 유연한 UI/UX 를 화면에
              그려나갑니다.
            </S.AboutInnerBoxDesc>
          </S.AboutInnerBoxTitleInner>
        </S.AboutInner>
        <S.AboutTextAni>
          <S.AboutTextAniList>
            {aniTextList.map((text, index) => (
              <S.AboutTextAniItem
                className='aniText'
                key={index}
                ref={(el) => {
                  aniTextRefs.current[index] = el;
                }}
                style={{ opacity: 0 }}
              >
                {text}
              </S.AboutTextAniItem>
            ))}
          </S.AboutTextAniList>
          <Button
            style={{ margin: '120px 0 0 auto' }}
            text='Notion 이력서 보기'
            onClick={() => {}}
          />
        </S.AboutTextAni>
      </Inner>
    </S.About>
  );
};

export default About;
