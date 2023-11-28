import { lazy } from "react";
import { adminRole } from "./routeConfig";

export const adminRoutes = [
  {
    path: "/admin",
    component: lazy(() => import("../Pages/AdminPages/Dashboard")),
    exact: true,
    role: adminRole,
  },
];
