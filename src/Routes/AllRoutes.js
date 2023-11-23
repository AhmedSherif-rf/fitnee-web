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
    exact: true,
  },
  {
    path: "/signUp/:roleType",
    component: lazy(() => import("../Pages/Auth/SignUp")),
    isPublic: true,
    isAuth: true,
    exact: true,
  },
  {
    path: "/signIn",
    component: lazy(() => import("../Pages/Auth/SignIn")),
    isPublic: true,
    theme: "light",
    exact: true,
  },
  {
    path: "/verifyOtp",
    component: lazy(() => import("../Pages/Auth/VerifyOtp")),
    isPublic: true,
    isAuth: true,
    exact: true,
  },
  {
    path: "/termAndCondition",
    component: lazy(() => import("../Pages/Auth/TermAndCondition")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/contactUs",
    component: lazy(() => import("../Pages/Auth/ContactUs")),
    isPublic: true,
    exact: true,
  },
  {
    path: "/forgotPassword",
    component: lazy(() => import("../Pages/Auth/ForgotPassword")),
    isPublic: true,
    exact: true,
  },
]
  .concat(guestRoutes)
  .concat(adminRoutes)
  .concat(traineeRoutes)
  .concat(serviceProviderRoutes);

export default routes;
