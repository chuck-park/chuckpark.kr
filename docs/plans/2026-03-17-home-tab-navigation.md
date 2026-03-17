# Home Tab Navigation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** `index.html`에서 메뉴 클릭으로 하단 콘텐츠를 탭처럼 전환하고, `더보기`는 상세 페이지로 유지한다.

**Architecture:** `index.html`에 4개 탭 패널을 두고, 해시 기반 탭 상태를 관리하는 작은 JS를 추가한다. 기존 `blog-feed.js`는 다중 피드 컨테이너를 지원하도록 바꿔 홈 요약 피드와 블로그 탭 피드를 모두 렌더한다.

**Tech Stack:** HTML, CSS, Vanilla JavaScript

---

### Task 1: 탭 구조 마크업 추가

**Files:**
- Modify: `index.html`

**Step 1: 패널 구조 설계 반영**

- `main.content`를 `Home`, `Portfolio`, `Blog`, `About` 패널 구조로 재구성한다.
- 메뉴 링크를 해시 기반으로 변경한다.

**Step 2: 더보기 링크 유지**

- 홈 요약 섹션의 `더보기`는 기존 상세 페이지 링크를 유지한다.

**Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add tab panels to home"
```

### Task 2: 탭 스타일 추가

**Files:**
- Modify: `styles.css`

**Step 1: 패널 숨김/노출 스타일 작성**

- 비활성 패널은 숨기고 활성 패널만 노출한다.
- 메뉴 active 상태가 해시 기반 전환과 잘 맞도록 유지한다.

**Step 2: 레이아웃 보정**

- 패널 전환 시 섹션 간격과 상단 정렬이 자연스럽게 유지되도록 조정한다.

**Step 3: Commit**

```bash
git add styles.css
git commit -m "feat: style home tab navigation"
```

### Task 3: 탭 전환 스크립트 추가

**Files:**
- Create: `scripts/tab-navigation.js`
- Modify: `index.html`

**Step 1: 해시 기반 탭 스크립트 작성**

- 초기 진입 시 해시에 맞는 탭을 연다.
- 메뉴 클릭과 `hashchange`에 맞춰 active 패널과 active 메뉴를 바꾼다.

**Step 2: 스크립트 연결**

- `index.html`에 탭 스크립트를 연결한다.

**Step 3: Commit**

```bash
git add scripts/tab-navigation.js index.html
git commit -m "feat: add hash-based tab navigation"
```

### Task 4: 블로그 피드 다중 렌더 지원

**Files:**
- Modify: `scripts/blog-feed.js`
- Modify: `index.html`

**Step 1: 단일 ID 의존성 제거**

- 여러 피드 리스트를 순회해 각각 렌더할 수 있게 수정한다.

**Step 2: Home와 Blog 패널 연결**

- 홈 패널은 요약 개수
- 블로그 패널은 상세 개수

**Step 3: Commit**

```bash
git add scripts/blog-feed.js index.html
git commit -m "feat: support multiple blog feed containers"
```

### Task 5: 수동 검증 및 정리

**Files:**
- Modify: `README.md` if needed

**Step 1: 로컬 서버 실행**

Run: `python3 -m http.server 8000`

**Step 2: 수동 검증**

- `/`
- `/#portfolio`
- `/#blog`
- `/#about`
- `더보기` 링크 이동

**Step 3: 최종 Commit**

```bash
git add index.html styles.css scripts/tab-navigation.js scripts/blog-feed.js
git commit -m "feat: switch home navigation to tabbed sections"
```
