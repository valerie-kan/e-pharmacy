import FitlersList from "../../FitlersList/FitlersList";
import css from "./MedicinePage.module.css";

const MedicinePage = () => {
  return (
    <section className={css.sectionWrapper}>
      <h3 className={css.sectionTtl}>Medicine</h3>
      <FitlersList />
    </section>
  );
};

export default MedicinePage;
