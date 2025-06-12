import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

import SharedLayout from "./components/SharedLayout";
import Loader from "./components/Loader";
import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";
import ScrollToTop from "./components/ScrollToTop";

import HomePage from "./pages/HomePage";
import MedicineStorePage from "./pages/MedicineStorePage/MedicineStorePage";
import MedicinePage from "./pages/MedicinePage/MedicinePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";
import CartPage from "./pages/CartPage/CartPage";

import { selectIsRefreshing, selectToken } from "./redux/auth/selectors";
import { getUser, refreshUser, setToken } from "./redux/auth/operations";
import { ErrorToast } from "./utils/errorToast";

function App() {
  // const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);

  useEffect(() => {
    if (!token) return;

    setToken(token);

    //   const restoreSession = async () => {
    //     try {
    //       const result = await dispatch(refreshUser()).unwrap();
    //       console.log(result);
    //       if (result?.token) {
    //         setToken(result.token);
    //         await dispatch(getUser()).unwrap();
    //       }
    //     } catch (err) {
    //       ErrorToast(err);
    //     }
    //   };

    //   restoreSession();
  }, [token]);

  // if (isRefreshing) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <Toaster />
      <ScrollToTop />
      <Routes>
        <Route
          path="/login"
          element={<RestrictedRoute component={<LoginPage />} />}
        />
        <Route
          path="/register"
          element={<RestrictedRoute component={<RegisterPage />} />}
        />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/medicine-store" element={<MedicineStorePage />} />
          <Route path="/medicine" element={<MedicinePage />} />
          <Route path="/medicine-details" element={<ProductDetailsPage />} />
          <Route
            path="/cart"
            element={<PrivateRoute component={<CartPage />} />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
