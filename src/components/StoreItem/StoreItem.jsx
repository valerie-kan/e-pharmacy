import css from "./StoreItem.module.css";

import sprite from "../../assets/icons/sprite.svg";

const StoreItem = () => {
  return (
    <li className={css.nearestItem}>
      <svg className={css.blocksIcon}>
        <use href={`${sprite}#icon-block-elements`} />
      </svg>
    </li>
  );
};

export default StoreItem;
