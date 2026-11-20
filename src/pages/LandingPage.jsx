// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="landing-page">
      {/* <!-- 1.구경하러 가기 영역 --> */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              일상의 모든 물건을
              <br />
              거래해 보세요
            </h1>

            <Link className="browse-button" to="/items">
              구경하러 가기
            </Link>
          </div>
          <img
            className="hero-image"
            src="/landing/Img_home_top.png"
            alt="중고 거래를 소개하는 판다 캐릭터"
          />
        </div>
      </section>
      {/* <!-- 2. 인기 상품 소개 영역  --> */}
      <section className="feature">
        <div className="feature-content">
          <img
            className="feature-image"
            src="/landing/Img_home_01.png"
            alt="옷과 액세서리 등 인기 상품을 보여주는 이미지"
          />
          <div className="feature-text">
            <p className="feature-label">Hot item</p>

            <h2>
              인기 상품을
              <br />
              확인해 보세요
            </h2>

            <p className="feature-description">
              가장 HOT한 중고거래 물품을
              <br />
              판다마켓에서 확인해 보세요
            </p>
          </div>
        </div>
      </section>
      {/* <!-- 3. 구매 희망 상품 검색 영역 --> */}
      <section className="feature">
        <div className="feature-content">
          <div className="feature-text feature-text-right">
            <p className="feature-label">Search</p>

            <h2>
              구매를 원하는
              <br />
              상품을 검색하세요
            </h2>

            <p className="feature-description">
              구매하고 싶은 물품은 검색해서
              <br />
              쉽게 찾아보세요
            </p>
          </div>

          <img
            className="feature-image"
            src="/landing/Img_home_02.png"
            alt="돋보기로 원하는 상품을 검색하는 이미지"
          />
        </div>
      </section>
      {/* <!-- 4. 판매 희망 상품 등록 영역 --> */}
      <section className="feature">
        <div className="feature-content">
          <img
            className="feature-image"
            src="/landing/Img_home_03.png"
            alt="판매를 원하는 상품을 등록하는 이미지"
          />
          <div className="feature-text">
            <p className="feature-label">Register</p>

            <h2>
              판매를 원하는
              <br />
              상품을 등록하세요
            </h2>
            <p className="feature-description">
              어떤 물건이든 판매하고 싶은 상품을
              <br />
              쉽게 등록하세요
            </p>
          </div>
        </div>
      </section>
      {/* <!-- 5. 판다마켓 홍보 영역 --> */}
      <section className="hero-bottom">
        <div className="hero-bottom-content">
          <div className="hero-bottom-text">
            <h2>
              믿을 수 있는
              <br />
              판다마켓 중고 거래
            </h2>
          </div>

          <img
            className="hero-bottom-image"
            src="/landing/Img_home_bottom.png"
            alt="믿음 주는 판다 캐릭터"
          />
        </div>
      </section>
    </main>
  );
}
