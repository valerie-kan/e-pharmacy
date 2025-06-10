import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import SharedLayout from "./components/SharedLayout";
import Loader from "./components/Loader";

import HomePage from "./pages/HomePage";
import MedicineStorePage from "./pages/MedicineStorePage/MedicineStorePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/medicine-store" element={<MedicineStorePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
