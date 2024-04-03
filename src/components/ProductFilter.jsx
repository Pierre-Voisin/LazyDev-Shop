import PropTypes from "prop-types";

function ProductFilter({ setFilter }) {
  const handleFilter = (filterName) => {
    setFilter(filterName);
  };
  return (
    <header>
      <p>Filtres :</p>
      <ul className="filters">
        <li>
          <button onClick={() => handleFilter("Accessoires")}>Accessoires</button>
        </li>
        <li>
          <button onClick={() => handleFilter("Nutrition")}>Nutrition</button>
        </li>
        <li>
          <button onClick={() => handleFilter("Services")}>Services</button>
        </li>
      </ul>
    </header>
  );
}

ProductFilter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  /* filter: PropTypes.string, */
};

export default ProductFilter;
