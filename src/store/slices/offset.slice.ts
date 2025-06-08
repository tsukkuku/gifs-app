import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  offset: 0,
};

export const offsetSlice = createSlice({
  name: "offset",
  initialState,
  reducers: {
    setOffset(state, action: PayloadAction<number>) {
      state.offset += action.payload;
    },
    resetOffset(state) {
      state.offset = 0;
    },
  },
});

export const { setOffset, resetOffset } = offsetSlice.actions;
export default offsetSlice.reducer;
