# Remove Blog Page Design

목표는 `blog.html` 중복 페이지를 제거하고, Writing의 단일 목적지를 `https://blog.chuckpark.kr`로 통일하는 것입니다.

선택한 접근은 정적 중복 페이지 삭제입니다. 현재 홈과 탭은 이미 외부 블로그 피드를 보조적으로 보여주고 있고, Writing 상세 페이지는 원문 저장소가 아니라 별도 미러 역할만 하고 있습니다. 따라서 내부 `blog.html`을 유지할 이유보다 중복 인덱싱과 링크 분산 비용이 더 큽니다.

적용 범위는 다음과 같습니다.

- `blog.html` 삭제
- 내부 `./blog.html` 링크를 모두 `https://blog.chuckpark.kr`로 변경
- `sitemap.xml`에서 `blog.html` 제거
- `scripts/check_seo_static.py`에서 `blog.html` 존재/정적 목록 검사 제거

의도적으로 유지하는 부분도 있습니다.

- 홈의 `#writing` 탭은 유지
- 홈의 Writing 피드 UI도 유지
- 외부 블로그 RSS 기반 최신글 로딩 스크립트는 유지

이 설계의 기대 효과는 다음과 같습니다.

- Writing 관련 URL 목적지가 하나로 통일됨
- 중복 콘텐츠 페이지 제거
- 사이트맵과 SEO 검사 기준이 실제 구조와 일치함
