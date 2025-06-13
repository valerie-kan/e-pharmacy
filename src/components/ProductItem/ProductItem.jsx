import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";

import css from "./ProductItem.module.css";

import { addCart, updateCart } from "../../redux/cart/operations";

import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";

import AddProductButton from "../AddProductButton/AddProductButton";

const ProductItem = ({ product, onDetailsClick, isLoggedIn }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [prodQuant, setProdQuant] = useState(1);

  const isMedicinePage = location.pathname === "/medicine";

  const handleAddToCart = async (id, quantity = 1) => {
    try {
      if (isLoggedIn) {
        const savedCart = JSON.parse(localStorage.getItem("cart"));

        if (!savedCart) {
          const newCart = await dispatch(
            addCart({ productId: id, quantity })
          ).unwrap();

          localStorage.setItem("cart", JSON.stringify(newCart));
          SuccessToast("The product was added");
        } else {
          const updatedCart = await dispatch(
            updateCart({ cartId: savedCart._id, productId: id, quantity })
          ).unwrap();

          localStorage.setItem("cart", JSON.stringify(updatedCart));
          SuccessToast("The product was added");
        }
      } else {
        ErrorToast("To add a product please log in!");
      }
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <li
      className={clsx(css.prodItem, !isMedicinePage && css.detailsProdItem)}
      key={product._id}
    >
      <div
        className={clsx(
          css.imgWrapper,
          !isMedicinePage && css.detailsImgWRapper
        )}
      >
        <img className={css.image} src={product.photo} alt="Product image" />
      </div>
      <div
        className={clsx(
          css.productInfoWrapper,
          !isMedicinePage && css.detailsProdInfoWrpr
        )}
      >
        <div className={css.firstRowWrapper}>
          <p
            className={clsx(
              css.productName,
              !isMedicinePage && css.detailsProdName
            )}
          >
            {product.name}
          </p>
          <span
            className={clsx(css.price, !isMedicinePage && css.detailsPrice)}
          >
            ৳ {product.price}
          </span>
        </div>
        <p className={css.supplier}>{product.suppliers}</p>
        <div
          className={clsx(
            css.btnsWrapper,
            !isMedicinePage && css.detailsBtnsWrapper
          )}
        >
          {!isMedicinePage && (
            <AddProductButton
              prodQuant={prodQuant}
              setProdQuant={setProdQuant}
            />
          )}
          <button
            className={clsx(
              css.productBtn,
              !isMedicinePage && css.detailsProdBtn
            )}
            type="button"
            onClick={() => handleAddToCart(product._id, prodQuant)}
          >
            Add to cart
          </button>
          {isMedicinePage && (
            <Link
              className={css.productLink}
              onClick={() => onDetailsClick(product._id)}
            >
              Details
            </Link>
          )}
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
