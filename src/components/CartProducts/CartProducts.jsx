import { useState } from "react";

import css from "./CartProducts.module.css";

import AddProductButton from "../AddProductButton/AddProductButton";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ErrorToast } from "../../utils/errorToast";
import { removeProduct } from "../../redux/cart/operations";
import { SuccessToast } from "../../utils/successToast";
// import { selectCart } from "../../redux/cart/selectors";

const CartProducts = ({ products, cartId }) => {
  const dispatch = useDispatch();
  const [prodQuant, setProdQuant] = useState(1);
  const location = useLocation();
  // const cart = useSelector(selectCart);

  const isCartPage = location.pathname === "/cart";

  const handleRemoveClick = async (productId) => {
    try {
      await dispatch(removeProduct({ cartId, productId })).unwrap();
      SuccessToast("Product was delated");
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <div className={css.productsWrapper}>
      <ul className={css.productsList}>
        {products.map((item) => (
          <li className={css.productItem} key={item.productId}>
            <div className={css.imgWrapper}>
              <img className={css.image} src={item.photo} alt="Product image" />
            </div>
            <div className={css.productInfoWrpr}>
              <div className={css.nameAndSupplierWrpr}>
                <p className={css.name}>{item.name}</p>
                <p className={css.supplier}>{item.suppliers}</p>
              </div>
              <p className={css.price}>৳ {item.price}</p>
              <div className={css.btnsWrapper}>
                <AddProductButton
                  prodQuant={prodQuant}
                  setProdQuant={setProdQuant}
                  isCartPage={isCartPage}
                  prodId={item.productId}
                  itemQuant={item.quantity}
                />
                <button
                  className={css.productBtn}
                  type="button"
                  onClick={() => handleRemoveClick(item.productId)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartProducts;
