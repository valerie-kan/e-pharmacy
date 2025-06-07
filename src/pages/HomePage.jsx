import Hero from "../components/Hero/Hero";
import NearestStores from "../components/NearestStores/NearestStores";
import Offers from "../components/Offers/Offers";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <NearestStores />
    </div>
  );
};

export default HomePage;
