import Gif from "@/components/Gif/Gif";
import Button from "@/components/ui/Button/Button";
import { useGetRandomGifQuery } from "@/services/api";
import { ClipLoader } from "react-spinners";

const RandomPage = () => {
  const { data, isLoading, error, isFetching, refetch } =
    useGetRandomGifQuery();

  if (isLoading || isFetching) return <ClipLoader color="white" size={64} />;
  if (error) return <p>Error loading Gifs</p>;
  if (!data?.data.images?.original?.url) return <p>No GIF found</p>;

  return (
    <>
      <Gif item={data.data} variant="random" />
      <Button onClick={refetch} variant="pagination">
        &rarr;
      </Button>
    </>
  );
};

export default RandomPage;
