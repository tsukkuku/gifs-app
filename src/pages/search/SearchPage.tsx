import Gif from "@/components/Gif/Gif";
import GifList from "@/components/GifList/GifList";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { useDebounce } from "@/hooks/useDebounce";
import { usePagination } from "@/hooks/usePagination";
import { useGetSearchGifQuery } from "@/services/api";
import { useAppSelector } from "@/store/hooks";
import { useState, type ChangeEvent } from "react";

const SearchPage = () => {
  const offset = useAppSelector((state) => state.offset.offset);
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 650);
  const { data, isLoading, isFetching } = useGetSearchGifQuery(
    {
      q: debouncedValue,
      offset: offset,
    },
    { skip: !debouncedValue }
  );
  const { ref, newGifs, handleOffset } = usePagination(data, value);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  if (isLoading) return <p>Загрузка...</p>;

  return (
    <>
      <Input
        placeholder="Введите название гифки"
        onChange={handleChange}
        value={value}
      />
      {isFetching && <p>Загрузка...</p>}
      <GifList>
        {newGifs.map((gif) => (
          <Gif
            key={gif.images.original.url}
            src={gif.images.original.url}
            title={gif.title}
            variant="default"
          />
        ))}
      </GifList>
      <div ref={ref}></div>
      {newGifs.length > 0 && (
        <Button
          onClick={handleOffset}
          variant="pagination"
          disabled={isLoading}
        >
          &#129147;
        </Button>
      )}
    </>
  );
};

export default SearchPage;
