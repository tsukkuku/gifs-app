import { memo, type FC, type ReactNode } from "react";
import style from "./GifList.module.scss";

interface GifListProps {
  children: ReactNode;
}

const GifList: FC<GifListProps> = memo(({ children }) => {
  return <section className={style.gifContainer}>{children}</section>;
});

export default GifList;
