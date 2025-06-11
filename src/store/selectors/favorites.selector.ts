import type { RootState } from "../store";

export const selectAllFavorites = (state: RootState) => state.favorite.items;

export const selectPressedStatus = (id: string) => (state: RootState) =>
  state.favorite.items.find((item) => item.id === id);
