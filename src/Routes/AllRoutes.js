import { lazy } from "react";
import { adminRoutes } from "./AdminRoutes";
import { guestRoutes } from "./GuestRoutes";
import { traineeRoutes } from "./TraineeRoutes";
import { serviceProviderRoutes } from "./ServiceProvider";

const routes = [
  {
    path: "/",
    component: lazy(() => import("../Pages/Auth/LandingPage")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/registerAs",
    component: lazy(() => import("../Pages/Auth/RegisterAs")),
    isPublic: true,
    theme: "light",
    exact: true,
  },
  {
    path: "/signUp/:roleType",
    component: lazy(() => import("../Pages/Auth/SignUp")),
    isPublic: true,
    isAuth: true,
    theme: "dark",
    exact: true,
  },
  {
    path: "/signIn",
    component: lazy(() => import("../Pages/Auth/SignIn")),
    isPublic: true,
    theme: "dark",
    exact: true,
  },
  {
    path: "/verifyOtp/:type",
    component: lazy(() => import("../Pages/Auth/VerifyOtp")),
    isPublic: true,
    isAuth: true,
    theme: "dark",
    exact: true,
  },
  {
    path: "/termAndCondition/:type/:backLink",
    component: lazy(() => import("../Pages/Auth/TermAndCondition")),
    isPublic: true,
    theme: "light",
    exact: true,
  },
  {
    path: "/contactUs",
    component: lazy(() => import("../Pages/Auth/ContactUs")),
    isPublic: true,
    theme: "dark",
    exact: true,
  },
  {
    path: "/forgotPassword",
    component: lazy(() => import("../Pages/Auth/ForgotPassword")),
    isPublic: true,
    theme: "dark",
    exact: true,
  },
  {
    path: "/changePassword",
    component: lazy(() => import("../Pages/Auth/ChangePassword")),
    isPublic: true,
    theme: "dark",
    exact: true,
  },
  {
    path: "/serviceProvider/appDownloadLink/:requestId",
    component: lazy(() => import("../Pages/Auth/AppDownloadLink")),
    isPublic: true,
    theme: "dark",
    exact: true,
  },
]
  .concat(guestRoutes)
  .concat(adminRoutes)
  .concat(traineeRoutes)
  .concat(serviceProviderRoutes);

export default routes;
