import offsetReducer from "./slices/offset.slice";
import { gifTrendingApi } from "@/services/api";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    offset: offsetReducer,
    [gifTrendingApi.reducerPath]: gifTrendingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(gifTrendingApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
