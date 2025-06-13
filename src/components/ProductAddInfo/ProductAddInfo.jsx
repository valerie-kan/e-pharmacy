import clsx from "clsx";
import { useState } from "react";

import css from "./ProductAddInfo.module.css";

import ProductDescription from "../ProductDescription/ProductDescription";

const ProductAddInfo = () => {
  const [activeBtn, setActiveBtn] = useState("description");

  return (
    <div className={css.addInfoWrapper}>
      <div className={css.btnsWrapper}>
        <button
          className={clsx(
            css.addInfoBtn,
            activeBtn === "description" && css.active
          )}
          type="button"
          onClick={() => setActiveBtn("description")}
        >
          Description
        </button>
        <button
          className={clsx(
            css.addInfoBtn,
            activeBtn === "reviews" && css.active
          )}
          type="button"
          onClick={() => setActiveBtn("reviews")}
        >
          Reviews
        </button>
      </div>
      <ProductDescription activeBtn={activeBtn} />
    </div>
  );
};

export default ProductAddInfo;
