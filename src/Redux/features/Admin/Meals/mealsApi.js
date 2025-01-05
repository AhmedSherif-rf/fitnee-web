import axiosInstance from "../../../interceptor";
import Toaster from "../../../../Shared/Toaster";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMealsClassifications = createAsyncThunk(
  "getMealsClassifications",
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

export const AddMealClassifications = createAsyncThunk(
  "AddMealClassifications",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const EditCoach = createAsyncThunk(
  "EditCoach",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.put(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      console.log(error);

      Toaster.error(
        Object.keys(error?.response?.data?.error)[0] +
          ": " +
          Object.values(error?.response?.data?.error)[0]
      );
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const mealClassificationStatus = createAsyncThunk(
  "mealClassificationStatus",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      Toaster.success(response?.data?.data?.message);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const getTraineeDetail = createAsyncThunk(
  "getTraineeDetail",
  async ({ apiEndpoint }, thunkAPI) => {
    try {
      const response = await axiosInstance.get(apiEndpoint);
      return response?.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
