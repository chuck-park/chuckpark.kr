<!-- Role: 표준 docs 폴더 구조와 생성 규칙을 설명하는 레퍼런스 문서. -->
# docs 구조 표준 가이드

목적: 여러 에이전트와 스킬이 새 문서를 생성할 때 동일한 구조와 규칙을 따르도록 `docs` 표준 구조를 정의한다.

## 기본 원칙

- 문서는 생성 주체가 아니라 역할 기준으로 분류한다
- 한 주제당 정본은 1개만 둔다
- 살아있는 정본 문서는 날짜보다 역할 중심 파일명을 우선한다
- 예전 버전은 `archive` 로 이동한다

## 권장 구조

```text
docs/
  README.md
  reference/
    brand/
    domain/
    operations/
    legal/
  strategy/
  research/
  decisions/
  prd/
    active/
    archive/
  product/
    overview/
    features/
  templates/
  archive/
```

## 폴더 역할

- `reference/brand/`: 브랜드 가이드, 톤앤매너, 시각 방향
- `reference/domain/`: 핵심 개념, 용어, 사용자 정의
- `reference/operations/`: 운영 원칙, 채널 역할, 표기 기준
- `reference/legal/`: 금지 표현, 정책, 컴플라이언스
- `strategy/`: 서비스 전략, 포지셔닝, 로드맵, KPI
- `research/`: 인터뷰, 경쟁사 조사, 실험 결과
- `decisions/`: ADR, 주요 의사결정 메모
- `prd/active/`: 현재 살아있는 서비스 PRD
- `product/overview/`: IA, 사용자 흐름, 설계 원칙
- `product/features/<feature>/`: 기능별 spec, implementation plan
- `templates/`: 새 문서 템플릿
- `archive/`: superseded 문서

## 파일명 규칙

권장:
- `brand-guide.md`
- `service-strategy.md`
- `payments-prd.md`
- `spec.md`
- `implementation-plan.md`

비권장:
- `2026-03-21-something.md` 같은 날짜형 정본 파일명
- `current`, `temp`, `misc`, `superpowers` 같은 상태/생성주체 기반 폴더

## 에이전트 규칙

- 새 문서는 먼저 기존 정본이 있는지 확인한다
- 정본이 있으면 업데이트를 우선한다
- 새 기능 문서는 `docs/product/features/<feature>/` 아래에 만든다
- 서비스 레벨 PRD는 `docs/prd/active/` 아래에 만든다
- 구조를 바꾸면 `docs/decisions/` 에 결정 이유를 남긴다
