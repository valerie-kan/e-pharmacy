import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";

import { getNearest } from "../../redux/stores/operations";
import {
  selectNearestStores,
  selectisLoading,
} from "../../redux/stores/selectors";

import css from "./NearestStores.module.css";

import StoreItem from "../StoreItem/StoreItem";
import Loader from "../Loader";

const NearestStores = () => {
  const dispatch = useDispatch();
  const nearestStores = useSelector(selectNearestStores);
  const isLoading = useSelector(selectisLoading);
  const [storesWithStatus, setStoresWithStatus] = useState([]);

  useEffect(() => {
    try {
      dispatch(getNearest()).unwrap();
    } catch (error) {
      console.log(error.message);
    }
  }, [dispatch]);

  const randomStores = useMemo(() => {
    return [...nearestStores].sort(() => Math.random() - 0.5).slice(0, 6);
  }, [nearestStores]);

  useEffect(() => {
    const stores = randomStores.map((store) => ({
      ...store,
      status: Math.random() < 0.5 ? "Open" : "Close",
    }));
    setStoresWithStatus(stores);
  }, [randomStores]);

  return (
    <section>
      <h2 className={css.sectionTtl}>Your Nearest Medicine Store</h2>
      <p className={css.sectionText}>
        Search for Medicine, Filter by your location
      </p>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.nearestStoresList}>
          {storesWithStatus.map((store) => (
            <StoreItem key={store._id} store={store} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default NearestStores;
