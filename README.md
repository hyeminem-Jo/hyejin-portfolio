# 포트폴리오 사이트

>저의 프론트엔드 개발 경력 및 스킬, 사이트 프로젝트에 대한 상세한 내용을 담은 포트폴리오 사이트입니다. 모바일웹 환경을 고려하여 작업을 진행했습니다.
[링크](https://hyejin-portfolio.vercel.app/)

<img width="1453" height="826" alt="image" src="https://github.com/user-attachments/assets/c9f2665e-938f-493c-a590-fc062d2eeb10" />


<br>
<br>

### 사용된 기술
`Next.js` `Typescript` `gsap` `Emotion` `react-slick`
- 편리한 내장 기능과 더불어 추후 저의 포트폴리오 사이트를 검색할 수 있도록 SEO 기능에 최적화된 Next.js 를 사용하였습니다.
- 스크롤 시 동적으로 움직이는 오브젝트로 분위기를 살리고자 `GSAP` 을 사용하였습니다. react 환경에서 사용할 수 있도록 `useGsap` 을 사용하였습니다.
- 간편한 슬라이드 동작을 위해 React 환경에 최적화된 `react-slick` 을 이용하였습니다.


<br>

## 1. About
>개발자로서의 저를 설명할 수 있는 가장 강력한 3가지 요인을 표현하였습니다.

<img width="1451" height="829" alt="image" src="https://github.com/user-attachments/assets/c5765fc8-2f99-4ee2-875c-8fa41ef46bf0" />

<br>
<br>

- `ScrollTrigger` 를 활용하여 사용했습니다.
- 스크롤 시 인트로에 있던 텍스트 요소들이 다양한 방향으로 떨어지도록 효과를 구현했습니다.

```
  const { isMobile, isLoaded } = useIsMobile();

  gsap.registerPlugin(useGSAP, ScrollTrigger);

  useGSAP(() => {
    if (!isLoaded || isMobile) return;

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
  }, [isLoaded, isMobile]);
```

- 모바일일 경우를 위해 `useIsMobile` 이라는 커스텀 훅을 만들어 `GSAP` 을 구현하는 과정에서도 사용하였습니다.
- `isLoaded` 는 페이지 로드가 완료된 후 `GSAP` 애니메이션이 시작되도록 하기 위해 사용되었습니다.

  ```
    import { useState, useEffect } from 'react';
    import { BREAKPOINT } from '../../../_constant/breakpoint';
    
    export const useIsMobile = (breakpoint: number = BREAKPOINT) => {
      const [isMobile, setIsMobile] = useState(false);
      const [isLoaded, setIsLoaded] = useState(false);
    
      useEffect(() => {
        const checkIsMobile = () => {
          const mobile = window.innerWidth <= breakpoint;
          setIsMobile(mobile);
          setIsLoaded(true);
        };
  
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
    
        return () => window.removeEventListener('resize', checkIsMobile);
      }, []);
    
      return { isMobile, isLoaded };
    };

  ```

<br>
<br>

- `GSAP` 을 사용하여 수 초 간격으로 슬로건이 표시되도록 구현하였습니다.
  
  <img width="1357" height="361" alt="image" src="https://github.com/user-attachments/assets/91f0718f-9c0c-4471-b325-6495e5dd64b5" />


  ```
    useGSAP(() => {
    const textAniList = aniTextRefs.current;
    const textAni = gsap.timeline({ repeat: -1 });
  
      textAniList.forEach((el, i) => {
        if (el) {
          textAni.to(
            el,
            {
              opacity: 1,
              x: 0,
              duration: 0.8,
              ease: 'power4.out',
            },
            i * 1.5,
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
            i * 1.5 + 0.7,
          );
        }
      });
      textAni.play();
    });
  ```

<br>
<br>

---

## 2. Skill

>저의 프론트엔드 스킬에 대한 자세한 내용을 담은 페이지입니다.

<img width="1450" height="828" alt="image" src="https://github.com/user-attachments/assets/3836dc36-58d6-4db1-b993-a21007c3ad0f" />

<br>
<br>

---

## 3. Works
>지난 시간동안의 어떤 경력을 쌓아왔는지에 대한 내용을 담은 페이지입니다. 
지금껏 다닌 회사는 모두 에이전시였기 때문에 한 회사 당 여러 프로젝트를 나열하는 구조로 표현했습니다.

<img width="1451" height="825" alt="image" src="https://github.com/user-attachments/assets/d72657b3-391f-4aab-b49a-6698157c7f11" />

<br>
<br>

- Link 를 통해 작업물의 실제 배포된 사이트를 확인 할 수 있습니다.
- 스크롤 시에도 왼쪽에 위치한 회사 정보는 그대로 보일 수 있도록 `position: sticky` 를 사용하였습니다.
- 어떤 결과물인지 바로 확인이 가능도록 화면 보기 모달을 구현했습니다. 이때 모달은 공통컴포넌트로 생성했습니다.
- 화면 보기 모달 내에서 화면들의 슬라이드 형성을 위해 `react-slick` 의 `Slider` 를 활용하였습니다.

  <img width="1449" height="816" alt="image" src="https://github.com/user-attachments/assets/5fb57fc7-7ed4-4a08-946d-a033ce735a52" />

```
     <Modal
        title='화면 이미지'
        isOpen={isImageModalOpen}
        onClose={handleCloseImageModal}
        size='lg'
        showCloseButton={true}
        closeOnOverlayClick={true}
      >
        <S.ImageSliderContainer>
          <Slider {...sliderSettings}>
            {selectedImages.map((imageUrl, index) => (
              <S.SliderImage key={index}>
                <Image
                  src={imageUrl}
                  alt={`화면 이미지 ${index + 1}`}
                  width={800}
                  height={600}
                  style={{ objectFit: 'contain' }}
                  priority={index === 0}
                  onError={(e) => {
                    console.error('이미지 로드에 실패했습니다.', imageUrl);
                  }}
                />
              </S.SliderImage>
            ))}
          </Slider>
        </S.ImageSliderContainer>
      </Modal>
```

<br>
<br>


# + 수정

<img width="1411" height="826" alt="image" src="https://github.com/user-attachments/assets/02d255c4-a32f-4c22-9c49-f222f85402aa" />

<br>

<img width="1410" height="825" alt="image" src="https://github.com/user-attachments/assets/e3ad0877-7e44-43fe-af43-8514de17735f" />

<img width="1412" height="826" alt="image" src="https://github.com/user-attachments/assets/399df31a-3bd4-41dd-a66d-813139ec8af3" />



## 개선사항:
- 프로젝트와 관련해 어떤 성과를 어떤 이슈와 함께 작업했는지에 대해 상세한 내용이 많이 부족하다 느껴 그리드 형식으로 수정했습니다.
- 목록의 경우 프로젝트들을 블록형태로 변경 및 상세페이지로 이동할 수 있도록 수정했습니다.
- 내용이 많아 모달 형식보다는 아예 새로운 전체페이지에서 내용을 다루는 것이 낫다 판단하여 상세페이지로 구현하였습니다.
- 상세페이지에서 프로젝트와 관련된 내용(개요, 진행방식, 주요 작업, 이슈 해결 사례, 화면 이미지) 표현, 화면 이미지들을 가장 아래에 슬라이더로 표현했습니다.

<br>
<br>

---

## 4. Side Project
>풀스택 개발경험을 위해 진행한 토이프로젝트를 담은 페이지 입니다.

<img width="1451" height="828" alt="image" src="https://github.com/user-attachments/assets/91508375-d2de-4411-8f99-63277b9ceb27" />

<br>
<br>

- 토이프로젝트에 관한 설명과 배포 링크를 함께 첨부하였습니다. github 링크의 경우, 한 프로젝트에 담긴 내용이기에 리드미 위치를 링크로 잡아두었습니다.
- 요소의 경우 `GSAP` 을 활용하여 스크롤 시 이전 요소가 뒤로 접혀지는 느낌을 주었습니다. 이는 모바일 화면에서는 다소 산만한하다 판단하여 PC 환경에서만 작동되도록 구현하였습니다.

<img width="1448" height="616" alt="image" src="https://github.com/user-attachments/assets/98f45663-2624-4888-a16c-3e826793ff84" />

```
  useGSAP(() => {
    if (!isLoaded || isMobile) return;
    const boxList = boxRefs.current;

    boxList.forEach((box, i) => {
      if (box) {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: box,
              start: '0% 20%',
              end: '0% 0%',
              scrub: 1,
            },
          })
          .to(
            box,
            {
              transform: 'rotateX(-10deg) scale(0.9)',
              transformOrigin: 'top',
              filter: 'brightness(0.95)',
              duration: 1,
              ease: 'none',
            },
            0,
          );
      }
    });
  }, [isLoaded, isMobile]);
```


<br>
<br>
<br>

## 문제 해결 및 성능 개선

- Works 의 화면 보기 모달 슬라이드 부분에서 첫 이미지부터 빠르게 로드될 수 있도록 `Next.js` `Image` 의 `priority` 기능을 활용
- 모바일에서 막아놨던 GSAP 이 계속 작동되는 이슈가 발생했는데, 이를 `useIsMobile` 커스텀 훅에서 클라이언트 사이드 코드 실행 시점을 제어하여 해결
- Works 의 `position: sticky` 속성을 사용하려 하는 중 `GSAP` 의 스크롤 이벤트와 충돌때문에 작동하지 않는 이슈가 발생했는데, 이는 global 에서 body 에 `overflow-x: hidden` 속성 대신 `overflow-x: clip` 을 주는 것으로 해결
  
<br>
<br>

## 추후 개선시키고 싶은 사항

- Works 에서 좀더 구체적인 내용 (프로젝트에 관한 문제 해결 과정, 성과, 느낀점 등)을 추가

<br>
<br>

---

## 프로젝트 의의

이번 개인 포트폴리오 사이트는 단순히 자기소개를 위한 페이지가 아닌 저의 프론트엔드 역량을 조금이라도 보여줄 수 있는 기회가 될까 하는 생각으로 제작하였습니다.
Notion 같은 정적인 이력서를 쓴적도 있지만 그 대신 인터랙션과 애니메이션을 활용한 UI 적으로 풍부한 웹사이트를 만들고자 했습니다.
특히 GSAP과 같은 라이브러리를 적용하면서 기기 환경을 고려한 웹을 구성하고, Next.js 기반으로 SEO와 성능을 챙길 가능성을 챙길 의도 또한 가져갔습니다.
앞으로는 더 다양한 인터랙션과 풀스택 요소를 적용하여 단순한 이력서를 벗어나 하나의 완성도있는 포트폴리오로 디벨롭하여 제작하고자 합니다.
