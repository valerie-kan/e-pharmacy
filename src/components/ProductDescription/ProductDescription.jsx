import css from "./ProductDescription.module.css";

const ProductDescription = () => {
  return (
    <div className={css.descriptionWrapper}>
      <p className={css.descriptText}>
        Although it's typically considered safe, excessive consumption can lead
        to side effects. Therefore, it's recommended to consult a healthcare
        professional before using moringa, especially if you're pregnant,
        nursing, or taking other medications. This balanced approach allows for
        the benefits of moringa while recognizing the importance of proper usage
        and caution.
      </p>
      <p className={css.descriptText}>
        Medicinal Uses: Antioxidant Properties:{" "}
        <span className={css.descriptSpan}>
          Moringa is packed with antioxidants that help fight oxidative stress
          and inflammation in the body.
        </span>
      </p>
      <p className={css.descriptText}>
        Anti-Diabetic Effects:{" "}
        <span className={css.descriptSpan}>
          Some studies have shown that moringa leaves might lower blood sugar
          levels, making it a valuable supplement for managing diabetes.
        </span>
      </p>
      <p className={css.descriptText}>
        Heart Health:{" "}
        <span className={css.descriptSpan}>
          The plant has been linked to reduced cholesterol levels, which is
          vital for heart health.
        </span>
      </p>
      <p className={css.descriptText}>
        Anti-Cancer Properties:{" "}
        <span className={css.descriptSpan}>
          Certain compounds in moringa, such as niazimicin, have been found to
          suppress the growth of cancer cells in laboratory studies.
        </span>
      </p>
      <p className={css.descriptText}>
        Immune Support:{" "}
        <span className={css.descriptSpan}>
          With its high vitamin C content, moringa can boost the immune system.
        </span>
      </p>
      <p className={css.descriptText}>
        Digestive Aid:{" "}
        <span className={css.descriptSpan}>
          Moringa can help in treating digestive disorders due to its
          anti-inflammatory properties.
        </span>
      </p>
    </div>
  );
};

export default ProductDescription;
