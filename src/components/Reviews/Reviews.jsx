import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import css from "./Reviews.module.css";

import { photoList } from "../../assets/images/index";

import { selectReviews, selectisLoading } from "../../redux/reviews/selectors";
import { getReviews } from "../../redux/reviews/operations";

import Loader from "../Loader";

const Reviews = () => {
  const dispatch = useDispatch();
  const reviews = useSelector(selectReviews);
  const isLoading = useSelector(selectisLoading);

  useEffect(() => {
    try {
      dispatch(getReviews()).unwrap();
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <section className={css.sectionWrapper}>
      <h2 className={css.sectionTtl}>Reviews</h2>
      <p className={css.sectionText}>
        Search for Medicine, Filter by your location
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={css.scrollWrapper}>
          <div className={css.reviewsWrapper}>
            <ul className={css.reviewsList}>
              {reviews.map((review) => {
                const photo = photoList[review.name];
                return (
                  <li className={css.reviewItem} key={review._id}>
                    <div className={css.imgWrapper}>
                      <img
                        className={css.image}
                        src={photo.src}
                        srcSet={photo.srcSet}
                        alt="Person's photo"
                      />
                    </div>
                    <p className={css.personName}>{review.name}</p>
                    <p className={css.testimonial}>{review.testimonial}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reviews;
