import { Link } from "react-router-dom";

////
export default function Footer() {
  return (
    // Footer: 라이선스 및 Privacy-FAQ, SNS 링크 영역
    <footer className="site-footer">
      <div className="footer-content">
        <p className="footer-copylight">ⓒcodeit-2024</p>

        <div className="footer-links">
          {/* <a href="privacy.html">Privacy Policy</a> */}
          {/* <a href="faq.html">FAQ</a> */}
          <Link to="/privacy"> Privacy Policy </Link>
          <Link to="/faq"> FAQ </Link>
        </div>

        {/* 새 탭으로 창 열기 */}
        {/* 새로 열린 페이지와 기존 페이지의 연결을 제한하고, 이동 시 출처 정보를 전달하지 않음 */}
        <div className="footer-sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/landing/ic_facebook.png" alt="페이스북" />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/landing/ic_twitter.png" alt="트위터" />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/landing/ic_youtube.png" alt="유튜브" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/landing/ic_instagram.png" alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  );
}
