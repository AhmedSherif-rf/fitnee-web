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
    path: "/admin/reviewRequest",
    component: lazy(() => import("../Pages/AdminPages/ReviewRequest")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/editProfileRequest",
    component: lazy(() => import("../Pages/AdminPages/EditProfileRequest")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/user/serviceProviderList",
    component: lazy(() =>
      import("../Pages/AdminPages/User/ServiceProviderList")
    ),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/user/traineeList",
    component: lazy(() => import("../Pages/AdminPages/User/TraineeList")),
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
    path: "/admin/exercises/addExercises/:subCategoryId",
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
  {
    path: "/admin/serviceProviderProfile/:uuid",
    component: lazy(() => import("../Pages/AdminPages/ServiceProviderProfile")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/settings",
    component: lazy(() => import("../Pages/AdminPages/Settings")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/settings/category",
    component: lazy(() => import("../Pages/AdminPages/Settings/Category")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/settings/category/:categoryUuid/:categoryId/subCategory",
    component: lazy(() =>
      import("../Pages/AdminPages/Settings/Category/SubCategory")
    ),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/settings/promoCode",
    component: lazy(() => import("../Pages/AdminPages/PromoCode")),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/reviewRequestDetail/:uuid",
    component: lazy(() =>
      import("../Pages/AdminPages/ReviewRequest/ReviewRequestDetail")
    ),
    exact: true,
    role: adminRole,
  },
  {
    path: "/admin/walletSystem/walletOverview",
    component: lazy(() =>
      import("../Pages/AdminPages/WalletSystem/WalletOverview")
    ),
    exact: true,
    role: adminRole,
  },
];
