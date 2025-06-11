import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Controller } from "react-hook-form";

import css from "./SelectInput.module.css";

import sprite from "../../assets/icons/sprite.svg";

const filtersList = [
  "Medicine",
  "Heart",
  "Head",
  "Hand",
  "Leg",
  "Dental Care",
  "Skin Care",
];

const SelectInput = ({ control }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (ev) => {
      if (wrapperRef.current && !wrapperRef.current.contains(ev.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Controller
      name="category"
      control={control}
      defaultValue=""
      render={({ field }) => {
        const selectedItem = field.value;
        return (
          <div className={css.selectWrapper} ref={wrapperRef}>
            <div className={css.customSelect} onClick={toggleDropdown}>
              <div className={css.selected}>
                {selectedItem || "Product category"}
              </div>
              <svg className={css.arrowIcon}>
                <use href={`${sprite}#icon-arrow-${isOpen ? "up" : "down"}`} />
              </svg>
            </div>
            {isOpen && (
              <ul className={css.dropdown}>
                {filtersList.map((item) => (
                  <li
                    key={item}
                    className={clsx(
                      css.option,
                      selectedItem === item && css.selected
                    )}
                    onClick={() => {
                      field.onChange(item);
                      setIsOpen(false);
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      }}
    />
  );
};

export default SelectInput;
