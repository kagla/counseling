# 마음숲 심리상담센터

심리상담센터 홈페이지입니다. 따뜻하고 안정적인 세이지 그린 컬러 테마로 내담자에게 신뢰감을 전달하는 모던한 웹사이트입니다.

> **Live**: [https://counseling.gnuboard.net](https://counseling.gnuboard.net)

## 기술 스택

| 분류 | 기술 |
|------|------|
| **Framework** | Next.js 16, React 19 |
| **Styling** | TailwindCSS 4, shadcn/ui |
| **Animation** | Framer Motion |
| **Database** | MySQL + Prisma 7 |
| **Theme** | next-themes (다크모드 지원) |
| **Icons** | Lucide React |
| **Language** | TypeScript |

## 주요 기능

- **반응형 디자인** — 모바일, 태블릿, 데스크톱 완벽 대응
- **다크모드** — 시스템 설정 연동 및 수동 전환
- **상담 예약** — 온라인 상담 예약 폼 (API 연동)
- **스크롤 애니메이션** — Framer Motion 기반 인터랙션

## 페이지 구성

| 경로 | 페이지 | 설명 |
|------|--------|------|
| `/` | 메인 | 히어로, 서비스 소개, 선택 이유, 상담 과정, 후기, CTA |
| `/about` | 센터소개 | 센터 소개, 핵심 가치, 연혁 |
| `/programs` | 상담 프로그램 | 개인, 부부·커플, 아동·청소년, 가족, 트라우마, 집단, 예술치료 |
| `/tests` | 심리검사 | MMPI-2, SCT, Rorschach, MBTI, 지능검사, 주의력검사 |
| `/counselors` | 상담사 소개 | 상담사 프로필 및 전문 분야 |
| `/contact` | 상담예약 | 연락처 정보 및 예약 신청 폼 |
| `/community` | 커뮤니티 | 자주 묻는 질문(FAQ), 공지사항 |

## API 엔드포인트

| Method | 경로 | 설명 |
|--------|------|------|
| `POST` | `/api/reservation` | 상담 예약 생성 |
| `GET` | `/api/reservation` | 예약 목록 조회 |
| `POST` | `/api/inquiry` | 문의 등록 |

## 데이터베이스 스키마

Prisma 7 기반의 5개 모델:

- **Inquiry** — 문의 내역
- **Reservation** — 상담 예약
- **Notice** — 공지사항
- **Counselor** — 상담사 정보
- **Program** — 상담 프로그램

## 시작하기

### 사전 요구사항

- Node.js 22+
- MySQL 8+

### 설치

```bash
# 의존성 설치
npm install

# 환경변수 설정
cp .env.example .env
# .env 파일에서 DATABASE_URL 수정

# 데이터베이스 마이그레이션
npx prisma migrate deploy

# Prisma 클라이언트 생성
npx prisma generate
```

### 개발 서버

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
npm run start
```

## 프로젝트 구조

```
src/
├── app/
│   ├── about/           # 센터소개
│   ├── api/
│   │   ├── inquiry/     # 문의 API
│   │   └── reservation/ # 예약 API
│   ├── community/       # 커뮤니티
│   ├── contact/         # 상담예약
│   ├── counselors/      # 상담사 소개
│   ├── programs/        # 상담 프로그램
│   ├── tests/           # 심리검사
│   ├── globals.css      # 전역 스타일 (테마 컬러)
│   ├── layout.tsx       # 루트 레이아웃
│   └── page.tsx         # 메인 페이지
├── components/
│   ├── sections/        # 메인 페이지 섹션 컴포넌트
│   │   ├── hero.tsx
│   │   ├── services-overview.tsx
│   │   ├── why-us.tsx
│   │   ├── process.tsx
│   │   ├── testimonials.tsx
│   │   └── cta.tsx
│   ├── ui/              # shadcn/ui 컴포넌트
│   ├── header.tsx       # 헤더 (네비게이션)
│   ├── footer.tsx       # 푸터
│   └── theme-provider.tsx
├── lib/
│   ├── prisma.ts        # Prisma 클라이언트
│   └── utils.ts
└── generated/
    └── prisma/          # Prisma 생성 파일
prisma/
└── schema.prisma        # DB 스키마
```

## 배포

Apache2 리버스 프록시 + PM2 + Let's Encrypt SSL 구성으로 운영됩니다.

```bash
# PM2로 실행
pm2 start ecosystem.config.js

# 상태 확인
pm2 status counseling
```

## 라이선스

Private
