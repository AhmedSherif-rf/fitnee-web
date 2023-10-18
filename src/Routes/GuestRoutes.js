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
  {
    path: "/guest/serviceProvider/subscription",
    component: lazy(() =>
      import("../Pages/GuestPages/ServiceProviderSubscription")
    ),
    exact: true,
    ispublic: true,
    role: guestRole,
    isGuest: true,
  },
  {
    path: "/guest/services",
    component: lazy(() => import("../Pages/GuestPages/Service")),
    exact: true,
    ispublic: true,
    role: guestRole,
    isGuest: true,
  },
  {
    path: "/guest/exercises",
    component: lazy(() => import("../Pages/GuestPages/Exercise")),
    exact: true,
    ispublic: true,
    role: guestRole,
    isGuest: true,
  },
];
