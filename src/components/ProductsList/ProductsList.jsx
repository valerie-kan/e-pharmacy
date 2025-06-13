import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import css from "./ProductsList.module.css";

import {
  selectIsLoading,
  selectProducts,
  selectTotalPages,
} from "../../redux/products/selectors";
import { clearProds } from "../../redux/products/slice";
import { getProducts, getProductById } from "../../redux/products/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

import { ErrorToast } from "../../utils/errorToast";

import Pagination from "../Pagination/Pagination";
import Loader from "../Loader";
import ProductItem from "../ProductItem/ProductItem";

const ProductsList = ({ perPage, getPerPage, setPerPage }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const totalPages = useSelector(selectTotalPages);
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [page, setPage] = useState(1);

  useEffect(() => {
    try {
      dispatch(clearProds());
      dispatch(getProducts({ page, perPage })).unwrap();
    } catch (error) {
      ErrorToast(error.message);
    }
  }, [dispatch, page, perPage]);

  useEffect(() => {
    function handleResize() {
      const newLimit = getPerPage();
      if (newLimit !== perPage) {
        return setPerPage(newLimit);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [getPerPage, perPage, setPerPage]);

  const onDetailsClick = async (id) => {
    try {
      const { data } = await dispatch(getProductById(id)).unwrap();
      localStorage.setItem("selectedProduct", JSON.stringify(data));
      navigate("/medicine-details");
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul className={css.productsWrapper}>
            {products.map((product) => (
              <ProductItem
                key={product._id}
                product={product}
                onDetailsClick={onDetailsClick}
                isLoggedIn={isLoggedIn}
                navigate={navigate}
              />
            ))}
          </ul>
          {page < totalPages && (
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          )}
        </>
      )}
    </>
  );
};

export default ProductsList;
