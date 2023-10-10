import { lazy } from "react";
import { adminRoutes } from "./AdminRoutes";
import { guestRoutes } from "./GuestRoutes";
import { traineeRoutes } from "./TraineeRoutes";
import { serviceProviderRoutes } from "./ServiceProvider";

const routes = [
    {
        path: "/",
        component: lazy(() => import("../Pages/Auth/LandingPage")),
        ispublic: true,
        exact: true,
    },
    {
        path: "/registerAs",
        component: lazy(() => import("../Pages/Auth/RegisterAs")),
        ispublic: true,
        exact: true,
    },
    {
        path: "/register/:roleType",
        component: lazy(() => import("../Pages/Auth/Register")),
        ispublic: true,
        exact: true,
    },
    {
        path: "/signIn",
        component: lazy(() => import("../Pages/Auth/SignIn")),
        ispublic: true,
        exact: true,
    },
    {
        path: "/VerifyOtp",
        component: lazy(() => import("../Pages/Auth/VerifyOtp")),
        ispublic: true,
        exact: true,
    },
  ]
  .concat(guestRoutes)
  .concat(adminRoutes)
  .concat(traineeRoutes)
  .concat(serviceProviderRoutes)

export default routes;
