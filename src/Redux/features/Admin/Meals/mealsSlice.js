import { createSlice } from "@reduxjs/toolkit";
import {
  mealClassificationStatus,
  getMealsClassifications,
  deleteCategoryClassification,
  getCategoryClassificationDetails,
  EditMealClassifications,
  getMealsClassificationsFiltered,
} from "./mealsApi";

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
      })
      .addCase(deleteCategoryClassification.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteCategoryClassification.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(deleteCategoryClassification.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(getCategoryClassificationDetails.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getCategoryClassificationDetails.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(getCategoryClassificationDetails.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(EditMealClassifications.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(EditMealClassifications.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(EditMealClassifications.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(getMealsClassificationsFiltered.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getMealsClassificationsFiltered.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(getMealsClassificationsFiltered.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      });
  },
});

export default mealsSlice.reducer;
