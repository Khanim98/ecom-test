import React, { useEffect, useState } from "react";
import ProductListing from "./components/ProductListing";
import "./App.scss";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  
  useEffect(()=> {
    fetch(`https://my-json-server.typicode.com/khanim98/ecom-starfund/products`)
    .then(response => response.json())
    .then((data) => {
      setProducts(data)
      // if (data) {
      //   setProducts((prevProducts) => [...prevProducts, ...data]);
      // }
    })
    .catch((error) => console.log(error));
    console.log(page)
  },[page]);

  function handleLoadMore() {
    console.log("here")
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="filtered-page">
      <div className="filtering-functions">Filtering functions</div>
      <ProductListing products={products}/>
      <button onClick={handleLoadMore}>Load More...</button>
    </div>
  );
}

export default App;
