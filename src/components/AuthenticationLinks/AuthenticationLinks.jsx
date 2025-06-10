import { Link } from "react-router-dom";
import clsx from "clsx";

import css from "./AuthenticationLinks.module.css";

const AuthenticationLinks = ({ isLoggedIn, isHomePage }) => {
  return (
    <div className={css.authLinks}>
      {!isLoggedIn ? (
        <>
          <Link
            className={clsx(css.registerLink, !isHomePage && css.greenLink)}
            to="/register"
          >
            Register
          </Link>
          <Link
            className={clsx(css.loginLink, !isHomePage && css.greenLogLink)}
            to="/login"
          >
            Login
          </Link>
        </>
      ) : (
        <button className={clsx(css.logoutBtn, !isHomePage && css.greenLink)}>
          Log out
        </button>
      )}
    </div>
  );
};

export default AuthenticationLinks;
