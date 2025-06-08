import AddMedicine from "../components/AddMedicine/AddMedicine";
import Feature from "../components/Feature/Feature";
import MainBanner from "../components/MainBanner/MainBanner";
import NearestStores from "../components/NearestStores/NearestStores";
import PromoBanners from "../components/PromoBanners/PromoBanners";
import Reviews from "../components/Reviews/Reviews";

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <NearestStores />
      <AddMedicine />
      <Feature />
      <Reviews />
    </>
  );
};

export default HomePage;
