// 페이지네이션 (data3 Page2를 컴포넌트로 분리)
// - props : page(현재 페이지), totalPages(전체 페이지 수), onChange(페이지 변경 함수)

const GROUP_SIZE = 5;

export default function Pagination({ page, totalPages, onChange }) {
  const startPage = Math.floor((page - 1) / GROUP_SIZE) * GROUP_SIZE + 1;
  const endPage = Math.min(startPage + GROUP_SIZE - 1, totalPages);
  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );
  //
  return (
    <div className="pagination">
      <button
        className="inactive"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        &lt;
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={number === page ? "active" : "inactive"}
          onClick={() => onChange(number)}
        >
          {number}
        </button>
      ))}
      <button
        className="inactive"
        disabled={page >= totalPages}
        onClick={() => onChange(page + 1)}
      >
        &gt;
      </button>
    </div>
  );
}
