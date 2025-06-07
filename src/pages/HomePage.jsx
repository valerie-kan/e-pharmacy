import MainBanner from "../components/MainBanner/MainBanner";
import NearestStores from "../components/NearestStores/NearestStores";
import PromoBanners from "../components/PromoBanners/PromoBanners";

const HomePage = () => {
  return (
    <>
      <MainBanner />
      <PromoBanners />
      <NearestStores />
    </>
  );
};

export default HomePage;
