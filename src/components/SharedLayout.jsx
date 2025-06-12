import { Outlet } from "react-router-dom";

import Container from "./Container/Container";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
// import { useEffect } from "react";
// import { getUser, refreshUser, setToken } from "../redux/auth/operations";
// import { useDispatch, useSelector } from "react-redux";
// import { selectIsRefreshing, selectToken } from "../redux/auth/selectors";
// import { ErrorToast } from "../utils/errorToast";
// import Loader from "./Loader";

const SharedLayout = () => {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);
  // const token = useSelector(selectToken);

  // useEffect(() => {
  //   if (!token) return;

  //   setToken(token);

  //   const restoreSession = async () => {
  //     try {
  //       const result = await dispatch(refreshUser()).unwrap();
  //       if (result?.token) {
  //         setToken(result.token);
  //         await dispatch(getUser()).unwrap();
  //       }
  //     } catch (err) {
  //       ErrorToast(err);
  //     }
  //   };

  //   restoreSession();
  // }, [token, dispatch]);

  // if (isRefreshing) return <Loader />;

  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default SharedLayout;
