import { useForm } from "react-hook-form";

import css from "./FitlersList.module.css";

import SelectInput from "../SelectInput/SelectInput";

import sprite from "../../assets/icons/sprite.svg";

const FitlersList = ({ applyFilters }) => {
  const { register, control, getValues, reset } = useForm();

  const handleFilterClick = async () => {
    const filters = getValues();
    applyFilters(filters);
    reset();
  };

  return (
    <form className={css.filtersWrapper} onSubmit={(e) => e.preventDefault()}>
      <SelectInput control={control} />
      <div className={css.inputWrapper}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search medicine"
          {...register("search")}
        />
        <svg className={css.searchIcon}>
          <use href={`${sprite}#icon-search`} />
        </svg>
      </div>
      <button
        className={css.filterBtn}
        type="submit"
        onClick={handleFilterClick}
      >
        <svg className={css.filterIcon}>
          <use href={`${sprite}#icon-filter`} />
        </svg>
        Filter
      </button>
    </form>
  );
};

export default FitlersList;
