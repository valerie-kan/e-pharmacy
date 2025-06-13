import { Outlet } from "react-router-dom";

import Container from "./Container/Container";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const SharedLayout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default SharedLayout;
