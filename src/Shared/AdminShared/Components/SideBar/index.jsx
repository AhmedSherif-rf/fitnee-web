import React from "react";
import SubMenu from "./SubMenu";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { NavItem, NavLink, Nav } from "reactstrap";
import Logo from "../../../../Assets/Images/homeScreen/Logo.svg";
import {
  GoHome,
  GoPersonAdd,
  GoPaste,
  GoLog,
  GoSortAsc,
  GoTools,
} from "react-icons/go";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <img className="py-5" src={Logo} alt={"website-logo"} />
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/admin/dashboard"}
          >
            <RxDashboard />
            Dashboard
          </NavLink>
        </NavItem>

        <SubMenu title="Users" icon={<GoPersonAdd />} items={submenus[1]} />
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/admin/Reports"}
          >
            <GoLog />
            Reports
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/about"}
          >
            <GoPaste />
            About
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/faq"}
          >
            <GoSortAsc />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/contact"}
          >
            <GoTools />
            Setting
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Home 1",
      target: "Home-1",
    },
    {
      title: "Home 2",
      target: "Home-2",
    },
    {
      itle: "Home 3",
      target: "Home-3",
    },
  ],
  [
    {
      title: "Service Provider List",
      target: "/admin/Users/ServiceProviderList",
    },
    {
      title: "Trainee List",
      target: "/admin/Users/TraineeList",
    },
  ],
];

export default SideBar;
