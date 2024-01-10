import { createSlice } from "@reduxjs/toolkit";
import { getCheckoutId } from "./subscriptionApi";

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    loading: "idle",
    error: null,
    success: null,
    subscriptionId: "",
  },
  reducers: {
    setSubscriptionId: (state, action) => {
      state.subscriptionId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCheckoutId.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getCheckoutId.fulfilled, (state) => {
        state.loading = "succeeded";
        state.success = true;
      })
      .addCase(getCheckoutId.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      });
  },
});

export const { setSubscriptionId } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
