import axiosInstance from "../../interceptor";
import Toaster from "../../../Shared/Toaster";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createSubscriptionPlan = createAsyncThunk(
  "createSubscriptionPlan",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success("Plan created successfully");
      return response;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.non_field_errors[0]);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getTraineeSubscriptionPlans = createAsyncThunk(
  "getTraineeSubscriptionPlans",
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

export const getGuestServiceProviderSubscriptionPlans = createAsyncThunk(
  "getGuestServiceProviderSubscriptionPlans",
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
