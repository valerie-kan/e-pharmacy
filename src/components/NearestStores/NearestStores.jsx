import { useDispatch, useSelector } from "react-redux";

import { getNearest } from "../../redux/stores/operations";

import css from "./NearestStores.module.css";

import StoreItem from "../StoreItem/StoreItem";
import { useEffect } from "react";
import { selectNearestStores } from "../../redux/stores/selectors";

const NearestStores = () => {
  const dispatch = useDispatch();
  const nearestStores = useSelector(selectNearestStores);
  console.log(nearestStores);

  useEffect(() => {
    try {
      dispatch(getNearest()).unwrap();
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  return (
    <section>
      <h2 className={css.sectionTtl}>Your Nearest Medicine Store</h2>
      <p className={css.sectionText}>
        Search for Medicine, Filter by your location
      </p>
      <ul className={css.nearestStoresList}>
        {nearestStores.map((store) => (
          <StoreItem key={store._id} store={store} />
        ))}
      </ul>
    </section>
  );
};

export default NearestStores;
