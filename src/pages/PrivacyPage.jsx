// 개인정보 처리방침 조회 화면
function PrivacyPage() {
  return (
    <main className="body-container main-container">
      <section className="logo-section">
        <nav className="logo-nav" aria-label="주요 메뉴">
          <a className="logo-block" href="index.html">
            <img className="logo-face" src="/landing/panda_logo.png" alt="" />
            <img
              className="logo-text"
              src="/landing/panda_sign.png"
              alt="판다마켓 홈"
            />
          </a>
        </nav>
      </section>

      <section className="privacy-statement">
        <span> [-------- 본 화면은 샘플 화면입니다 -------] </span> <br />{" "}
        <br />
        <span> [개인정보 처리방침 요약] </span> <br />
        <span>
          판다마켓(이하 '회사')은 이용자의 소중한 개인정보를 보호하며, 관련
          법령을 준수합니다.
        </span>
        <br />
        <span>수집 항목: 이메일, 닉네임 </span> <br />
        <span>
          비밀번호 수집 목적: 회원 가입, 서비스 이용 확인 및 고객 상담
        </span>
        <br />
        <span>
          보유 기간: 회원 탈퇴 시까지 (단, 관계 법령에 따라 일정 기간 보존될 수
          있음)
        </span>
        <br />
        <span>
          문의 사항: 개인정보 관련 문의는 고객센터를 통해 접수해 주세요.
        </span>
        <br />
      </section>
    </main>
  );
}

export default PrivacyPage;
