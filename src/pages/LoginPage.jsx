// 로그인 화면 렌더링
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <main className="body-container landing-page">
      {/* <!-- 1. 로그인 화면 - 판다로고 --> */}
      <section className="logo-section">
        <nav className="logo-nav" aria-label="주요 메뉴">
          {/* <a className="logo-block" href="index.html"> */}
          <Link className="logo-block" to="/">
            <img
              className="logo-face-login"
              src="/landing/panda_logo.png"
              alt=""
            />
            <img
              className="logo-text-login"
              src="/landing/panda_sign.png"
              alt="판다마켓 홈"
            />
            {/* </a> */}
          </Link>
        </nav>
      </section>

      {/* <!-- 2. 로그인 화면 - 사용자 이메일/비밀번호/로그인 버튼 --> */}
      <form className="login-form">
        {/* <!-- 로그인 화면 - 사용자 이메일 --> */}
        <div className="input-group">
          <label htmlFor="email">이메일</label>
          <input type="email" id="email" placeholder="이메일을 입력해 주세요" />
        </div>

        {/* <!-- 로그인 화면 - 비밀번호 --> */}
        <div className="input-group">
          <label htmlFor="password">비밀번호</label>
          <div className="password-wrapper">
            <input
              type="password"
              id="password"
              placeholder="비밀번호를 입력해 주세요"
            />
            {/* <!-- 눈 모양 아이콘 (필요시 추가) --> */}
            <button
              type="button"
              className="eye-icon-btn"
              aria-label="비밀번호 표시"
            >
              <i className="fa-regular fa-eye-slash"></i>
            </button>
          </div>
        </div>

        {/* <!-- 로그인 화면 - 로그인 버튼 --> */}
        <button type="submit" className="login-btn" href="./login">
          로그인
        </button>
      </form>
      <br />

      {/* <!-- 3. 로그인 화면 - 간편 로그인 --> */}
      <section className="simplelogin-section" aria-label="간편 로그인">
        <span className="simplelogin-text">간편 로그인하기</span>

        <div className="simplelogin-iconbox" aria-label="간편 로그인 아이콘">
          <a
            className="simplelogin-icon"
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/landing/google-icon.png" alt="구글" />
          </a>

          <a
            className="simplelogin-icon"
            href="https://www.kakaocorp.com/page/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/landing/kakao-icon.png" alt="카카오톡" />
          </a>
        </div>
      </section>

      {/* <!-- 4. 로그인 화면 - 회원가입 --> */}
      <section className="signup-section">
        <div className="signup-text">
          <p>판다마켓이 처음이신가요?</p>
        </div>
        <div className="signup-link">
          <a href="signup.html">회원가입</a>
        </div>
      </section>
    </main>
  );
}
