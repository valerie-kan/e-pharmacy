import css from "./MedicinePage.module.css";

import FitlersList from "../../components/FitlersList/FitlersList";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useState } from "react";

const MedicinePage = () => {
  const [perPage, setPerPage] = useState(getPerPage());

  function getPerPage() {
    const width = window.innerWidth;

    if (width < 1440) {
      return 9;
    } else {
      return 12;
    }
  }
  return (
    <section className={css.sectionWrapper}>
      <h3 className={css.sectionTtl}>Medicine</h3>
      <FitlersList perPage={perPage} />
      <ProductsList
        perPage={perPage}
        setPerPage={setPerPage}
        getPerPage={getPerPage}
      />
    </section>
  );
};

export default MedicinePage;
