import React, { useEffect, useState } from "react";
import ProductListing from "./components/ProductListing";
import "./App.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(()=> {
    fetch(`https://my-json-server.typicode.com/khanimpasha/ecom-starfund/products?_page=${page}&_limit=10`)
    .then(response => response.json())
    .then(data => setProducts(() => [...data]))
    .catch((error) => console.log(error));
  },[page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <div className="filtered-page">
      <div className="filtering-functions">Filtering functions</div>
      {products && <ProductListing products={products}/>}
      {products.length > 0 && (
        <button className="load-more-btn" onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
}

export default App;
