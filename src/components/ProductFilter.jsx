import PropTypes from "prop-types";

function ProductFilter({ setFilter }) {
  return (
    <header>
      <p>Filtres :</p>
      <ul className="filters">
        <li>
          <button>Accessoires</button>
        </li>
        <li>
          <button>Nutrition</button>
        </li>
        <li>
          <button>Services</button>
        </li>
      </ul>
    </header>
  );
}

ProductFilter.propTypes = {
  setFilter: PropTypes.func,
};

export default ProductFilter;
