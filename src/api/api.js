import axios from "axios";

// .env에 적은 백엔드 주소를 가져옵니다. (예: http://localhost:3000)[cite: 8]
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
