import { Link } from "react-router-dom";
import clsx from "clsx";

import css from "./AuthTemplate.module.css";

import sprite from "../../assets/icons/sprite.svg";

const AuthTemplate = ({ children, isRegisterPage }) => {
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
      <div
        className={clsx(
          css.contentWrapper,
          isRegisterPage && css.registerContentWrpr
        )}
      >
        <h2 className={css.authTtl}>
          Your medication, delivered Say goodbye to all{" "}
          <span className={css.ttlSpan}>your healthcare</span> worries with us
        </h2>
        {children}
      </div>
      <svg className={css.blocksIcon}>
        <use href={`${sprite}#icon-block-elements`} />
      </svg>
    </section>
  );
};

export default AuthTemplate;
