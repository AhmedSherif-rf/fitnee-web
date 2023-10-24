import { lazy } from "react";
import { traineeRole } from "./routeConfig";

export const traineeRoutes = [
  {
    path: "/trainee/dashboard",
    component: lazy(() => import("../Pages/TraineePages/Dashboard")),
    exact: true,
    isPrivate: true,
    role: traineeRole,
  },
  {
    path: "/trainee/serviceProviderList",
    component: lazy(() => import("../Pages/TraineePages/ServiceProviderList")),
    exact: true,
    isPrivate: true,
    role: traineeRole,
  },
  {
    path: "/trainee/subscriptionHistory",
    component: lazy(() => import("../Pages/TraineePages/SubscriptionDetail")),
    exact: true,
    isPrivate: true,
    role: traineeRole,
  },
];
