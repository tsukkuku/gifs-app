import type { RootState } from "../store";

export const selectOffset = (state: RootState) => state.offset.offset;
