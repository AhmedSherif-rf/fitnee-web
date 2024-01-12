// import axios from "axios";
// import Toaster from "../Shared/Toaster";

// const axiosInstance = axios.create({
//   // baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
//   baseURL: "/api",
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const hasFiles = config.data instanceof FormData;

//     if (hasFiles) {
//       config.headers["Content-Type"] = "multipart/form-data";
//       config.headers["maxBodyLength"] = "Infinity";
//     } else {
//       config.headers["Content-Type"] = "application/json";
//       config.headers["Accept"] = "application/json";
//     }

//     const user = JSON.parse(localStorage.getItem("fitnee_user"));

//     if (user && user !== undefined) {
//       config.headers["Authorization"] = `Bearer ${user?.tokens?.access}`;
//     }

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const { response } = error;
//     if (response && response.status === 401) {
//       Toaster.error(response?.data?.error?.detail);
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

import axios from "axios";
import Toaster from "../Shared/Toaster";

const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  baseURL: "/api",
});

let storeModule;

const initializeAxiosInterceptors = async () => {
  if (!storeModule) {
    storeModule = await import("./configureStore");
  }

  const store = storeModule.store;

  axiosInstance.interceptors.request.use(
    (config) => {
      const hasFiles = config.data instanceof FormData;

      if (hasFiles) {
        config.headers["Content-Type"] = "multipart/form-data";
        config.headers["maxBodyLength"] = "Infinity";
      } else {
        config.headers["Content-Type"] = "application/json";
        config.headers["Accept"] = "application/json";
      }

      const user = store.getState("user").user?.user;

      if (user && user !== undefined) {
        config.headers["Authorization"] = `Bearer ${user?.tokens?.access}`;
      }

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

initializeAxiosInterceptors();

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { response } = error;
    if (response && response.status === 401) {
      Toaster.error(response?.data?.error?.detail);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
