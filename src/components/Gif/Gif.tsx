import type { FC } from "react";
import style from "./Gif.module.scss";
import cn from "classnames";

type GifVariant = "default" | "random";

interface GifProps {
  src: string;
  title: string;
  variant?: GifVariant;
}

const Gif: FC<GifProps> = ({ src, title, variant = "default" }) => {
  return <img src={src} alt={title} className={cn(style[variant])} />;
};

export default Gif;
