import { useEffect, useState } from "react";

// usePageSize.
// - 섹션마다 개수가 다르므로 { mobile, tablet, desktop } 개수를 인자로 받는다.
//   ex) usePageSize({ mobile: 1, tablet: 2, desktop: 4 })

function getPageSize(width, sizes) {
  if (width < 744) return sizes.mobile; // 모바일
  if (width < 1200) return sizes.tablet; // 태블릿
  return sizes.desktop; // PC
}

export default function usePageSize({ mobile, tablet, desktop }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize); // 해제 필수!
  }, []);

  // 너비로 계산 가능한 값은 state로 만들지 않는다. (파생 값)
  return getPageSize(width, { mobile, tablet, desktop });
}
