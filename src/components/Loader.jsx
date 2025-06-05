import { BeatLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <BeatLoader color="var(--color-green)" size={20} />
    </div>
  );
};

export default Loader;
