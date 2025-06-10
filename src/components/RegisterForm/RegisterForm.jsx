import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";

import css from "../LoginForm/LoginForm.module.css";

import { RegisterSchema } from "../../utils/validationSchemas";

import Input from "../Input/Input";

const RegisterForm = ({ isRegisterPage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  return (
    <form
      className={clsx(css.formWrapper, css.registerFormWrapper)}
      onSubmit={handleSubmit}
    >
      <div className={clsx(css.inputsWrapper, css.registerInputsWrapper)}>
        <Input
          isRegisterPage={isRegisterPage}
          id="userName"
          type="text"
          register={register}
          errors={errors}
          placeholder="User Name"
          touchedFields={touchedFields}
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
          id="phoneNumber"
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
