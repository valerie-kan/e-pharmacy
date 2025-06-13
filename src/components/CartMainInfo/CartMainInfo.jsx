import clsx from "clsx";

import css from "./CartMainInfo.module.css";

import Input from "../Input/Input";

const customerInfo = [
  { label: "Name", id: "name", type: "text" },
  { label: "Email", id: "email", type: "email" },
  { label: "Phone", id: "phone", type: "text" },
  { label: "Address", id: "address", type: "text" },
];

const CartMainInfo = ({
  register,
  handleSubmit,
  onSubmit,
  errors,
  touchedFields,
  total,
}) => {
  return (
    <form className={css.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={clsx(css.shippingInfoSect, css.subSection)}>
        <p className={css.subSectTtl}>Enter shipping info</p>
        <p className={css.subSectText}>
          Enter your delivery address where you get the product. You can also
          send any other location where you send the products.
        </p>
        <div className={css.inputsWrapper}>
          {customerInfo.map((item) => (
            <div className={css.inputWrapper} key={item.id}>
              <label className={css.inputLabel} htmlFor={`#${item.id}`}>
                {item.label}
              </label>
              <Input
                id={item.id}
                type={item.type}
                placeholder={`Enter ${item.id}`}
                register={register}
                errors={errors}
                touchedFields={touchedFields}
              />
              {/* {errors[item.id] && touchedFields[item.id] && (
                <p className={css.errorMessage}>{errors[item.id]?.message}</p>
              )} */}
            </div>
          ))}
        </div>
      </div>
      <div className={clsx(css.paymentMethodSect, css.subSection)}>
        <p className={css.subSectTtl}>Payment method</p>
        <p className={css.subSectText}>
          You can pay us in a multiple way in our payment gateway system.
        </p>
        <div className={css.radioWrapper}>
          <label className={css.radioLabel}>
            <input
              className={css.radioInput}
              type="radio"
              value="cash"
              {...register("paymentMethod", { required: true })}
            />
            Cash On Delivery
          </label>
          <label className={css.radioLabel}>
            <input
              className={css.radioInput}
              type="radio"
              value="bank"
              {...register("paymentMethod", { required: true })}
            />
            Bank
          </label>
        </div>
      </div>
      <div className={clsx(css.orderDetailsSect, css.subSection)}>
        <p className={css.subSectTtl}>Order details</p>
        <p className={css.subSectText}>
          Shipping and additionnal costs are calculated based on values you have
          entered.
        </p>
        <div className={css.totalWrapper}>
          <span className={css.totalSpan}>Total:</span>
          <span className={css.totalSpan}>৳ {total}</span>
        </div>
        <button className={css.submitBtn} type="submit">
          Place order
        </button>
      </div>
    </form>
  );
};

export default CartMainInfo;
