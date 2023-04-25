import React, { useEffect, useState } from "react";
import ProductListing from "./components/ProductListing";
import "./App.scss";

function App() {
  const [products, setProducts] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const options = {
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    maxContentLength: 100000000,
    maxBodyLength: 1000000000
  }
  useEffect(()=> {
    fetch(`https://my-json-server.typicode.com/khanimpasha/ecom-starfund/products`, options)
    .then(response => response.json())
    .then(data => {setProducts(data)})
    .catch((error) => console.log(error));
  },[]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = Array.isArray(products) && products.filter((product) => {
    return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });


  return (
    <div className="filtered-page">
      <div className="filtering-functions">
        <div className="search">
          <input placeholder="Search product.." onChange={handleSearchInputChange}/>
        </div>
        <div className="filter-by">filter</div>
      </div>
      {filteredProducts && <ProductListing products={filteredProducts}/>}
    </div>
  );
}

export default App;
