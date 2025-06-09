import type { FC, InputHTMLAttributes } from "react";
import style from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ value, onChange, ...props }) => {
  return (
    <input
      type="text"
      onChange={onChange}
      value={value}
      {...props}
      className={style.input}
    />
  );
};

export default Input;
