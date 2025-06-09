import { Link, NavLink } from "react-router-dom";

import css from "./Footer.module.css";

import sprite from "../../assets/icons/sprite.svg";

const Footer = () => {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className={css.sectionWrapper}>
      <div className={css.mainInfo}>
        <div className={css.linkAndTextWrapper}>
          <Link className={css.logoLink} to="/">
            <img
              className={css.logoImg}
              src="var(--image-logo-desktop-white)"
              alt="Logo image"
            />
            <span className={css.logoSpan}>E-Pharmacy</span>
          </Link>
          <p className={css.footerText}>
            Get the medicine to help you feel better, get back to your active
            life, and enjoy every moment.
          </p>
        </div>
        <div className={css.navAndSocialWrapper}>
          <ul className={css.navLinksList}>
            <li>
              <NavLink
                to="/"
                className={css.navLink}
                onClick={() => handleLinkClick()}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/medicine-store"
                className={css.navLink}
                onClick={() => handleLinkClick()}
              >
                Medicine store
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/medicine"
                className={css.navLink}
                onClick={() => handleLinkClick()}
              >
                Medicine
              </NavLink>
            </li>
          </ul>
          <div className={css.socialLinksList}>
            <a
              className={css.socialLink}
              href="https://www.facebook.com/goITclub/ "
              target="_blank"
            >
              <svg className={css.linkIcon}>
                <use href={`${sprite}#icon-fb`} />
              </svg>
            </a>
            <a
              className={css.socialLink}
              href="https://www.instagram.com/goitclub/"
              target="_blank"
            >
              <svg className={css.linkIcon}>
                <use href={`${sprite}#icon-instagram`} />
              </svg>
            </a>
            <a
              className={css.socialLink}
              href="https://www.youtube.com/c/GoIT"
              target="_blank"
            >
              <svg className={css.linkIcon}>
                <use href={`${sprite}#icon-youTube`} />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className={css.footerBottom}>
        <p className={css.bottomText}>
          &copy; E-Pharmacy 2023. All Rights Reserved
        </p>
        <a className={css.bottomText}>Privacy Policy</a>
        <a className={css.bottomText}>Terms & Conditions</a>
      </div>
    </section>
  );
};

export default Footer;
