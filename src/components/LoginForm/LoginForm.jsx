import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";

import css from "./LoginForm.module.css";

import { LoginSchema } from "../../utils/validationSchemas";
import { SuccessToast } from "../../utils/successToast";
import { ErrorToast } from "../../utils/errorToast";

import { login } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";

import Input from "../Input/Input";
import Loader from "../Loader";

const LoginForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({ resolver: yupResolver(LoginSchema) });
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const onSubmit = async (data) => {
    try {
      await dispatch(login(data)).unwrap();
      SuccessToast("You are successfully logged in");
      reset();
    } catch (e) {
      ErrorToast(e.message);
    }
  };

  return (
    <>
      <form className={css.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <div className={css.inputsWrapper}>
          <Input
            id="email"
            type="email"
            register={register}
            errors={errors}
            placeholder="Email address"
            touchedFields={touchedFields}
          />
          <Input
            id="password"
            type="password"
            register={register}
            errors={errors}
            placeholder="Password"
            touchedFields={touchedFields}
          />
        </div>
        {isLoading && <Loader />}
        <div className={css.btnWrapper}>
          <button className={css.submitBtn} type="submit">
            Log in
          </button>
          <Link className={css.link} to="/register">
            Don't have an account?
          </Link>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
