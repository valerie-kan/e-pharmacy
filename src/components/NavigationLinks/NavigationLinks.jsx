import { NavLink } from "react-router";

import clsx from "clsx";

import css from "./NavigationLinks.module.css";

const NavigationLinks = ({ setisOpen, modalOpen }) => {
  const linkCls = ({ isActive }) => clsx(css.link, isActive && css.active);

  const links = [
    { to: "/", label: "Home" },
    { to: "/medicine-store", label: "Medicine store" },
    { to: "/medicine", label: "Medicine" },
  ];

  return (
    <div className={css.navLinksWrapper}>
      {links.map((link) => (
        <div className={css.linkWrapper} key={link.to}>
          <NavLink
            to={link.to}
            className={linkCls}
            onClick={() => {
              if (modalOpen) {
                setisOpen(false);
              }
            }}
          >
            {link.label}
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default NavigationLinks;
