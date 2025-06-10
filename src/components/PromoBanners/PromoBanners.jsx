import css from "./PromoBanners.module.css";

const promoBannersList = [
  { number: 1, ttl: "Huge Sale", discount: "70%", link: "Shop now" },
  { number: 2, ttl: "Secure delivery", discount: "100%", link: "Read more" },
  { number: 3, ttl: "Off", discount: "35%", link: "Shop now" },
];

const PromoBanners = () => {
  return (
    <section>
      <ul className={css.promoList}>
        {promoBannersList.map((banner) => {
          const href = banner.link === "Read more" ? "#features" : "/medicine";
          return (
            <li className={css.promoItem} key={banner.number}>
              <div className={css.firstRow}>
                <div className={css.numberWrapper}>{banner.number}</div>
                <p className={css.promoTtl}>{banner.ttl}</p>
              </div>
              <div className={css.secondRow}>
                <p className={css.discount}>{banner.discount}</p>
                <a href={href} className={css.link}>
                  {banner.link}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PromoBanners;
