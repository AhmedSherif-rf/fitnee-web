import axiosInstance from "../../interceptor";
import Toaster from "../../../Shared/Toaster";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk(
  "login",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      localStorage.setItem("fitnee_user", JSON.stringify(response?.data?.data));
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const logout = createAsyncThunk(
  "logout",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      localStorage.removeItem("fitnee_user");
      Toaster.success(response?.data?.data?.Message);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Message);
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
      console.log(apiEndpoint);
      const response = await axiosInstance.post(apiEndpoint, requestData);
      console.log(response);
      return response.data;
    } catch (error) {
      // Toaster.error(error?.response?.data?.error?.Message);
      console.log(error);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const deleteAccount = createAsyncThunk(
  "deleteAccount",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.delete(apiEndpoint);
      localStorage.removeItem("fitnee_user");
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.detail);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
