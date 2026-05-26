# Kimerby 블로그 편집 가이드

## 로컬 실행

```bash
node_modules/.bin/astro dev      # http://localhost:4321
node_modules/.bin/astro build    # 빌드 (dist/ 폴더 생성)
```

---

## 📝 포스트 작성

**파일 위치:** `src/data/blog/YYYY-MM-DD-제목.md`

**최소 필수 양식:**

```markdown
---
title: "제목"
pubDatetime: 2025-01-01T09:00:00+09:00
description: "포스트 한 줄 요약 (목록 페이지에 표시)"
tags:
  - 태그1
  - 태그2
---

본문 내용을 여기에 작성합니다.
```

**선택 항목:**

| 필드 | 설명 | 예시 |
|------|------|------|
| `ogImage` | 썸네일 이미지 경로 | `../../assets/images/폴더/파일.jpg` |
| `series` | 시리즈 이름 | `"격리일기"` |
| `draft` | 초안 여부 (true = 비공개) | `true` |
| `featured` | 홈 상단 노출 | `true` |

**이미지 삽입 (본문):**

```markdown
![설명](../../assets/images/폴더/파일.jpg)
*이미지 캡션*
```

**템플릿 파일:** `src/data/blog/_template.md` 복사해서 사용

---

## 📚 시리즈 관리

**파일 위치:** `src/data/series/시리즈명.md`

```markdown
---
title: 시리즈 표시 이름
description: 목록 페이지에 표시될 한 줄 설명
ogImage: ../../assets/images/폴더/대표이미지.jpg
---

시리즈 소개 본문 (시리즈 상세 페이지에 표시)
```

> 포스트의 `series: "시리즈명"` 값과 파일명이 일치해야 합니다.
> 예) 파일: `격리일기.md` → 포스트 frontmatter: `series: "격리일기"`

---

## 🗂 포트폴리오 수정

**파일 위치:** `src/pages/portfolio.astro`

파일 상단의 `creativeWork`와 `itProjects` 배열을 편집합니다.

```typescript
const creativeWork = [
  {
    title: "프로젝트 이름",
    year: "2024",
    image: imgVariable,        // 이미지가 없으면 undefined
    description: "프로젝트 설명",
    tags: ["태그1", "태그2"],
    links: [
      { label: "버튼 레이블", href: "/링크" }
    ],
  },
];
```

이미지를 추가하려면 파일 상단 import 섹션에 추가:

```typescript
import imgNewProject from "@/assets/images/폴더/파일.jpg";
```

---

## 👤 About 수정

**파일 위치:** `src/pages/about.md`

마크다운으로 자유롭게 작성합니다. frontmatter는 건드리지 않아도 됩니다.

---

## 🖼 이미지 추가

이미지는 `src/assets/images/` 하위 폴더에 넣으세요.
Astro가 자동으로 WebP 변환 + 최적화합니다.

```
src/assets/images/
├── profile/          # 프로필 사진
├── quarantine_diary/ # 격리일기 이미지
├── portfolio/        # 포트폴리오 이미지
└── aws/              # AWS 문서 이미지
```

---

## 🚀 배포

```bash
git add .
git commit -m "커밋 메시지"
git push origin master
```

GitHub Actions가 자동으로 빌드 후 https://kimerby.github.io 에 배포합니다.
(GitHub 저장소 Settings → Pages → Source: GitHub Actions 설정 필요)
