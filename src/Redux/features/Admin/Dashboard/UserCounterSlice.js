import { createSlice } from "@reduxjs/toolkit";
import { getUserCounters } from "./UserCounterApi";

export const reviewRequestSlice = createSlice({
  name: "DashboardUserCounters",
  initialState: {
    loading: "idle",
    error: null,
    success: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserCounters.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getUserCounters.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(getUserCounters.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      });
  },
});

export default reviewRequestSlice.reducer;
