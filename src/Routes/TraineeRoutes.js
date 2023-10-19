import { lazy } from "react";
import { traineeRole } from "./routeConfig";

export const traineeRoutes = [
  {
    path: "/trainee/dashboard",
    component: lazy(() => import("../Pages/TraineePages/Dashboard")),
    exact: true,
    role: traineeRole,
  },
  {
    path: "/trainee/serviceProviderList",
    component: lazy(() => import("../Pages/TraineePages/ServiceProviderList")),
    exact: true,
    role: traineeRole,
  },
  {
    path: "/trainee/subscriptionDetail",
    component: lazy(() => import("../Pages/TraineePages/SubscriptionDetail")),
    exact: true,
    role: traineeRole,
  },
];
