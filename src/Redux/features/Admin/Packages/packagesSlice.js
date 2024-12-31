import { createSlice } from "@reduxjs/toolkit";
import { getPackages, EditPackage } from "./packagesApi";

export const packagesSlice = createSlice({
  name: "packages",
  initialState: {
    loading: "idle",
    error: null,
    success: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPackages.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getPackages.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(getPackages.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(EditPackage.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(EditPackage.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(EditPackage.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      });
  },
});

export default packagesSlice.reducer;
