import type { GifID, Gifs, RandomGif } from "@/types/Gif";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = import.meta.env.VITE_API_KEY;

export const gifTrendingApi = createApi({
  reducerPath: "gifApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.giphy.com/v1" }),
  endpoints: (build) => ({
    getGifsTrending: build.query<Gifs, number>({
      query: (offset) => ({
        url: "gifs/trending",
        params: {
          api_key: API_KEY,
          limit: 12,
          offset,
        },
      }),
    }),
    getRandomGif: build.query<RandomGif, void>({
      query: () => ({
        url: "gifs/random",
        params: {
          api_key: API_KEY,
        },
      }),
    }),
    getSearchGif: build.query<Gifs, { q: string; offset: number }>({
      query: ({ q, offset }) => ({
        url: "gifs/search",
        params: {
          api_key: API_KEY,
          q,
          limit: 12,
          offset,
        },
      }),
    }),
    getGifById: build.query<GifID, string>({
      query: (id) => ({
        url: `gifs/${id}`,
        params: {
          api_key: API_KEY,
        },
      }),
    }),
  }),
});

export const {
  useGetGifsTrendingQuery,
  useGetRandomGifQuery,
  useGetSearchGifQuery,
  useGetGifByIdQuery,
} = gifTrendingApi;
