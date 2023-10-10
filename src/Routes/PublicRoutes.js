import React, { useEffect } from "react";
import { guestRole } from "./routeConfig";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setGuest } from "../Redux/features/User/userSlice";
// import getIntialURL from "../Shared/HelperMethods/getInitialURL";

export function PublicRoute({ Component, props }) {
  //   const userDetail = useSelector((state) => state.Auth);
  const { isGuest } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isGuest && props.role === guestRole) {
      dispatch(setGuest(true));
    console.log('here', isGuest, props)

    }
  }, [props]);

  const token = null;
  if (token) {
    //   const roleId = userDetail.user.RoleId;
    //   return (
    //     <Redirect
    //       to={getIntialURL(roleId)}
    //     />
    //   );
  } else {
    return <Component {...props} />;
  }
}
