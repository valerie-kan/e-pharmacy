import clsx from "clsx";
import { useEffect, useState } from "react";
// import { useController } from "react-hook-form";

import css from "./SelectInput.module.css";

import sprite from "../../assets/icons/sprite.svg";
import { nanoid } from "@reduxjs/toolkit";

const filtersList = [
  "Medicine",
  "Heart",
  "Head",
  "Hand",
  "Leg",
  "Dental Care",
  "Skin Care",
];

// const SelectInput = ({ control }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   useEffect(() => {
//     const handleClickOutside = () => {
//       setIsOpen(false);
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [setIsOpen]);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <Controller
//       name="category"
//       control={control}
//       defaultValue=""
//       render={({ field }) => {
//         console.log("Current category value:", field.value);
//         const selectedItem = field.value;
//         // console.log(selectedItem);
//         return (
//           <div className={css.selectWrapper}>
//             <div className={css.customSelect} onClick={toggleDropdown}>
//               <div className={css.selected}>
//                 {selectedItem || "Product category"}
//               </div>
//               <svg className={css.arrow}>
//                 <use href={`${sprite}#icon-arrow-${isOpen ? "up" : "down"}`} />
//               </svg>
//             </div>
//             {isOpen && (
//               <ul className={css.dropdown}>
//                 {filtersList.map((item) => (
//                   <li
//                     key={item}
//                     className={clsx(
//                       css.option,
//                       selectedItem === item && css.selected
//                     )}
//                     onClick={() => {
//                       field.onChange(item);
//                       setIsOpen(false);
//                     }}
//                   >
//                     {item}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         );
//       }}
//     />
//   );
// };

// export default SelectInput;

const SelectInput = ({
  /*control*/ setFilters,
  selectedItem,
  setSelectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // const { field: categoryField } = useController({
  //   name: "category",
  //   control,
  //   defaultValue: "",
  // });

  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onItemClick = (item) => {
    console.log("item", item);
    setSelectedItem(item);
    setFilters((prev) => ({
      ...prev,
      category: item,
    }));
    setIsOpen(false);
  };

  return (
    <div className={css.selectWrapper}>
      <div className={css.customSelect} onClick={toggleDropdown}>
        <div className={css.selected}>{selectedItem || "Product category"}</div>
        <svg className={css.arrowIcon}>
          <use href={`${sprite}#icon-arrow-${isOpen ? "up" : "down"}`} />
        </svg>
      </div>
      {isOpen && (
        <ul className={css.dropdown}>
          {filtersList.map((item) => {
            return (
              <li
                className={clsx(
                  css.selectItem,
                  selectedItem === item && css.selected
                )}
                key={nanoid()}
                onClick={() => {
                  // console.log("Clicked");
                  return onItemClick(item);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
    // <Controller
    //   name="category"
    //   control={control}
    //   defaultValue=""
    //   render={({ field }) => (
    //     <select {...field}>
    //       <option value="">Select category</option>
    //       <option value="Medicine">Medicine</option>
    //       <option value="Heart">Heart</option>
    //       <option value="Head">Head</option>
    //     </select>
    //   )}
    // />
    // <Controller
    //   name="category"
    //   control={control}
    //   defaultValue=""
    //   render={({ field }) => {
    //     console.log("Selected value:", field.value);
    //     const handleOptionClick = (item) => {
    //       field.onChange(item); // Оновлює значення у form state
    //       setIsOpen(false);
    //     };

    // return (
    // <div className={css.selectWrapper}>
    //   <div className={css.customSelect} onClick={toggleDropdown}>
    //     <div className={css.selected}>
    //       {categoryField.value || "Product category"}
    //     </div>
    //     <svg className={clsx(css.arrow, isOpen && css.open)}>
    //       <use href={`${sprite}#icon-arrow-${isOpen ? "up" : "down"}`} />
    //     </svg>
    //   </div>
    //   {isOpen && (
    //     <ul className={css.dropdown}>
    //       {filtersList.map((item) => (
    //         <li
    //           key={item}
    //           className={clsx(
    //             css.option,
    //             categoryField.value === item && css.selected
    //           )}
    //           onClick={() => handleOptionClick(item)}
    //         >
    //           {item}
    //         </li>
    //       ))}
    //     </ul>
    //   )}
    // </div>
  );
};
//     }
//     />
//   );
// };

export default SelectInput;
