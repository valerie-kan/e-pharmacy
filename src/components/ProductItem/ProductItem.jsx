import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import clsx from "clsx";

import css from "./ProductItem.module.css";

import sprite from "../../assets/icons/sprite.svg";

const ProductItem = ({ product, onDetailsClick }) => {
  const location = useLocation();
  const [prodQuant, setProdQuant] = useState(1);

  const isMedicinePage = location.pathname === "/medicine";

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
            <div className={css.addProductWrapper}>
              <svg
                className={css.addIcon}
                onClick={() => {
                  setProdQuant(prodQuant + 1);
                }}
              >
                <use href={`${sprite}#icon-plus`} />
              </svg>
              <span className={css.prodNumber}>{prodQuant}</span>
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
          )}
          <button
            className={clsx(
              css.productBtn,
              !isMedicinePage && css.detailsProdBtn
            )}
          >
            Add to cart
          </button>
          {isMedicinePage && (
            <Link
              className={css.productLink}
              to="/medicine-details"
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
