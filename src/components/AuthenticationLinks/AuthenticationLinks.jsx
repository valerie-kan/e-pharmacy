import { Link } from "react-router-dom";

import css from "./AuthenticationLinks.module.css";

const AuthenticationLinks = () => {
  return (
    <div className={css.authLinks}>
      <Link className={css.registerLink} to="/register">
        Register
      </Link>
      <Link className={css.loginLink} to="/login">
        Login
      </Link>
      <button className={css.logoutBtn}>Log out</button>
    </div>
  );
};

export default AuthenticationLinks;
