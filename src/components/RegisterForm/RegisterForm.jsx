import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import css from "../LoginForm/LoginForm.module.css";

import { RegisterSchema } from "../../utils/validationSchemas";
import { SuccessToast } from "../../utils/successToast.js";
import { ErrorToast } from "../../utils/errorToast.js";

import { registerUser } from "../../redux/auth/operations.js";

import Input from "../Input/Input";

const RegisterForm = ({ isRegisterPage }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({ resolver: yupResolver(RegisterSchema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await dispatch(registerUser(data)).unwrap();
      SuccessToast("You have been successfully registered");
      reset();
      navigate("/login");
    } catch (e) {
      ErrorToast(e.message);
    }
  };

  return (
    <form
      className={clsx(css.formWrapper, css.registerFormWrapper)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={clsx(css.inputsWrapper, css.registerInputsWrapper)}>
        <Input
          id="username"
          type="text"
          register={register}
          errors={errors}
          placeholder="User Name"
          touchedFields={touchedFields}
          isRegisterPage={isRegisterPage}
        />
        <Input
          isRegisterPage={isRegisterPage}
          id="email"
          type="email"
          register={register}
          errors={errors}
          placeholder="Email address"
          touchedFields={touchedFields}
        />
        <Input
          isRegisterPage={isRegisterPage}
          id="phone"
          type="text"
          register={register}
          errors={errors}
          placeholder="Phone number"
          touchedFields={touchedFields}
        />
        <Input
          isRegisterPage={isRegisterPage}
          id="password"
          type="password"
          register={register}
          errors={errors}
          placeholder="Password"
          touchedFields={touchedFields}
        />
      </div>
      <div className={clsx(css.btnWrapper, css.registerBtns)}>
        <button className={css.submitBtn} type="submit">
          Register
        </button>
        <Link className={css.link} to="/login">
          Already have an account?
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
