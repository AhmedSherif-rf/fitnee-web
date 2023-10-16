import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import getIntialURL from "../Shared/HelperMethods/getInitialURL";
export function PrivateRoute({ Component, role, props }) {
  const token = null;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/signIn");
    }
  }, [navigate]);

  if (token) {
    // const roleId = userDetail.user.roleId;
    // if (role?.indexOf(roleId) > -1) {
    return <Component {...props} />;
    // } else {
    //   <Redirect to={getIntialURL(roleId)} />;
    // return <Redirect to={getIntialURL(roleId)} />;
    // }
  }
}
