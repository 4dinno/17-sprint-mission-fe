// 게시글 관리 api
// fetch 사용 (참고 : product api는 axios 사용함)

// 게시글 조회 (10페이지씩)
// URL 객체와 이 객체의 searchParams 속성 사용
// searchParams이 URL 뒤의 ? 이후 영역 분석, append()함수가 쿼리 스트링을 추가
export async function getArticleList(params = {}) {
  const url = new URL(`https://panda-market-api-crud.vercel.app/articles`);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

// 게시글 조회 - 1건씩 (상품 Id)
export async function getArticle(articleId) {
  const res = await fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
  );
  const data = await res.json();
  return data;
}

// 게시글 등록 (articleData - 포함 항목: image, content, title)
export async function createArticle(articleData) {
  const res = await fetch(`https://panda-market-api-crud.vercel.app/articles`, {
    method: "POST",
    body: JSON.stringify(articleData),
    headers: { "content-Type": "application/json" },
  });
  const data = await res.json();
  return data;
}

// 게시글 수정 (상품 Id)
export async function patchArticle(articleId, articleData) {
  const res = await fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
    {
      method: "PATCH",
      body: JSON.stringify(articleData),
      headers: { "content-Type": "application/json" },
    },
  );
  const data = await res.json();
  return data;
}

// 게시글 삭제 (상품 Id)
export async function deleteArticle(articleId) {
  const res = await fetch(
    `https://panda-market-api-crud.vercel.app/articles/${articleId}`,
    {
      method: "DELETE",
    },
  );
  const data = await res.json();
  return data;
}
