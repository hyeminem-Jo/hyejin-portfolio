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
              &quot;디자인에 공감하고 <br className='mo-only' />
              코드로 완성하는 <br className='mo-only' />
              개발자&quot;
            </S.AboutInnerBoxMiddle>
            <S.AboutInnerBoxDesc>
              <S.AboutInnerBoxDescBold>
                🎨 디자인의 감각을 코드로 완성합니다.
              </S.AboutInnerBoxDescBold>
              저의 개발은 <strong>사용자의 눈과 디자인의 의도</strong>에서부터 시작됩니다. 디자인을
              전공해온 만큼 픽셀 단위를 넘어, 고객 측에서 요구하는{' '}
              <strong>미세한 감각과 인터랙션의 디테일</strong>을 정확하게 파악하고 구현하여
              &apos;기대 이상&apos;이라는 평가를 받은 경험이 많습니다. 저는 직관적으로 좋아보이는
              결과물이 <strong>더 나은 사용자 경험</strong>으로 이어지도록 주도적으로 고민합니다.
              실제로 디자인 및 기획 회의 중 내용의 모순점이나 개선점을 발견했을 때, 능동적으로
              의견을 제시하여{' '}
              <i>&quot;그거 괜찮은데요? 혜진님 말씀대로 수정하는 게 더 나을 것 같아요&quot;</i> 라는
              긍정적인 반응을 이끌어냈습니다. 저는 단순히 기능을 구현하는 것을 넘어, 제품의 가치를
              시각적으로 극대화할 수 있는 <strong>감각적인 개발자</strong>입니다.
              <br />
              <br />
              <br />
              <S.AboutInnerBoxDescBold>
                🤝 유연한 협업이 곧 개발 생산성입니다.
              </S.AboutInnerBoxDescBold>
              저는 <strong>동료와의 유연한 협업</strong>이 개발 속도와 최종 결과물의 품질을 좌우하는
              핵심이라 믿습니다. 프론트엔드 개발 외 타 직군 동료들까지{' '}
              <strong>같은 언어를 쓰고 같은 목표를 바라볼 수 있도록</strong> 환경을 구축하는 것에
              집중합니다. 이런 믿음으로 디자이너와의 공통 기준을 위해 Storybook을, 백엔드 동료와의
              API 소통 효율을 높이기 위해 Postman 사용을 제안하고 도입했습니다. 좋은 개발은 함께
              만드는 것이라는 확신 아래에서 저는 기술적인 구현을 넘어 팀 전체의{' '}
              <strong>생산성과 협업의 즐거움</strong>을 함께 끌어올리는 파트너가 되는 것에 기여하고
              있습니다.
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
