// import { useForm } from "react-hook-form";

import css from "./FitlersList.module.css";

import SelectInput from "../SelectInput/SelectInput";

import sprite from "../../assets/icons/sprite.svg";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getProducts } from "../../redux/products/operations";

import { ErrorToast } from "../../utils/errorToast";

const FitlersList = ({ perPage }) => {
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    name: "",
  });
  // const { register, control, getValues } = useForm({
  //   defaultValues: {
  //     category: "",
  //     search: "",
  //   },
  // });
  console.log("filters:", filters);
  console.log("selectedItem:", selectedItem);

  const handleFilterClick = async () => {
    // const filters = getValues();
    // console.log("filters:", filters);
    // applyFilters(filters);
    try {
      await dispatch(getProducts({ perPage, filters })).unwrap();
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    // <form className={css.filtersWrapper} onSubmit={(e) => e.preventDefault()}>
    // <SelectInput control={control} />
    <div className={css.filtersWrapper}>
      <SelectInput
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        setFilters={setFilters}
      />
      <div className={css.inputWrapper}>
        <input
          className={css.searchInput}
          type="text"
          placeholder="Search medicine"
          // {...register("search")}
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
    </div>
    // </form>
  );
};

export default FitlersList;
