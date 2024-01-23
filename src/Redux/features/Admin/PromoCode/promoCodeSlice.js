import { createSlice } from "@reduxjs/toolkit";
import {getPromoCodeList} from "./promoCodeApi";

export const promoCodeSlice = createSlice({
  name: "promoCodeSlice",
  initialState: {
    loading: "idle",
    error: null,
    success: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPromoCodeList.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getPromoCodeList.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(getPromoCodeList.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
  },
});

export default promoCodeSlice.reducer;
