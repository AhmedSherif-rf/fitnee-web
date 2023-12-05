import React from "react";
import SubMenu from "./SubMenu";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { NavItem, NavLink, Nav } from "reactstrap";
import Logo from "../../../../Assets/Images/homeScreen/Logo.svg";
import {
  GoHome,
  GoChecklist,
  GoPaste,
  GoPerson,
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
        <SubMenu title="Home" icon={<GoHome />} items={submenus[0]} />
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
        <SubMenu title="Pages" icon={<GoChecklist />} items={submenus[1]} />
        <NavItem>
          <NavLink
            className="py-3 d-flex align-items-center gap-2"
            tag={Link}
            to={"/pages"}
          >
            <GoPerson />
            Portfolio
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
      title: "Page 1",
      target: "Page-1",
    },
    {
      title: "Page 2",
      target: "Page-2",
    },
  ],
];

export default SideBar;
