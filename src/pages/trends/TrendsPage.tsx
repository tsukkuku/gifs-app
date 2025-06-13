import { useGetGifsTrendingQuery } from "@/services/api";
import GifList from "@/components/GifList/GifList";
import Gif from "@/components/Gif/Gif";
import { usePagination } from "@/hooks/usePagination";
import { useAppSelector } from "@/store/hooks";
import Button from "@/components/ui/Button/Button";
import { ClipLoader } from "react-spinners";
import { selectOffset } from "@/store/selectors/offset.selector";
import style from "./TrendsPage.module.scss";
import { TbChartBarPopular } from "react-icons/tb";

const TrendsPage = () => {
  const offset = useAppSelector(selectOffset);
  const { data, isLoading, error, isFetching } =
    useGetGifsTrendingQuery(offset);
  const { ref, newGifs, handleOffset } = usePagination(data);

  if (isLoading && newGifs.length === 0)
    return <ClipLoader color="white" size={64} />;
  if (error) return <p>Error loading Gifs</p>;

  return (
    <>
      <div className={style.titleContainer}>
        <h1 className={style.title}>
          <TbChartBarPopular />
          Popular Gifs
        </h1>
        <hr className={style.line} />
      </div>
      <GifList>
        {newGifs.map((item) => (
          <Gif item={item} key={item.images.original.url} />
        ))}
        <div ref={ref}></div>
      </GifList>
      <Button onClick={handleOffset} disabled={isLoading} variant="pagination">
        {isFetching ? <ClipLoader color="white" size={64} /> : <>&#129147;</>}
      </Button>
    </>
  );
};

export default TrendsPage;
