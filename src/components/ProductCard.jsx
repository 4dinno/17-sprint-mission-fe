// 기본 이미지 경로 (public/no-image.svg)[cite: 8]
const DEFAULT_IMAGE = "/no-image.svg";

export default function ProductCard({ product }) {
  const name = product.name;
  const price = product.price;
  const firstImage =
    Array.isArray(product.images) && product.images.length > 0
      ? product.images[0]
      : DEFAULT_IMAGE;

  return (
    <div className="card">
      <img
        className="card-img"
        src={firstImage}
        alt={name}
        onError={(e) => {
          e.currentTarget.src = DEFAULT_IMAGE;
        }}
      />
      <p className="card-name">{name}</p>
      <p className="card-price">{Number(price).toLocaleString()}원</p>
    </div>
  );
}
