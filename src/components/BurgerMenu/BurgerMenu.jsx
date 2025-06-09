import css from "./BurgerMenu.module.css";

import sprite from "../../assets/icons/sprite.svg";

import NavigationLinks from "../NavigationLinks/NavigationLinks";
import AuthenticationLinks from "../AuthenticationLinks/AuthenticationLinks";
import { useEffect } from "react";

const BurgerMenu = ({ modalOpen, setisOpen }) => {
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOpen]);

  useEffect(() => {
    const onKeyDown = (evt) => {
      if (evt.code === "Escape") {
        setisOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [setisOpen]);

  const onBackdropClick = (evt) => {
    if (evt.target === evt.currentTarget) {
      setisOpen(false);
    }
  };
  return (
    <div className={css.overlay} onClick={onBackdropClick}>
      <div className={css.modal}>
        <svg className={css.closeIcon} onClick={() => setisOpen(false)}>
          <use href={`${sprite}#icon-x`} />
        </svg>
        <NavigationLinks setisOpen={setisOpen} />
        <AuthenticationLinks />
      </div>
    </div>
  );
};

export default BurgerMenu;
