import { useEffect, useState } from "react";
import api from "../api/api";
import ProductCard from "./ProductCard";
import usePageSize from "../hooks/usePageSize";
import Pagination from "./Pagination";

////
export default function MarketApp() {
  const [bestProducts, setBestProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");
  const [keyword, setKeyword] = useState("");

  const bestPageSize = usePageSize({ mobile: 1, tablet: 2, desktop: 4 });
  const pageSize = usePageSize({ mobile: 4, tablet: 6, desktop: 10 });
  //
  useEffect(() => {
    async function fetchBestProducts() {
      try {
        const res = await api.get("/products", {
          params: { orderBy: "favorite", pageSize: bestPageSize },
        });
        setBestProducts(res.data.list);
      } catch (e) {
        console.error("베스트 상품 조회 실패: ", e);
      }
    }
    fetchBestProducts();
  }, [bestPageSize]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await api.get("/products", {
          params: { page, pageSize, orderBy, keyword },
        });
        setProducts(res.data.list);
        setTotalCount(res.data.totalCount);
      } catch (e) {
        console.error("전체 상품 조회 실패:", e);
      }
    }
    fetchProducts();
  }, [page, pageSize, orderBy, keyword]);

  // Form의 이벤트(e)를 매개변수로 하는 함수 선언
  const handleSearch = (e) => {
    e.preventDefault(); // form 태그의 새로고침 방지
    setKeyword(search); // search내의 값을 저장
    setPage(1); // 페이지네이션 값을 1로 초기화 (첫페이지)
  };

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
    setPage(1);
  };
  const totalPages = Math.ceil(totalCount / pageSize);
  //
  return (
    <div>
      <h4 className="market-title">베스트 상품</h4>
      <div className="best-grid">
        {bestProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="market-toolbar">
        <h4 className="market-title">판매 중인 상품</h4>
        <form onSubmit={handleSearch}>
          <input
            placeholder="검색할 상품을 입력해주세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
        </form>
        <button className="primary">상품 등록하기</button>
        <select value={orderBy} OnChange={handleOrderChange}>
          <option value="recent">최신순</option>
          <option value="favorite">좋아요순</option>
        </select>
      </div>
      {products.lingth === 0 && <p>검색 결과가 없습니다.</p>}
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
