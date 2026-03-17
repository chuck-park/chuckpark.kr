# Remove Blog Page Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** `blog.html`을 제거하고 Writing 관련 내부 링크와 SEO 자산을 외부 블로그 기준으로 정리한다.

**Architecture:** 내부 정적 Writing 상세 페이지를 삭제하고, 홈과 다른 페이지의 Writing 진입점은 모두 외부 블로그 `https://blog.chuckpark.kr`로 통일한다. 사이트맵과 정적 SEO 검증 스크립트도 현재 구조에 맞게 축소한다.

**Tech Stack:** 정적 HTML, XML sitemap, Python 정적 검사 스크립트

---

### Task 1: 설계 문서와 현재 연결 지점 확인

**Files:**
- Modify: `docs/plans/2026-03-18-remove-blog-page-design.md`
- Inspect: `index.html`
- Inspect: `about.html`
- Inspect: `portfolio.html`
- Inspect: `sitemap.xml`
- Inspect: `scripts/check_seo_static.py`

**Step 1: Writing 링크와 `blog.html` 참조를 grep으로 확인**

Run: `rg -n "blog\\.html|blog\\.chuckpark\\.kr|Writing" index.html about.html portfolio.html sitemap.xml scripts/check_seo_static.py`

Expected: 내부 링크, 사이트맵, 검사 스크립트의 연결 지점이 모두 출력됨

**Step 2: 변경 범위를 설계 문서에 반영**

Expected: 삭제/유지 범위가 문서화됨

**Step 3: Commit**

```bash
git add docs/plans/2026-03-18-remove-blog-page-design.md docs/plans/2026-03-18-remove-blog-page.md
git commit -m "docs: add blog page removal plan"
```

### Task 2: Writing 링크를 외부 블로그 기준으로 통일

**Files:**
- Modify: `index.html`
- Modify: `about.html`
- Modify: `portfolio.html`

**Step 1: `./blog.html` 링크를 `https://blog.chuckpark.kr`로 교체**

Expected: 메인 Writing 섹션의 더보기와 서브 페이지 메뉴 Writing 링크가 모두 외부 블로그로 이동함

**Step 2: 정적 확인**

Run: `rg -n 'href="\\./blog\\.html"|https://blog\\.chuckpark\\.kr' index.html about.html portfolio.html`

Expected: `./blog.html`는 없어지고 외부 블로그 링크만 남음

**Step 3: Commit**

```bash
git add index.html about.html portfolio.html
git commit -m "fix: point writing links to external blog"
```

### Task 3: 중복 페이지와 SEO 검사 정리

**Files:**
- Delete: `blog.html`
- Modify: `sitemap.xml`
- Modify: `scripts/check_seo_static.py`

**Step 1: `blog.html` 삭제**

Expected: 저장소에서 중복 Writing 페이지가 제거됨

**Step 2: 사이트맵에서 `blog.html` URL 제거**

Expected: 내부 sitemap은 실제 남아 있는 페이지들만 포함함

**Step 3: SEO 검사에서 `blog.html` 관련 확인 제거**

Expected: 스크립트가 남은 페이지와 파일 기준으로만 PASS/FAIL을 판단함

**Step 4: 정적 검증**

Run: `python3 scripts/check_seo_static.py`

Expected: `SEO static checks: PASS`

**Step 5: Commit**

```bash
git add sitemap.xml scripts/check_seo_static.py
git rm blog.html
git commit -m "fix: remove internal writing page"
```
