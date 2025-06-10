import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import css from "./MedicineStorePage.module.css";

import { selectAllStores, selectisLoading } from "../../redux/stores/selectors";
import { getAllStores } from "../../redux/stores/operations";

import useMediaQuery from "../../hooks/useMediaQuery";

import { ErrorToast } from "../../utils/errorToast";

import StoreItem from "../../components/StoreItem/StoreItem";
import Loader from "../../components/Loader";

const MedicineStorePage = () => {
  const dispatch = useDispatch();
  const allStores = useSelector(selectAllStores);
  const isLoading = useSelector(selectisLoading);
  const [storesWithStatus, setStoresWithStatus] = useState([]);
  const location = useLocation();

  const isMedicineStorePage = location.pathname === "/medicine-store";

  const isDesktop = useMediaQuery("(min-width: 1440px)");

  useEffect(() => {
    try {
      dispatch(getAllStores()).unwrap();
    } catch (error) {
      ErrorToast(error.message);
    }
  }, [dispatch]);

  const randomStores = useMemo(() => {
    if (isDesktop) {
      return [...allStores].sort(() => Math.random() - 0.5).slice(0, 9);
    } else {
      return [...allStores].sort(() => Math.random() - 0.5).slice(0, 8);
    }
  }, [allStores, isDesktop]);

  useEffect(() => {
    const stores = randomStores.map((store) => ({
      ...store,
      status: Math.random() < 0.5 ? "Open" : "Close",
    }));
    setStoresWithStatus(stores);
  }, [randomStores]);

  return (
    <section className={css.sectionWrapper}>
      <h3 className={css.sectionTtl}>Medicine Store</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={css.storesList}>
          {storesWithStatus.map((store) => (
            <StoreItem
              key={store._id}
              store={store}
              isStorePage={isMedicineStorePage}
            >
              <Link
                className={css.storeBtn}
                to="/medicine-store"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                Visit Store
              </Link>
            </StoreItem>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MedicineStorePage;
