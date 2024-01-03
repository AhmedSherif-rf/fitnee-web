import { createSlice } from "@reduxjs/toolkit";
import { getServiceProviderGuestMode, getServiceProviderProfile } from "./guestApi";

export const guestSlice = createSlice({
  name: "guest",
  initialState: {
    loading: "idle",
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getServiceProviderGuestMode.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getServiceProviderGuestMode.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getServiceProviderGuestMode.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getServiceProviderProfile.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getServiceProviderProfile.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getServiceProviderProfile.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export default guestSlice.reducer;
