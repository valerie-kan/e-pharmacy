import clsx from "clsx";

import css from "./UserHeader.module.css";

import sprite from "../../assets/icons/sprite.svg";

import { useCart } from "../../context/CartContext";

const UserHeader = ({ isHomePage, username, handleCartClick }) => {
  const { totalProducts } = useCart();

  const getInitial = () => {
    return username ? username[0].toUpperCase() : "N";
  };

  return (
    <div className={css.userHeaderWrpr}>
      <div className={css.cartWrapper}>
        <svg className={css.cartIcon} onClick={handleCartClick}>
          <use href={`${sprite}#icon-shopping-cart`} />
        </svg>
        <div className={css.prodQuant}>{totalProducts}</div>
      </div>
      <div className={clsx(css.initialWrapper, isHomePage && css.whiteBgr)}>
        {getInitial()}
      </div>
    </div>
  );
};

export default UserHeader;
