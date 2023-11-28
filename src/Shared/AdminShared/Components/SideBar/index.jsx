import React from "react";
import classNames from "classnames";
import {
  FaBriefcase,
  FaCopy,
  FaHome,
  FaImage,
  FaPaperPlane,
  FaQuestion,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { NavItem, NavLink, Nav } from "reactstrap";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h3>Bootstrap Sidebar</h3>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <p>Dummy Heading</p>

        <SubMenu title="Home" icon={<FaHome className="me-2" />} items={submenus[0]} />
        <NavItem>
          <NavLink tag={Link} to={"/about"}>
            <FaBriefcase className="me-2"/>
            About
          </NavLink>
        </NavItem>
        <SubMenu title="Pages" icon={<FaCopy className="me-2" />} items={submenus[1]} />
        <NavItem>
          <NavLink tag={Link} to={"/pages"} className="d-flex align-items-center">
            <FaImage className="me-2" />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/faq"}>
            <FaQuestion className="me-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/contact"}>
            <FaPaperPlane className="me-2" />
            Contact
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
