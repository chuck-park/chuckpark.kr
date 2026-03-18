# chuckpark.kr

개인 웹사이트와 실험용 정적 페이지 모음입니다.

## 실행 방법

이 프로젝트는 빌드 과정이 없는 정적 사이트입니다.
루트 디렉터리에서 간단한 로컬 서버를 띄운 뒤 브라우저로 접속하면 됩니다.

### Python으로 실행

```bash
cd /Users/chuck/Workspace/chuckpark.kr
python3 -m http.server 8000
```

브라우저에서 아래 주소로 접속합니다.

- 메인 페이지: `http://localhost:8000/`
- 포트폴리오: `http://localhost:8000/portfolio.html`
- 블로그: `http://localhost:8000/blog.html`
- 소개 페이지: `http://localhost:8000/about.html`
- 유틸 페이지: `http://localhost:8000/utils/`

### 다른 정적 서버를 써도 됨

예:

```bash
npx serve -p 8000
```

또는 에디터의 Live Server 확장 기능으로 열어도 됩니다.

## 프로젝트 구조

- `index.html`: 메인 페이지
- `portfolio.html`: 포트폴리오 페이지
- `blog.html`: 블로그 페이지
- `about.html`: 소개 페이지
- `styles.css`: 공통 스타일
- `assets/`: 이미지 자산
- `scripts/blog-feed.js`: 블로그 피드 로직
- `utils/`: 별도 유틸 페이지
- `docs/`: 로드맵 및 실행 문서

## 배포 메모

- 정적 파일 기반 사이트입니다.
- `CNAME` 파일이 포함되어 있어 GitHub Pages 커스텀 도메인 배포를 전제로 한 구조입니다.
- 별도 빌드나 번들링 과정은 없습니다.
