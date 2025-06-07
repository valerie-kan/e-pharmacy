import css from "./NearestStore.module.css";

import StoreItem from "../StoreItem/StoreItem";

const NearestStore = () => {
  return (
    <section>
      <h2 className={css.sectionTtl}>Your Nearest Medicine Store</h2>
      <p className={css.sectionText}>
        Search for Medicine, Filter by your location
      </p>
      <ul className={css.nearestStoresList}>
        <StoreItem />
      </ul>
    </section>
  );
};

export default NearestStore;
