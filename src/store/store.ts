import { gifTrendingApi } from "@/services/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    [gifTrendingApi.reducerPath]: gifTrendingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifTrendingApi.middleware),
});
