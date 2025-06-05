import { Link } from "react-router-dom";
import { useState } from "react";

import css from "./Header.module.css";

import sprite from "../../assets/icons/sprite.svg";

import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={css.headerWrapper}>
      <Link to="/">
        <img
          className={css.logoImg}
          src="var(--image-logo-desktop2x)"
          alt="Logo image"
        />
      </Link>
      <svg className={css.burgerIcon} onClick={() => setModalOpen(true)}>
        <use href={`${sprite}#icon-burger-menu`} />
      </svg>
      {modalOpen && (
        <BurgerMenu setisOpen={setModalOpen} burgerOpen={modalOpen} />
      )}
    </div>
  );
};

export default Header;
