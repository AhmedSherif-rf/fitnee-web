import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import getIntialURL from "../Shared/HelperMethods/getInitialURL";
export function PrivateRoute({ Component, role, props }) {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    // if (user === null) {
    //   navigate("/signIn");
    // }
  }, [navigate, user]);

  // if (user) {
    // const roleId = userDetail.user.roleId;
    // if (role?.indexOf(roleId) > -1) {
    return <Component {...props} />;
    // } else {
      // <Redirect to={getIntialURL(roleId)} />;
    // return <Redirect to={getIntialURL(roleId)} />;
    // }
  // }
}
