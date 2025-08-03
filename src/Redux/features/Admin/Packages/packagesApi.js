import axiosInstance from "../../../interceptor";
import Toaster from "../../../../Shared/Toaster";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPackages = createAsyncThunk(
  "getPackages",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getPackageDetails = createAsyncThunk(
  "getPackageDetails",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const EditPackage = createAsyncThunk(
  "EditPackage",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.put(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      console.log(error);

      Toaster.error(error?.response?.data?.error);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
