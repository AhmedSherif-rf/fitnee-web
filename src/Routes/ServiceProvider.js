import { lazy } from "react";
import { serviceProviderRole } from "./routeConfig";

export const serviceProviderRoutes = [
  {
    path: "/serviceProvider/dashboard",
    component: lazy(() => import("../Pages/ServiceProviderPages/Dashboard")),
    exact: true,
    role: serviceProviderRole,
  },
  {
    path: "/serviceProvider/subscriber",
    component: lazy(() => import("../Pages/ServiceProviderPages/TraineeList")),
    exact: true,
    role: serviceProviderRole,
  },
  {
    path: "/serviceProvider/subscription",
    component: lazy(() => import("../Pages/ServiceProviderPages/Subscription")),
    exact: true,
    role: serviceProviderRole,
  },
  {
    path: "/serviceProvider/payment",
    component: lazy(() => import("../Pages/ServiceProviderPages/PaymentHistory")),
    exact: true,
    role: serviceProviderRole,
  },
];
