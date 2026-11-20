import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../api/productApi";

export default function ProductCreatePage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    tags: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 쉼표(,)로 구분된 태그 문자열을 깔끔한 문자열 배열로 바꿉니다.[cite: 8]
      const tagList = form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      const payload = {
        name: form.name.trim(),
        description: form.description.trim(),
        price: Number(form.price),
        tags: tagList,
      };

      const createdProduct = await createProduct(payload);

      // 등록 성공 시 해당 상품 상세 페이지로 이동합니다.[cite: 8]
      navigate(`/products/${createdProduct.id}`, { replace: true });
    } catch (error) {
      console.error("상품 등록 실패:", error);
      if (error.response) {
        console.error("서버 응답 에러:", error.response.data);
      }
    }
  };

  const isDisabled =
    !form.name.trim() || !form.description.trim() || !String(form.price).trim();

  return (
    <div className="item-create-container">
      <div className="page-header">
        <h1 className="page-title">상품 등록하기</h1>
        <button
          type="submit"
          form="product-form"
          className="submit-button"
          disabled={isDisabled}
        >
          등록
        </button>
      </div>

      <form id="product-form" className="postForm" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>상품명</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="상품명을 입력해주세요"
            required
          />
        </div>

        <div className="form-group">
          <label>상품 소개</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="상품 소개를 입력해주세요"
            rows={6}
            required
          />
        </div>

        <div className="form-group">
          <label>판매가격</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="판매 가격을 입력해주세요"
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>태그</label>
          <input
            name="tags"
            value={form.tags}
            onChange={handleChange}
            placeholder="태그를 입력해주세요 (여러 개일 경우 쉼표로 구분)"
          />
        </div>
      </form>
    </div>
  );
}
