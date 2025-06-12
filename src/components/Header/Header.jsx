import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import css from "./Header.module.css";

import logo from "../../assets/images/logo-desktop-green.png";

import sprite from "../../assets/icons/sprite.svg";

import useMediaQuery from "../../hooks/useMediaQuery";

import { selectIsLoggedIn, selectUserName } from "../../redux/auth/selectors";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import UserHeader from "../UserHeader/UserHeader";
import AuthenticationLinks from "../AuthenticationLinks/AuthenticationLinks";
import NavigationLinks from "../NavigationLinks/NavigationLinks";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const username = useSelector(selectUserName);

  const isHomePage = location.pathname === "/";

  const isDesktop = useMediaQuery("(min-width: 1440px)");

  return (
    <div className={clsx(css.headerWrapper, isHomePage && css.headerGreen)}>
      <Link className={css.logoLink} to="/">
        <img className={css.logoImg} src={logo} alt="Logo image" />
        <span className={css.logoSpan}>E-Pharmacy</span>
      </Link>
      {isDesktop && <NavigationLinks />}
      <div className={css.userPartWrpr}>
        {isLoggedIn && (
          <UserHeader isHomePage={isHomePage} username={username} />
        )}
        {isDesktop && (
          <AuthenticationLinks
            isLoggedIn={isLoggedIn}
            isHomePage={isHomePage}
          />
        )}
        <svg
          className={clsx(css.burgerIcon, isHomePage && css.burgerWhite)}
          onClick={() => setModalOpen(true)}
        >
          <use href={`${sprite}#icon-burger-menu`} />
        </svg>
      </div>
      {modalOpen && (
        <BurgerMenu
          setisOpen={setModalOpen}
          burgerOpen={modalOpen}
          isLoggedIn={isLoggedIn}
        />
      )}
    </div>
  );
};

export default Header;
