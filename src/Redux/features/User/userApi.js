import axiosInstance from "../../interceptor";
import Toaster from "../../../Shared/Toaster";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  PRECONDITION_REQUIRED_CODE,
  UNAVAILABLE_FOR_LEGAL_REASONS_CODE,
} from "../../../utils/constants";

export const login = createAsyncThunk(
  "login",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      if (
        error.response.status !== PRECONDITION_REQUIRED_CODE &&
        error.response.status !== UNAVAILABLE_FOR_LEGAL_REASONS_CODE
      ) {
        Toaster.error(error?.response?.data?.error?.Message);
      }
      return thunkAPI.rejectWithValue({ statusCode: error.response.status });
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success("Logged out successfully");
      return response.data;
    } catch (error) {
      if (error?.response?.data?.error?.Message !== "") {
        Toaster.error(error?.response?.data?.error?.Message);
      }
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const changePassword = createAsyncThunk(
  "changePassword",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.data?.Message);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const signUp = createAsyncThunk(
  "signUp",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success("OTP send successfully");
      return response.data.data.email;
    } catch (error) {
      if (error?.response?.data?.error?.email) {
        Toaster.error(error?.response?.data?.error?.email[0]);
      } else if (error?.response?.data?.error?.phone_number) {
        Toaster.error(error?.response?.data?.error?.phone_number[0]);
      } else if (error?.response?.data?.error?.bio) {
        Toaster.error(error?.response?.data?.error?.bio[0]);
      } else if (error?.response?.data?.error?.weight) {
        Toaster.error(error?.response?.data?.error?.weight[0]);
      } else if (error?.response?.data?.error?.height) {
        Toaster.error(error?.response?.data?.error?.height[0]);
      } else {
        Toaster.error(error?.response?.data?.message);
      }
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const editProfile = createAsyncThunk(
  "editProfile",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.patch(apiEndpoint, requestData);
      Toaster.success("Profile edit successfully");
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "deleteAccount",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(apiEndpoint);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.detail);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getSpecialities = createAsyncThunk(
  "getSpecialities",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.detail);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
