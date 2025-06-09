import type { ButtonHTMLAttributes, FC } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";

type ButtonVariant = "primary" | "pagination" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  ...props
}) => {
  return (
    <button onClick={onClick} className={clsx(style[variant])} {...props}>
      {children}
    </button>
  );
};

export default Button;
