import type { Gifs } from "@/types/Gif";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gifTrendingApi = createApi({
  reducerPath: "gifApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.giphy.com/v1" }),
  endpoints: (build) => ({
    getGifsTrending: build.query<Gifs, number>({
      query: (offset) => ({
        url: "gifs/trending",
        params: {
          api_key: import.meta.env.VITE_API_KEY,
          limit: 12,
          offset,
        },
      }),
    }),
  }),
});

export const { useGetGifsTrendingQuery } = gifTrendingApi;
