import { memo, type FC } from "react";
import style from "./Gif.module.scss";
import clsx from "clsx";

type GifVariant = "default" | "random";

interface GifProps {
  src: string;
  title: string;
  variant?: GifVariant;
}

const Gif: FC<GifProps> = memo(({ src, title, variant = "default" }) => {
  return <img src={src} alt={title} className={clsx(style[variant])} />;
});

export default Gif;
