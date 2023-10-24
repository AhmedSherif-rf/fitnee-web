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
    role: traineeRole,
  },
  {
    path: "/trainee/subscriptionHistory",
    component: lazy(() => import("../Pages/TraineePages/SubscriptionDetail")),
    exact: true,
    role: traineeRole,
  },
  {
    path: "/trainee/myProgress",
    component: lazy(() => import("../Pages/TraineePages/MyProgress")),
    exact: true,
    role: traineeRole,
  },
  {
    path: "/trainee/allServiceProviders",
    component: lazy(() => import("../Pages/TraineePages/AllServiceProviders")),
    exact: true,
    isPrivate: true,
    role: traineeRole,
  },
  {
    path: "/trainee/serviceProviderProfile",
    component: lazy(() =>
      import("../Pages/TraineePages/ServiceProviderProfile")
    ),
    exact: true,
    isPrivate: true,
    role: traineeRole,
  },
];
