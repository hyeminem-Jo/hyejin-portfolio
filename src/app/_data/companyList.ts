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
          '상공업의 경쟁력 강화와 기업의 경제 발전을 지원하는 대한상공회의소 소통플랫폼의 전반적인 신규 기능 및 디자인 개편 고도화 작업을 2차로 진행하였으며, 메인페이지 외 다양한 페이지를 반응형으로 구현 및 디자인 개편 작업을 진행하였습니다.',
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
        projectThumbnail: '/assets/images/thumbnails/thumbnail-sople2.png',
        projectContribution: '30%',
        projectRole: '프론트엔드 개발',
        projectDevice: 'PC, 모바일',
        projectProcess:
          '구축 프로젝트이며, React.js 기반으로만 만들어졌던 이전 1차 소플을 SEO 기능 및 여러 편리한 내장 기능 처리를 위해 Next.js 환경으로 구현하였습니다. styled-component 의 지원중단을 계기로 대체 스타일 라이브러리로 emotion 을 사용하였으며, Redux 로 중앙데이터 관리를 진행하였습니다. 디자인 수급은 figma 로 이루어졌으며 기획은 sk cns 에서, 디자인은 더즈인터랙티브에서 작업을 하였습니다. 백엔드 3명, 프론트엔드 3명의 구성원으로 협업을 진행하였습니다.',
        projectImgList: [
          '/assets/images/works/sople2/sople2-01.png',
          '/assets/images/works/sople2/sople2-02.png',
          '/assets/images/works/sople2/sople2-12.png',
          '/assets/images/works/sople2/sople2-13.png',
          '/assets/images/works/sople2/sople2-03.png',
          '/assets/images/works/sople2/sople2-04.png',
          '/assets/images/works/sople2/sople2-05.png',
          '/assets/images/works/sople2/sople2-06.png',
          '/assets/images/works/sople2/sople2-07.png',
          '/assets/images/works/sople2/sople2-08.png',
          '/assets/images/works/sople2/sople2-09.png',
          '/assets/images/works/sople2/sople2-10.png',
          '/assets/images/works/sople2/sople2-11.png',
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
          '대한상의 플랫폼인 소플에 AI 기능 도입을 위한 고도화 작업을 1차로 진행하였습니다. \n 반응형 웹 환경에서 AI 검색 기능 및 AI 글쓰기 신규 구현 및 경제뉴스룸 페이지 고도화에 참여하였습니다.',
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
        projectThumbnail: '/assets/images/thumbnails/thumbnail-sople1.png',
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
          '/assets/images/works/sople1/sople1-07.png',
          '/assets/images/works/sople1/sople1-05.png',
          '/assets/images/works/sople1/sople1-01.png',
          '/assets/images/works/sople1/sople1-02.png',
          '/assets/images/works/sople1/sople1-03.png',
          '/assets/images/works/sople1/sople1-04.png',
          '/assets/images/works/sople1/sople1-06.png',
          '/assets/images/works/sople1/sople1-08.png',
          '/assets/images/works/sople1/sople1-09.png',
          '/assets/images/works/sople1/sople1-10.png',
          '/assets/images/works/sople1/sople1-11.png',
          '/assets/images/works/sople1/sople1-12.png',
          '/assets/images/works/sople1/sople1-13.png',
          '/assets/images/works/sople1/sople1-14.png',
          '/assets/images/works/sople1/sople1-15.png',
        ],
      },
      {
        id: 3,
        projectName: 'YEEP 사용자/관리자 페이지 구축',
        projectDesc:
          '노스페이스 회사 필리핀지사의 전 사원을 관리할 수 있는 프로그램의 사용자 앱 및 관리자 페이지 구축을 진행하였습니다.',
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
        projectThumbnail: '/assets/images/thumbnails/thumbnail-yeep.png',
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
          '/assets/images/works/yeep/yeep-01.png',
          '/assets/images/works/yeep/yeep-02.png',
          '/assets/images/works/yeep/yeep-03.png',
          '/assets/images/works/yeep/yeep-04.png',
          '/assets/images/works/yeep/yeep-05.png',
          '/assets/images/works/yeep/yeep-07.png',
          '/assets/images/works/yeep/yeep-08.png',
          '/assets/images/works/yeep/yeep-09.png',
          '/assets/images/works/yeep/yeep-10.png',
          '/assets/images/works/yeep/yeep-11.png',
          '/assets/images/works/yeep/yeep-12.png',
          '/assets/images/works/yeep/yeep-13.png',
          '/assets/images/works/yeep/yeep-14.png',
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
      //     '/assets/images/works/homepage/hompage-01.png',
      //     '/assets/images/works/homepage/hompage-02.png',
      //     '/assets/images/works/homepage/hompage-03.png',
      //     '/assets/images/works/homepage/hompage-04.png',
      //     '/assets/images/works/homepage/hompage-05.png',
      //   ],
      // },
      {
        id: 4,
        projectName: 'KCMF 사용자/관리자 페이지 구축',
        projectDesc:
          '시청자미디어재단에서 참여형 방송 문화를 위해 시청자가 방송사를 선택하여 직접 프로그램을 제작 및 신청할 수 있는 플랫폼이며, 사용자 및 관리자 페이지를 구축하였습니다.',

        projectPeriod: '2024.10 - 2025.01',
        skillList: ['React', 'TypeScript', 'Redux', 'Styled-components'],
        projectReview: 'KCMF 프로젝트 리뷰',
        projectWorkList: [
          '공지, FAQ, 마이페이지 개발, 단계별 폼 검증 및 에러처리 도입',
          '관리자 페이지에서 상단 고정, 파일 요약 기능 등 관리 기능 강화',
          'Input 등 폼 공통 컴포넌트를 react-hook-form 로 제작하여 더 편리하게 사용할 수 있도록 개선',
        ],
        projectLink: 'https://pa.kcmf.or.kr/',
        projectThumbnail: '/assets/images/thumbnails/thumbnail-kcmf.png',
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
          '/assets/images/works/kcmf/kcmf-01.png',
          '/assets/images/works/kcmf/kcmf-02.png',
          '/assets/images/works/kcmf/kcmf-03.png',
          '/assets/images/works/kcmf/kcmf-04.png',
          '/assets/images/works/kcmf/kcmf-05.png',
          '/assets/images/works/kcmf/kcmf-06.png',
          '/assets/images/works/kcmf/kcmf-07.png',
          '/assets/images/works/kcmf/kcmf-08.png',
          '/assets/images/works/kcmf/kcmf-09.png',
          '/assets/images/works/kcmf/kcmf-10.png',
          '/assets/images/works/kcmf/kcmf-11.png',
          '/assets/images/works/kcmf/kcmf-12.png',
          '/assets/images/works/kcmf/kcmf-13.png',
          '/assets/images/works/kcmf/kcmf-14.png',
          '/assets/images/works/kcmf/kcmf-15.png',
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
          '100만명 이상의 활동 고객을 보유한 신세계 백화점의 APP을 비롯한 WEB, 어드민 운영을 진행하였습니다.',
        projectPeriod: '2023.12 - 2024.09',
        skillList: ['React', 'Next.js', 'TypeScript', 'Styled-components', 'Redux', 'React-Query'],
        projectWorkList: [
          '메인 및 온보딩 UI/UX 개선, 커뮤니티 페이지 고도화',
          'Axios 요청 로직을 react-query로 전환, API 호출 최적화',
          'APP 어드민 페이지에서 이벤트 폼 입력기능 및 팝업 기능 개선',
          'APP 이벤트 페이지 구현 및 운영',
          'WEB 홈페이지 및 매거진, 켐페인 페이지 퍼블리싱 및 인터렉션 구현',
        ],
        projectThumbnail: '/assets/images/thumbnails/thumbnail-ssg.jpg',
        projectImgList: [
          '/assets/images/works/sinsegae/sinsegae-02.png',
          '/assets/images/works/sinsegae/sinsegae-03.png',
          '/assets/images/works/sinsegae/sinsegae-04.png',
          '/assets/images/works/sinsegae/sinsegae-05.jpg',
          '/assets/images/works/sinsegae/sinsegae-06.png',
          '/assets/images/works/sinsegae/sinsegae-07.gif',
          '/assets/images/works/sinsegae/sinsegae-08.png',
          '/assets/images/works/sinsegae/sinsegae-09.jpg',
          '/assets/images/works/sinsegae/sinsegae-10.png',
          '/assets/images/works/sinsegae/sinsegae-11.png',
          '/assets/images/works/sinsegae/sinsegae-12.png',
        ],
      },
      {
        id: 6,
        projectName: '삼성전자 비스포크 웨딩 캠페인 사이트 구축',
        projectDesc:
          '비스포크 웨딩 펀딩(BESPOKE Wedding FUNding) 은 삼성전자가 신혼부부의 새로운 시작을 응원하는 캠페인입니다. \n캠페인에 참여한 예비 부부를 대상으로 웨딩 펀딩 프로그램에 필요한 기능들을 구현하였습니다.',
        projectPeriod: '2023.08 - 2023.10',
        skillList: ['React', 'Next.js', 'Emotion'],
        projectWorkList: [
          'Next.js 기반 마이페이지, 축하금 관리, 약관, 회원정보 페이지 개발',
          'react-hook-form으로 사용자 입력 검증 및 공통 컴포넌트화',
        ],
        projectThumbnail: '/assets/images/thumbnails/thumbnail-swwl.png',
        projectImgList: [
          '/assets/images/works/wedding/wedding-02.png',
          '/assets/images/works/wedding/wedding-03.png',
          '/assets/images/works/wedding/wedding-04.png',
          '/assets/images/works/wedding/wedding-05.png',
          '/assets/images/works/wedding/wedding-06.png',
          '/assets/images/works/wedding/wedding-07.png',
          '/assets/images/works/wedding/wedding-08.png',
        ],
      },
      {
        id: 8,
        projectName: '삼성 지속가능성경영 사이트 운영',
        projectDesc:
          '환경, 사회, 거버넌스 분야에 걸쳐 삼성전자의 전략과 주요 성과를 담은 보고서 형식의 웹사이트입니다. 새롭게 바뀌는 내용에 대응하여 운영을 진행하였습니다.',
        projectPeriod: '2023.04 - 2023.12',
        skillList: ['javascript', 'jQuery', 'scss'],
        projectWorkList: [
          '지속가능경영 메인/서브페이지 참여신청 페이지 운영 및 구축',
          '웹표준·접근성 준수로 품질 향상 (background 로 삽입된 이미지 처리, 스크린 리더기 등)',
        ],
        projectLink: 'https://www.samsung.com/sec/sustainability/main/',
        projectThumbnail: '/assets/images/thumbnails/thumbnail-samsung.png',
        projectImgList: [
          // '/assets/images/works/pms/pms-01.jpg',
          // '/assets/images/works/pms/pms-02.png',
          // '/assets/images/works/pms/pms-03.png',
          // '/assets/images/works/pms/pms-04.jpg',
          // '/assets/images/works/pms/pms-05.jpg',
        ],
      },
      {
        id: 9,
        projectName: '자사(이모션글로벌) 홈페이지 고도화',
        projectDesc:
          '자회사인 이모션 글로벌 홈페이지이며, 본사에 대한 정보, 포트폴리오, 의뢰 서비스, 입사지원 서비스 등을 제공하는 웹사이트이며, 고도화 및 운영 업무를 진행하였습니다.',
        projectPeriod: '2022.11 - 2023.02',
        skillList: ['Vue.js', 'Nuxt.js', 'SWR', 'Emotion', 'scss'],
        projectThumbnail: '/assets/images/thumbnails/thumbnail-emotion.png',
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
          '종가(JONGGA)와 오푸드(O’Food)는 대상의 글로벌 브랜드로, 제품의 통합 커뮤니케이션 플랫폼입니다. 추가되거나 수정된 건을 바탕으로 운영 업무를 진행하였습니다.',
        projectPeriod: '2022.08 - 2022.12',
        skillList: ['jQuery', 'css'],
        projectThumbnail: '/assets/images/thumbnails/thumbnail-ds.png',
        projectWorkList: [
          'jsp 환경에서 css, jQuery 를 사용하여 작업, 종가 /오푸드 메인 및 서브페이지 퍼블리싱 및 인터렉션 구현',
        ],
        projectLink: 'https://ofoodglobal.com/',
      },
      {
        id: 11,
        projectName: '메타클럽 프로젝트 구축',
        projectDesc:
          '메타클럽은 상품권 전환 및 포인트를 충전할 수 있는 포인트 테크 플랫폼으로, 문화상품권, 도서문화상품권의 핀번호를 등록하여 다양한 곳에서 사용할 수 있게 해줍니다. 구축으로 진행되었습니다.',
        projectPeriod: '2022.08 - 2022.11',
        skillList: ['Vue.js', 'Nuxt.js', 'SWR', 'scss'],
        projectThumbnail: '/assets/images/thumbnails/thumbnail-meta.png',
        projectWorkList: [
          'Vue(Nuxt.js) 기반 퍼블리싱 및 데이터 연동',
          '포인트 충전/전환 페이지 개발, 입력 제한 기능 구현',
        ],
        projectImgList: [
          '/assets/images/works/metapoint/metapoint-01.png',
          '/assets/images/works/metapoint/metapoint-02.png',
          '/assets/images/works/metapoint/metapoint-03.png',
          '/assets/images/works/metapoint/metapoint-04.png',
        ],
      },
      {
        id: 7,
        projectName: '자사 업무관리 프로그램(PMS) 구축 및 운영',
        projectDesc:
          '사원 정보, 업무일지 및 프로젝트 현황을 파악할 수 있는 어드민 페이지입니다. 부서별 진행 업무와 프로젝트 현황을 객관적인 지표로 확인할 수 있으며, 반응형으로 구축 및 운영하였습니다.',
        projectPeriod: '2023.05 - 2023.11',
        skillList: ['React', 'Next.js', 'Emotion'],
        projectThumbnail: '/assets/images/thumbnails/thumbnail-pms.png',
        projectWorkList: [
          '사내 업무 등록 및 일지 작성 페이지 및 이메일 서명 자동화 기능 개발',
          'Excel 과 유사한 UI 구현을 통한 프로젝트/등급 관리 편의성 향상',
        ],
        projectImgList: [
          '/assets/images/works/pms/pms-01.jpg',
          '/assets/images/works/pms/pms-02.png',
          '/assets/images/works/pms/pms-03.png',
          '/assets/images/works/pms/pms-04.jpg',
          '/assets/images/works/pms/pms-05.jpg',
        ],
      },
    ],
  },
];
