// ------------------ 0. import 및 샘플 data ----------------------------

// 상품 관리 api 파일 import(ProductService.js)
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./api/ProductService.js";

// 게시판 관리 api 파일 import(ArticleService.js)
import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./api/ArticleService.js";

// 상품 등록용 샘플 data
const newProduct = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};

const modiProduct = {
  images: [],
  tags: ["전자제품"],
  price: 2000000,
  description: "너무 좋아진 절전형 양문형 냉장고, 절찬 판매 중 ~~~!!!",
  name: "양문형 냉장고(수정)",
};

// 게시글 등록용 샘플 data
const newArticle = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};

const modiArticle = {
  image: "https://example.com/...",
  content: "안전한 중고거래를 위한 다음의 규정을 준수하여 주세요.",
  title: "중고거래 규정",
};

// ------------------ 1. 상품 관리 (try..catch 방식) ----------------------------

try {
  // 상품 조회 (10페이지씩) - 인자 선언 방법 1
  const productList = await getProductList({
    page: 1,
    pageSize: 10,
    keyword: "",
  });
  const { list } = productList;
  console.log(`상품 조회(10페이지씩): `, list[0]);
  // 상품 조회 (10페이지씩) - 인자 선언 방법 2 (참고용)
  // const productList = await getProductList(1, 10, "");

  // 상품 조회 (1건씩) (상품 ID, 예: 4445, 4446, 4466, 4483)
  const product = await getProduct("4483");
  console.log(`상품 조회(1건): `, product);

  // 상품 등록 (productData 포함 항목: name, description, price, tags, images)
  let newProd = await createProduct(newProduct);
  console.log(`상품 등록: `, newProd);

  // let targetId = newProd.id;
  // 상품 정보 수정 (상품 ID) --* 테스트 위해 나머지는 모두 주석처리함 (위까지는 정상 진행됨)
  const modiProd = await patchProduct(newProd.id, modiProduct);
  console.log(`상품 수정: `, modiProd);

  // 상품 삭제 (상품 ID)
  const delProd = await deleteProduct(newProd.id);
  console.log(`상품 삭제: `, delProd);
} catch (e) {
  if (e.response) {
    console.log(`Error Code: `, e.response.status);
    console.log(`Error Mesaage: `, e.response.data);
  } else {
    console.log(`상품 관련 Request에 실패하였습니다. ${e.message}`);
  }
}
console.log(`--------------- `);

// ------------------ 2. 게시판 관리 (then..catch 방식) ----------------------------
// 1. 게시글 목록 조회 (10페이지)
getArticleList({
  page: 1,
  pageSize: 10,
  keyword: "",
})
  .then((articleList) => {
    const { list } = articleList;
    console.log(`게시글 조회(10페이지): `, list[0]);

    // 2. 게시글 조회 (1건) -> 다음 작업으로 연결하기 위해 반환(return) 또는 내부 실행
    return getArticle("7296");
  })
  .then((article) => {
    console.log(`게시글 조회(1건): `, article);

    // 3. 게시글 등록 -> newArticle 데이터가 선언되어 있다고 가정
    return createArticle(newArticle);
  })
  .then((newArti) => {
    console.log(`게시글 등록: `, newArti);

    // 4. 게시글 수정 -> 앞서 등록된 newArti.id와 modiArticle 데이터 활용
    return patchArticle(newArti.id, modiArticle).then((modiArti) => {
      console.log(`게시글 수정: `, modiArti);
      // 수정 결과와 함께 삭제 작업으로 넘어가기 위해 newArti 객체를 다시 전달하거나 반환
      return newArti;
    });
  })
  .then((newArti) => {
    // 5. 게시글 삭제 -> 앞서 전달받은 newArti.id 사용
    return deleteArticle(newArti.id).then((delArti) => {
      console.log(`게시글 삭제: `, delArti.id);
    });
  })
  .catch((e) => {
    // 에러 처리 (try...catch의 catch 블록 역할)
    if (e.response) {
      console.log(`Error Code: `, e.response.status);
      console.log(`Error Mesaage: `, e.response.data);
    } else {
      console.log(`게시글 관련 Request에 실패하였습니다. ${e.message}`);
    }
  });

