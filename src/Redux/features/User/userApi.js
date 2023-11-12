import axiosInstance from "../../interceptor";
import Toaster from "../../../Shared/Toaster";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { TRAINEE_ROLE } from "../../../utils/constants";

export const login = createAsyncThunk(
  "login",
  async ({ apiEndpoint, requestData, navigate }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(apiEndpoint, requestData);

      handleRoleRedirect(response?.data, navigate);
      return response?.data;
    } catch (error) {
      Toaster.error(error?.response?.data?.error?.Message);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const handleRoleRedirect = (response, navigate) => {
  import("../../../utils/constants").then((item) => {
    switch (response?.data?.role) {
      case TRAINEE_ROLE:
        navigate(item.TRAINEE_INITIAL_URL);
        break;
      default:
        navigate("/default-dashboard");
    }
  });
};
