import { useState } from "react";
import ProductCatalog from "./components/ProductCatalog.jsx";
import ProductFilter from "./components/ProductFilter.jsx";
import "./assets/styles/App.css";
import ProductDetails from "./components/ProductDetails.jsx";

function App() {
  const [filter, setFilter] = useState("none");
  const [focus, setFocus] = useState(null);

  return (
    <div className="content">
      <ProductFilter setFilter={setFilter} />
      <div className="product-display">
        <ProductCatalog filter={filter} setFocus={setFocus} />
        <ProductDetails focus={focus} />
      </div>
    </div>
  );
}

export default App;
