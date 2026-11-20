import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api/productApi";
import ProductCard from "./ProductCard";
import usePageSize from "../hooks/usePageSize";
import Pagination from "./Pagination";

export default function MarketApp() {
  const [search, setSearch] = useState("");
  const [keyword, setKeyword] = useState("");
  const [products, setProducts] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [orderBy, setOrderBy] = useState("recent");

  // 화면 크기(모바일/태블릿/PC)에 따라 한 페이지에 보여줄 상품 수 결정[cite: 8]
  const pageSize = usePageSize({ mobile: 4, tablet: 6, desktop: 10 });

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts({
          page: page,
          limit: pageSize,
          orderBy: orderBy,
          keyword: keyword,
        });

        // 백엔드 응답 { pagination, list }에서 목록과 전체 개수를 꺼냅니다.
        setProducts(data.list || []);
        setTotalCount(data.pagination ? data.pagination.totalCount : 0);
      } catch (error) {
        console.error("전체 상품 조회 실패:", error);
      }
    }

    fetchProducts();
  }, [page, pageSize, orderBy, keyword]);

  const handleSearch = (e) => {
    e.preventDefault();
    setKeyword(search);
    setPage(1);
  };

  const handleOrderChange = (e) => {
    setOrderBy(e.target.value);
    setPage(1);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <div>
      <div className="market-toolbar">
        <h4 className="market-title">판매 중인 상품</h4>

        <form onSubmit={handleSearch}>
          <input
            placeholder="검색할 상품을 입력해주세요"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <Link className="registration" to="/registration">
          상품 등록하기
        </Link>

        <select value={orderBy} onChange={handleOrderChange}>
          <option value="recent">최신순</option>
        </select>
      </div>

      {products.length === 0 && <p>검색 결과가 없습니다.</p>}

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </div>
  );
}
