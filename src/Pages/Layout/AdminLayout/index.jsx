import React from "react";
import { useState } from "react";
import "../../../Shared/AdminShared/Assets/GlobalStyle.scss";
import SideBar from "../../../Shared/AdminShared/Components/SideBar";
import Content from "../../../Shared/AdminShared/Components/Content";


const AdminLayout = (props) => {
  const [sidebarIsOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!sidebarIsOpen);

  return (
    <div className="App wrapper">
      <SideBar toggle={toggleSidebar} isOpen={sidebarIsOpen} />
      <Content toggleSidebar={toggleSidebar} sidebarIsOpen={sidebarIsOpen} />
    </div>
  );
};

export default AdminLayout;
