import { useGetGifsTrendingQuery } from "@/services/api";
import GifList from "@/components/GifList/GifList";
import Gif from "@/components/Gif/Gif";
import { usePagination } from "@/hooks/usePagination";
import { useAppSelector } from "@/store/hooks";
import Button from "@/components/ui/Button/Button";

const TrendsPage = () => {
  const offset = useAppSelector((state) => state.offset.offset);
  const { data, isLoading, error } = useGetGifsTrendingQuery(offset);
  const { ref, newGifs, handleOffset } = usePagination(data);

  if (isLoading && newGifs.length === 0) return <p>Загрузка...</p>;
  if (error) return <p>Error loading Gifs</p>;

  return (
    <>
      <GifList>
        {newGifs.map((item) => (
          <Gif
            key={item.id}
            src={item.images.original.url}
            title={item.title}
          />
        ))}
        <div ref={ref}></div>
      </GifList>
      <Button onClick={handleOffset} disabled={isLoading} variant="pagination">
        &#129147;
      </Button>
    </>
  );
};

export default TrendsPage;
