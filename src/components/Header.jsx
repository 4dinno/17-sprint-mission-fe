////
export default function Header() {
  return (
    // Header: 판다마켓 로고 및 로그인 버튼
    <header class="site-header">
      <nav class="header-content" aria-label="주요 메뉴">
        <a class="logo" href="">
          <img class="logo-face" src="/panda_logo.png" alt="" />
          <img class="logo-text" src="/panda_sign.png" alt="판다마켓 홈" />
        </a>

        <a class="login-button" href="login.html">
          로그인
        </a>
      </nav>
    </header>
  );
}
