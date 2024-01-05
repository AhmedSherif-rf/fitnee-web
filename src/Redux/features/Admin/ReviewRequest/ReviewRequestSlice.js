import { createSlice } from "@reduxjs/toolkit";
import {
  getReviewRequestListing,
  approveReviewRequest,
} from ".//ReviewRequestApi";

export const reviewRequestSlice = createSlice({
  name: "reviewRequest",
  initialState: {
    loading: "idle",
    error: null,
    success: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReviewRequestListing.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getReviewRequestListing.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(getReviewRequestListing.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(approveReviewRequest.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(approveReviewRequest.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(approveReviewRequest.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      });
  },
});

export default reviewRequestSlice.reducer;
