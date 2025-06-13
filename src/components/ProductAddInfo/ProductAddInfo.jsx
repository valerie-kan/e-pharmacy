import clsx from "clsx";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import css from "./ProductAddInfo.module.css";

import { getReviews } from "../../redux/reviews/operations";
import { selectReviews, selectisLoading } from "../../redux/reviews/selectors";

import { ErrorToast } from "../../utils/errorToast";

import ProductDescription from "../ProductDescription/ProductDescription";
import ProductReviews from "../ProductReviews/ProductReviews";

const ProductAddInfo = () => {
  const [activeBtn, setActiveBtn] = useState("description");
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(selectisLoading);

  const onReviewsClick = () => {
    setActiveBtn("reviews");
    try {
      dispatch(getReviews()).unwrap();
    } catch (error) {
      ErrorToast(error.message);
    }
  };

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
          onClick={onReviewsClick}
        >
          Reviews
        </button>
      </div>
      {activeBtn === "description" ? (
        <ProductDescription />
      ) : (
        <ProductReviews reviews={reviews} isLoading={isLoading} />
      )}
    </div>
  );
};

export default ProductAddInfo;
