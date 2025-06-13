import Gif from "@/components/Gif/Gif";
import Button from "@/components/ui/Button/Button";
import { useGetRandomGifQuery } from "@/services/api";
import { ClipLoader } from "react-spinners";
import style from "./RandomPage.module.scss";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

const RandomPage = () => {
  const { data, isLoading, error, isFetching, refetch } =
    useGetRandomGifQuery();

  if (isLoading || isFetching) return <ClipLoader color="white" size={64} />;
  if (error) return <p>Error loading Gifs</p>;
  if (!data?.data.images?.original?.url) return <p>No GIF found</p>;

  return (
    <>
      <div className={style.titleContainer}>
        <h1 className={style.title}>
          <GiPerspectiveDiceSixFacesRandom />
          Random Gif
        </h1>
        <hr className={style.line} />
      </div>
      <Gif item={data.data} variant="random" />
      <Button onClick={refetch} variant="pagination">
        &rarr;
      </Button>
    </>
  );
};

export default RandomPage;
