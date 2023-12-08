import axiosInstance from "../../interceptor";
import Toaster from "../../../Shared/Toaster";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { SUCCESS_CODES } from "../../../utils/constants";

export const contactUs = createAsyncThunk(
  "contactUs",
  async ({ apiEndpoint, requestData, navigate }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);
      if (SUCCESS_CODES.includes(response.status)) {
        Toaster.success("Message sent successfully");
      }
      return response;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Message);
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  }
);
