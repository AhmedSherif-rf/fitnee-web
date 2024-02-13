import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  logout,
  signUp,
  editProfile,
  deleteAccount,
  getMyTrainees,
  changePassword,
  getUserProfile,
  setAvailability,
  addTraineeProgress,
  cancelSubscription,
  getUserNotifications,
  getMyServiceProviders,
  getTransactionHistory,
  sendEditProfileRequest,
  getTraineeProgressHistory,
  getServiceProviderFeedbacks,
} from "./userApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    fcmToken: null,
    isGuest: false,
    loading: "idle",
    error: null,
    email: "",
    notifications: [],
  },
  reducers: {
    setGuest: (state, action) => {
      state.isGuest = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    customLogout: (state) => {
      state.user = null;
    },
    setFcmToken: (state, action) => {
      state.fcmToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.isGuest = false;
        state.user = action.payload.data;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(logout.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = "succeeded";
        state.notifications = [];
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = "failed";
        state.user = null;
      })
      .addCase(changePassword.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(changePassword.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(signUp.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.email = action.payload;
      })
      .addCase(signUp.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(deleteAccount.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(deleteAccount.fulfilled, (state) => {
        state.user = null;
        state.loading = "succeeded";
      })
      .addCase(deleteAccount.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(editProfile.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.user = { ...action.payload.data, tokens: state.user.tokens };
        state.loading = "succeeded";
      })
      .addCase(editProfile.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getMyServiceProviders.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getMyServiceProviders.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getMyServiceProviders.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(getMyTrainees.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getMyTrainees.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getMyTrainees.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(getTraineeProgressHistory.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getTraineeProgressHistory.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getTraineeProgressHistory.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(addTraineeProgress.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(addTraineeProgress.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(addTraineeProgress.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(getTransactionHistory.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getTransactionHistory.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getTransactionHistory.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(cancelSubscription.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(cancelSubscription.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(cancelSubscription.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(sendEditProfileRequest.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(sendEditProfileRequest.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(sendEditProfileRequest.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.payload.error;
      })
      .addCase(getUserProfile.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getUserProfile.fulfilled, (state, action) => {
        state.user = { ...action.payload.data[0], tokens: state.user.tokens };
        state.loading = "succeeded";
      })
      .addCase(getUserProfile.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(setAvailability.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(setAvailability.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(setAvailability.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getServiceProviderFeedbacks.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getServiceProviderFeedbacks.fulfilled, (state) => {
        state.loading = "succeeded";
      })
      .addCase(getServiceProviderFeedbacks.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(getUserNotifications.fulfilled, (state, action) => {
        state.notifications = action.payload.data.results;
      });
  },
});

export const {
  setGuest,
  setEmail,
  customLogout,
  setFcmToken,
} = userSlice.actions;

export default userSlice.reducer;
