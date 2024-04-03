import PropTypes from "prop-types";
import items from "../assets/data/products.json";

function ProductDetails({ focus }) {
  return (
    <div className="details">
      {focus === null ? (
        <p className="undefined">Sélectionne un produit ci-contre !</p>
      ) : (
        <figure className="product">
          <img src={items[focus].image} alt={items[focus].name} />
          <figcaption>{items[focus].name}</figcaption>
          <p className="description">{items[focus].description}</p>
          <div className="product-details">
            <p className="price">
              Prix :<span> {items[focus].price} €</span>
            </p>
            <p className="category">
              Categorie :<span> {items[focus].category}</span>
            </p>
          </div>
        </figure>
      )}
    </div>
  );
}

ProductDetails.propTypes = {
  focus: PropTypes.number.isRequired,
};

export default ProductDetails;
