import Hero from "../components/Hero/Hero";
import NearestStore from "../components/NearestStore/NearestStore";
import Offers from "../components/Offers/Offers";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Offers />
      <NearestStore />
    </div>
  );
};

export default HomePage;
