import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import clsx from "clsx";

import css from "./AuthenticationLinks.module.css";

import { logout } from "../../redux/auth/operations";

import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";

const AuthenticationLinks = ({ isLoggedIn, isHomePage }) => {
  const dispatch = useDispatch();

  const handleLogoutClick = async () => {
    try {
      await dispatch(logout()).unwrap();
      SuccessToast("You have been logged out");
    } catch (e) {
      ErrorToast(e.message);
    }
  };

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
        <button
          className={clsx(css.logoutBtn, !isHomePage && css.greenLink)}
          onClick={handleLogoutClick}
        >
          Log out
        </button>
      )}
    </div>
  );
};

export default AuthenticationLinks;
