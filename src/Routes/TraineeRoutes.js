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
];
