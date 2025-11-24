import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import "./index.css";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://7e8vq9ngph.execute-api.us-east-2.amazonaws.com/prod/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(err => setProducts([]));
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <div className="products-container">
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}

export default App;
