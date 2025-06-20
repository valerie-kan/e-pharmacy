import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import css from "./CartPage.module.css";

import { ErrorToast } from "../../utils/errorToast";
import { SuccessToast } from "../../utils/successToast";
import { OrderSchema } from "../../utils/validationSchemas";

import { placeOrder } from "../../redux/cart/operations";

import { useCart } from "../../context/CartContext";

import CartMainInfo from "../../components/CartMainInfo/CartMainInfo";
import CartProducts from "../../components/CartProducts/CartProducts";

const CartPage = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const { totalProducts, updateTotalProducts } = useCart();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({
    resolver: yupResolver(OrderSchema),
    defaultValues: { paymentMethod: "cash" },
  });

  const cart = JSON.parse(localStorage.getItem("cart"));

  useEffect(() => {
    updateTotalProducts();
    if (!cart) return setTotal(0);

    const totalPrice = cart.items
      .reduce((sum, item) => {
        return sum + item.quantity * item.price;
      }, 0)
      .toFixed(2);
    setTotal(totalPrice);
  }, [cart, updateTotalProducts]);

  const onSubmit = async (data) => {
    console.log("formdata", data);
    try {
      await dispatch(
        placeOrder({
          name: data.name,
          address: data.address,
          products: totalProducts.toString(),
          price: total.toString(),
          status: "Pending",
        })
      ).unwrap();
      reset();
      SuccessToast("Thank you! Order successfully placed");
      localStorage.removeItem("cart");
      setTotal(0);
      updateTotalProducts();
    } catch (error) {
      ErrorToast(error.message);
    }
  };

  return (
    <section className={css.sectionWrapper}>
      <h3 className={css.sectionTtl}>Cart</h3>
      <div className={css.mainContentWrapper}>
        <CartMainInfo
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
          touchedFields={touchedFields}
          total={total}
        />
        {cart && (
          <CartProducts
            products={cart.items}
            cartId={cart._id}
            updateTotalProducts={updateTotalProducts}
          />
        )}
      </div>
    </section>
  );
};

export default CartPage;
