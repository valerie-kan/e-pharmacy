import { useForm } from "react-hook-form";
import Input from "../Input/Input";
import css from "./CartMainInfo.module.css";
import clsx from "clsx";
import { useState } from "react";

const customerInfo = [
  { label: "Name", id: "name", type: "text" },
  { label: "Email", id: "email", type: "email" },
  { label: "Phone", id: "phone", type: "text" },
  { label: "Address", id: "address", type: "text" },
];

const CartMainInfo = () => {
  const {
    register,
    reset,
    watch,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({ defaultValues: { paymentMethod: "cash" } });

  const [total, setTotal] = useState(0);

  const onSubmit = () => {};

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
            <div className={css.inputWrapper}>
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
