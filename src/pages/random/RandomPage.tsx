import Gif from "@/components/Gif/Gif";
import Button from "@/components/ui/Button/Button";
import { useGetRandomGifQuery } from "@/services/api";

const RandomPage = () => {
  const { data, isLoading, error, isFetching, refetch } =
    useGetRandomGifQuery();

  if (isLoading || isFetching) return <p>Загрузка...</p>;
  if (error) return <p>Error loading Gifs</p>;
  if (!data?.data.images?.original?.url) return <p>No GIF found</p>;

  return (
    <>
      <Gif
        src={data.data.images?.original.url}
        title={data.data.title}
        variant="random"
      />
      <Button onClick={refetch} variant="pagination">
        &rarr;
      </Button>
    </>
  );
};

export default RandomPage;
