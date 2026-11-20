import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  const isLandingPage = location.pathname === "/";
  const isItemsPage = location.pathname === "/items";

  return (
    <header className="site-header">
      <nav className="header-content" aria-label="주요 메뉴">
        <div className="logo-nav-box">
          <Link className="logo" to="/">
            <img className="logo-face" src="/landing/panda_logo.png" alt="" />
            <img
              className="logo-text"
              src="/landing/panda_sign.png"
              alt="판다마켓 홈"
            />
          </Link>

          {!isLandingPage && (
            <div className="nav-links">
              <Link to="/blog">자유게시판</Link>
              <Link
                to="/items"
                style={{ color: isItemsPage ? "#3692ff" : "#333333" }}
              >
                중고마켓
              </Link>
            </div>
          )}
        </div>

        <Link className="login-button" to="/login">
          로그인
        </Link>
      </nav>
    </header>
  );
}
