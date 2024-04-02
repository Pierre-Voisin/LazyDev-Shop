import PropTypes from "prop-types";

function Product({ name, image, price, category }) {
  return (
    <figure className="product">
      <img src={image} alt={name} />
      <figcaption>{name}</figcaption>
      <div className="product-details">
        <p className="price">
          Prix :<span> {price} €</span>
        </p>
        <p className="category">
          Categorie :<span> {category}</span>
        </p>
      </div>
      <button>Learn more...</button>
    </figure>
  );
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default Product;
