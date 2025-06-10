import clsx from "clsx";

import css from "./Input.module.css";

const Input = ({
  id,
  type,
  placeholder,
  register,
  errors,
  touchedFields,
  isRegisterPage,
}) => {
  const isValid = touchedFields.type && !errors.type;

  return (
    <>
      <input
        className={clsx(
          css.input,
          isValid && css.sucInput,
          isRegisterPage && css.registerInput
        )}
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
      />
      {errors?.[id] && <p className={css.errMessage}>{errors[id].message}</p>}
    </>
  );
};

export default Input;
