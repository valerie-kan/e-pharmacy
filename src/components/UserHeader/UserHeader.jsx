import clsx from "clsx";

import css from "./UserHeader.module.css";

import sprite from "../../assets/icons/sprite.svg";

const UserHeader = ({ isHomePage }) => {
  return (
    <div className={css.userHeaderWrpr}>
      <div className={css.cartWrapper}>
        <svg className={css.cartIcon}>
          <use href={`${sprite}#icon-shopping-cart`} />
        </svg>
        <div className={css.prodQuant}></div>
      </div>
      <div
        className={clsx(css.initialWrapper, isHomePage && css.whiteBgr)}
      ></div>
    </div>
  );
};

export default UserHeader;
