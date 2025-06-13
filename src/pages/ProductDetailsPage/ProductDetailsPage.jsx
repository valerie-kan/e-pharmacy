import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import css from "./ProductDetailsPage.module.css";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

import ProductItem from "../../components/ProductItem/ProductItem";
import ProductAddInfo from "../../components/ProductAddInfo/ProductAddInfo";

const ProductDetailsPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  const selectedProduct = JSON.parse(localStorage.getItem("selectedProduct"));

  return (
    <section className={css.sectionWrapper}>
      <ProductItem
        product={selectedProduct}
        isLoggedIn={isLoggedIn}
        navigate={navigate}
      />
      <ProductAddInfo />
    </section>
  );
};

export default ProductDetailsPage;
