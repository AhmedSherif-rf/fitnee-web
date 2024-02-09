import axiosInstance from "../../interceptor";
import Toaster from "../../../Shared/Toaster";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCheckoutId = createAsyncThunk(
  "getCheckoutId",
  async ({ apiEndpoint, requestData, entity }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      return { id: response.data.data.id, entity: entity };
    } catch (error) {
      if (error?.response?.data?.error?.Message) {
        Toaster.error(error?.response?.data?.error?.Message);
      } else {
        Toaster.error(error?.response?.data?.error?.Error);
      }
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const checkPaymentStatus = createAsyncThunk(
  "checkPaymentStatus",
  async ({ apiEndpoint, requestData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      return response.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Error);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);

export const applyPromoCode = createAsyncThunk(
  "applyPromoCode",
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

export const getWalletAmount = createAsyncThunk(
  "getWalletAmount",
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
