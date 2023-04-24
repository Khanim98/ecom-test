import React, { useEffect, useState } from "react";
import ProductListing from "./components/ProductListing";
import "./App.scss";

function App() {
  const [products, setProducts] = useState(null);
  useEffect(()=> {
    fetch("https://my-json-server.typicode.com/khanim98/starfund-ecom-test/products")
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error(error));
  },[])

  return (
    <div className="filtered-page">
      <div className="filtering-functions">Filtering functions</div>
      {products && <ProductListing products={products}/>}
    </div>
  );
}

export default App;
