import { lazy } from "react";
import { serviceProviderRole } from "./routeConfig";

export const serviceProviderRoutes = [
  {
    path: "/serviceProvider/dashboard",
    component: lazy(() => import("../Pages/ServiceProviderPages/Dashboard")),
    exact: true,
    role: serviceProviderRole,
  },
];
