import { createSlice } from "@reduxjs/toolkit";
import {
  getServiceProviderListing,
  getTraineeListing,
  userBlockUnblock,
} from "./userListingApi";

export const userListingSlice = createSlice({
  name: "userListing",
  initialState: {
    loading: "idle",
    error: null,
    success: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServiceProviderListing.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getServiceProviderListing.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(getServiceProviderListing.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(getTraineeListing.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getTraineeListing.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(getTraineeListing.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(userBlockUnblock.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(userBlockUnblock.fulfilled, (state) => {
        state.success = true;
        state.loading = "succeeded";
      })
      .addCase(userBlockUnblock.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      });
  },
});

export default userListingSlice.reducer;
