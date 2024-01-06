import { createSlice } from "@reduxjs/toolkit";
import {
  createSubscriptionPlan,
  getServiceProviderSubscriptionPlans,
} from "./subscriptionPlanApi";

export const subscriptionPlanSlice = createSlice({
  name: "subscriptionPlan",
  initialState: {
    loading: "idle",
    error: null,
    success: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSubscriptionPlan.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(createSubscriptionPlan.fulfilled, (state) => {
        state.loading = "succeeded";
        state.success = true;
      })
      .addCase(createSubscriptionPlan.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(getServiceProviderSubscriptionPlans.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getServiceProviderSubscriptionPlans.fulfilled, (state) => {
        state.loading = "succeeded";
        state.success = true;
      })
      .addCase(
        getServiceProviderSubscriptionPlans.rejected,
        (state, action) => {
          state.loading = "failed";
          state.error = action.payload.error;
        }
      );
  },
});

export default subscriptionPlanSlice.reducer;
