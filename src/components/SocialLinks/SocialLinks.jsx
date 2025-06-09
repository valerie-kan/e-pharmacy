import css from "./SocialLinks.module.css";

import sprite from "../../assets/icons/sprite.svg";

const SocialLinks = () => {
  return (
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
  );
};

export default SocialLinks;
