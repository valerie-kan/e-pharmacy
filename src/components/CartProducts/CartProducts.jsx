import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import css from "./CartProducts.module.css";

import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";

import { removeProduct } from "../../redux/cart/operations";

import AddProductButton from "../AddProductButton/AddProductButton";

const CartProducts = ({ products, cartId, updateTotalProducts }) => {
  const dispatch = useDispatch();
  const [prodQuant, setProdQuant] = useState(1);
  const location = useLocation();

  const isCartPage = location.pathname === "/cart";

  const handleRemoveClick = async (productId) => {
    try {
      await dispatch(removeProduct({ cartId, productId })).unwrap();

      const savedCart = JSON.parse(localStorage.getItem("cart"));
      const updatedItems = savedCart.items.filter(
        (item) => item.productId !== productId
      );

      const updatedCart = {
        ...savedCart,
        items: updatedItems,
      };

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      updateTotalProducts();
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
                  cartId={cartId}
                  prodQuant={prodQuant}
                  setProdQuant={setProdQuant}
                  isCartPage={isCartPage}
                  prodId={item.productId}
                  itemQuant={item.quantity}
                  updateTotalProducts={updateTotalProducts}
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
