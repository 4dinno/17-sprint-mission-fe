import api from "./api";

// 1. 상품 목록 조회 (GET /products)
// page, limit, orderBy, keyword를 쿼리로 보냅니다.[cite: 8]
export async function getProducts(params) {
  try {
    const response = await api.get("/products", { params: params });
    return response.data; // { pagination, list } 형태를 그대로 돌려줍니다.
  } catch (error) {
    console.error("상품 목록 조회 실패:", error);
    throw error;
  }
}

// 2. 상품 등록 (POST /products)
// productData: { name, description, price, tags }
export async function createProduct(productData) {
  try {
    const response = await api.post("/products", productData);
    return response.data; // 생성된 상품 데이터(id 등)를 돌려줍니다.
  } catch (error) {
    console.error("상품 등록 실패:", error);
    throw error;
  }
}
