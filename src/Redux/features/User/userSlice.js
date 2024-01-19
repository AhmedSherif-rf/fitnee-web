import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  logout,
  changePassword,
  signUp,
  deleteAccount,
  editProfile,
  getMyServiceProviders,
} from "./userApi";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isGuest: false,
    loading: "idle",
    error: null,
    email: "",
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
      });
  },
});

export const { setGuest, setEmail, customLogout } = userSlice.actions;

export default userSlice.reducer;
