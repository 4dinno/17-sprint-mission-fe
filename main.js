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
  description: "더 좋아진 절전형 양문형 냉장고, 강력 할인!!!",
  name: "양문형 냉장고(수정)",
};

// 게시글 등록용 샘플 data
const newArticle = {
  image: "string",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};

const modiArticle = {
  image: "string",
  content: "안전한 중고거래를 위한 다음의 규정을 준수하여 주세요.",
  title: "중고거래 규정.",
};

// ------------------ 1. 상품 관리 ----------------------------

try {
  // // 상품 조회 (10페이지씩) - 인자 선언 방법 1
  // const productList = await getProductList({
  //   page: 1,
  //   pageSize: 10,
  //   keyword: "",
  // });
  // // console.log(`상품 조회(10페이지씩): `, productList);
  // // 상품 조회 (10페이지씩) - 인자 선언 방법 2
  // // const productList = await getProductList(1, 10, "");

  // // 상품 조회 (1건씩) (상품 ID, 예: 4445, 4446, 4466, 4483)
  // const product = await getProduct("4483");
  // console.log(`상품 조회(1건): `, product);

  // // 상품 생성 (productData 포함 항목: name, description, price, tags, images)
  // let newProd = await createProduct(newProduct);
  // console.log(`신규 상품ID: `, newProd.id);
  // console.log(`등록 결과: `, newProd);

  let targetId = "4549";
  // 상품 정보 수정 (상품 ID) --* 테스트 위해 나머지는 모두 주석처리함 (위까지는 정상 진행됨)
  console.log(`타켓 Id: `, targetId);
  const modiProd = await patchProduct(targetId, modiProduct);
  console.log(`상품 수정: `, modiProd);

  // 상품 삭제 (상품 ID)
  // const delProd = await deleteProduct(newProd.id);
  // console.log(`상품 삭제: `, delProd);
} catch (e) {
  if (e.response) {
    console.log(`Error Code: `, e.response.status);
    console.log(`Error Mesaage: `, e.response.data);
  } else {
    console.log(`Request에 실패하였습니다. ${e.message}`);
  }
}

// ------------------ 2. 게시판 관리 ----------------------------
