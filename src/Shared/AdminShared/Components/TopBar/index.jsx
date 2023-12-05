import "./style.scss";
import React from "react";
import { Navbar, Button } from "reactstrap";
import { CgMenuLeft } from "react-icons/cg";
import { GoBellFill } from "react-icons/go";
import Images from "../../../../HelperMethods/Constants/ImgConstants";

const Topbar = ({ toggleSidebar }) => {
  return (
    <Navbar className="navbar admin-navbar BorderRadius mb-3" expand="md">
      <Button
        color="info"
        onClick={toggleSidebar}
        className="border-0 admin-navbar-toggler"
      >
        <CgMenuLeft color="black" />
      </Button>
      <div className="d-flex gap-3 align-items-center">
        <GoBellFill size={24} />
        <div
          className="bgProperties rounded-circle"
          style={{
            backgroundImage: `url(${Images.PROFILE_IMG})`,
            width: "45px",
            height: "45px",
          }}
        ></div>
        <p className="fs-6 mb-0 fw-bold">John Smith</p>
      </div>
    </Navbar>
  );
};

export default Topbar;
