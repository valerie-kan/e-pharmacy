import { Link } from "react-router-dom";
import css from "./AddMedicine.module.css";

const AddMedicine = () => {
  return (
    <section className={css.sectionWrapper}>
      <div className={css.sectionInfoWrapper}>
        <h2 className={css.sectionTtl}>
          Add the medicines you need online now
        </h2>
        <p className={css.sectionText}>
          Enjoy the convenience of having your prescriptions filled from home by
          connecting with your community pharmacy through our online platform.
        </p>
        <button className={css.sectionBtn} type="button">
          <Link className={css.buyLink} to="/medicine-store">
            Buy medicine
          </Link>
        </button>
      </div>
      <img
        className={css.image}
        src="var(--image-add-medicine-desktop)"
        alt="Medicine image"
      />
    </section>
  );
};

export default AddMedicine;
