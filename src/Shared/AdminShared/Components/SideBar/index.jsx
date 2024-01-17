import SubMenu from "./SubMenu";
import React, { memo } from "react";
import { Button } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { GiWallet } from "react-icons/gi";
import styles from "./styles.module.scss";
import { RxDashboard } from "react-icons/rx";
import { NavItem, NavLink, Nav } from "reactstrap";
import { BsPersonBoundingBox } from "react-icons/bs";
import Logo from "../../../../Assets/Images/homeScreen/Logo.svg";
import { GoPersonAdd, GoPaste, GoLog, GoGear } from "react-icons/go";

const SideBar = ({ isOpen, toggle }) => (
  <div
    className={`${styles.sideNav} ${classNames("sidebar position-relative", {
      "is-open": isOpen,
    })}`}
  >
    <div className="sidebar-header">
      <Button
        onClick={toggle}
        style={{ right: "0", color: "red" }}
        className="admin-navbar-toggler position-absolute bg-transparent border-0 fs-3 d-lg-none d-block"
      >
        &times;
      </Button>
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
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/admin/reviewRequest"}
          >
            <BsPersonBoundingBox />
            Review Requests
          </NavLink>
        </NavItem>
        <SubMenu title="Users" icon={<GoPersonAdd />} items={submenus[0]} />
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/admin/exercises/viewExercises"}
          >
            <BsPersonBoundingBox />
            Exercises
          </NavLink>
        </NavItem>
        <SubMenu
          title="Wallet System"
          icon={<GiWallet />}
          items={submenus[1]}
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

        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/admin/settings"}
          >
            <GoGear />
            Settings
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </div>
);

const submenus = [
  [
    {
      title: "Service Provider List",
      target: "/admin/user/serviceProviderList",
    },
    {
      title: "Trainee List",
      target: "/admin/user/traineeList",
    },
  ],
  [
    {
      title: "Wallet Overview",
      target: "/admin/walletSystem/walletOverview",
    },
  ],
];

export default memo(SideBar);
