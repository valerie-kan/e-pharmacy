import css from "./FitlersList.module.css";

import SelectInput from "../components/SelectInput/SelectInput";

import sprite from "../assets/icons/sprite.svg";

const FitlersList = () => {
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
      <button className={css.filterBtn} type="submit">
        <svg className={css.filterIcon}>
          <use href={`${sprite}#icon-filter`} />
        </svg>
        Filter
      </button>
    </div>
  );
};

export default FitlersList;
