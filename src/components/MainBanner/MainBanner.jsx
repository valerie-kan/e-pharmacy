import css from "./MainBanner.module.css";

const MainBanner = () => {
  return (
    <div className={css.heroWrapper}>
      <div className={css.textWrapper}>
        <h1 className={css.heroTtl}>Your medication delivered</h1>
        <p className={css.heroText}>
          Say goodbye to all your healthcare worries with us
        </p>
      </div>
    </div>
  );
};

export default MainBanner;
