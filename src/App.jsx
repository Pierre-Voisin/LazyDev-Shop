import { useState } from "react";
import ProductCatalog from "./components/ProductCatalog.jsx";
import ProductFilter from "./components/ProductFilter.jsx";

function App() {
  const [filter, setFilter] = useState("none");
  return (
    <>
      <ProductFilter setFilter={setFilter} />
      <ProductCatalog />
    </>
  );
}

export default App;
