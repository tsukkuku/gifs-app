import type { ButtonHTMLAttributes, FC } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";

type ButtonVariant = "primary" | "pagination" | "danger";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  startContent?: string;
  endContent?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  startContent,
  endContent,
  ...props
}) => {
  return (
    <button onClick={onClick} className={clsx(style[variant])} {...props}>
      {startContent && <img src={startContent} alt="icon" />}
      {children}
      {endContent && <img src={endContent} alt="icon" />}
    </button>
  );
};

export default Button;
