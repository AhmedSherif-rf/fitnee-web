import { createSlice } from "@reduxjs/toolkit";
import { mealClassificationStatus, getMealsClassifications } from "./mealsApi";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    loading: "idle",
    error: null,
    success: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(mealClassificationStatus.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(mealClassificationStatus.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(mealClassificationStatus.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(getMealsClassifications.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getMealsClassifications.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(getMealsClassifications.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      });
  },
});

export default mealsSlice.reducer;
