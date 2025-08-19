import React from "react";
import { useState } from "react";
import "../../../Shared/AdminShared/Assets/GlobalStyle.scss";
import SideBar from "../../../Shared/AdminShared/Components/SideBar";
import Content from "../../../Shared/AdminShared/Components/Content";
import {
  useTrackSignupNavigation,
  useCheckFromSignup,
} from "../../../hooks/useSignupNavigation";
import AppsFlyerScript from "../../../components/AppsFlyerScript";

const AdminLayout = (props) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  // Track signup navigation
  useTrackSignupNavigation();

  // Check if AppsFlyer script should be shown
  const { shouldShowAppsFlyerScript } = useCheckFromSignup();

  return (
    <React.Fragment>
      {/* Conditionally render AppsFlyer script if navigated from signup */}
      {shouldShowAppsFlyerScript() && <AppsFlyerScript />}

      <div className="App wrapper">
        <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
        <Content
          children={props.children}
          toggleSidebar={toggleSidebar}
          sidebarIsOpen={sidebarIsOpen}
        />
      </div>
    </React.Fragment>
  );
};

export default AdminLayout;
