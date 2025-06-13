import css from "./ProductReviews.module.css";

import sprite from "../../assets/icons/sprite.svg";
import { photoList } from "../../assets/images/index";

import useMediaQuery from "../../hooks/useMediaQuery";

import Loader from "../Loader";

const ProductReviews = ({ reviews, isLoading }) => {
  const isNotMobile = useMediaQuery("(min-width: 768px)");

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.reviewsList}>
          {reviews.map((review) => {
            const photo = photoList[review.name];
            return (
              <li className={css.reviewItem} key={review._id}>
                <div className={css.userInfoWrpr}>
                  <div className={css.imgWrapper}>
                    <img
                      className={css.image}
                      src={photo.src}
                      srcSet={photo.srcSet}
                      alt="Person's photo"
                    />
                  </div>
                  <div>
                    <p className={css.personName}>{review.name}</p>
                    <p className={css.status}>2 days ago</p>
                  </div>
                </div>
                <p className={css.testimonial}>{review.testimonial}</p>
                <p className={css.rating}>
                  {isNotMobile ? (
                    <img
                      className={css.starsImg}
                      src="../../assets/images/stars.png"
                      alt="Stars"
                    />
                  ) : (
                    <svg width={16} height={16}>
                      <use href={`${sprite}#icon-star`} />
                    </svg>
                  )}
                  4
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ProductReviews;
