import { lazy } from "react";
import { traineeRole } from "./routeConfig";

export const traineeRoutes = [
  {
    path: "/trainee/dashboard",
    component: lazy(() => import("../Pages/TraineePages/Dashboard")),
    exact: true,
    isPrivate: true,
    theme: "light",
    role: traineeRole,
  },
  {
    path: "/trainee/serviceProviderList",
    component: lazy(() => import("../Pages/TraineePages/ServiceProviderList")),
    exact: true,
    isPrivate: true,
    theme: "light",
    role: traineeRole,
  },
  {
    path: "/trainee/subscriptionHistory",
    component: lazy(() => import("../Pages/TraineePages/SubscriptionDetail")),
    exact: true,
    isPrivate: true,
    theme: "light",
    role: traineeRole,
  },
  {
    path: "/trainee/allServiceProvider/:roleType",
    component: lazy(() => import("../Pages/TraineePages/AllServiceProvider")),
    exact: true,
    isPrivate: true,
    theme: "light",
    role: traineeRole,
  },
  {
    path: "/trainee/serviceProviderProfile",
    component: lazy(() =>
      import("../Pages/TraineePages/ServiceProviderProfile")
    ),
    exact: true,
    isPrivate: true,
    theme: "light",
    role: traineeRole,
  },
  {
    path: "/trainee/subscriptions",
    component: lazy(() => import("../Pages/TraineePages/Subscriptions")),
    exact: true,
    isPrivate: true,
    theme: "light",
    role: traineeRole,
  },
  {
    path: "/trainee/subscriptions/creditCardDetail",
    component: lazy(() => import("../Pages/TraineePages/CreditCardDetail")),
    exact: true,
    isPrivate: true,
    theme: "light",
    role: traineeRole,
  },
  {
    path: "/trainee/appDownloadLink",
    component: lazy(() => import("../Pages/TraineePages/AppDownloadLink")),
    exact: true,
    isPrivate: true,
    theme: "light",
    role: traineeRole,
  },
  {
    path: "/trainee/resetPassword",
    component: lazy(() => import("../Pages/TraineePages/ResetPassword")),
    exact: true,
    isPrivate: true,
    theme: "light",
    role: traineeRole,
  },
  {
    path: "/trainee/editProfile",
    component: lazy(() => import("../Pages/TraineePages/EditProfile")),
    exact: true,
    isPrivate: true,
    theme: "light",
    role: traineeRole,
  },
];
