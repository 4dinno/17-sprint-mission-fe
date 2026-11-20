// FAQ 페이지

function FaqPage() {
  return (
    <main class="body-container main-container">
      <section class="logo-section">
        <nav class="logo-nav" aria-label="주요 메뉴">
          <a class="logo-block" href="index.html">
            <img class="logo-face" src="/landing/panda_logo.png" alt="" />
            <img
              class="logo-text"
              src="/landing/panda_sign.png"
              alt="판다마켓 홈"
            />
          </a>
        </nav>
      </section>

      <section class="faq-content">
        <span> [------ 본 화면은 샘플화면입니다. ------] </span> <br /> <br />
        <span> [자주 묻는 질문] </span> <br />
        <span>
          Q1. 판다마켓은 어떤 서비스인가요? <br />
          A. 일상의 모든 물건을 쉽고 안전하게 거래할 수 있는 중고거래 및
          라이프스타일 플랫폼입니다.
        </span>
        <br />
        <span>
          Q2. 회원가입은 무료인가요? <br />
          A. 네, 누구나 무료로 회원가입 후 자유롭게 서비스를 이용하실 수
          있습니다.
        </span>
        <br />
        <span>
          Q3. 비밀번호를 잊어버렸어요. <br />
          A. 로그인 화면 하단의 '비밀번호 찾기'를 통해 가입하신 이메일로 재설정
          링크를 받으실 수 있습니다.
        </span>
        <br />
        <span>
          Q4. 거래 중 문제가 발생하면 어떻게 하나요? <br />
          A. 고객센터 또는 1:1 문의를 남겨주시면 신속하게 도와드리겠습니다.
        </span>
        <br />
        <span>문의 사항: 기타 문의는 고객센터를 통해 문의하여 주세요.</span>
        <br />
      </section>
    </main>
  );
}

export default FaqPage;
