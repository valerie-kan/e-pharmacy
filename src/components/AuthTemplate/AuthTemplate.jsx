import { Link } from "react-router-dom";

import css from "./AuthTemplate.module.css";

const AuthTemplate = () => {
  return (
    <section className={css.authWrapper}>
      <Link className={css.logoLink} to="/">
        <img
          className={css.logoImg}
          src="var(--image-logo-desktop-white)"
          alt="Logo image"
        />
        <span className={css.logoSpan}>E-Pharmacy</span>
      </Link>
      <h2 className={css.authTtl}>
        Your medication, delivered Say goodbye to all{" "}
        <span className={css.ttlSpan}>your healthcare</span> worries with us
      </h2>
    </section>
  );
};

export default AuthTemplate;
