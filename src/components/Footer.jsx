////
export default function Footer() {
  return (
    // Footer: 라이선스 및 Privacy-FAQ, SNS 링크 영역
    <footer class="site-footer">
      <div class="footer-content">
        <p class="footer-copylight">ⓒcodeit-2024</p>

        <div class="footer-links">
          <a href="privacy.html">Privacy Policy</a>
          <a href="faq.html">FAQ</a>
        </div>

        {/* 새 탭으로 창 열기 */}
        {/* 새로 열린 페이지와 기존 페이지의 연결을 제한하고, 이동 시 출처 정보를 전달하지 않음 */}
        <div class="footer-sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ic_facebook.png" alt="페이스북" />
          </a>

          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ic_twitter.png" alt="트위터" />
          </a>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ic_youtube.png" alt="유튜브" />
          </a>

          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/ic_instagram.png" alt="인스타그램" />
          </a>
        </div>
      </div>
    </footer>
  );
}
