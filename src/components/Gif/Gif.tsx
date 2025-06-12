import { memo, type FC } from "react";
import style from "./Gif.module.scss";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addFavorite, toggleFavorite } from "@/store/slices/favorites.slice";
import type { IGif } from "@/types/Gif";
import { selectPressedStatus } from "@/store/selectors/favorites.selector";
import { Link } from "react-router-dom";

type GifVariant = "default" | "random";

interface GifProps {
  item?: IGif;
  variant?: GifVariant;
}

const Gif: FC<GifProps> = memo(({ variant = "default", item }) => {
  if (!item) return;
  const dispatch = useAppDispatch();
  const isPressed = useAppSelector(selectPressedStatus(item.id));

  const handleAdd = () => {
    dispatch(addFavorite(item));
    dispatch(toggleFavorite(item));
  };

  return (
    <div className={style.gif}>
      <Link to={`/${item.id}`}>
        <img
          src={item.images.original.url}
          alt={item?.title}
          className={clsx(style[variant])}
        />
      </Link>
      <div className={style.buttonOverlay}>
        <img
          src={
            isPressed
              ? "https://img.icons8.com/?size=100&id=10287&format=png&color=F20303"
              : "https://img.icons8.com/?size=100&id=10287&format=png&color=FFFFFF"
          }
          alt="favorite"
          onClick={handleAdd}
        />
      </div>
      <div className={style.textOverlay}>
        <img
          src={
            item?.user?.avatar_url ||
            "https://cdn-icons-png.flaticon.com/512/16522/16522939.png"
          }
          alt="User Avatar"
        />
        <div className={style.textContent}>
          {item?.user?.username || "Anonim"}
        </div>
      </div>
    </div>
  );
});

export default Gif;
