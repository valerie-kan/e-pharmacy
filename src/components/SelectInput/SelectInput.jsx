import { useEffect } from "react";
import clsx from "clsx";

import css from "./SelectInput.module.css";

import sprite from "../../assets/icons/sprite.svg";

const SelectInput = ({
  isOpen,
  setIsOpen,
  selectedItem,
  setSelectedItem,
  selectName,
  filtersList,
}) => {
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (item) => {
    setSelectedItem(item);
    // onChange?.(item);
    setIsOpen(false);
  };

  return (
    <div className={css.selectWrapper}>
      <div className={css.customSelect} onClick={toggleDropdown}>
        <div className={css.selected}>
          {selectName ? `${selectedItem}` : "Product category"}
        </div>
        <svg className={clsx(css.arrow, isOpen && css.open)}>
          <use href={`${sprite}#icon-arrow-down`} />
        </svg>
      </div>
      {isOpen && (
        <ul className={css.dropdown}>
          {filtersList.map((item) => (
            <li
              className={clsx(
                css.option,
                selectedItem === item && css.selected
              )}
              key={item}
              onClick={() => handleOptionClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;
