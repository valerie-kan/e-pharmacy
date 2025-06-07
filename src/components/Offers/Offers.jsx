import css from "./Offers.module.css";

const listOfOffers = [
  { number: 1, ttl: "Huge Sale", discount: "70%", link: "Shop now" },
  { number: 2, ttl: "Secure delivery", discount: "100%", link: "Read more" },
  { number: 3, ttl: "Off", discount: "35%", link: "Shop now" },
];

const Offers = () => {
  return (
    <section>
      <ul className={css.offersList}>
        {listOfOffers.map((offer) => (
          <li className={css.offerItem} key={offer.number}>
            <div className={css.firstRow}>
              <div className={css.numberWrapper}>{offer.number}</div>
              <p className={css.offerTtl}>{offer.ttl}</p>
            </div>
            <div className={css.secondRow}>
              <p className={css.discount}>{offer.discount}</p>
              <a className={css.link}>{offer.link}</a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Offers;
