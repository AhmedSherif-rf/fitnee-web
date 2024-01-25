import { createSlice } from "@reduxjs/toolkit";
import { getPromoCodeList, createPromoCodeList } from "./promoCodeApi";

export const promoCodeSlice = createSlice({
  name: "promoCode",
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
        state.loading = "succeeded";
      })
      .addCase(getPromoCodeList.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })

      .addCase(createPromoCodeList.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createPromoCodeList.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(createPromoCodeList.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      });
  },
});

export default promoCodeSlice.reducer;
