import Gif from "@/components/Gif/Gif";
import GifList from "@/components/GifList/GifList";
import Button from "@/components/ui/Button/Button";
import { usePagination } from "@/hooks/usePagination";
import { useGetStickersQuery } from "@/services/api";
import { useAppSelector } from "@/store/hooks";
import { selectOffset } from "@/store/selectors/offset.selector";
import { ClipLoader } from "react-spinners";
import style from "./StickersPage.module.scss";
import { FaArrowTrendUp } from "react-icons/fa6";

const StickersPage = () => {
  const offset = useAppSelector(selectOffset);
  const { data, isLoading, isFetching, error } = useGetStickersQuery(offset);
  const { ref, newGifs, handleOffset } = usePagination(data);

  if (isLoading) return <ClipLoader color="white" size={64} />;
  if (error) return <p>Error loading Stickers</p>;
  return (
    <>
      <div className={style.titleContainer}>
        <h1 className={style.title}>
          <FaArrowTrendUp />
          Popular Stickers
        </h1>
        <hr className={style.line} />
      </div>
      <GifList>
        {newGifs.map((item) => (
          <Gif key={item.images.original.url} item={item} variant="sticker" />
        ))}
      </GifList>
      <div ref={ref}></div>
      {newGifs.length > 0 && (
        <Button
          onClick={handleOffset}
          variant="pagination"
          disabled={isLoading}
        >
          {isFetching ? <ClipLoader color="white" size={64} /> : <>&#129147;</>}
        </Button>
      )}
    </>
  );
};

export default StickersPage;
