import clsx from "clsx";

import css from "./StoreItem.module.css";

import sprite from "../../assets/icons/sprite.svg";

const StoreItem = ({ store, children, isStorePage }) => {
  const isOpen = Boolean(store.status === "Open");
  return (
    <li className={clsx(css.storeItem, isStorePage && css.storePageItem)}>
      <p className={css.storeName}>{store.name}</p>
      <div className={css.locationWrapper}>
        <svg className={css.mapIcon}>
          <use href={`${sprite}#icon-map-pin`} />
        </svg>
        <p className={css.address}>{store.address}</p>
      </div>
      <div className={css.phoneWrapper}>
        <svg className={css.phoneIcon}>
          <use href={`${sprite}#icon-phone`} />
        </svg>
        <p className={css.phoneNumber}>{store.phone}</p>
      </div>
      {children}
      <div className={clsx(css.addInfo, isStorePage && css.storePageAddInfo)}>
        <div className={css.ratingWrapper}>
          <svg className={css.starIcon}>
            <use href={`${sprite}#icon-star`} />
          </svg>
          <p className={css.rating}>{store.rating}</p>
        </div>
        <div className={clsx(css.status, isOpen && css.openStatus)}>
          {store.status}
        </div>
      </div>
      <svg
        className={clsx(css.blocksIcon, isStorePage && css.storePageBlocksIcon)}
      >
        <use href={`${sprite}#icon-block-elements`} />
      </svg>
    </li>
  );
};

export default StoreItem;
