import ProductListing from "./components/ProductListing";
import "./App.scss";

function App() {
  return (
    <div className="filtered-page">
      <div className="filtering-functions">Filtering functions</div>
      <ProductListing />
    </div>
  );
}

export default App;
