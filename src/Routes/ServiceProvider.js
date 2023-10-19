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
    path: "/serviceProvider/currentSubscriber",
    component: lazy(() => import("../Pages/ServiceProviderPages/Dashboard")),
    exact: true,
    role: serviceProviderRole,
  },
  {
    path: "/serviceProvider/subscription",
    component: lazy(() => import("../Pages/ServiceProviderPages/Subscription")),
    exact: true,
    role: serviceProviderRole,
  },
];
