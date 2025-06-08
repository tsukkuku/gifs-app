import { useGetGifsTrendingQuery } from "@/services/api";
import type { IGif } from "@/types/Gif";
import { useEffect, useRef, useState } from "react";
import styles from "./TrendsPage.module.scss";
import GifList from "@/components/GifList/GifList";
import Gif from "@/components/Gif/Gif";

const TrendsPage = () => {
  const [offset, setOffset] = useState<number>(0);
  const { data, isLoading, error } = useGetGifsTrendingQuery(offset);
  const [newGifs, setNewGifs] = useState<IGif[]>([]);
  const [shouldScroll, setShouldScroll] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (data) {
      setNewGifs((prev) => [...prev, ...data.data]);
    }
  }, [data]);

  useEffect(() => {
    return () => {
      setNewGifs([]);
    };
  }, []);

  useEffect(() => {
    if (shouldScroll && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
      setShouldScroll(false);
    }
  }, [newGifs]);

  if (isLoading && newGifs.length === 0) return <p>Загрузка...</p>;
  if (error) return <p>Error loading Gifs</p>;

  const handleOffset = () => {
    setOffset((prev) => prev + 12);
    setShouldScroll(true);
  };

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
      <button
        className={styles.paginationButton}
        onClick={handleOffset}
        disabled={isLoading}
      >
        &#129147;
      </button>
    </>
  );
};

export default TrendsPage;
