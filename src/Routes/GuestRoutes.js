import { lazy } from "react";
import { guestRole } from "./routeConfig";

export const guestRoutes = [
  {
    path: "/guest/serviceProviderList",
    component: lazy(() => import("../Pages/GuestPages/ServiceProviderList")),
    exact: true,
    ispublic: true,
    role: guestRole,
    isGuest: true,
  },
  {
    path: "/guest/serviceProviderProfile",
    component: lazy(() => import("../Pages/GuestPages/ServiceProviderProfile")),
    exact: true,
    ispublic: true,
    role: guestRole,
    isGuest: true,
  },
];
