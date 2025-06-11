import css from "./ProductsList.module.css";

const ProductsList = () => {
  return (
    <ul>
      <li>
        <div className={css.imgWrapper}>
          <img src="" alt="Product image" />
        </div>
        <div className={css.productInfoWrapper}>
          <div className={css.firstRowWrapper}>
            <p className={css.productName}></p>
            <span className={css.price}></span>
          </div>
          <p className={css.supplier}></p>
          <div className={css.btnAndLinkWrapper}>
            <button className={css.productbtn}>Add to cart</button>
            <a className={css.productLink} href="">
              Details
            </a>
          </div>
        </div>
      </li>
    </ul>
  );
};

export default ProductsList;
