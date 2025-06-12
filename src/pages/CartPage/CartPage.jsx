import css from "./CartPage.module.css";

import CartMainInfo from "../../components/CartMainInfo/CartMainInfo";
import CartProducts from "../../components/CartProducts/CartProducts";

const CartPage = () => {
  return (
    <section className={css.sectionWrapper}>
      <h3 className={css.sectionTtl}>Cart</h3>
      <CartMainInfo />
      <CartProducts />
    </section>
  );
};

export default CartPage;
