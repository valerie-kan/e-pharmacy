import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import css from "./LoginForm.module.css";

import { LoginSchema } from "../../utils/validationSchemas";

import Input from "../Input/Input";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({ resolver: yupResolver(LoginSchema) });

  return (
    <form className={css.formWrapper} onSubmit={handleSubmit}>
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
      <div className={css.btnWrapper}>
        <button className={css.submitBtn} type="submit">
          Log in
        </button>
        <Link className={css.link} to="/register">
          Don't have an account?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
