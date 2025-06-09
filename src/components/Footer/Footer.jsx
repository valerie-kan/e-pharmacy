import { Link, NavLink } from "react-router-dom";

import css from "./Footer.module.css";

import SocialLinks from "../SocialLinks/SocialLinks";

const Footer = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/medicine-store", label: "Medicine store" },
    { to: "/medicine", label: "Medicine" },
  ];

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
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={css.navLink}
                  onClick={() => handleLinkClick()}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <SocialLinks />
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
