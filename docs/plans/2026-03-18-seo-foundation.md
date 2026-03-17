# SEO Foundation Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 검색엔진이 `chuckpark.kr`의 주요 페이지와 Writing 목록을 안정적으로 이해하고 색인할 수 있도록 기본 SEO 신호를 보강한다.

**Architecture:** 각 정적 HTML 페이지에 페이지별 메타데이터(`title`, `description`, `canonical`, Open Graph, Twitter 카드)를 직접 선언하고, 루트에 `robots.txt`, `sitemap.xml`을 추가한다. `blog.html`은 클라이언트 RSS 렌더링을 제거하고 RSS를 기준으로 한 정적 글 목록을 HTML에 직접 넣어 검색엔진이 초기 응답만으로 목록을 읽을 수 있게 한다.

**Tech Stack:** 정적 HTML, CSS, vanilla JS, Python one-off validation script

---

### Task 1: 계획 문서 저장

**Files:**
- Create: `docs/plans/2026-03-18-seo-foundation.md`

**Step 1: 계획 문서 저장**

이 문서를 저장한다.

**Step 2: 커밋**

```bash
git add docs/plans/2026-03-18-seo-foundation.md
git commit -m "docs: add seo foundation plan"
```

### Task 2: 정적 SEO 체크 스크립트 추가

**Files:**
- Create: `scripts/check_seo_static.py`

**Step 1: 실패하는 체크 작성**

다음을 확인하는 스크립트를 만든다.
- `robots.txt`, `sitemap.xml` 존재
- `index.html`, `about.html`, `blog.html`, `portfolio.html`에 `canonical` 존재
- 각 페이지에 `og:title`, `twitter:card` 존재
- `blog.html`에 정적 `<article class="article-small">` 목록 존재
- `blog.html`에 `data-blog-feed-list`가 더 이상 없음

**Step 2: 실행해 실패 확인**

```bash
python3 scripts/check_seo_static.py
```

Expected: `robots.txt` / `sitemap.xml` 누락, `canonical` 누락, `blog.html` 정적 목록 부재로 실패

### Task 3: 페이지 메타 보강

**Files:**
- Modify: `index.html`
- Modify: `about.html`
- Modify: `blog.html`
- Modify: `portfolio.html`

**Step 1: 페이지별 메타 작성**

각 파일에 다음을 추가한다.
- 구체적인 `title`
- 구체적인 `meta description`
- 절대 URL `canonical`
- `meta name="robots" content="index,follow"`
- Open Graph 메타
- Twitter 카드 메타

**Step 2: Writing 관련 라벨 정리**

`blog.html`과 홈 Writing 패널에서 `Blog` 기준 표현을 `Writing` 기준으로 다시 점검한다.

### Task 4: robots.txt와 sitemap.xml 추가

**Files:**
- Create: `robots.txt`
- Create: `sitemap.xml`

**Step 1: robots.txt 작성**

포함 내용:
- `User-agent: *`
- `Allow: /`
- `Sitemap: https://chuckpark.kr/sitemap.xml`

**Step 2: sitemap.xml 작성**

포함 URL:
- `https://chuckpark.kr/`
- `https://chuckpark.kr/about.html`
- `https://chuckpark.kr/blog.html`
- `https://chuckpark.kr/portfolio.html`

### Task 5: blog.html 정적 Writing 목록으로 개편

**Files:**
- Modify: `blog.html`

**Step 1: RSS 기준 목록 준비**

`https://blog.chuckpark.kr/feed.xml`에서 최신 글 제목, 링크, 요약, 날짜를 가져와 10개 내외 정적 목록을 구성한다.

**Step 2: 정적 목록 반영**

`blog.html`의 `data-blog-feed-list`, 로딩 상태 문구, 인라인 스크립트 의존 구조를 제거하고 정적 `<article class="article-small">` 목록으로 교체한다.

**Step 3: 외부 블로그 링크 유지**

상단의 `blog.chuckpark.kr` 이동 링크는 유지한다.

### Task 6: 체크 재실행 및 커밋

**Files:**
- Modify: `scripts/check_seo_static.py`
- Modify: `index.html`
- Modify: `about.html`
- Modify: `blog.html`
- Modify: `portfolio.html`
- Create: `robots.txt`
- Create: `sitemap.xml`

**Step 1: 체크 재실행**

```bash
python3 scripts/check_seo_static.py
```

Expected: PASS

**Step 2: 변경 커밋**

```bash
git add scripts/check_seo_static.py index.html about.html blog.html portfolio.html robots.txt sitemap.xml
git commit -m "feat: add seo foundations for static pages"
```
