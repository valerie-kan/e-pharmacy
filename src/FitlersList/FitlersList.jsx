import clsx from "clsx";

import css from "./FitlersList.module.css";

import SelectInput from "../components/SelectInput/SelectInput";

import sprite from "../assets/icons/sprite.svg";

const FitlersList = () => {
  return (
    <div>
      <SelectInput />
      <div className={css.inputWrapper}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search medicine"
        />
        <svg className={clsx(css.searchIcon)}>
          <use href={`${sprite}#icon-search`} />
        </svg>
      </div>
    </div>
  );
};

export default FitlersList;
