import React, { useLayoutEffect } from "react";
import { guestRole } from "./routeConfig";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getInitialUrl } from "../utils/functions";
import { setGuest } from "../Redux/features/User/userSlice";

export function PublicRoute({ Component, props }) {
  //   const userDetail = useSelector((state) => state.Auth);
  const { isGuest, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!isGuest && props.role === guestRole) {
      dispatch(setGuest(true));
    }
    if (user) {
      navigate(getInitialUrl(user?.role));
    }
  }, [dispatch, isGuest, navigate, props.role, user]);

  // if (user) {
  //   return navigate(getInitialUrl(user?.role));
  // } else {
    return <Component {...props} />;
  // }
}
