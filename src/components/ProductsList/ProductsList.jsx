import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import css from "./ProductsList.module.css";

import {
  selectIsLoading,
  selectProducts,
  selectTotalPages,
} from "../../redux/products/selectors";
import { clearProds } from "../../redux/products/slice";
import { getProducts } from "../../redux/products/operations";

import { ErrorToast } from "../../utils/errorToast";

import Pagination from "../Pagination/Pagination";
import Loader from "../Loader";

const ProductsList = ({ perPage, getPerPage, setPerPage }) => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectIsLoading);
  const totalPages = useSelector(selectTotalPages);

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

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ul className={css.productsWrapper}>
            {products.map((product) => (
              <li className={css.prodItem} key={product._id}>
                <div className={css.imgWrapper}>
                  <img
                    className={css.image}
                    src={product.photo}
                    alt="Product image"
                  />
                </div>
                <div className={css.productInfoWrapper}>
                  <div className={css.firstRowWrapper}>
                    <p className={css.productName}>{product.name}</p>
                    <span className={css.price}>৳ {product.price}</span>
                  </div>
                  <p className={css.supplier}>{product.suppliers}</p>
                  <div className={css.btnAndLinkWrapper}>
                    <button className={css.productBtn}>Add to cart</button>
                    <a className={css.productLink} href="">
                      Details
                    </a>
                  </div>
                </div>
              </li>
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