// then.catch방식 특징
// 1) 체이닝(Chaining)을 위한 return:
// .then() 내부에서 다음 비동기 함수를 실행할 때, 반드시 return 키워드를 붙여주어야 앞선 작업이 완전히 끝날 때까지 기다렸다가 다음 .then()으로 순서대로 넘어가게 됩니다. (return을 빼먹으면 뒤죽박죽 실행되거나 에러가 납니다.)
// 2) 이전 데이터의 전달 (Scope 공유 문제 해결):
// async/await 방식에서는 변수(newArti)를 선언해두고 아래쪽 코드에서 자유롭게 가져다 쓸 수 있었지만, .then() 방식은 스코프가 각 함수 블록 안에 갇히게 됩니다.
// 따라서 등록(createArticle)에서 얻은 newArti 데이터를 수정(patchArticle)과 삭제(deleteArticle) 단계에서도 계속 사용하기 위해 체인 구조 안에서 값을 아래로 물려주는 형태로 작성해야 합니다.
// 3) 통합 에러 처리 (.catch):
// 중간에 어떤 단계(목록 조회, 1건 조회, 등록, 수정, 삭제)에서든 에러가 발생하면 즉시 모든 .then()들을 건너뛰고 맨 아래에 있는 단 하나의 .catch()로 모여서 일괄 처리됩니다. (기존 try...catch의 catch 역할과 정확히 일치합니다.)

// then.catch방식은 왜 이렇게 읽기 어렵고 비직관적일까?
// 1) 스코프(Scope) 격리와 값 전달의 번거로움
// async/await에서는 변수를 한 번 선언해두면 아래쪽 코드에서 언제든 편하게 꺼내 쓸 수 있지만, .then() 방식은 각 단계마다 함수 블록({})이 새로 열리기 때문에 앞 단계의 변수(newArti 같은 값)를 다음 단계로 넘기려면 계속 return으로 물려주거나 안쪽으로 파고들어야 합니다. 이 때문에 코드가 복잡해집니다.
// 2) 사람의 사고 흐름과 반대되는 구조
// 우리는 보통 글을 읽을 때나 일을 처리할 때 위에서 아래로 순차적인 흐름을 기대합니다. 하지만 .then() 체이닝은 함수 안에 함수가 계속 맞물려 들어가는 구조여서, 코드가 길어지면 "지금 내가 어디쯤 와 있고, 어떤 데이터를 가지고 있는 거지?"를 파악하기가 눈에 띄게 힘들어집니다. (이를 흔히 ‘프로미스 지옥(Promise Hell)’이라고 부릅니다.)

// // ------------------ 2. 게시판 관리 (try..catch 방식) ----------------------------
// try {
//   // 게시글 조회 (10페이지)
//   const articleList = await getArticleList({
//     page: 1,
//     pageSize: 10,
//     keyword: "",
//   });
//   const { list } = articleList;
//   console.log(`게시글 조회(10페이지): `, list[0]);

//   // 게시글 조회 (1건) (게시글 Id, 예: 7304, 7303, 7303, 7296)
//   const article = await getArticle("7296");
//   console.log(`게시글 조회(1건): `, article);

//   // 게시글 등록
//   const newArti = await createArticle(newArticle);
//   console.log(`게시글 등록: `, newArti);

//   // 게시글 수정 (게시글 Id)
//   const modiArti = await patchArticle(newArti.id, modiArticle);
//   console.log(`게시글 수정: `, modiArti);

//   // 게시글 삭제 (게시글 Id)
//   const delArti = await deleteArticle(newArti.id);
//   console.log(`게시글 삭제: `, delArti.id);
// } catch (e) {
//   if (e.response) {
//     console.log(`Error Code: `, e.response.status);
//     console.log(`Error Mesaage: `, e.response.data);
//   } else {
//     console.log(`게시글 관련 Request에 실패하였습니다. ${e.message}`);
//   }
// }
