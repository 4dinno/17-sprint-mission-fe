import axios from "axios";

// axios 인스턴스 : baseURL 등 공통 설정
// - api.get("/products") = axios.get("https://panda-market-api-crud.vercel.app/products")

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
//
