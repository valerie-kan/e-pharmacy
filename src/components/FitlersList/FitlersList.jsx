import css from "./FitlersList.module.css";

import SelectInput from "../SelectInput/SelectInput";

import sprite from "../../assets/icons/sprite.svg";
import { useDispatch } from "react-redux";
import { getProducts } from "../../redux/products/operations";

const FitlersList = ({ perPage }) => {
  const dispatch = useDispatch();

  // const handleFilterClick = async (filters) => {
  //   try {
  //     await dispatch(getProducts({ perPage, filters })).unwrap();
  //     reset();
  //   } catch (error) {
  //     ErrorToast(error.message);
  //   }
  // };

  return (
    <div className={css.filtersWrapper}>
      <SelectInput />
      <div className={css.inputWrapper}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search medicine"
        />
        <svg className={css.searchIcon}>
          <use href={`${sprite}#icon-search`} />
        </svg>
      </div>
      <button
        className={css.filterBtn}
        type="submit"
        // onClick={handleFilterClick}
      >
        <svg className={css.filterIcon}>
          <use href={`${sprite}#icon-filter`} />
        </svg>
        Filter
      </button>
    </div>
  );
};

export default FitlersList;
