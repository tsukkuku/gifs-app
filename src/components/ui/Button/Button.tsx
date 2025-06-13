import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import style from "./Button.module.scss";
import clsx from "clsx";

type ButtonVariant = "primary" | "pagination";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  startContent?: ReactNode;
  endContent?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  onClick,
  startContent,
  endContent,
  className,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={clsx(style[variant], className)}
      {...props}
    >
      {startContent && startContent}
      {children}
      {endContent && endContent}
    </button>
  );
};

export default Button;
