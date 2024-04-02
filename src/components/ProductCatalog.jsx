import Product from "./Product.jsx";
import items from "../assets/data/products.json";

function ProductCatalog() {
  return (
    <article>
      {items &&
        items.map((p) => {
          return (
            <Product
              key={p.id}
              name={p.name}
              image={p.image}
              price={p.price}
              category={p.category}
            />
          );
        })}
    </article>
  );
}

export default ProductCatalog;
