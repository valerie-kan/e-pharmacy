import { useState } from "react";
// import { useDispatch } from "react-redux";

import css from "./MedicinePage.module.css";

// import { getProducts } from "../../redux/products/operations";

import FitlersList from "../../components/FitlersList/FitlersList";
import ProductsList from "../../components/ProductsList/ProductsList";

// import { ErrorToast } from "../../utils/errorToast";

const MedicinePage = () => {
  // const dispatch = useDispatch();
  const [perPage, setPerPage] = useState(getPerPage());

  function getPerPage() {
    const width = window.innerWidth;

    if (width < 1440) {
      return 9;
    } else {
      return 12;
    }
  }

  // const applyFilters = async (filters) => {
  //   try {
  //     await dispatch(getProducts({ perPage, filters })).unwrap();
  //   } catch (error) {
  //     ErrorToast(error.message);
  //   }
  // };

  return (
    <section className={css.sectionWrapper}>
      <h3 className={css.sectionTtl}>Medicine</h3>
      <FitlersList perPage={perPage} /*applyFilters={applyFilters}*/ />
      <ProductsList
        perPage={perPage}
        setPerPage={setPerPage}
        getPerPage={getPerPage}
      />
    </section>
  );
};

export default MedicinePage;
