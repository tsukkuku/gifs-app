import type { favoriteState, IGif } from "@/types/Gif";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: favoriteState = {
  items: [],
};

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<IGif>) {
      const find = state.items.find(
        (item) =>
          item.images.original.url === action.payload.images.original.url
      );

      if (!find) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter(
          (item) =>
            item.images.original.url !== action.payload.images.original.url
        );
      }
    },
    resetFavorites(state) {
      state.items = [];
    },
  },
});

export const { addFavorite, resetFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
