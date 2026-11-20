# 스프린트 미션 5 (판다마켓 Front-end, Back-end 제작)

## 과제 개요 (11/17~11/19)

> - Front-end : 렌딩 페이지(/) 마이그레이션, 중고마켓 페이지(/items, 미션 4 활용), 상품등록 페이지 제작(/registration)
> - Back-end : 중고마켓 Product 스키마, 상품 등록 API, 상품 상세 조회 API, 상품 수정 API, 상품 삭제 API, 상품 목록 조회 API 제작
> - DB 및 배포 : Mongo DB 사용, render.com 활용 배포

## 스프린트 미션 5 시안

- [스프린트 미션 5 Figma 디자인 확인](https://www.figma.com/design/ZLEzeXjbE5pD8WXLl5CwWv/%ED%8C%90%EB%8B%A4%EB%A7%88%EC%BC%93?node-id=4313-5831&p=f)

## 기본 요구사항

### 1. 공통

- Github에 스프린트 미션 PR을 만들어 주세요.
- React, Express를 사용해 진행합니다.

### 2. 프론트엔드 구현 요구사항

#### 1) 랜딩 페이지

- HTML과 CSS로 구현한 랜딩페이지를 React로 마이그레이션하세요.
- 랜딩 페이지 url path는 "/"로 설정하세요.

#### 2) 중고마켓 페이지

- 중고마켓 페이지 url path를 "/items"으로 설정하세요.
- 페이지 주소가 "/items" 일 때 상단내비게이션바의 "중고마켓" 버튼의 색상은 "3692FF"입니다.
- 중고마켓 페이지 판매 중인 상품은 본인이 만든 GET 메서드를 사용해 주세요.
  - 다만 좋아요 순 정렬 기능은 제외해 주세요.
  - 사진은 디폴트 이미지로 프론트엔드에서 처리해주세요.
  - 베스트 상품 목록 조회는 구현하지 않습니다.
- '상품 등록하기' 버튼을 누르면 "/registration" 로 이동합니다. ( 빈 페이지 )

#### 3) 상품 등록 페이지

- PC, Tablet, Mobile 디자인에 해당하는 상품 등록 페이지를 만들어 주세요.
- 상품 등록 url path는 "/registration"입니다.
- 상품 등록은 본인이 만든 POST 메서드를 사용해 주세요.
- 등록 성공 시, 해당 상품 상세 페이지로 이동합니다. (빈페이지)

### 3. 백엔드 구현 요구사항 (중고마켓\* 대상)

- Product 스키마를 작성해 주세요.
  - id, name, description, price, tags, createdAt, updatedAt필드를 가집니다.
  - 필요한 필드가 있다면 자유롭게 추가해 주세요.
- 상품 등록 API를 만들어 주세요.
  - name, description, price, tags를 입력하여 상품을 등록합니다.
- 상품 상세 조회 API를 만들어 주세요.
  - id, name, description, price, tags, createdAt를 조회합니다.
- 상품 수정 API를 만들어 주세요.
  - PATCH 메서드를 사용해 주세요.
- 상품 삭제 API를 만들어 주세요.
- 상품 목록 조회 API를 만들어 주세요.
  - id, name, price, createdAt를 조회합니다.
  - offset 방식의 페이지네이션 기능을 포함해 주세요.
  - 최신순(recent)으로 정렬할 수 있습니다.
  - name, description에 포함된 단어로 검색할 수 있습니다.
- 각 API에 적절한 에러 처리를 해 주세요.
- 각 API 응답에 적절한 상태 코드를 리턴하도록 해 주세요.
- .env 파일에 환경 변수를 설정해 주세요.
- CORS를 설정해 주세요.
- render.com로 배포해 주세요.
- MongoDB를 활용해 주세요.

## 심화 요구사항

### 프론트엔드 구현 요구사항 (상품 등록 페이지\* 대상)

- 모든 입력 input box에 빈 값이 있을 경우, 등록 버튼이 비활성화됩니다.
- 태그를 입력한 후 엔터키를 누르면, 그 태그가 칩 형태로 쌓입니다.
- 상품명, 상품 소개, 판매 가격, 태그에 대한 유효성 검사 Custom Hook을 만들어주세요. <br>
  유효성 검사를 통과하지 않을 경우, 각 input에 빨간색 테두리와, 각각의 Input 아래에 <br>
  빨간색 에러 메시지를 보여주세요.
  - 유효한 조건
    - 상품명: 1자 이상, 10자 이내
    - 상품 소개: 10자 이상, 100자 이내
    - 판매 가격: 1자 이상, 숫자
    - 태그: 5글자 이내

## <<<<<<<<<<<<<<<<<< 설계 >>>>>>>>>>>>>>>>>>

### 폴더 구조

17-sprint-mission-fe/
├── public/
│ ├── landing/ # 기존 랜딩 이미지들
│ └── no-image.svg # 중고마켓 카드 디폴트 이미지
├── src/
│ ├── api/
│ │ ├── api.js # axios 기본 인스턴스 (VITE_API_URL)
│ │ └── productApi.js # 상품 목록 조회(GET), 상품 등록(POST) 함수
│ ├── components/
│ │ ├── Footer.jsx # 하단 푸터
│ │ ├── Header.jsx # 상단 헤더 (/items 활성 색상 #3692ff 반영)
│ │ ├── MarketApp.jsx # 중고마켓 목록, 검색, 최신순 정렬, 페이지네이션
│ │ ├── Pagination.jsx # 페이지 번호 버튼 컴포넌트
│ │ └── ProductCard.jsx # 상품 카드 (디폴트 이미지 적용)
│ ├── hooks/
│ │ └── usePageSize.js # 화면 크기별 상품 개수 계산 훅
│ ├── pages/
│ │ ├── LandingPage.jsx # 랜딩 페이지 (/)
│ │ ├── ProductCreatePage.jsx # 상품 등록 페이지 (/registration)
│ │ ├── LoginPage.jsx # 기존 로그인 화면 유지[cite: 8]
│ │ ├── PrivacyPage.jsx # 기존 샘플 화면 유지[cite: 8]
│ │ └── FaqPage.jsx # 기존 샘플 화면 유지[cite: 8]
│ ├── App.jsx # 라우터 설정 (/, /items, /registration 등)[cite: 8]
│ ├── index.css # 스타일 시트[cite: 8]
│ └── main.jsx # 앱 시작점[cite: 8]
└── .env # VITE_API_URL=http://localhost:3000[cite: 8]
