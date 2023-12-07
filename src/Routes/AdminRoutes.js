import { lazy } from "react";
import { adminRole } from "./routeConfig";

export const adminRoutes = [
  {
    path: "/admin/dashboard",
    component: lazy(() => import("../Pages/AdminPages/Dashboard")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/Users/ServiceProviderList",
    component: lazy(() => import("../Pages/AdminPages/ServiceProviderList")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/Users/TraineeList",
    component: lazy(() => import("../Pages/AdminPages/TraineeList")),
    exact: true,
    role: adminRole,
  },
];
