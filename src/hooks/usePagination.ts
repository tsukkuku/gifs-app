import { useAppDispatch } from "@/store/hooks";
import { resetOffset, setOffset } from "@/store/slices/offset.slice";
import type { Gifs, IGif } from "@/types/Gif";
import { useEffect, useRef, useState } from "react";

export const usePagination = (data: Gifs | undefined, value?: string) => {
  const dispatch = useAppDispatch();
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
      dispatch(resetOffset());
      setNewGifs([]);
    };
  }, []);

  useEffect(() => {
    dispatch(resetOffset());
    setNewGifs([]);
  }, [value]);

  useEffect(() => {
    if (shouldScroll && ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
      setShouldScroll(false);
    }
  }, [newGifs]);

  const handleOffset = () => {
    dispatch(setOffset(12));
    setShouldScroll(true);
  };

  return { handleOffset, newGifs, ref };
};
