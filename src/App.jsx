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
      <ProductFilter />
      <div className="product-display">
        <ProductCatalog />
        <ProductDetails focus={focus} />
      </div>
    </div>
  );
}

export default App;
