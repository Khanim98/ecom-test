import React, { useEffect, useState, useRef, useContext, createContext } from "react";
import ProductListing from "./components/ProductListing";
import "./App.scss";
import { debounce } from "lodash";
import { ShoppingCartOutlined } from '@ant-design/icons';

export const ProductCountContext = createContext();

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(false);
  const productsContainerRef = useRef(null);
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch(`https://6447740550c25337442518f8.mockapi.io/api/products?page=${page}&limit=10`)
      .then((response) => response.json())
      .then((data) => {
        if(page === 1){
          setProducts(data)
        }else if(data.length === 0) {
          setLastPage(true);
        } else {
          setProducts(prev => [...prev, ...data]);
        }
      })
      .catch((error) => console.log(error));
  }, [page]);


  const sort = (filtered, key) => {
    if (key) {
        const sorted = [...filtered];
        sorted.sort((a, b) => {
            if (a[key] > b[key]) return 1;
            if (a[key] < b[key]) return -1;
            return 0;
        });
    return sorted;
    } else {
        return filtered;
    }
  }

  useEffect(()=> {
    console.log("changed")
    let filtered = products;
    if(selectedCategory !== "all"){
      filtered = sort(products, selectedCategory);
    }
    setProducts(filtered)
  }, [selectedCategory])

  const handleSearchInputChange = (e) => {
    //also can use debounce here to limit the number of API requests
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  }

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleScroll = debounce(() => {
    const { scrollTop, scrollHeight, clientHeight } = productsContainerRef.current;
    if (scrollTop + clientHeight >= scrollHeight - 5 && products.length && !lastPage) {
      setPage((prevPage) => prevPage + 1);
    }
  },200);

  const addToCart = (price, currency) => {
    let convertedToUsd = currency === "EUR" ? price * 1.1 : price;
    setCount(count + 1);
    setTotalPrice(prev => +(prev + convertedToUsd).toFixed(2));
  }


  return (
    <div className="filtered-page" onScroll={handleScroll} ref={productsContainerRef}>
      <div className="header">
        <div className="header-items">
          <div>logo</div>
          <div className="cart-area">
            <div className="cart">
              <div className="added-products-count">{count}</div>
              <ShoppingCartOutlined 
                style={{fontSize: "30px", color: "#161616"}}
              />
              <div className="total-price">Total: {totalPrice} $</div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="filtering-functions">
          <div className="search">
            <input placeholder="Search product.." onChange={handleSearchInputChange}/>
          </div>
          <div className="filter-by">
            <div className="sort-area">
              <select
                  name="category-list"
                  id="category-list"
                  onChange={handleCategoryChange}
              >
                  <option value="all">All</option>
                  <option value="price">By Price</option>
                  <option value="rating">By Rating</option>
              </select>
            </div>
          </div>
        </div>
        {filteredProducts && 
        <ProductCountContext.Provider value={{ addToCart }}>
          <ProductListing products={filteredProducts}/>
        </ProductCountContext.Provider>
        }
      </div>
    </div>
  );
}

export default App;
