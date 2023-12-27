import React from "react";
import SubMenu from "./SubMenu";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { NavItem, NavLink, Nav } from "reactstrap";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { GoPersonAdd, GoPaste, GoLog } from "react-icons/go";
import Logo from "../../../../Assets/Images/homeScreen/Logo.svg";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <img className="py-5" src={Logo} alt={"website-logo"} />
    </div>
    <div
      className="side-menu overflow-y-scroll"
      style={{ overflowY: "scroll", overflowX: "hidden" }}
    >
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
        <SubMenu
          title="Exercises"
          icon={<MdOutlineSportsGymnastics />}
          items={submenus[2]}
        />
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/admin/reports"}
          >
            <GoLog />
            Reports
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/admin/feedback"}
          >
            <GoPaste />
            Feedback
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
      target: "/admin/users/serviceProviderList",
    },
    {
      title: "Trainee List",
      target: "/admin/users/traineeList",
    },
  ],
  [
    {
      title: "Add Exercises",
      target: "/admin/exercises/addExercises",
    },
    {
      title: "View Exercises",
      target: "/admin/exercises/viewExercises",
    },
  ],
];

export default SideBar;
