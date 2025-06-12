import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import clsx from "clsx";

import css from "./Header.module.css";

import logo from "../../assets/images/logo-desktop-green.png";

import sprite from "../../assets/icons/sprite.svg";

import useMediaQuery from "../../hooks/useMediaQuery";

import { selectIsLoggedIn, selectToken } from "../../redux/auth/selectors";
import { setToken } from "../../redux/auth/operations";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import UserHeader from "../UserHeader/UserHeader";
import AuthenticationLinks from "../AuthenticationLinks/AuthenticationLinks";
import NavigationLinks from "../NavigationLinks/NavigationLinks";

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      setToken(token);
    }
  }, [token]);

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
        {isLoggedIn && <UserHeader isHomePage={isHomePage} />}
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
