# Home Tab Navigation Design

작성일: 2026-03-17
대상: `index.html`의 상단 메뉴를 단일 페이지 탭 네비게이션으로 전환

## 목표

- `Home / Portfolio / Blog / About` 메뉴 클릭 시 페이지 이동 대신 같은 화면 안에서 하단 콘텐츠만 전환한다.
- `더보기` 링크는 기존처럼 별도 페이지(`portfolio.html`, `blog.html`)로 이동한다.
- 새로고침, 뒤로가기, 직접 링크 공유를 위해 URL 해시를 탭 상태와 동기화한다.

## 현재 구조

- `index.html`은 홈 허브 역할만 하고 있다.
- `portfolio.html`, `blog.html`, `about.html`에 각 상세 콘텐츠가 따로 존재한다.
- 메뉴는 현재 각 페이지로 이동하는 일반 링크다.
- `scripts/blog-feed.js`는 단일 리스트와 단일 상태 엘리먼트만 가정하고 있다.

## 설계 방향

### 1. 단일 허브는 `index.html`만 담당

- 상단 커버, author, 네비게이션은 그대로 유지한다.
- `main.content` 아래에 4개의 탭 패널을 둔다.
  - `home`
  - `portfolio`
  - `blog`
  - `about`

### 2. 메뉴는 해시 기반 탭 전환

- 각 메뉴 링크를 `#home`, `#portfolio`, `#blog`, `#about`으로 바꾼다.
- 클릭 시 해당 탭 패널만 보이도록 JS가 active 상태를 제어한다.
- `hashchange` 이벤트를 받아 새로고침과 뒤로가기에도 같은 탭이 복원되게 한다.

### 3. `더보기`는 상세 페이지 유지

- 홈의 `Portfolio 더보기`는 `portfolio.html`
- 홈의 `Blog 더보기`는 `blog.html`
- 탭 내부에서도 필요하면 같은 상세 링크를 유지한다.

### 4. 콘텐츠 배치 원칙

- `Home` 탭: 기존 홈 요약 섹션 그대로 유지
- `Portfolio` 탭: 현재 `portfolio.html`의 주요 카드 내용 반영
- `Blog` 탭: 현재 `blog.html`의 피드 영역 반영
- `About` 탭: 현재 `about.html`의 소개/포커스/연락 섹션 반영

### 5. 피드 스크립트 다중 리스트 대응

- `Home` 탭과 `Blog` 탭 모두 피드가 필요하다.
- `scripts/blog-feed.js`를 단일 ID 기반에서 다중 컨테이너 기반으로 바꾼다.
- 각 리스트는 `data-limit`으로 표시 개수를 제어한다.

## UI 원칙

- 상단 브랜딩 영역은 유지한다.
- 탭 전환 시 메뉴 active 상태가 명확해야 한다.
- 비활성 패널은 DOM에 남기되 보이지 않게만 처리한다.
- 콘텐츠가 길어도 레이아웃이 흔들리지 않게 한다.

## 리스크

- `index.html`에 내용이 중복되면서 관리 포인트가 늘어난다.
- `portfolio.html`, `blog.html`, `about.html`와 탭 내용이 완전히 분리되지 않으면 나중에 동기화 이슈가 생길 수 있다.
- `blog-feed.js` 수정 시 기존 `blog.html` 동작을 깨지 않게 주의해야 한다.

## 검증 기준

- 기본 진입 시 `Home` 탭이 열린다.
- `#portfolio`, `#blog`, `#about`로 직접 접속하면 해당 탭이 열린다.
- 메뉴 클릭 시 페이지 이동 없이 콘텐츠만 전환된다.
- `Portfolio 더보기`, `Blog 더보기`는 기존처럼 별도 페이지로 이동한다.
- 홈과 블로그 탭의 RSS 피드가 각각 정상 노출된다.
