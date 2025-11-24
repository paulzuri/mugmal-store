import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.imageUrl} alt={product.name} className="product-image"/>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="buy-button">Comprar</button>
    </div>
  );
}

export default ProductCard;
