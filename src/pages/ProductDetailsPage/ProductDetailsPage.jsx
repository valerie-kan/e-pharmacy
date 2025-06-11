import { useSelector } from "react-redux";

import css from "./ProductDetailsPage.module.css";

import { selectProductDetails } from "../../redux/products/selectors";

import ProductItem from "../../components/ProductItem/ProductItem";

const ProductDetailsPage = () => {
  const selectedProduct = useSelector(selectProductDetails);

  return (
    <section className={css.sectionWRapper}>
      <ProductItem product={selectedProduct} />
    </section>
  );
};

export default ProductDetailsPage;
