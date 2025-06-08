import type { FC } from "react";
import style from "./Gif.module.scss";

interface GifProps {
  src: string;
  title: string;
}

const Gif: FC<GifProps> = ({ src, title }) => {
  return <img src={src} alt={title} className={style.img} />;
};

export default Gif;
