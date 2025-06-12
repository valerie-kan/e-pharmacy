import css from "./ProductDetailsPage.module.css";

import ProductItem from "../../components/ProductItem/ProductItem";

const ProductDetailsPage = () => {
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  return (
    <section className={css.sectionWRapper}>
      <ProductItem product={selectedProduct} />
    </section>
  );
};

export default ProductDetailsPage;
