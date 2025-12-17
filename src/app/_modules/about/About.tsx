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
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 이미지 스크롤 애니메이션
    if (imageRef.current) {
      gsap.set(imageRef.current, {
        opacity: 0,
        y: 200,
      });

      gsap.to(imageRef.current, {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          end: 'top 50%',
          scrub: 0.8,
        },
      });
    }

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

    // 버튼 스크롤 애니메이션
    if (buttonsContainerRef.current) {
      const buttons = buttonsContainerRef.current.querySelectorAll('button');

      buttons.forEach((button) => {
        gsap.set(button, {
          opacity: 0,
          x: 100,
        });
      });

      const buttonTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: buttonsContainerRef.current,
          start: 'top 100%',
          end: 'top 80%',
          scrub: 0.5,
        },
      });

      buttons.forEach((button, index) => {
        buttonTimeline.to(
          button,
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
          },
          index * 0.1,
        );
      });
    }
  });

  return (
    <S.About id='about'>
      <Inner>
        <S.AboutInner>
          <S.AboutInnerImage ref={imageRef}>
            <Image src='/assets/images/profile.JPG' alt='profile' width={400} height={400} />
            <S.AboutInnerImageInfo>
              <S.AboutInnerImageInfoItem>💛 Cho Hye Jin</S.AboutInnerImageInfoItem>
            </S.AboutInnerImageInfo>
          </S.AboutInnerImage>
          <S.AboutInnerBoxTitleInner>
            <S.AboutInnerBoxDesc>
              <S.AboutInnerBoxDescBold>
                안녕하세요, 👋🏻
                <br />
                4년차 FE 개발자 <br className='mo-only' />
                조혜진 입니다.
              </S.AboutInnerBoxDescBold>
              <S.AboutQuestionText>Q. 프론트엔드 개발자가 된 이유? </S.AboutQuestionText>
              <S.AboutAnswerText>
                디자인을 전공했지만, 디자인을 웹 화면으로 구현하는 과정에서 개발의 매력에
                빠졌습니다. <br className='pc-only' />
                UI를 코드로 옮기는 흥미에서 시작해,{' '}
                <strong>데이터까지 연결되는 전 과정을 직접 만들고 싶어</strong>{' '}
                <br className='pc-only' />
                프론트엔드 개발자가 되었습니다.
              </S.AboutAnswerText>
              <S.AboutQuestionText>Q. 개발자로써 자신만의 강점은? </S.AboutQuestionText>
              <S.AboutAnswerText>
                프론트엔드의 본질을 이해하면서도 AI 도구를 적극 활용해 컴포넌트 설계 및 리팩토링,
                디버깅 등 개발 생산성을 크게 높입니다. 또한 사용자의 반응을 미리 예측해 디자인 및
                기획단계에서 능동적인 개선을 이끌어내거나, Storybook 및 Postman 을 도입하는 등 팀
                전체의 협업 흐름과 생산성 개선에도 큰 장점을 가지고 있습니다.
              </S.AboutAnswerText>

              <br />
              <br />
              <br />
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
          <S.AboutTextAniBtns ref={buttonsContainerRef}>
            <Button
              text='Notion 이력서 보기'
              onClick={() => {
                window.open(
                  'https://noiseless-catfish-e41.notion.site/s-Frontend-Portfolio-f8511fdba73143d682a2a4c9377f763c',
                  '_blank',
                );
              }}
            />
            <Button
              text='Blog'
              mode='light'
              onClick={() => {
                window.open('https://velog.io/@h_jinny/posts', '_blank');
              }}
            />
          </S.AboutTextAniBtns>
        </S.AboutTextAni>
      </Inner>
    </S.About>
  );
};

export default About;
