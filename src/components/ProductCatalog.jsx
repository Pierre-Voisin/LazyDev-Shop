import Product from "./Product.jsx";
import products from "../assets/data/products.json";

function ProductCatalog() {
  return (
    <article>
      {products &&
        products.map((p) => {
          <Product
            name={p.name}
            image={p.image}
            price={p.price}
            category={p.category}
            description={p.description}
          />;
        })}
    </article>
  );
}

export default ProductCatalog;
