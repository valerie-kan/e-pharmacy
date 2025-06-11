import css from "./Pagination.module.css";

import sprite from "../../assets/icons/sprite.svg";

import clsx from "clsx";

const Pagination = ({ page, setPage, totalPages }) => {
  const toUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToFirstClick = () => {
    if (page > 1) {
      toUp();
      return setPage(1);
    }
  };

  const handleLeftClick = () => {
    if (page > 1) {
      toUp();
      return setPage(page - 1);
    }
  };

  const handleRightClick = () => {
    if (page < totalPages) {
      toUp();
      return setPage(page + 1);
    }
  };

  const handleToLastClick = () => {
    if (page < totalPages) {
      toUp();
      return setPage(totalPages);
    }
  };

  return (
    <div className={css.paginationWrapper}>
      <div className={css.arrowsLeftCont}>
        <div
          className={clsx(css.pageWrapper, page === 1 && css.disabled)}
          onClick={handleToFirstClick}
        >
          <svg className={css.arrowIcon}>
            <use href={`${sprite}#double-arrow-right`} />
          </svg>
        </div>
        <div
          className={clsx(css.pageWrapper, page === 1 && css.disabled)}
          onClick={handleLeftClick}
        >
          <svg className={css.arrowIcon}>
            <use href={`${sprite}#icon-arrow-left`} />
          </svg>
        </div>
      </div>
      <div className={css.pagesCont}>
        <div
          className={clsx(css.pageWrapper, page === 1 && css.activePage)}
          onClick={() => {
            setPage(1), toUp();
          }}
        >
          1
        </div>
        <div
          className={clsx(css.pageWrapper, page === 2 && css.activePage)}
          onClick={() => {
            setPage(2), toUp();
          }}
        >
          2
        </div>
        <div
          className={clsx(
            css.pageWrapper,
            page === totalPages && css.disabled,
            page > 2 && css.activePage
          )}
          onClick={handleRightClick}
        >
          ...
        </div>
      </div>
      <div className={css.arrowsRightCont}>
        <div
          className={clsx(css.pageWrapper, page === totalPages && css.disabled)}
          onClick={handleRightClick}
        >
          <svg className={css.arrowIcon}>
            <use href={`${sprite}#icon-arrow-right`} />
          </svg>
        </div>
        <div
          className={clsx(css.pageWrapper, page === totalPages && css.disabled)}
          onClick={handleToLastClick}
        >
          <svg className={css.arrowIcon}>
            <use href={`${sprite}#double-arrow-left`} />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
