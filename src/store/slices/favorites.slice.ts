import type { favoriteState, IGif } from "@/types/Gif";
import { setLocalStorage } from "@/utils/setLocalStorage";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: favoriteState = {
  items: setLocalStorage(),
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
        state.items.push({ ...action.payload, isPressed: false });
      } else {
        state.items = state.items.filter(
          (item) =>
            item.images.original.url !== action.payload.images.original.url
        );
      }
      localStorage.setItem("gifs", JSON.stringify(state.items));
    },

    toggleFavorite(state, action: PayloadAction<IGif>) {
      const find = state.items.find(
        (item) =>
          item.images.original.url === action.payload.images.original.url
      );
      if (find) {
        find.isPressed = !find.isPressed;
      }
    },
  },
});

export const { addFavorite, toggleFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
