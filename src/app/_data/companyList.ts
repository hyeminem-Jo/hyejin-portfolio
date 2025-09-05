export const companyList = [
  {
    name: '넥스트컬쳐',
    companyLogo: '/assets/images/logo/nextculture-logo.ico',
    companyPeriod: '2024.10 - 2025.07',
    projectList: [
      {
        id: 1,
        projectName: '소플 고도화 2차',
        projectDesc:
          '대한상공회의소가 운영하는 ‘소통 플랫폼 소플(소리가 모이는 플랫폼)’은 경제 및 사회 이슈에 대해 누구나 제안, 투표, 글쓰기, 토론 등의 방식으로 자유롭게 의견을 표현하고 공유할 수 있는 참여형 플랫폼입니다.',
        projectDescDetail:
          '대한상공회의소는 141년의 전통을 지닌 종합 경제단체로, 기업과 지역 경제를 지원하는 다양한 활동을 이어오고 있습니다. \n소통 플랫폼 ‘소플’은 AI 요약, 토론 커뮤니티, 맞춤형 콘텐츠, 실시간 소통과 펀딩 기능을 통해 사회와 기업이 연결되는 경제 참여 공간을 제공합니다. \n<소플 1차 고도화 이후로 전반적인 시스템 개편을 위해 2차 이후로 새롭게 사이트를 구축을 시작하였습니다.>',
        projectPeriod: '2025.05 - 2025.07',
        skillList: ['React', 'Next.js', 'TypeScript', 'Redux', 'Emotion'],
        projectWorkList: [
          '메인 및 서브 페이지 주요 기능 고도화 담당',
          'Next.js 서버 컴포넌트로 API 라우터 최소화 및 SEO 대응',
          '무한 스크롤, 맞춤 추천 피드, 실시간 투표 기능 구현으로 사용자 경험 개선',
          '공통 컴포넌트화와 Storybook을 통한 협업 효율 향상',
        ],
        projectLink: 'https://sople.me/',
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-sople2.webp',
        projectContribution: '30%',
        projectRole: '프론트엔드 개발',
        projectDevice: 'PC, 모바일',
        projectProcess:
          '구축 프로젝트이며, React.js 기반으로만 만들어졌던 이전 1차 소플을 SEO 기능 및 여러 편리한 내장 기능 처리를 위해 Next.js 환경으로 구현하였습니다. styled-component 의 지원중단을 계기로 대체 스타일 라이브러리로 emotion 을 사용하였으며, Redux 로 중앙데이터 관리를 진행하였습니다. 디자인 수급은 figma 로 이루어졌으며 기획은 sk cns 에서, 디자인은 더즈인터랙티브에서 작업을 하였습니다. 백엔드 3명, 프론트엔드 3명의 구성원으로 협업을 진행하였습니다.',
        projectImgList: [
          '/assets/images/works-webp/sople2/sople2-01.webp',
          '/assets/images/works-webp/sople2/sople2-02.webp',
          '/assets/images/works-webp/sople2/sople2-12.webp',
          '/assets/images/works-webp/sople2/sople2-13.webp',
          '/assets/images/works-webp/sople2/sople2-03.webp',
          '/assets/images/works-webp/sople2/sople2-04.webp',
          '/assets/images/works-webp/sople2/sople2-05.webp',
          '/assets/images/works-webp/sople2/sople2-06.webp',
          '/assets/images/works-webp/sople2/sople2-07.webp',
          '/assets/images/works-webp/sople2/sople2-08.webp',
          '/assets/images/works-webp/sople2/sople2-09.webp',
          '/assets/images/works-webp/sople2/sople2-10.webp',
          '/assets/images/works-webp/sople2/sople2-11.webp',
        ],
        projectProblemSolving: [
          {
            title: '데이터의 양이 많아 바인딩 속도가 지연되는 이슈',
            problem:
              '메인페이지에서는 여러 페이지들(커뮤니티, 교양이연구소 등)의 컨텐츠의 양이 많다 보니 순차적으로 데이터 요청을 보내게 되면 그만큼 시간 지연 발생',
            solving:
              '[Promise.all] 을 사용하여 <여러 개의 api 요청을 병렬로 처리하여 전체 로딩 시간을 단축>',
          },
          {
            title: 'Redux useSelector 배열 반환으로 인한 불필요한 리렌더링',
            problem:
              '[useSelector] 에서 배열을 반환할 때, 매번 새로운 배열 참조가 생성되어 같은 데이터를 가져와도 불필요하게 컴포넌트가 리렌더링됨',
            solving:
              '[createSelector] 를 활용하여 메모이제이션을 적용 → 입력 값이 동일하면 캐싱된 기존 배열을 반환하도록 구현하여 <불필요한 리렌더링을 방지함>, 에러 메시지가 사라져 컴포넌트가 원활히 렌더링됨',
            blogLink:
              'https://velog.io/@h_jinny/Redux-useSelector-%EC%B5%9C%EC%A0%81%ED%99%94-%EB%B6%88%ED%95%84%EC%9A%94%ED%95%9C-%EB%A6%AC%EB%A0%8C%EB%8D%94%EB%A7%81-%EB%B0%A9%EC%A7%80-%EB%B0%B0%EC%97%B4-%EB%B0%98%ED%99%98-rwkswipn',
          },
          {
            title: '디자인 가이드의 공통 컴포넌트에 따른 개발 단계 혼선',
            problem:
              '공통 컴포넌트의 베리에이션이 굉장히 복잡하고 여러 페이지들에서 컴포넌트가 중복 사용되는 일이 발생하여 컴포넌트를 중복으로 구현해버리거나 구두로 컴포넌트 사용법을 공유하면서 불편함 초래',
            solving:
              '[Storybook] 을 활용하여 개발자들 사이에서 아이콘, 입력폼 등 공통 컴포넌트를 사용법과 함께 공유할 수 있도록 함 → <작업이 겹치는 혼선이 사라져 개발 효율이 증대>',
          },
          {
            title: '백엔드 개발자와의 api 에러에 대한 소통 혼선',
            problem:
              '백엔드 API 연동 작업을 진행하는 도중 어떠한 에러가 발생할 때 프론트엔드와 백엔드 간의 책임 소재가 불분명하여, 크로스체크 및 디버깅 과정에서 불필요한 시간을 소모하며 개발 일정이 지연되는 문제가 발생',
            solving:
              '[PostMan] 을 활용하여 API 엔드포인트별로 테스트 환경을 구축 → <프론트와 백엔드 중 어떤 쪽의 문제인지 쉽게 파악이 가능해 협업 시 개발 시간 단축>',
          },
        ],
        projectMainFunction: [
          {
            page: '1. 메인',
            desc: [
              {
                mainDesc: '조건별 화면 UI 구현',
                subDesc: [
                  '맞춤추천/카테고리 <조건부로 화면을 적용> (맞춤추천의 경우 사용자의 성향에 따라, 카테고리의 경우 탭에 따라 컨텐츠가 달라짐)',
                  '상위 배너 개발 → 페이지 별로 배너 베리에이션 구현',
                  '카드 배너를 통해 여러 컨텐츠마다 베리에이션 적용 (소플뉴스룸 - AI 요약, 오늘의 지식 - 투표 등…) ',
                  '메인피드 베리에이션 적용',
                  '다수 데이터 요청을 병렬로 처리하여 <데이터 로딩 시간 단축>',
                ],
              },
              {
                mainDesc: '공통 슬라이드 구현',
                subDesc: [
                  '커뮤니티, 교양이연구소, 기업에 바란다 등 다양한 컨텐츠마다 공통 슬라이드를 적용하여 구현',
                ],
              },
              {
                mainDesc: '사용자 기능 구현',
                subDesc: [
                  '사용자 알림배너에서 클릭시 <읽음 표시 처리, ‘전체 읽음’ 기능> 구현 및 <인피니트 스크롤링 적용>',
                  '유저 프로필 리스트 및 상세 구현',
                ],
              },
            ],
          },
          {
            page: '2. 소플 뉴스룸',
            desc: [
              {
                mainDesc:
                  '대한상의뉴스, 정책뉴스, 경영법률상담 별 목록/상세 컨텐츠 화면 및 컴포넌트 구현',
              },
              {
                mainDesc:
                  '탭기능, 검색, 최신순 정렬 등의 기능으로 뉴스를 카테고리 별로 찾아볼 수 있도록 구현',
              },
              {
                mainDesc: '현재글/이전글/다음글 표시로 사용자 경험 강화',
              },
            ],
          },
          {
            page: '3. 기업에 바란다',
            desc: [
              {
                mainDesc: '기업 제안 글쓰기 등록 폼 개발',
              },
              {
                mainDesc: '모든 제안 / 내 제안, 기업 매칭 상황별 탭 기능 구현',
              },
              {
                mainDesc: '상세 페이지 → <제안 공감 및 공유하기 기능 구현>',
              },
              {
                mainDesc: '제안 공감 건수에 따라 Progress Bar 형태로 구현',
              },
            ],
          },
          {
            page: '4. 소플 서베이',
            desc: [
              {
                mainDesc: '목록 화면에서 서베이 목록, 결과 발표 목록 구현',
                subDesc: ['버튼 문구 3가지를 랜덤으로 배치'],
              },
              {
                mainDesc: '상세페이지 내 <서베이/소플 컨텐츠에 따라 분류> ',
                subDesc: [
                  '서베이 → 서베이독 투표 [Iframe] 으로 컨텐츠 구현',
                  '소플 → 소플 투표 컨텐츠 구현',
                ],
              },
              {
                mainDesc: '패널회원전용 컨텐츠일 경우 화면 구현',
                subDesc: [
                  '네이버 ID 연동 구현',
                  '패널회원이 아닐 시 Blur 처리, <패널회원가입 유도 기능> 구현',
                ],
              },
            ],
          },
          {
            page: '5. 오늘의 지식',
            desc: [
              {
                mainDesc: 'OX / 찬반 투표 기능을 구현',
              },
              {
                mainDesc:
                  '<정답 여부 및 동일 의견 비율을 팝업으로 시각화>하여 직관적인 데이터 제공 경험을 강화',
              },
            ],
          },
        ],
        projectReview: '소플 고도화 2차 프로젝트 리뷰',
      },
      {
        id: 2,
        projectName: '소플 고도화 1차',
        projectDesc:
          '대한상공회의소가 운영하는 ‘소통 플랫폼 소플(소리가 모이는 플랫폼)’은 경제 및 사회 이슈에 대해 누구나 제안, 투표, 글쓰기, 토론 등의 방식으로 자유롭게 의견을 표현하고 공유할 수 있는 참여형 플랫폼입니다.',
        projectDescDetail:
          '대한상공회의소는 141년의 전통을 지닌 종합 경제단체로, 기업과 지역 경제를 지원하는 다양한 활동을 이어오고 있습니다. \n소통 플랫폼 ‘소플’은 AI 요약, 토론 커뮤니티, 맞춤형 콘텐츠, 실시간 소통과 펀딩 기능을 통해 사회와 기업이 연결되는 경제 참여 공간을 제공합니다. \n<1차 고도화 프로젝트에서는 소플에 AI 기능을 적극 도입하면서 AI 검색, AI 글쓰기 페이지를 새로 구축합니다.>',
        projectPeriod: '2025.03 - 2025.05',
        skillList: ['React', 'TypeScript', 'Redux', 'Styled-components'],
        projectReview: '소플 고도화 1차 프로젝트 리뷰',
        projectWorkList: [
          '경제뉴스룸·AI 검색/글쓰기 페이지 개발',
          'Redux 기반 인증 체크, 불필요한 리렌더링이 일어나는 부분을 발견 후 문제 해결',
          'Swiper, 색상 랜덤 배경 등 인터랙션 강화로 UI 개선',
        ],
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-sople1.webp',
        projectContribution: '30%',
        projectRole: '프론트엔드 개발',
        projectDevice: 'PC, 모바일',
        projectProcess:
          '고도화를 위한 운영 및 일부 구축 프로젝트이며, React.js 환경에서 작업을 진행하였습니다. 스타일 처리로는  styled-component 를 사용하였으며, Redux 로 중앙데이터 관리를 진행하였습니다. 디자인 수급은 figma 로 이루어졌으며 기획은 sk cns, 디자인은 더즈인터랙티브에서 작업을 하였습니다. 백엔드 3명, 프론트엔드 3명의 구성원으로 협업을 진행하였습니다.',
        projectProblemSolving: [
          {
            title: '검색 탭 전환 시 이전 API 요청으로 인한 데이터 덮어쓰기 이슈',
            problem:
              '검색 페이지에서 탭을 빠르게 전환할 때 이전 API 요청이 완료되면서 최신 탭의 데이터가 덮어씌워져 사용자가 선택한 탭과 실제 표시되는 데이터가 일치하지 않는 이슈가 발생',
            solving:
              '[AbortController] 를 활용한 API 요청 취소 메커니즘을 구현하여 이전 요청을 중단하고 <최신 요청만 완료되도록 구현>하여 데이터 일관성과 사용자 경험을 크게 향상 ',
            blogLink:
              'https://velog.io/@h_jinny/Next.js-%EA%B2%80%EC%83%89-%EC%9A%94%EC%B2%AD-%EC%B5%9C%EC%A0%81%ED%99%94-%EC%9D%B4%EC%A0%84-%EC%9A%94%EC%B2%AD-%EC%B7%A8%EC%86%8C%ED%95%98%EA%B3%A0-%EC%B5%9C%EC%8B%A0-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%9C%A0%EC%A7%80%ED%95%98%EA%B8%B0-feat.-AbortController',
          },
          {
            title: '패널회원 가입 리다이렉트 오류 (운영건)',
            problem:
              '패널회원 가입 과정에서 본인인증 완료 후 리다이렉트 URL을 설정했는데, 내부 데이터 요청 시 [_next/data] 경로가 포함되어 조건문이 제대로 동작하지 않아 루트 경로로 잘못 리다이렉트되는 이슈가 발생',
            solving:
              '[context.resolvedUrl] 을 사용하여 사용자측 실제 요청 URL을 추출하도록 수정 → 내부 데이터 원본 경로와 사용자 요청 경로를 정확히 구분하여 <본인인증 후 패널 가입 페이지로 올바르게 리다이렉트>되도록 구현',
            blogLink: 'https://velog.io/@h_jinny/Next.js-Redirect-%EA%B8%B0%EB%8A%A5-resolvedUrl',
          },
          {
            title: '좋아요/싫어요 기능 혹은 공감 기능에서의 UI 오류',
            problem:
              '뉴스 페이지의 AI 요약 좋아요/싫어요 기능 및 뉴스 공감 기능에서 사용자가 버튼을 클릭했을 때, 서버 응답을 기다리는 동안 UI가 즉시 변경되지 않는 문제가 발생하여 사용자들이 한 번 더 클릭해보거나, 기능이 제대로 작동하지 않는것으로 여김',
            solving:
              'Optimistic UI Update 패턴을 활용하여 <서버 응답 대기없이 즉시 결과를 보여주는 방식으로 개선>, 요청과 동시에 프론트단에서 [setState] 처리로 바로 기능이 작동하는 것처럼 보이게 만듦 → 사용자 경험을 크게 향상',
          },
        ],
        projectMainFunction: [
          {
            page: '1. AI 검색',
            desc: [
              {
                mainDesc: '조건부 화면 UI 구현',
                subDesc: [
                  '대한상의 뉴스 / 경제뉴스에 따른 자료 및 소플AI / 일반(Gpt-o) AI 별 <선택에 따라 검색 로직 분리>',
                  '검색중 / 검색 중지 / 비로그인 시 리다이렉트 등 <여러 상황별 예외처리> (스켈레톤 처리 등) 대응',
                ],
              },
              {
                mainDesc: '검색 결과 화면 개발',
                subDesc: [
                  '키워드 검색 / 페이지 별 검색 별도 기능 구현',
                  '중복 요청에 의한 데이터 불일치 이슈에서 [AbortController] <를 활용하여 요청 응답 일관성 유지>',
                  '주석번호에 따른 출처자료 리스트 생성',
                ],
              },
            ],
          },
          {
            page: '2. AI 글쓰기',
            desc: [
              {
                mainDesc: '기존의 일반 글쓰기와 더불어 AI 기반의 글 등록/수정 기능 구현',
              },
              {
                mainDesc:
                  '뉴스 자료 데이터를 연동하여 선택한 뉴스 데이터 기반으로 <AI 글을 생성할 수 있도록 구현>',
                subDesc: [
                  '<AI 기반으로 글 생성시 질문도 자동으로 추가>되도록 설정하여 사용자 경험 개선',
                ],
              },
              {
                mainDesc: '그 외 투표 생성 기능, 질문 작성지 추가 기능, 해시태그 기능 구현',
              },
              {
                mainDesc:
                  '이전 단계로 이동시 작성하던 데이터는 모두 초기화될 수 있다는 내용의 팝업을 생성해 <사용자의 작업 내용 손실 방지>',
              },
            ],
          },
          {
            page: '3. 경제 뉴스룸 리뉴얼',
            desc: [
              {
                mainDesc: '랜덤 색상으로 AI 요약 배너 슬라이드 구현',
              },
              {
                mainDesc: '뉴스별 탭으로 리스트 구현, 최신순 인기순 정렬 기능',
              },
              {
                mainDesc: '뉴스 제목 및 내용 검색 기능 구현',
              },
              {
                mainDesc:
                  '뉴스 AI 요약 연동 및 <좋아요/싫어요 기능, 뉴스 공감 기능, 이전글/다음글 기능 구현>',
              },
            ],
          },
        ],
        projectImgList: [
          '/assets/images/works-webp/sople1/sople1-07.webp',
          '/assets/images/works-webp/sople1/sople1-05.webp',
          '/assets/images/works-webp/sople1/sople1-01.webp',
          '/assets/images/works-webp/sople1/sople1-02.webp',
          '/assets/images/works-webp/sople1/sople1-03.webp',
          '/assets/images/works-webp/sople1/sople1-04.webp',
          '/assets/images/works-webp/sople1/sople1-06.webp',
          '/assets/images/works-webp/sople1/sople1-08.webp',
          '/assets/images/works-webp/sople1/sople1-09.webp',
          '/assets/images/works-webp/sople1/sople1-10.webp',
          '/assets/images/works-webp/sople1/sople1-11.webp',
          '/assets/images/works-webp/sople1/sople1-12.webp',
          '/assets/images/works-webp/sople1/sople1-13.webp',
          '/assets/images/works-webp/sople1/sople1-14.webp',
          '/assets/images/works-webp/sople1/sople1-15.webp',
        ],
      },
      {
        id: 3,
        projectName: 'YEEP 사용자/관리자 페이지 구축',
        projectDesc:
          '노스페이스 회사 필리핀지사의 전 사원을 관리할 수 있는 프로그램의 사용자 앱 및 관리자 페이지 입니다.',
        projectDescDetail:
          'Yeep 프로젝트는 노스페이스 필리핀 지사의 전 사원을 체계적으로 관리할 수 있도록 설계된 시스템으로, \n사용자 앱과 관리자 페이지를 함께 구축한 프로젝트입니다. 직원 개개인이 자신의 정보를 확인하고 활용할 수 있는 앱을 제공하는 동시에, \n관리자 측에서는 사원 데이터 관리, 권한 설정, 업무 현황 파악 등이 가능하도록 직관적인 관리 페이지를 구현하였습니다.',
        projectPeriod: '2025.02 - 2025.04',
        skillList: ['React', 'React Native', 'TypeScript', 'Tailwind CSS'],
        projectReview: 'YEEP 프로젝트 리뷰',
        projectWorkList: [
          '사용자 페이지의 경우 React Native 기반 FAQ/공지사항/헬프데스크 개발',
          '관리자 페이지는 웹으로 진행되었으며 사용자 앱의 데이터를 검색,조회하고 관리할 수 있는 기능 구현',
          'Chart.js를 활용하여 사용자 앱의 데이터를 시각화하여 표시하는 기능 구현',
        ],
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-yeep.webp',
        projectContribution: '앱(10%) 관리자(90%)',
        projectRole: '프론트엔드 개발',
        projectDevice: '앱(사용자) /  웹(관리자)',
        projectProcess:
          '고도화를 위한 운영 및 일부 구축 프로젝트이며, React Native 및 React.js 환경에서 작업을 진행하였습니다. 스타일 처리로는 TailwindCSS 를 사용하였으며, Redux 로 중앙데이터 관리를 진행하였습니다. 디자인 수급은 figma 로 이루어졌으며 기획자 1명, 디자이너 1명, 백엔드 2명, 프론트엔드 3명의 구성원으로 협업을 진행하였습니다.',
        projectMainFunction: [
          {
            page: '1. 사용자 앱',
            desc: [
              {
                mainDesc:
                  'React Native 환경에서 뉴스, 공지사항, FAQ, 헬프데스크 등 <서브 화면 UI 구축 및 데이터 연동>',
              },
              {
                mainDesc: '탭 기능, 게시물 등록/수정 및 좋아요 기능 등 구현',
              },
            ],
          },
          {
            page: '2. 관리자 웹',
            desc: [
              {
                mainDesc: '메인, 서브 등 전체 <관리자 페이지 90% 개발>',
              },
              {
                mainDesc: 'MUI 를 활용한 어드민 페이지 개발 생산성 향상',
              },
              {
                mainDesc:
                  '[react-hook-form]의 [Controller]를 활용하여 <MUI 컴포넌트들과 폼 상태를 연동하여 복잡한 폼 로직을 간소화>',
              },
              {
                mainDesc: '각 페이지 CRUD 구현 및 페이지별 기능 구현',
                subDesc: [
                  '[Chart.js] 를 활용하여 Bar 차트, Doughnut 차트 등 <페이지별 데이터를 다양하게 시각화>하여 사용자가 각 페이지의 현황을 직관적으로 파악할 수 있도록 유도',
                  '[react-hook-form] 을 활용해 목록에서 <전체, 대기, 승인, 거절 상태를 체크박스 형태로 구현, status 별로 즉시 리스트 필터링> 하여 볼 수 있도록 구현(중복 선택 가능)',
                  '등록 시 <타겟 그룹을 선별하여 저장>할 수 있는 팝업 구현',
                  '사용자 문의에 <답변 등록 및 승인, 거절 등 피드백 기능> 구현',
                  '로그인 유효성 데이터 검증',
                  '이외에 비밀번호 수정 기능, 번역된 언어 수정 기능, 버전 수정 기능 등 개발',
                ],
              },
            ],
          },
        ],
        projectProblemSolving: [
          {
            title: '필수값 상태 보장',
            problem:
              '상태별 필터링 관련 특정 목록페이지에서 대기(PENDING) 상태가 항상 체크되어있어야 했는데, 전체 해제 시 PENDING 체크박스가 해제되는 문제 발생',
            solving:
              '[useFormContext] 의 [watch] 기능을 기반으로 특정 필드를 기준으로 초기값을 제어하여 값이 유지되도록 처리 → <폼 데이터가 유실되는 문제 해결>',
          },
          {
            title: '차트 반응형 및 크기 제어 이슈',
            problem:
              '차트가 화면 컨테이너 크기에 맞게 자동으로 조정되지 않고, 고정된 크기로 유지되어 레이아웃이 깨지는 문제 발생',
            solving:
              '[responsive: true], [maintainAspectRatio: false] 옵션을 설정하고, [useEffect] 에서 [canvas] 스타일을 직접 조작하여 크기 제어',
          },
          {
            title: '파일 업로드 로직 중복',
            problem: '페이지마다 하드코딩으로 파일 업로드 로직들이 난잡하게 나열되어 있었음 ',
            solving:
              '파일 관리 커스텀훅(useFileManager)을 구현하여 <각 파일별로 훅을 불러와 간편하게 메서드로 활용할 수 있도록 개선>',
          },
          {
            title: '팝업 내 양방향 데이터 이동 및 상태 동기화 문제',
            problem:
              '뉴스 등록 페이지에서 두 개의 리스트 간에 항목을 이동시킬 때 중복 방지와 상태 동기화가 복잡하고, 선택된 상태가 초기화되는 문제 발생',
            solving:
              '[some] <메서드를 사용한 중복 체크 로직>을 만들어 같은 요소가 두 번 들어가지 않게 하고, 이동할 때마다 [state] 로 선택 상태를 초기화해서 깔끔하게 관리',
          },
        ],
        projectImgList: [
          '/assets/images/works-webp/yeep/yeep-01.webp',
          '/assets/images/works-webp/yeep/yeep-02.webp',
          '/assets/images/works-webp/yeep/yeep-03.webp',
          '/assets/images/works-webp/yeep/yeep-04.webp',
          '/assets/images/works-webp/yeep/yeep-05.webp',
          '/assets/images/works-webp/yeep/yeep-07.webp',
          '/assets/images/works-webp/yeep/yeep-08.webp',
          '/assets/images/works-webp/yeep/yeep-09.webp',
          '/assets/images/works-webp/yeep/yeep-10.webp',
          '/assets/images/works-webp/yeep/yeep-11.webp',
          '/assets/images/works-webp/yeep/yeep-12.webp',
          '/assets/images/works-webp/yeep/yeep-13.webp',
          '/assets/images/works-webp/yeep/yeep-14.webp',
        ],
      },
      // {
      //   projectName: '자사 홈페이지 구축',
      //   projectDesc: '오래된 자사 홈페이지를 리뉴얼하고자 구축을 진행하였습니다.',
      //   projectPeriod: '2025.01 - 2025.02',
      //   skillList: ['React', 'Styled-components'],
      //   projectWorkList: [
      //     'React.js 기반 모바일 및 PC 반응형 UI 퍼블리싱 총괄(PL)',
      //     '조건부 스크롤 및 적응형 레이아웃 구현',
      //   ],
      //   projectImgList: [
      //     '/assets/images/works-webp/homepage/hompage-01.webp',
      //     '/assets/images/works-webp/homepage/hompage-02.webp',
      //     '/assets/images/works-webp/homepage/hompage-03.webp',
      //     '/assets/images/works-webp/homepage/hompage-04.webp',
      //     '/assets/images/works-webp/homepage/hompage-05.webp',
      //   ],
      // },
      {
        id: 4,
        projectName: 'KCMF 사용자/관리자 페이지 구축',
        projectDesc:
          '시청자미디어재단에서 참여형 방송 문화를 위해 시청자가 방송사를 선택하여 직접 프로그램을 제작 및 신청할 수 있는 플랫폼입니다.',

        projectPeriod: '2024.10 - 2025.01',
        skillList: ['React', 'TypeScript', 'Redux', 'Styled-components'],
        projectReview: 'KCMF 프로젝트 리뷰',
        projectWorkList: [
          '공지, FAQ, 마이페이지 개발, 단계별 폼 검증 및 에러처리 도입',
          '관리자 페이지에서 상단 고정, 파일 요약 기능 등 관리 기능 강화',
          'Input 등 폼 공통 컴포넌트를 react-hook-form 로 제작하여 더 편리하게 사용할 수 있도록 개선',
        ],
        projectLink: 'https://pa.kcmf.or.kr/',
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-kcmf.webp',
        projectDescDetail:
          '시청자미디어재단은 참여형 방송 문화를 위해 시청자가 직접 방송사를 선택하고 프로그램을 제작 및 신청할 수 있는 환경을 제공하고 있습니다. \n이 플랫폼은 시청자가 주체적으로 방송 제작에 참여할 수 있도록 기획되었으며, 방송사와 시청자를 연결하는 소통 창구 역할을 합니다. \n<해당 프로젝트에서 사용자 페이지와 관리자 페이지를 모두 맡아 개발을 진행하였습니다.>',
        projectContribution: '사용자(30%) 관리자(30%)',
        projectRole: '프론트엔드 개발',
        projectDevice: '사용자/관리자 PC',
        projectProcess:
          '구축 프로젝트이며, React.js 환경에서 작업을 진행하였습니다. 스타일 처리로는  styled-component 를 사용하였으며, Redux 로 중앙데이터 관리를 진행하였습니다. 디자인 수급은 figma 로 이루어졌으며 기획자 1명, 디자이너 1명, 백엔드 2명, 프론트엔드 3명의 구성원으로 협업을 진행하였습니다.',
        projectMainFunction: [
          {
            page: '1. 사용자',
          },
          {
            page: '1-1. 메인 페이지',
            desc: [
              {
                mainDesc: '[Swiper] 를 활용한 메뉴 슬라이더 구현',
              },
              {
                mainDesc: '상위 5개 공지사항 데이터 연동',
              },
            ],
          },
          {
            page: '1-2. 회원가입',
            desc: [
              {
                mainDesc: '[react-hook-form] 을 활용하여 <단계별 회원가입 폼 구현>',
                subDesc: ['폼 유효성 검증 및 에러 핸들링으로 안정적인 데이터 입력 유도'],
              },
              {
                mainDesc: '회원가입 신청 등록 기능 구현',
                subDesc: ['어린이/성인 회원별로 <조건부 인증 및 등록 로직> 구현'],
              },
            ],
          },
          {
            page: '1-3. 마이페이지',
            desc: [
              {
                mainDesc: '복합적인 데이터 관리 및 필터링 시스템',
                subDesc: [
                  '연도별 탭 기반 데이터 분류 (채택된 프로그램, 지원 프로그램)',
                  '<URL 쿼리 파라미터를 활용한 상태 관리>로 페이지 새로고침 시에도 필터 상태 유지',
                  '2024년 ~ 현재까지의 연도 옵션을 동적으로 생성',
                ],
              },
              {
                mainDesc: '실시간 데이터 동기화 및 상태 관리',
                subDesc: [
                  '<탭 변경 시 자동으로 해당 데이터를 API로 조회>하는 효율적인 데이터 로딩',
                ],
              },
            ],
          },
          {
            page: '1-4. FAQ & 공지사항 & 문의하기',
            desc: [
              {
                mainDesc: '제목 및 키워드 기반 검색 기능',
              },
              {
                mainDesc: '<Input 및 SelectBox 를 공통컴포넌트화> 하여 개발 생산성 향상',
              },
              {
                mainDesc: '사용자 정보 자동 입력 및 파일 관리',
                subDesc: ['로그인된 사용자의 정보를 자동으로 폼에 채워넣는 기능'],
              },
            ],
          },
          {
            page: '1-5. 비밀번호 재설정',
            desc: [
              {
                mainDesc: '새 비밀번호 수정 기능',
              },
              {
                mainDesc: '새 비밀번호와 확인 비밀번호 일치 여부 검증으로 입력 오류 방지',
              },
              {
                mainDesc: '정규표현식을 활용해 비밀번호 양식 검증 처리',
              },
              {
                mainDesc: '백엔드측에서 내려주는 에러의 경우를 테스트하여 화면 처리',
              },
            ],
          },
          {
            page: '2. 관리자',
            desc: [
              {
                mainDesc: '각 페이지의 목록/수정/상세 페이지에서 CRUD 구현',
              },
              {
                mainDesc: 'MUI 를 활용한 어드민 페이지 개발 생산성 향상',
              },
              {
                mainDesc:
                  '[react-hook-form]의 [Controller]를 활용하여 <MUI 컴포넌트들과 폼 상태를 연동>하여 복잡한 폼 로직을 간소화',
              },
              {
                mainDesc:
                  '페이지별 <다운로드 이력을 파라미터로 전달하여 백엔드와의 연동>을 통해 이력 저장을 안정적으로 구현',
              },
              {
                mainDesc:
                  '관리자 페이지 내에서 <키워드를 전역적으로 동기화하는 관리 기능>을 안정적으로 구현',
              },
              {
                mainDesc:
                  '[ReactQuill] 에디터를 [react-hook-form] 과 연동해, 공지사항 내용 입력과 실시간 미리보기 구현',
              },
            ],
          },
        ],
        projectProblemSolving: [
          {
            title: '폼 입력 값 초기화',
            problem:
              '사용자 페이지의 다단계 회원가입 폼에서 [react-hook-form]을 사용할 때, Step 전환 시 입력된 값이 원상 복구되는 이슈 발생',
            solving:
              '[useFormContext] 의 [watch] 기능을 활용하여 상태를 유지하고, 특정 필드를 기준으로 초기값을 제어하여 값이 유지되도록 처리 → <폼 데이터가 유실되는 문제가 해결>되어 사용자 경험이 개선',
          },
          {
            title: '모달 상태 관리 복잡성 이슈',
            problem:
              '한 페이지에서 생성되는 여러 개의 Alert 모달의 경우 개별적으로 관리하면서 상태가 복잡해지는 문제가 발생',
            solving:
              'useAlert 라는 <커스텀훅을 구현하여 모달 상태를 중앙>화하고, 모달의 개별 이름만 속성으로 받아 그 안에서 리턴되는 openAlert, closeAlert 이 두 가지 메서드로만 일관된 방식으로 모달을 제어',
          },
          {
            title: 'SelectBox 스타일링 및 제어',
            problem:
              '기본 HTML의 [select] 태그는 브라우저마다 UI 에 일관성이 없어 사용자 경험을 해침 → SelectBox 컴포넌트를 커스터마이징 하려 했으나 기본 태그의 경우 스타일이 입혀지지 않는 문제 발생',
            solving:
              'React 훅과 대체 태그를 활용해 옵션 제어, 상태 관리 등을 직접 구현하여 커스텀 SelectBox를 제작, → <일관된 디자인과 더불어 키보드를 통한 조작과 드롭다운 기능을 구현>하여 접근성과 사용성을 대폭 개선',
            blogLink:
              'https://velog.io/@h_jinny/React-Selectbox-%EC%BB%A4%EC%8A%A4%ED%85%80-feat.-%EC%8A%A4%ED%83%80%EC%9D%BC-%EC%A0%91%EA%B7%BC%EC%84%B1',
          },
          {
            title: '다운로드 이력 관리 이슈',
            problem:
              '관리자 페이지에서 파일 다운로드 시 사용자/페이지별 이력 관리가 되지 않아 기록 추적이 어려움',
            solving:
              '다운로드 요청 시 페이지 정보를 파라미터로 전달하고, [withCredentials] 설정을 통해 <백엔드와 안정적으로 통신하여 이력을 정확히 저장>할 수 있도록 구현',
            blogLink:
              'https://velog.io/@h_jinny/React-%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EC%9D%B4%EB%A0%A5-%EB%82%A8%EA%B8%B0%EA%B8%B0-%EA%B8%B0%EB%8A%A5feat.withCredentials',
          },
          {
            title: '키워드 상태 관리 이슈',
            problem:
              '관리자 공통코드 관리 페이지에서 키워드를 기존 데이터에서 삭제하거나 새로 추가할 때 어떤 키워드가 이미 존재했던 것인지, 새로 생성된 것인지 구분되지 않아 백엔드 요청 시 정확한 처리가 어려움',
            solving:
              '기존 키워드와 새로 추가된 키워드, 삭제되는 키워드를 각각 분류 및 관리하여, API 요청 시 명확히 전달할 수 있도록 구현',
            blogLink:
              'https://velog.io/@h_jinny/React-%ED%82%A4%EC%9B%8C%EB%93%9C-%EC%B6%94%EA%B0%80-%EC%82%AD%EC%A0%9C-%EA%B8%B0%EB%8A%A5',
          },
          {
            title: '에디터 보안 및 입력 동기화',
            problem:
              '[ReactQuill] 에디터의 입력값을 [dangerouslySetInnerHTML] 로 렌더링하면 XSS 공격에 취약했고, [react-hook-form]과 동기화되지 않아 폼 입력 관리가 불안정한 문제가 발생',
            solving:
              '[watch]로 실시간 입력값을 가져와 [DOMPurify.sanitize()] 로 HTML을 정제한 뒤 렌더링한 후, [Controller]를 사용해 ReactQuill을 [react-hook-form]에 안정적으로 연동하여 <보안을 강화하고 입력 동기화를 완성>',
            blogLink:
              'https://velog.io/@h_jinny/React.js-ReactQuill-%EB%A1%9C-%EC%97%90%EB%94%94%ED%84%B0-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0',
          },
        ],
        projectImgList: [
          '/assets/images/works-webp/kcmf/kcmf-01.webp',
          '/assets/images/works-webp/kcmf/kcmf-02.webp',
          '/assets/images/works-webp/kcmf/kcmf-03.webp',
          '/assets/images/works-webp/kcmf/kcmf-04.webp',
          '/assets/images/works-webp/kcmf/kcmf-05.webp',
          '/assets/images/works-webp/kcmf/kcmf-06.webp',
          '/assets/images/works-webp/kcmf/kcmf-07.webp',
          '/assets/images/works-webp/kcmf/kcmf-08.webp',
          '/assets/images/works-webp/kcmf/kcmf-09.webp',
          '/assets/images/works-webp/kcmf/kcmf-10.webp',
          '/assets/images/works-webp/kcmf/kcmf-11.webp',
          '/assets/images/works-webp/kcmf/kcmf-12.webp',
          '/assets/images/works-webp/kcmf/kcmf-13.webp',
          '/assets/images/works-webp/kcmf/kcmf-14.webp',
          '/assets/images/works-webp/kcmf/kcmf-15.webp',
        ],
      },
    ],
  },
  {
    name: '이모션글로벌',
    companyLogo: '/assets/images/logo/emotion-logo.png',
    companyPeriod: '2022.07 - 2024.09',
    projectList: [
      {
        id: 5,
        projectName: '신세계 백화점 구축 및 운영',
        projectDesc:
          '신세계 백화점 앱과 홈페이지는 신세계 백화점의 쇼핑 정보와 혜택 및 브랜드 소통을 위한 라이프스타일 플랫폼입니다. 특히 앱에서는 고객과의 소통을 위한 커뮤니티, 상세한 브랜드관, 다양한 이벤트 참여 등을 경험할 수 있습니다. ',
        projectPeriod: '2023.12 - 2024.09',
        skillList: ['React', 'Next.js', 'TypeScript', 'Styled-components', 'Redux', 'React-Query'],
        projectWorkList: [
          '메인 및 온보딩 UI/UX 개선, 커뮤니티 페이지 고도화',
          'Axios 요청 로직을 react-query로 전환, API 호출 최적화',
          'APP 어드민 페이지에서 이벤트 폼 입력기능 및 팝업 기능 개선',
          'APP 이벤트 페이지 구현 및 운영',
          'WEB 홈페이지 및 매거진, 켐페인 페이지 퍼블리싱 및 인터렉션 구현',
        ],
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-ssg.webp',
        projectDescDetail:
          '신세계 백화점 앱과 홈페이지는 신세계 백화점의 쇼핑 정보와 혜택 및 브랜드 소통을 위한 라이프스타일 플랫폼입니다. \n특히 앱에서는 고객과의 소통을 위한 커뮤니티, 상세한 브랜드관, 다양한 이벤트 참여 등을 경험할 수 있습니다. \n<신세계 백화점 앱 운영, 앱 이벤트,  홈페이지 내 매거진 및 설날 카탈로그 고도화 등 다양한 프로젝트를 진행하며 서비스 안정성과 사용 편의성을 높였습니다.>',
        projectContribution: '20%',
        projectRole: '프론트엔드 개발, 퍼블리싱(PA)',
        projectDevice: 'APP / 적응형 웹',
        projectProcess:
          '운영 프로젝트이며, 앱의 경우 React.js 환경에서 styled-component 를 사용하여 작업했고 웹의 경우 html / css / jQuery 환경에서 작업을 진행했습니다. 앱, 홈페이지의 디자인 수급은 figma 로 이루어졌으며, 기획(6), 디자인(7), 프론트엔드(6), 백엔드(5) 네이티브(2) 개발자까지 한 부문 전체가 TF팀으로 구성되어 협업하였습니다.',
        projectMainFunction: [
          {
            page: '1. 신세계 백화점 APP',
            desc: [
              {
                mainDesc:
                  'iOS 및 안드로이드 환경별 UI 차이를 <웹 인스펙터를 활용해 실제 디바이스에서 직접 테스트>하며 호환성을 확보',
              },
              {
                mainDesc:
                  '페이지 진입 시 브릿지를 통해 스크립트 이벤트를 전송하여 사용자 조회수를 수집, 데이터 기반의 서비스 운영에 기여',
              },
            ],
          },
          {
            page: '1-1. 메인 페이지',
            desc: [
              {
                mainDesc:
                  '인디케이터를 리뉴얼하고, 슬라이드 등 <애니메이션 및 인터랙션 기능을 개선>',
              },
              {
                mainDesc:
                  '로띠(Lottie) 애니메이션을 도입해 아이콘 및 숏컷 버튼에 동적 효과를 추가, 첫 렌더링 제어 및 사용자 상태(일반/멤버십)에 따른 <맞춤형 UI 제공>',
              },
              {
                mainDesc:
                  '스플래시 화면 종료 로직을 네이티브 시간 제어에서 데이터 로딩 완료 시점으로 변경, <초기 로딩 경험 개선 및 불필요한 대기 시간 제거> → 퍼포먼스 최적화',
              },
              {
                mainDesc: '인디케이터, 로띠 아이콘 등을 컴포넌트화하여 재사용성과 유지보수성 확보',
              },
            ],
          },
          {
            page: '1-2. 커뮤니티 페이지',
            desc: [
              {
                mainDesc:
                  'axios 요청을 통해 데이터를 패치했던 리스트 페이지에 [react-query] 를 적용하여, <캐싱 및 손쉬운 업데이트로 성능 개선>',
              },
              {
                mainDesc:
                  '탭 기능 오류를 수정하고, <탭 콘텐츠 데이터 불일치 문제를 해결>해 안정적인 기능으로 개선',
              },
            ],
          },
          {
            page: '1-3. 온보딩 페이지',
            desc: [
              {
                mainDesc:
                  '<온보딩 콘텐츠 퍼블리싱 및 슬라이드 기능을 개선>하여 초기 화면의 완성도와 가독성을 향상',
              },
              {
                mainDesc:
                  '데이터 요청 시 조건을 적용해 <불필요한 로딩을 방지하고, 초기 로딩 속도를 최적화>',
              },
            ],
          },
          {
            page: '1-4. 이벤트 페이지',
            desc: [
              {
                mainDesc:
                  'JavaScript 사용이 불가능한 환경에서 <CSS만으로 슬라이드, 모달, 탭 메뉴를 구현>, 제한된 조건에서도 동적 UI 제공',
              },
              {
                mainDesc:
                  '팝업창 기능: [label]과 [input:checked]를 활용해 클릭 이벤트 없이 팝업을 제어, <사용자 상태(일반/멤버십)에 따른 맞춤형 UI 제공>',
              },
              {
                mainDesc:
                  '[:has] 가상 클래스 적용으로 팝업 활성화 시 body 스크롤 차단을 구현, 사용자 경험을 개선',
              },
            ],
          },
          {
            page: '1-5. 어드민 페이지',
            desc: [
              {
                mainDesc: '<입력 제한 및 에러 처리 로직을 강화>해 입력폼 안정성을 개선',
              },
              {
                mainDesc: '팝업 기능 개선을 통해 관리자 업무 효율성을 향상',
              },
            ],
          },
          {
            page: '2. 신세계 백화점 홈페이지 WEB',
            desc: [
              {
                mainDesc: '홈페이지 서브페이지 퍼블리싱 고도화로 콘텐츠 가독성과 UI 완성도 강화',
              },
              {
                mainDesc: '상세 페이지 이동 후 뒤로가기 시 탭 상태를 유지하여 사용자 편의성 개선',
              },
              {
                mainDesc: '적응형 모바일 작업',
              },
            ],
          },
          {
            page: '2-1. 매거진 페이지',
            desc: [
              {
                mainDesc:
                  '매거진 콘텐츠 추가 및 수정 퍼블리싱을 통해 최신 콘텐츠 업로드와 운영 효율성 증대',
                pageLink: 'https://www.shinsegae.com/magazine/list.do',
              },
            ],
          },
          {
            page: '2-2. 여행 이벤트 페이지',
            desc: [
              {
                mainDesc:
                  '<이중 탭 구조와 상태 유지, 스크롤 이동 기능>을 통해 탐색 흐름을 개선하고 사용자 편의성을 향상',
              },
              {
                mainDesc: '[Iframe] 내 팝업 기능 구현으로 백엔드의 제약된 환경에서도 유연한 대응',
              },
              {
                mainDesc:
                  '약관 동의 기능 (전체 동의 및 부분 동의)을 적용하여 <사용자 흐름 제어, 조건에 따른 버튼 활성화 로직> 개선',
              },
            ],
          },
        ],
        projectProblemSolving: [
          {
            title: '크로스 플랫폼 UI 에 대한 일관성',
            problem:
              '앱에서 iOS와 Android 환경마다 동일한 UI 요소가 다르게 표시되어 사용자 경험에 일관성이 떨어졌고, 단순 퍼블리싱으로는 기기별 차이를 확인하기 어려운 상황이었음',
            solving:
              '<웹 인스펙터를 활용해 실제 디바이스 환경에서 직접 테스트>를 진행하며 문제를 찾아 수정, <다양한 기기에서도 동일한 화면을 제공하도록 호환성을 확보>',
          },
          {
            title: '불필요한 데이터로딩 최적화',
            problem:
              '앱 초기 로딩 시 필요하지 않은 데이터까지 모두 불러와 로딩 시간이 길어지고, 사용자 이탈 가능성이 높아졌음',
            solving:
              '데이터 요청 조건을 세분화하여 꼭 필요한 데이터만 호출하도록 수정, <로딩 시간을 단축하고 초기 화면 접근성을 높임>',
          },
          {
            title: '자바스크립트 사용 제한 환경에서의 인터랙션',
            problem:
              '이벤트 페이지 환경에서는 JavaScript 사용이 제한되어 슬라이드, 모달, 탭 등 기본적인 인터랙션 구현이 불가능하였고, 사용자 편의성이 크게 저하되는 문제가 발생',
            solving:
              'CSS의 [:has], [input:checked] 기능을 활용하여 JS 동작을 대체하고, <제한된 환경에서도 모달과 탭 메뉴가 정상 동작>하도록 구현해 UX를 개선',
          },
          {
            title: '앱 스플래시 화면 타이밍 이슈',
            problem:
              '스플래시 화면이 무조건 3초 후 닫히는 방식이라, 네트워크 지연 시 공백 화면이 노출되어 사용자의 불편함 발생',
            solving:
              '스플래시 종료 시점을 데이터 로딩 완료 기준으로 변경, 안정적인 첫 화면 진입이 가능해지며 <초기 경험이 개선>됨',
          },
          {
            title: '페이지 이동 시 탭 상태 유지',
            problem:
              '상세 페이지를 보고 뒤로가기 했을 때 기존에 열었던 탭 상태가 초기화되어, 사용자가 다시 탐색해야 하는 불편이 발생',
            solving:
              'URL 파라미터 기반으로 <탭 상태를 유지하도록 로직을 개선>하여, 뒤로가기를 하더라도 동일한 화면을 그대로 유지할 수 있도록 함',
          },
        ],
        projectImgList: [
          '/assets/images/works-webp/sinsegae/sinsegae-02.webp',
          '/assets/images/works-webp/sinsegae/sinsegae-03.webp',
          '/assets/images/works-webp/sinsegae/sinsegae-04.webp',
          '/assets/images/works-webp/sinsegae/sinsegae-05.webp',
          '/assets/images/works-webp/sinsegae/sinsegae-06.webp',
          '/assets/images/works-webp/sinsegae/sinsegae-07.gif',
          '/assets/images/works-webp/sinsegae/sinsegae-08.webp',
          '/assets/images/works-webp/sinsegae/sinsegae-13.webp',
          '/assets/images/works-webp/sinsegae/sinsegae-09.webp',
          '/assets/images/works-webp/sinsegae/sinsegae-10.webp',
          '/assets/images/works-webp/sinsegae/sinsegae-11.webp',
          '/assets/images/works-webp/sinsegae/sinsegae-12.webp',
        ],
      },
      {
        id: 6,
        projectName: '삼성전자 비스포크 웨딩 캠페인 사이트 구축',
        projectDesc:
          '비스포크 웨딩 펀딩(BESPOKE Wedding FUNding) 은 삼성전자가 신혼부부의 새로운 시작을 응원하는 캠페인입니다.',
        projectPeriod: '2023.08 - 2023.10',
        skillList: ['React', 'Next.js', 'Emotion', 'SWR'],
        projectWorkList: [
          'Next.js 기반 마이페이지, 축하금 관리, 약관, 회원정보 페이지 개발',
          'react-hook-form으로 사용자 입력 검증 및 공통 컴포넌트화',
        ],
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-swwl.webp',
        projectDescDetail:
          '‘비스포크 웨딩 펀딩(BESPOKE Wedding FUNding)’ 은 삼성전자가 신혼부부의 새로운 시작을 응원하는 캠페인입니다. \n캠페인에 참여한 예비 부부에게는 다양한 모바일 청첩장이 지원되며, 청첩장에 갖고 싶은 삼성 가전 위시리스트를 추가하면 \n펀딩금을 통해 해당 가전을 구매할 수 있습니다. \n<서브페이지를 중심으로 사용자의 PC/태블릿/모바일 디바이스 환경에 최적화된 반응형 웹을 구현하였습니다.>',
        projectContribution: '20%',
        projectRole: '프론트엔드 개발, 퍼블리싱(PA)',
        projectDevice: '반응형 웹',
        projectProcess:
          '구축 프로젝트이며, Next.js 환경에서 emotion 이란 css 라이브러리를 사용하여 작업했습니다. 디자인 수급은 figma 로 이루어졌고 기획을 제외한, 디자인(7), 프론트엔드(6), 백엔드(5) 네이티브(2) 개발팀 전체가 TF팀으로 활동하였습니다. 기획의 경우 제일기획과의 협업으로 진행이 되었습니다.',
        projectMainFunction: [
          {
            page: '1. 약관 동의 페이지',
            desc: [
              {
                mainDesc:
                  '체크박스 컴포넌트 활용 → 전체 선택/해제 기능을 포함한 상태 관리 로직 구현',
              },
              {
                mainDesc:
                  '개별 약관 동의 상태를 감지해 모든 필수 약관 동의 완료 시에만 다음 단계 진행 버튼이 활성화되도록 조건부 렌더링 구현',
              },
              {
                mainDesc:
                  '약관 내용 아코디언 탭 기능 구현 및 재사용성을 고려한 <공통 컴포넌트 설계>',
              },
            ],
          },
          {
            page: '2. 마이페이지',
            desc: [
              {
                mainDesc: '사용자 정보 데이터 연동 및 수정 기능 구현',
                subDesc: [
                  '수정 버튼 클릭 시 입력폼 활성화 및 UI 상태 변경 →  직관적인 편집 경험 구현',
                  '정규표현식과 [yup] 라이브러리를 활용한 입력값 검증 구현',
                ],
              },
              {
                mainDesc:
                  '로그인 상태와 청첩장 생성 여부를 확인하여 <접근 가능한 기능을 동적으로 제한>하고, <권한에 맞게 UI를 제공>',
              },
              {
                mainDesc: '청첩장 공유하기, 수정하기, 펀딩금 관리하기 등 페이지 진입 라우팅',
              },
              {
                mainDesc:
                  '펀딩금 관리페이지 D-DAY 시스템: 마감 기한까지 남은 일수를 실시간으로 계산하고, 기한 상태(진행중/마감임박/마감)에 따라 <조건부 디자인 적용>',
              },
              {
                mainDesc:
                  '로그아웃, 탈퇴 등 주요 액션 관련 confirm 및 에러코드 값에 따른 에러 confirm 모달 구현',
              },
            ],
          },
          {
            page: '3. 축하금 전달 기한 설정 페이지',
            desc: [
              {
                mainDesc: '축하금 액수 및 전달 기한 실시간 데이터 연동',
              },
              {
                mainDesc: '[select box], [input] 등 입력폼',
                subDesc: [
                  '캠페인 기간 범위에서만 날짜 설정 가능',
                  '<월별 일수 자동 조정 표시> (ex. 8월 - 31까지 표시, 9월 - 30일까지 표시)',
                  '기한 설정 제한 (ex. 기한일을 오늘 이전으로는 설정 불가, 최대 기한 60일로 제한 등) 및 <중요도에 따라 프론트단/백엔드단 에러처리>',
                ],
              },
              {
                mainDesc:
                  '펀딩금 전달 리스트 데이터 반복문으로 구현 (요청 여부, 전달리스트 여부에 따라 형태 구현)',
              },
              {
                mainDesc: '자세히 보기 버튼 → 펀딩금 송금 안내 팝업 구현',
              },
            ],
          },
          {
            page: '청첩장 공유하기 페이지',
            desc: [
              {
                mainDesc: '반응형 퍼블리싱 작업',
              },
            ],
          },
        ],
        projectProblemSolving: [
          {
            title: '폼 유효성 검사 에러 상태 초기화',
            problem:
              '날짜 선택 시 년도/월/일이 변경될 때마다 이전 에러 상태가 남아있어 사용자가 올바른 값을 입력해도 에러 메시지가 계속 표시되는 문제가 발생',
            solving:
              '[reat-hook-form] 의 [clearErrors] 함수를 각 필드 변경 시점에 호출하여 <에러 상태를 즉시 초기화>하고, 사용자 경험을 개선',
          },
          {
            title: '날짜 선택 컴포넌트 상태 동기화',
            problem:
              '년도/월/일을 선택 시 각 필드가 독립적으로 변경되어 유효하지 않은 날짜 조합이 생성되거나, 월 변경 시 일 필드가 초기화되지 않는 문제가 발생',
            solving:
              '[useEffect] 를 활용하여 년도/월 변경 시 일 필드를 자동으로 초기화하고, <모든 필드가 완성되었을 때만 모든 년도/월/일이 기입된 값을 불러오는 로직>을 구현',
          },
          {
            title: '날짜 유효성 검사 로직',
            problem:
              '펀딩금 전달 기한 설정에서 오늘 이전 날짜 선택 시 에러 처리가 즉시 반영되지 않고, 60일 제한 검사가 복잡하게 구현된 문제가 발생',
            solving:
              '수정일(당일) 이전일 경우를 구하는 함수에서 시간을 0으로 설정하여 <정확한 날짜 비교를 하고, 에러 상태를 즉시 업데이트하는 로직>으로 개선',
          },
          {
            title: '무한스크롤 스크롤 이벤트 최적화',
            problem:
              '펀딩금 전달 리스트 페이지의 인피니트 스크롤 로직에서 이벤트가 너무 자주 발생하여 성능 저하와 불필요하게 API 호출이 발생함',
            solving:
              '[lodash/debounce] 를 활용하여 <15ms 딜레이를 적용하여 스크롤 이벤트를 최적화>하고 성능을 개선',
          },
          {
            title: '스타일 관리의 비효율성 문제',
            problem:
              '기본적으로 스타일링의 경우 순수 scss를 사용해왔는데, 전역 네임스페이스 충돌 문제 혹은 컴포넌트 단위 스타일 관리에 어려움이 있거나 재사용성/유지보수 측면에서 한계가 드러남',
            solving:
              '[emotion] 라이브러리를 도입하여 컴포넌트 단위로 스타일링을 적용 → <동적 스타일 제어를 통해 코드 가독성과 유지보수성을 개선, 전역 스타일 충돌 문제를 해소>하여 개발 효율성과 환경을 향상',
          },
        ],
        projectImgList: [
          '/assets/images/works-webp/wedding/wedding-02.webp',
          '/assets/images/works-webp/wedding/wedding-03.webp',
          '/assets/images/works-webp/wedding/wedding-04.webp',
          '/assets/images/works-webp/wedding/wedding-05.webp',
          '/assets/images/works-webp/wedding/wedding-06.webp',
          '/assets/images/works-webp/wedding/wedding-07.webp',
          '/assets/images/works-webp/wedding/wedding-08.webp',
        ],
      },
      {
        id: 8,
        projectName: '삼성 지속가능성경영 사이트 운영',
        projectDesc:
          '환경, 사회, 거버넌스 분야에 걸쳐 삼성전자의 전략과 주요 성과를 담은 보고서 형식의 웹사이트입니다.',
        projectPeriod: '2023.04 - 2023.12',
        skillList: ['Javascript', 'jQuery', 'CSS'],
        projectWorkList: [
          '지속가능경영 메인/서브페이지 참여신청 페이지 운영 및 구축',
          '웹표준·접근성 준수로 품질 향상 (background 로 삽입된 이미지 처리, 스크린 리더기 등)',
        ],
        projectLink: 'https://www.samsung.com/sec/sustainability/main/',
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-samsung.webp',
        projectDescDetail:
          '환경, 사회, 거버넌스 분야에 걸쳐 삼성전자의 전략과 주요 성과를 담은 보고서 형식의 웹사이트입니다. \n이는 기업 활동이 외부에, 또는 외부요인이 기업에 미치는 영향을 모두 고려한 평가를 통해 지속가능경영에 대한 활동을 다루고있습니다.\n<해당 프로젝트에서 전반적으로 메인/서브페이지의 적응형 퍼블리싱 및 기능 개선, 접근성 강화를 주로 진행하였습니다.>',
        projectProcess:
          '운영 프로젝트이며, 기본적인 html 환경에서 Javascript / jQuery / CSS 를 사용하여 작업했습니다. 디자인 수급은 figma 로 이루어졌고, 본인을 포함한 프론트엔드 파트 2명은 본사, 그 외 디자이너와 기획, 백엔드 개발 각 1명씩은 PTK, 웨버샌드윅 측으로 팀즈(비즈니스 메신저)를 통해 원격으로 협업하였습니다.',
        projectContribution: '50%',
        projectRole: '퍼블리싱(PA)',
        projectDevice: '적응형 웹',
        projectMainFunction: [
          {
            page: '1. 운영 및 유지보수',
          },
          {
            page: '1-1. 서브 페이지 (Planet, People, Principle, Focus, Digital Library)',
            desc: [
              {
                mainDesc: '전체적인 유지보수 및 퍼블리싱 작업',
              },
              {
                mainDesc: '탭, 스와이퍼 등 기존 기능 오류를 해결하여 사용자 경험을 개선',
              },
              {
                mainDesc:
                  '[alt], [aria] 속성, 포커스 이벤트 등을 전면 수정하여 <웹 접근성 표준을 충족, 다양한 사용자가 접근 가능한 환경>으로 구현',
              },
              {
                mainDesc:
                  '<중복된 기능을 공통 함수로 리팩토링>하여 코드의 효율성과 유지보수성을 크게 향상',
              },
              {
                mainDesc: '팝업의 콘텐츠를 업데이트 하고 리뉴얼 퍼블리싱 진행',
              },
              {
                mainDesc: '지속가능한 제품 페이지, 기후행동 페이지 고도화',
                subDesc: [
                  {
                    desc: '[svg] 를 활용한 <페이지네이션 커스텀>',
                    blogLink:
                      'https://velog.io/@h_jinny/Swiper-svg-%EB%B2%84%ED%8A%BC%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-pagination-%EC%BB%A4%EC%8A%A4%ED%85%80-loop-update-%EA%B8%B0%EB%8A%A5',
                  },
                ],
              },
            ],
          },
          { page: '2. 구축' },
          {
            page: '2-1. 폐휴대폰 수거 캠패인 페이지',
            desc: [
              {
                mainDesc: '폐휴대폰 캠페인 페이지 퍼블리싱 및 개발',
                subDesc: [
                  {
                    desc: '[Swiper] 를 이용해 <세로 풀페이지 슬라이드 스크롤> 구현 (마우스휠 이벤트 활용, [throttle] 로 성능 최적화)',
                    blogLink:
                      'https://velog.io/@h_jinny/javascript-%EC%84%B8%EB%A1%9C-%EC%8A%A4%ED%81%AC%EB%A1%A4-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%EA%B5%AC%ED%98%84',
                  },
                ],
              },
              {
                mainDesc: '캠페인 신청 사이트 퍼블리싱 및 개발',
                subDesc: [
                  {
                    desc: '[Swiper] 의 [hashNavigation] 을 이용해 <새로고침 없이 페이지 이동 구현>',
                    blogLink:
                      'https://velog.io/@h_jinny/Swiper.js-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%81%ED%81%AC-%EC%9D%B4%EB%8F%99-%ED%98%84%EC%9E%AC-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%93%9C-%ED%91%9C%EC%8B%9C-hash-navigation-%EC%98%B5%EC%85%98-1',
                  },
                  {
                    desc: 'select 박스 option 선택에 따른 input 입력창 추가/삭제 기능 구현',
                    blogLink:
                      'https://velog.io/@h_jinny/javascriptselect-%EB%B0%95%EC%8A%A4-option-%EC%84%A0%ED%83%9D%EC%97%90-%EB%94%B0%EB%A5%B8-input-%EC%9E%85%EB%A0%A5%EC%B0%BD-%EC%B6%94%EA%B0%80%EC%82%AD%EC%A0%9C',
                  },
                ],
              },
            ],
          },
          {
            page: '2-2. 모두가 가능한 경험 페이지',
            desc: [
              {
                mainDesc:
                  '<GSAP을 활용해 마우스 휠 기반 이중 스크롤링>과 텍스트 딜레이 애니메이션을 구현한 인터랙션 구현',
              },
              {
                mainDesc: '로띠 애니메이션을 적용 및 팝업 생성 기능 구현',
              },
            ],
          },
          {
            page: '3. 모바일 대응',
            desc: [
              {
                mainDesc:
                  '적응형 퍼블리싱으로 PC와 모바일 모두에 최적화된 레이아웃을 제공해 접근성과 가독성을 향상',
              },
              {
                mainDesc:
                  '모바일 전용 로띠 애니메이션을 적용하여 <기기 특성에 맞는 인터랙션을 구현>',
              },
              {
                mainDesc:
                  '표는 가로 스크롤 방식으로, 리스트는 [Swiper] 슬라이드로 전환해 모바일 사용성을 크게 개선',
              },
            ],
          },
        ],
        projectProblemSolving: [
          {
            title: '웹 접근성 강화',
            problem:
              '운영 페이지에서 일부 이미지에 [alt] 속성이 누락되거나, 컨텐츠에 접근 시 시/청각 문제가 있는 사용자가 보조기기를 사용하기 불편한 상황이 발생 → ex) 키보드를 이용시 포커싱이 순서대로 동작하지 않거나, 스크린리더기를 활용 시 내용을 제대로 인식하지 않는 문제 등',
            solving:
              '[alt], [aria] 속성을 적용하고 스크린리더기 테스트 및 포커스 이벤트를 전면 수정하여, <다양한 사용자가 접근 가능한 환경을 구현>',
          },
          {
            title: '코드 중복으로 인한 유지보수성 저하',
            problem:
              '동일한 기능이 여러 페이지에서 반복적으로 작성되어 코드 관리와 유지보수가 어렵고, 수정 시 오류 가능성이 높았던 경우가 많았음',
            solving: '공통 함수를 별도 모듈로 분리하여 재사용성을 높이고, 유지보수 효율성을 개선',
          },
          {
            title: '퍼포먼스 저하 (마우스휠 슬라이드)',
            problem:
              '세로 풀페이지 슬라이드 구현 시 마우스휠 이벤트가 과도하게 발생하여 스크롤이 끊기는 등, 성능 저하가 발생',
            solving:
              '[throttle] <을 적용하여 이벤트 호출 빈도를 최적화>하고, 부드러운 인터랙션을 제공',
          },
        ],
        projectImgList: [
          '/assets/images/works-webp/samsung/samsung-01.webp',
          '/assets/images/works-webp/samsung/samsung-02.webp',
          '/assets/images/works-webp/samsung/samsung-03.webp',
          '/assets/images/works-webp/samsung/samsung-04.webp',
          '/assets/images/works-webp/samsung/samsung-05.webp',
          '/assets/images/works-webp/samsung/samsung-06.webp',
          '/assets/images/works-webp/samsung/samsung-07.webp',
          '/assets/images/works-webp/samsung/samsung-08.webp',
          '/assets/images/works-webp/samsung/samsung-09.webp',
          '/assets/images/works-webp/samsung/samsung-10.webp',
          '/assets/images/works-webp/samsung/samsung-11.webp',
          '/assets/images/works-webp/samsung/samsung-12.webp',
          '/assets/images/works-webp/samsung/samsung-13.webp',
          '/assets/images/works-webp/samsung/samsung-14.webp',
          '/assets/images/works-webp/samsung/samsung-15.webp',
          '/assets/images/works-webp/samsung/samsung-16.webp',
        ],
      },
      {
        id: 9,
        projectName: '이모션글로벌 홈페이지 고도화',
        projectDesc:
          '자회사인 이모션 글로벌 홈페이지이며, 본사에 대한 정보, 포트폴리오, 의뢰 서비스, 입사지원 서비스 등을 제공하는 웹사이트입니다.',
        projectPeriod: '2022.11 - 2023.02',
        skillList: ['Vue.js', 'Nuxt.js', 'SWR', 'SCSS'],
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-emotion.webp',
        projectDescDetail:
          '자회사인 이모션 글로벌 홈페이지이며, 본사에 대한 정보, 포트폴리오, 의뢰 서비스, 입사지원 서비스 등을 제공하는 웹사이트입니다. \n<메인 및 서브페이지를 통틀어 고도화 작업을 진행하였습니다.>',
        projectProcess:
          '운영 프로젝트이며, Vue.js 환경에서 scss 를 사용하여 리뉴얼된 디자인을 바탕으로 고도화 작업을 진행했습니다. 디자인 수급은 figma 로 이루어졌으며, 본인을 포함한 프론트엔드(2), 백엔드(1), 기획자(2), 디자이너(2) 각 파트별로 2명씩 투입되었습니다.',
        projectContribution: '50%',
        projectRole: '프론트엔드 개발, 퍼블리싱(PA)',
        projectDevice: '적응형 웹',
        projectMainFunction: [
          {
            page: '1. 메인페이지',
            desc: [
              {
                mainDesc: '퍼블리싱 및 개발',
                subDesc: [
                  '변경된 레이아웃과 콘텐츠를 반영하고, 메인 동영상 교체와 사운드 제어 버튼을 구현하여 직관적인 미디어 제어 경험을 제공',
                  '객체 데이터 구조를 파악해 반복문으로 적용함으로써 콘텐츠 관리 효율성 및 재사용성을 높임',
                  '[Swiper] 를 활용한 슬라이드 구현',
                ],
              },
            ],
          },
          {
            page: '2. ABOUT',
            desc: [
              {
                mainDesc:
                  '디자인에서 요구되는 인터랙션 → GSAP 기반 패럴렉스 스크롤, Lottie 애니메이션, 이미지 가로 스크롤 등을 적용하여 완성도를 높임',
              },
            ],
          },
          {
            page: '3. CAREERS',
            desc: [
              {
                mainDesc:
                  '지원 자격 탭 기능, 입력 폼 검증, 실시간 value 반영 기능을 구축하여 <지원자가 직관적으로 값을 입력하고 오류를 줄일 수 있는 UX 환경 조성>',
              },
              {
                mainDesc:
                  '[aside] 영역의 [fixed] 적용으로 지원 진행 중 필요한 정보 확인에 대한 편의성 향상',
              },
              {
                mainDesc:
                  'Vue 의 기본 기능과 [Swiper] 라이브러리 <충돌 문제를 해결하여 안정적인 탭 기능 구현>',
                blogLink:
                  'https://velog.io/@h_jinny/Vue.js%ED%83%AD-%EA%B8%B0%EB%8A%A5-%EC%9D%B4%EC%9A%A9%EC%8B%9C-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%9E%91%EB%8F%99-%EC%98%A4%EB%A5%98',
              },
            ],
          },
          {
            page: '4. REQUEST',
            desc: [
              {
                mainDesc: '입사 지원 페이지(CAREERS / apply)와 동일한 로직으로 적용',
              },
            ],
          },
          {
            page: '5. 모바일 대응',
            desc: [
              {
                mainDesc:
                  '적응형 퍼블리싱으로 PC와 모바일 모두에 최적화된 레이아웃을 제공해 접근성과 가독성을 향상',
              },
              {
                mainDesc: '모바일 전용 로띠 애니메이션을 적용하여 기기 특성에 맞는 인터랙션을 구현',
              },
            ],
          },
        ],
        projectProblemSolving: [
          {
            title: 'Vue와 Swiper 라이브러리 충돌 이슈',
            problem:
              '입사지원 페이지의 슬라이드에서 Vue의 기본 기능과 충돌하여 탭 기능이 정상 작동하지 않는 이슈 발생',
            solving:
              '[v-swiper] 디렉티브를 사용하여 Vue 컴포넌트와 Swiper 를 분리하고, [observer: true], [observerParents: true] 옵션을 추가하여 DOM 변경 감지 → 탭 전환 시에도 Swiper가 정상 작동하도록 개선',
          },
          {
            title: 'GSAP 애니메이션 메모리 누수 방지',
            problem:
              'About 페이지에서 ScrollMagic과 GSAP를 사용한 패럴렉스 스크롤 애니메이션에서 컴포넌트 언마운트 시 Scene이 제대로 정리되지 않아 메모리 누수 발생',
            solving:
              '[destroyed()] 라이프사이클에서 [ScrollMagic] 의 이전 Scene을 완전히 정리하고, [activated()] 훅에서 새로운 Scene을 생성하도록 처리 → 메모리 누수 문제 해결',
          },
          {
            title: '파일 업로드 크기 및 개수 제한 처리',
            problem:
              '입사지원 페이지에서 이력서 업로드 시 파일 크기와 개수 제한을 프론트엔드에서 체크해야 하는데, 사용자 경험이 좋지 않았음',
            solving:
              '특정 메서드에서 파일 크기를 체크하고, 초과 시 즉시 알림을 표시하여 사용자가 즉시 인지할 수 있도록 처리 → 업로드 실패율 감소',
          },
        ],
        projectImgList: [
          '/assets/images/works-webp/emotion/emotion-01.webp',
          '/assets/images/works-webp/emotion/emotion-02.webp',
          '/assets/images/works-webp/emotion/emotion-03.webp',
          '/assets/images/works-webp/emotion/emotion-04.webp',
          '/assets/images/works-webp/emotion/emotion-05.webp',
          '/assets/images/works-webp/emotion/emotion-06.webp',
          '/assets/images/works-webp/emotion/emotion-07.webp',
          '/assets/images/works-webp/emotion/emotion-08.webp',
          '/assets/images/works-webp/emotion/emotion-09.webp',
          '/assets/images/works-webp/emotion/emotion-10.webp',
          '/assets/images/works-webp/emotion/emotion-11.webp',
        ],
        projectWorkList: [
          'Vue.js 기반 서브페이지 고도화, 데이터 조회 및 수정 기능 구현',
          '반응형 퍼블리싱 및 인터랙션 추가',
        ],
        projectLink: 'https://www.emotion.co.kr/',
      },
      {
        id: 10,
        projectName: '대상 사이트(종가, 오푸드) 운영',
        projectDesc:
          '종가(JONGGA)와 오푸드(O’Food)는 대상의 글로벌 브랜드로, 제품의 통합 커뮤니케이션 플랫폼입니다.',
        projectPeriod: '2022.08 - 2022.12',
        skillList: ['JavaScript', 'jQuery', 'CSS'],
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-ds.webp',
        projectDescDetail:
          '종가(JONGGA)와 오푸드(O’Food)는 대상의 글로벌 브랜드로, 제품의 통합 커뮤니케이션 플랫폼입니다. \n종가의 경우 한식, 이른바 “K-푸드” 를 브랜드 고유의 스토리텔링으로 넣어 글로벌적인 브랜드 가치를 제안하고있으며, \n오푸드 역시 다채로운 한식에 대한 해외 소비자들의 이해를 높이기 위해 종가와 유사한 가치제안을 두고 있습니다.\n<두 프로젝트 모두 전반적인 페이지 고도화 퍼블리싱을 진행하였습니다.>\n\n* 종가(JONGGA) 웹사이트는 현재 리뉴얼되어 사이트 형태가 아래 구현내용과 상이할 수 있습니다.',
        projectProcess:
          '운영 프로젝트이며, jsp 환경에서 Javascript / jQuery / css 를 사용하여 작업했습니다. 디자인 수급은 zeplin 으로 이루어졌고, 본인 이외에 디자인 1명, BE 1명의 구성으로 작업이 진행되었습니다. jsp 환경이었기에 백엔드 개발자의 설정 도움(톰캣 설치 등)을 받아 작업했습니다.',
        projectContribution: '100%',
        projectRole: '퍼블리싱(PL) ',
        projectDevice: '적응형 웹',
        projectMainFunction: [
          {
            page: '오푸드(O’Food)',
            desc: [
              {
                mainDesc: '메인/서브 페이지 퍼블리싱과 유지보수를 통해 변경된 콘텐츠를 반영',
              },
              {
                mainDesc: '[Swiper] 를 통한 슬라이드 구현',
              },
              {
                mainDesc: '모바일 적응형 퍼블리싱을 통해 PC 외 디바이스 호환성을 제공',
              },
            ],
          },
          {
            page: '종가(JONGGA)',
            desc: [
              {
                mainDesc: '메인/서브 페이지 퍼블리싱과 AOS 라이브러리를 기반으로 애니메이션 적용',
              },
              {
                mainDesc:
                  '팝업 상태를 URL 파라미터로 제어하여 공유 시 동일한 화면을 유지할 수 있도록 개선',
                blogLink:
                  'https://velog.io/@h_jinny/jQuery-%ED%8C%9D%EC%97%85%EC%9D%B4-%EC%97%B4%EB%A6%B0-%EC%83%81%ED%83%9C%EC%9D%98-URL-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0',
              },
              {
                mainDesc: '모바일 적응형 퍼블리싱을 통해 PC 외 디바이스 호환성을 제공',
              },
            ],
          },
        ],
        projectProblemSolving: [
          {
            title: 'AOS 애니메이션 최적화 이슈',
            problem:
              '페이지 스크롤 시 모든 요소에 애니메이션이 적용되어 다소 산만한 UX 경험과 부가적인 성능 저하가 우려됐음',
            solving:
              '[AOS.init()] 설정에서 [once: true] 옵션을 사용하여 애니메이션이 한 번만 실행되도록 최적화',
          },
          {
            title: '팝업 URL 공유 이슈',
            problem:
              '링크로 공유 되어야할 팝업이 필요했으며, 열릴 때 이전 스크롤 위치가 유지되어 사용자가 맨 위부터 보지 못하는 문제가 발생',
            solving:
              '파라미터를 객체화하여 추출된 id 값으로 링크가 생성될 수 있게 추가하였으며, [setTimeout] 과 [scrollTop(0)] 을 사용하여 팝업 열림 후 스크롤 위치를 맨 위로 초기화하여 사용자 경험도 같이 개선',
          },
          {
            title: '반응형 디자인 모바일 최적화',
            problem: '모바일 환경에서 터치 인터랙션 시 기본 하이라이트 효과가 사용자 경험을 방해',
            solving:
              'CSS 에서 [-webkit-tap-highlight-color] 속성을 사용하여, 터치 시 발생하는 기본 하이라이트 효과를 제거하고 일관된 UX를 제공',
          },
        ],
        projectImgList: [
          '/assets/images/works-webp/daesang/daesang-01.webp',
          '/assets/images/works-webp/daesang/daesang-02.webp',
          '/assets/images/works-webp/daesang/daesang-03.webp',
          '/assets/images/works-webp/daesang/daesang-04.webp',
          '/assets/images/works-webp/daesang/daesang-05.webp',
          '/assets/images/works-webp/daesang/daesang-06.webp',
          '/assets/images/works-webp/daesang/daesang-07.webp',
          '/assets/images/works-webp/daesang/daesang-09.webp',
          '/assets/images/works-webp/daesang/daesang-10.webp',
          '/assets/images/works-webp/daesang/daesang-11.webp',
          '/assets/images/works-webp/daesang/daesang-12.webp',
        ],
        projectWorkList: [
          'jsp 환경에서 css, jQuery 를 사용하여 작업, 종가 /오푸드 메인 및 서브페이지 퍼블리싱 및 인터렉션 구현',
        ],
        projectLink: ['https://ofoodglobal.com/', 'https://www.jongga.co.kr/'],
      },
      {
        id: 11,
        projectName: '메타클럽 구축',
        projectDesc:
          '메타클럽은 상품권 전환 및 포인트를 충전할 수 있는 포인트 테크 플랫폼으로, 문화상품권, 도서문화상품권의 핀번호를 등록하여 다양한 곳에서 사용할 수 있게 해줍니다.',
        projectPeriod: '2022.08 - 2022.11',
        skillList: ['Vue.js', 'Nuxt.js', 'SWR', 'SCSS'],
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-meta.webp',
        projectDescDetail:
          '메타클럽은 상품권 전환 및 포인트를 충전할 수 있는 포인트 테크 플랫폼입니다. \n문화상품권, 도서문화상품권의 핀번호를 등록하여 다양한 곳에서 사용할 수 있게 해줍니다. \n<해당 프로젝트에서 퍼블리싱을 중심으로 일부 기능 구현까지 담당하며 서비스 구축 과정에 참여하였습니다.>',
        projectProcess:
          '구축 프로젝트이며, Vue.js(Nuxt.js) 환경에서 scss 를 사용하여 작업했습니다. 디자인 수급은 figma 로 이루어졌으며, UI 컴포넌트 관리로는 Storybook 을 사용하였습니다. 기획(6), 디자인(7), 프론트엔드(6), 백엔드(5) 개발까지 한 부문 전체가 TF팀으로 협업하였습니다.',
        projectContribution: '10%',
        projectRole: '프론트엔드 개발, 퍼블리싱(PA)',
        projectDevice: 'APP',
        projectMainFunction: [
          {
            page: '1. 문화상품권 충전 페이지',
            desc: [
              {
                mainDesc:
                  '정규표현식과 [yup] 라이브러리를 적용하여 입력 데이터의 유효성을 보장, 잘못된 입력으로 인한 오류를 사전에 방지',
              },
              {
                mainDesc:
                  '액수 계산 로직을 구현하여 <충전 금액/수수료/잔액 부족 여부를 직관적으로 확인>할 수 있게 해 사용자 편의성을 높임',
                subDesc: [
                  '1000원, 5000원, 5만원 권 단위로 +, - 버튼을 통해 갯수에 따른 액수 표현 및 충전된 액수에서 <수수료(%)계산, 잔액부족 등 계산하여 값 표시>',
                ],
              },
              {
                mainDesc:
                  '모달 컴포넌트를 동적으로 구성하여 <상황별로 안내가 가능하도록 개선>, 사용자 경험을 강화',
              },
            ],
          },
          {
            page: '2. 약관 / 에러페이지',
            desc: [
              {
                mainDesc: '약관 페이지를 풀팝업 형태로 구현',
              },
              {
                mainDesc: '<백엔드측 에러 코드를 기반으로 상황별로 화면을 제공>',
              },
            ],
          },
        ],
        projectWorkList: [
          'Vue(Nuxt.js) 기반 퍼블리싱 및 데이터 연동',
          '포인트 충전/전환 페이지 개발, 입력 제한 기능 구현',
        ],
        projectImgList: [
          '/assets/images/works-webp/metapoint/metapoint-01.webp',
          '/assets/images/works-webp/metapoint/metapoint-02.webp',
          '/assets/images/works-webp/metapoint/metapoint-03.webp',
          '/assets/images/works-webp/metapoint/metapoint-04.webp',
        ],
      },
      {
        id: 7,
        projectName: '자사 업무관리 프로그램(PMS) 구축 및 운영',
        projectDesc:
          '사원 정보, 업무일지 및 프로젝트 현황을 파악할 수 있는 어드민 페이지입니다. 부서별 진행 업무와 프로젝트 현황을 객관적인 지표로 확인할 수 있습니다.',
        projectPeriod: '2023.05 - 2023.11',
        skillList: ['React', 'TailwindCSS', 'SWR'],
        projectThumbnail: '/assets/images/thumbnails-webp/thumbnail-pms.webp',
        projectDescDetail:
          '사원 정보, 업무일지 및 프로젝트 진행현황을 파악할 수 있는 어드민 페이지입니다. 현재 본인이 속한 파트 뿐만이 아닌 다른 파트에서도 어떤 업무가 진행중인지 한 눈에 알 수 있고, 프로젝트에 대한 현황 정보가 객관적인 지표로 표시되어 있습니다. 이를 통해 더욱 정확하고 직관적인 관리가 가능합니다.',
        projectProcess:
          '구축 프로젝트이며, 이전에 개발된 기존 어드민 페이지를 참고하여 학습겸 진행되었습니다. 디자인은 무료 어드민 템플릿을 사용했으며, 빠르고 간단한 css 적용을 위해 tailwindcss 를 사용했습니다. 본인을 포함한 프론트엔드 2명, 백엔드 2명의 구성으로 협업하였습니다.',
        projectContribution: '50%',
        projectRole: '프론트엔드 개발, 퍼블리싱(PA)',
        projectDevice: '반응형 웹',
        projectMainFunction: [
          {
            page: '1. 업무일지 페이지 (메인)',
            desc: [
              {
                mainDesc: '기존 컴포넌트를 활용해 업무일지 등록, 수정, 삭제 구현',
              },
              {
                mainDesc: '업무일지 목록',
                subDesc: [
                  '전체적인 업무현황이 잘 보이도록 각 직원의 일지를 블록 형태로 표시',
                  '<업무일지 검색 시 날짜에 따라 필터링하여 조회> 가능 (default 는 금일)',
                  '유저가 담당중인 프로젝트들을 뱃지로 표시 → 프로젝트마다 구분이 되도록 뱃지 배경색을 랜덤으로 생성하여 구현',
                ],
              },
              {
                mainDesc: '업무일지 상세',
                subDesc: [
                  '<여러 개의 일감을 추가 선택 가능>하게 구현',
                  '별점 기능 → 하루 업무에 대해 스스로 별점을 메길 수 있는 기능 구현',
                ],
              },
              {
                mainDesc: '동적 레이아웃 구현',
                subDesc: [
                  '세로 형태의 메인 [nav] 바 기능 → [nav] 가 열리고 닫힘에 따라 <전체적인 화면 레이아웃이 바뀌는 기능> 구현',
                ],
              },
            ],
          },
          {
            page: '2. 프로젝트 일감 목록 페이지',
            desc: [
              {
                mainDesc:
                  '최신순으로 등록된 일감이 표시되고, 검색 시 <프로젝트 시작일과 종료일에 맞춰 조회가 가능>하도록 구현',
              },
              {
                mainDesc:
                  'Pagination 기능 구현 (백엔드 측에서 내려주는 페이지당 목록 갯수, 다음 페이지 여부 등 데이터를 활용)',
              },
            ],
          },
          {
            page: '3. 프로젝트 일감 등록 페이지',
            desc: [
              {
                mainDesc:
                  '새롭게 생긴 프로젝트 일감을 직접 작성할 수 있도록 등록, 수정, 삭제 기능 구현',
              },
            ],
          },
          {
            page: '4. 직원 정보 페이지',
            desc: [
              {
                mainDesc:
                  '사원의 인사정보(파트, 직급)와 조직 정보의 등록, 수정, 삭제 기능 구현(본인 혹은 관리자만 수정 가능하도록 제한)',
              },
              {
                mainDesc: '현재 사원이 투입된 프로젝트의 현황과 최근 작성한 업무일지 데이터 표시',
              },
            ],
          },
          {
            page: '5. 프로젝트 투입 정보 페이지',
            desc: [
              {
                mainDesc: '프로젝트 현황, 프로젝트에 현재 투입된 인원에 대한 인적사항 등 구현',
              },
              {
                mainDesc:
                  '[table] 태그를 사용하고 이에 [map] 을 활용해 <엑셀처럼 만들어 한 번에 파악이 가능하도록 기능 구현>',
              },
              {
                mainDesc: '투입 인원, 진행도(%) 입력폼 개발 및 구현 (등록, 수정, 삭제)',
              },
              {
                mainDesc:
                  '가장 상단의 [header] 의 경우 상하로 스크롤 시 [fixed] 로 고정, 좌우로 스크롤시 [fixed] 가 풀리고 아래 컨텐츠와 동시에 스크롤 되도록 동적으로 구현 (엑셀 동작을 참고)',
              },
            ],
          },
          {
            page: '6. 모바일 대응',
            desc: [
              {
                mainDesc:
                  '각 페이지를 pc(1920px) - 탭(1024px) - 모바일(720px) 단위의 반응형으로 구현',
              },
            ],
          },
        ],
        projectProblemSolving: [
          {
            title: '업무일지 날짜 검색 UX 개선',
            problem:
              '업무일지 검색 시 기본적으로 금일 데이터가 나오도록 했지만, 날짜를 변경해도 ‘검색’ 버튼을 눌러야만 결과가 조회되는 구조 → 사용성 저하',
            solving:
              '날짜 [input] 값이 변경될 때마다 API 호출이 즉시 실행되도록 수정하여, <검색 버튼 없이도 실시간 조회 가능하게 개선>',
          },
          {
            title: '프로젝트 투입 정보 페이지 엑셀 구현 이슈',
            problem:
              '프로젝트 투입 현황 페이지를 엑셀 형태로 구현해달라는 요청이 있었음. 처음에는 [flex] 로 시도했지만 행/열 구조 유지 및 스크롤 고정 처리가 어려움',
            solving:
              '[table] 태그 기반으로 [map] 을 활용해 데이터를 출력하고, 헤더는 상단 고정 + 좌우 스크롤 동적 처리까지 반영하여 <엑셀과 유사한 UI/UX 구현>',
          },
          {
            title: '반응형 대응 이슈',
            problem:
              'PC, 태블릿, 모바일 화면에 따라 레이아웃을 설정해야 했는데, 최대한 단순한 디자인 시스템이 필요했던 상황',
            solving:
              '[Tailwindcss] <의 반응형 유틸리티를 활용해 단위별 레이아웃을 조정>하고, 모바일에서도 동일한 기능을 원활히 사용할 수 있도록 개선',
          },
          {
            title: '프로젝트 별 뱃지 가독성 개선',
            problem:
              '메인 화면에서 프로젝트별 뱃지를 표시할 때, 같은 스타일이라 프로젝트 간 구분이 어려움',
            solving:
              '프로젝트마다 배경색을 랜덤 생성하는 로직을 구현하여 <시각적으로 쉽게 구분할 수 있도록 개선>',
          },
          {
            title: '전반적인 UI 개선 이슈',
            problem:
              '뚜렷한 디자인 시안이 없는 상황에서, 기획서에 표시된 단순한 화면을 바탕으로 개발을 진행한 상황 →  ex) 테이블 형식의 목록이 직원들에게 직관적으로 보이지 않다는 피드백이 발생하거나, 목록 별점 시스템을 도입할 때 상세페이지가 아닌 목록 페이지에서 표시될 때 레이아웃이 깨지는 현상이 발생',
            solving:
              '테이블 형태가 아닌 [Grid] 를 사용하여 <더 직관적으로 직원들의 일과가 보이게 개선>하였으며, 별점을 숫자로 단순 표시하는 방식으로 변경하여 <가독성과 직관성을 높임>',
          },
        ],
        projectWorkList: [
          '사내 업무 등록 및 일지 작성 페이지 및 이메일 서명 자동화 기능 개발',
          'Excel 과 유사한 UI 구현을 통한 프로젝트/등급 관리 편의성 향상',
        ],
        projectImgList: [
          '/assets/images/works-webp/pms/pms-01.webp',
          '/assets/images/works-webp/pms/pms-02.webp',
          '/assets/images/works-webp/pms/pms-03.webp',
          '/assets/images/works-webp/pms/pms-04.webp',
          '/assets/images/works-webp/pms/pms-05.webp',
        ],
      },
    ],
  },
];
