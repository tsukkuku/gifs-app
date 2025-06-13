import Gif from "@/components/Gif/Gif";
import GifList from "@/components/GifList/GifList";
import { useAppSelector } from "@/store/hooks";
import style from "./FavoritePage.module.scss";
import { useNavigate } from "react-router-dom";
import { selectAllFavorites } from "@/store/selectors/favorites.selector";
import Button from "@/components/ui/Button/Button";

const FavoritePage = () => {
  const navigate = useNavigate();
  const items = useAppSelector(selectAllFavorites);
  return (
    <div className={style.favoritePage}>
      <div className={style.navigation}>
        <h1>My Favorites</h1>
        <Button onClick={() => navigate(-1)}>&larr;</Button>
      </div>
      <div className={style.favoriteGifs}>
        {items.length === 0 ? (
          <p style={{ color: "white" }}>Пока у вас нету избранных Gif.</p>
        ) : (
          <>
            <GifList>
              {items?.map((item) => (
                <Gif
                  key={item.images.original.url}
                  item={item}
                  variant="sticker"
                />
              ))}
            </GifList>
          </>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
