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
    path: "/admin/userRequest",
    component: lazy(() => import("../Pages/AdminPages/UserRequest/index")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/Users/serviceProviderList",
    component: lazy(() => import("../Pages/AdminPages/ServiceProviderList")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/Users/traineeList",
    component: lazy(() => import("../Pages/AdminPages/TraineeList")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/reports",
    component: lazy(() => import("../Pages/AdminPages/Reports")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/feedback",
    component: lazy(() => import("../Pages/AdminPages/Feedback")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/exercises/addExercises",
    component: lazy(() => import("../Pages/AdminPages/Exercises/AddExercises")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/exercises/viewExercises",
    component: lazy(() =>
      import("../Pages/AdminPages/Exercises/ViewExercises")
    ),
    exact: true,
    role: adminRole,
  },
];
