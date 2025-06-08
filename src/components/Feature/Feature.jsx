import css from "./Feature.module.css";

import sprite from "../../assets/icons/sprite.svg";

const featureList = [
  "Take user orders form online",
  "Create your shop profile",
  "Manage your store",
  "Get more orders",
  "Storage shed",
];

const Feature = () => {
  return (
    <ul className={css.featureWrapper}>
      {featureList.map((feature) => (
        <div className={css.featureItem} key={feature}>
          <svg className={css.itemIcon}>
            <use href={`${sprite}#icon-lightning`} />
          </svg>
          <p className={css.featureText}>{feature}</p>
        </div>
      ))}
    </ul>
  );
};

export default Feature;
