// 상품 관리 api
//  axios 선언 (참고: article api는 fetch 사용함)
import axios from "axios";

// instance 선언
const instance = axios.create({
  baseURL: "https://panda-market-api-crud.vercel.app",
  timeout: 10000,
});

// 상품 조회 (10페이지씩) - 파라메터 선언 방법 1
export async function getProductList(params = {}) {
  const res = await instance.get("/products", { params });
  return res.data;
}

// 상품 조회 (10페이지씩) - 파라메터 선언 방법 2 (참고용)
// export async function getProductList(page, pageSize, keyword) {
//   const res = await instance.get("/products", {
//     params: { page: page, pageSize: pageSize, keyword: keyword },
//   });
//   return res.data;
// }

// 상품 조회 (1건씩) (상품 Id)
export async function getProduct(productId) {
  const res = await instance.get(`/products/${productId}`);
  return res.data;
}

// 상품 생성 (productData 포함 항목: name, description, price, tags, images)
export async function createProduct(productData) {
  const res = await instance.post("/products", productData);
  return res.data;
}

// 상품 정보 수정 (상품 Id)
export async function patchProduct(productId, productData) {
  const res = await instance.patch(`/products/${productId}`, productData);
  return res.data;
}

// 상품 삭제 (상품 Id)
export async function deleteProduct(productId) {
  const res = await instance.delete(`/products/${productId}`);
  return res.data;
}
