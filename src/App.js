import React, { useEffect, useState } from "react";
import ProductListing from "./components/ProductListing";
import "./App.scss";

function App() {
  const [products, setProducts] = useState(null);
  // const [page, setPage] = useState(1);
  
  useEffect(()=> {
    fetch('https://my-json-server.typicode.com/khanimpasha/ecom-starfund/products')
    .then(response => response.json())
    .then((data) => {
      setProducts(data)
      // if (data) {
      //   setProducts((prevProducts) => [...prevProducts, ...data]);
      // }
    })
    .catch((error) => console.log(error));
  },[]);

  // function handleLoadMore() {
  //   console.log("here")
  //   setPage((prevPage) => prevPage + 1);
  // }

  return (
    <div className="filtered-page">
      <div className="filtering-functions">Filtering functions</div>
      {products && <ProductListing products={products}/>}
      {/* <button onClick={handleLoadMore}>Load More...</button> */}
    </div>
  );
}

export default App;
