import Product from "./Product.jsx";
import items from "../assets/data/products.json";
import PropTypes from "prop-types";

function ProductCatalog({ filter, setFocus }) {
  /* const filteredProducts = items.map((i) => i.category === filter); */
  return (
    <article>
      {items &&
        items.map((p, index) => {
          return (
            <Product
              key={p.id}
              name={p.name}
              image={p.image}
              price={p.price}
              category={p.category}
              setFocus={setFocus}
              index={index}
            />
          );
        })}
    </article>
  );
}

ProductCatalog.propTypes = {
  filter: PropTypes.string.isRequired,
  setFocus: PropTypes.func.isRequired,
};

export default ProductCatalog;
