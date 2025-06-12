import clsx from "clsx";

import css from "./UserHeader.module.css";

import sprite from "../../assets/icons/sprite.svg";
import { useState } from "react";

const UserHeader = ({ isHomePage, username }) => {
  const getInitial = () => {
    return username ? username[0].toUpperCase() : "N";
  };
  const [productQuant, setProductQuant] = useState(0);
  return (
    <div className={css.userHeaderWrpr}>
      <div className={css.cartWrapper}>
        <svg className={css.cartIcon}>
          <use href={`${sprite}#icon-shopping-cart`} />
        </svg>
        <div className={css.prodQuant}>{productQuant}</div>
      </div>
      <div className={clsx(css.initialWrapper, isHomePage && css.whiteBgr)}>
        {getInitial()}
      </div>
    </div>
  );
};

export default UserHeader;
