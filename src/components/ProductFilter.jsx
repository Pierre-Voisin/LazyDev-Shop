function ProductFilter(setFilter) {
  const accessories = { name: "Accessoires", isActive: false };
  const nutrition = { name: "Nutrition", isActive: false };
  const services = { name: "Services", isActive: false };
  return (
    <header>
      <input type="checkbox" onClick={setFilter(accessories.name)}>
        {accessories.name}
      </input>
      <input type="checkbox" onClick={setFilter(nutrition.name)}>
        {nutrition.name}
      </input>
      <input type="checkbox" onClick={setFilter(services.name)}>
        {services.name}
      </input>
    </header>
  );
}

export default ProductFilter;
