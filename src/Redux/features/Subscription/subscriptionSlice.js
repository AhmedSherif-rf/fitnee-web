import { createSlice } from "@reduxjs/toolkit";
import { getCheckoutId, checkPaymentStatus } from "./subscriptionApi";

export const subscriptionSlice = createSlice({
  name: "subscription",
  initialState: {
    entity: "",
    error: null,
    success: null,
    loading: "idle",
    checkoutId: "",
    subscriptionPlan: "",
  },
  reducers: {
    setSubscriptionPlan: (state, action) => {
      state.subscriptionPlan = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCheckoutId.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getCheckoutId.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.checkoutId = action.payload.id;
        state.entity = action.payload.entity;
        state.success = true;
      })
      .addCase(getCheckoutId.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(checkPaymentStatus.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(checkPaymentStatus.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.checkoutId = "";
        state.entity = "";
        state.success = true;
      })
      .addCase(checkPaymentStatus.rejected, (state, action) => {
        state.loading = "failed";
        state.checkoutId = "";
        state.entity = "";
        state.error = action.payload.error;
      });
  },
});

export const { setSubscriptionPlan } = subscriptionSlice.actions;

export default subscriptionSlice.reducer;
