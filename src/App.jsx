/* import { useState } from "react"; */
import ProductCatalog from "./components/ProductCatalog.jsx";
/* import ProductFilter from "./components/ProductFilter.jsx"; */
import "./assets/styles/App.css";

function App() {
  /* const [filter, setFilter] = useState("none"); */
  /* <ProductFilter setFilter={setFilter} /> */
  return (
    <div className="content">
      <ProductCatalog />
    </div>
  );
}

export default App;
