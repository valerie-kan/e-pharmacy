import clsx from "clsx";
import { useDispatch } from "react-redux";

import css from "./AddProductButton.module.css";

import sprite from "../../assets/icons/sprite.svg";

import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";

import { updateCart } from "../../redux/cart/operations";

const AddProductButton = ({
  cartId,
  prodQuant,
  setProdQuant,
  isCartPage,
  prodId,
  itemQuant,
  updateTotalProducts,
}) => {
  const dispatch = useDispatch();

  const handlePlusClick = async () => {
    try {
      const updatedCart = await dispatch(
        updateCart({
          cartId,
          productId: prodId,
          quantity: prodQuant,
        })
      ).unwrap();

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      updateTotalProducts();
      SuccessToast("The product was added");
    } catch (error) {
      ErrorToast(error.messge);
    }
  };

  return (
    <div
      className={clsx(css.addProductWrapper, isCartPage && css.cartAddProdWrpr)}
    >
      <svg
        className={css.addIcon}
        onClick={() => {
          if (!isCartPage) {
            setProdQuant(prodQuant + 1);
          } else {
            handlePlusClick();
          }
        }}
      >
        <use href={`${sprite}#icon-plus`} />
      </svg>
      <span className={css.prodNumber}>
        {isCartPage ? itemQuant : prodQuant}
      </span>
      <svg
        className={clsx(css.addIcon, prodQuant === 1 && css.disabled)}
        onClick={() => {
          if (prodQuant > 1) {
            setProdQuant(prodQuant - 1);
          }
        }}
      >
        <use href={`${sprite}#icon-minus`} />
      </svg>
    </div>
  );
};

export default AddProductButton;
