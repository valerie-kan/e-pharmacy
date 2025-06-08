import AddMedicine from "../components/AddMedicine/AddMedicine";
import Feature from "../components/Feature/Feature";
import MainBanner from "../components/MainBanner/MainBanner";
import NearestStores from "../components/NearestStores/NearestStores";
import PromoBanners from "../components/PromoBanners/PromoBanners";

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <NearestStores />
      <AddMedicine />
      <Feature />
    </>
  );
};

export default HomePage;
