import css from "./MedicinePage.module.css";

import FitlersList from "../../FitlersList/FitlersList";
import ProductsList from "../../components/ProductsList/ProductsList";

const MedicinePage = () => {
  return (
    <section className={css.sectionWrapper}>
      <h3 className={css.sectionTtl}>Medicine</h3>
      <FitlersList />
      <ProductsList />
    </section>
  );
};

export default MedicinePage;
