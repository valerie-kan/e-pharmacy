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
  const isValid = touchedFields[id] && !errors[id];

  return (
    <div className={css.inputWrapper}>
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
    </div>
  );
};

export default Input;
