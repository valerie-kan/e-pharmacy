import { useSelector } from "react-redux";

import css from "./ProductDetailsPage.module.css";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import ProductItem from "../../components/ProductItem/ProductItem";
import { useNavigate } from "react-router-dom";

const ProductDetailsPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  return (
    <section className={css.sectionWRapper}>
      <ProductItem
        product={selectedProduct}
        isLoggedIn={isLoggedIn}
        navigate={navigate}
      />
    </section>
  );
};

export default ProductDetailsPage;
