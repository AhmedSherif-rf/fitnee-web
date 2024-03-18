import SubMenu from "./SubMenu";
import React, { memo } from "react";
import { Button } from "reactstrap";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { GiWallet } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineReviews } from "react-icons/md";
import { NavItem, NavLink, Nav } from "reactstrap";
import { FaEdit, FaRunning } from "react-icons/fa";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { GoPersonAdd, GoPaste, GoLog, GoGear } from "react-icons/go";
import Images from "../../../../HelperMethods/Constants/ImgConstants";

const SideBar = ({ isOpen, toggle }) => (
  <div
    className={`${classNames("sidebar", {
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
      <img className="py-5" src={Images.LOGO_IMG} alt={"website-logo"} />
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
            <MdOutlineReviews />
            Review Requests
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/admin/editProfileRequest"}
          >
            <FaEdit />
            Edit Profile Requests
          </NavLink>
        </NavItem>
        <SubMenu title="Users" icon={<GoPersonAdd />} items={submenus[0]} />
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/admin/exercises/viewExercises"}
          >
            <FaRunning />
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
        <SubMenu title="Feedback" icon={<GoPaste />} items={submenus[2]} />
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/admin/community"}
          >
            <IoChatboxEllipsesOutline />
            Community
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
    {
      title: "Fully Booked",
      target: "/admin/user/fullyBooked",
    },
  ],
  [
    {
      title: "Wallet Overview",
      target: "/admin/walletSystem/walletOverview",
    },
  ],
  [
    {
      title: "Platform Feedback",
      target: "/admin/platformFeedback",
    },
    {
      title: "Service Provider Feedback",
      target: "/admin/serviceProviderFeedback",
    },
  ],
];

export default memo(SideBar);
