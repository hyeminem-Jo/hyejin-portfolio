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
    <S.About id='about'>
      <Inner>
        <S.AboutInner>
          <S.AboutInnerBoxTitleInner>
            <S.AboutInnerBoxMiddle>
              &quot;디자인과 코드를 잇는 다리, <br className='mo-only' />
              퍼블리싱부터 프론트엔드까지&quot;
            </S.AboutInnerBoxMiddle>
            <S.AboutInnerBoxDesc>
              <S.AboutInnerBoxDescBold>
                저는 사용자와 팀 모두에게 가치를 주는 개발자입니다.
              </S.AboutInnerBoxDescBold>
              디자인 시안을 픽셀 단위로 정확하게 구현하는 퍼블리싱 역량과 함께, <br />
              더 나은 사용자 경험을 만드는 프론트엔드 개발까지 아우르는 전문성을 갖추고 있습니다.
              <br />
              반응형 웹 구현과 크로스 브라우저 호환성을 고려한 마크업부터, React/Next.js 기반의 동적
              인터랙션 개발까지
              <br />
              전체 웹 개발 프로세스를 이해하고 수행할 수 있습니다.
              <br />
              <br />
              <br />
              <S.AboutInnerBoxDescBold>
                저는 협업을 통해 더 큰 성과가 나온다고 믿습니다.
              </S.AboutInnerBoxDescBold>
              Storybook을 활용해 공통 컴포넌트를 제작하여 디자이너와 개발자가 같은 화면을 바라볼 수
              있게 했고,
              <br />
              Postman으로 API 테스트를 진행하여 백엔드와의 소통 효율을 높였습니다.
              <br />
              이 과정에서 팀 전체의 생산성이 향상되는 것을 경험하며, 좋은 개발은 혼자 하는 것이
              아니라
              <br />
              함께 만드는 것이라는 확신을 갖게 되었습니다.
              <br />
              <br />
              <br />
              <S.AboutInnerBoxDescBold>
                제품을 단순한 결과물이 아니라 팀이 함께 키우는 자산으로 생각합니다.
              </S.AboutInnerBoxDescBold>
              기획·디자인 단계에서도 의견을 주고받으며, 사용자 경험을 개선할 수 있는 방법을
              적극적으로 제안합니다.
              <br />
              실제로 개인맞춤형 관련 개발을 진행할 때나, 폼 유효성 검증에서 사용자가 더 편리하게
              이용할 수 있는 흐름을 구현했습니다.
              <br />
              <br />
              앞으로도 저는 새로운 기술을 빠르게 학습하고, 프로젝트에 적합하게 적용해
              <br />
              퍼블리싱과 프론트엔드 개발을 아우르는 전문성으로 <br />
              서비스 품질과 사용자 경험을 동시에 개선하는 개발자로 성장해 나가고자 합니다.
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
          <S.AboutTextAniBtns>
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
