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
import styles from "./style.module.scss"; // Import the SCSS styles
import { NavItem, NavLink, Nav } from "reactstrap";

import SubMenu from "./SubMenu";

const SideBar = ({ isOpen, toggle }) => (
  <div className={classNames(styles.Sidebar, { [styles["is-open"]]: isOpen })}>
    <div className={`py-3 ${styles.sidebarHeader}`}>
      <h3>FitNee Admin</h3>
    </div>
    <div className={`${styles.sideMenu}`}>
      <Nav vertical className={`${styles.Nav} pb-3`}>
        <Link to="/admin/setting">Dummy Heading</Link>
        <SubMenu
          title="Home"
          icon={<FaHome className="me-2" />}
          items={submenus[0]}
        />
        <NavItem className={`${styles.NavItem}`}>
          <NavLink className={`${styles.NavLink}`} tag={Link} to={"/about"}>
            <FaBriefcase className="me-2" />
            About
          </NavLink>
        </NavItem>
        <SubMenu
          title="Pages"
          icon={<FaCopy className="me-2" />}
          items={submenus[1]}
        />
        <NavItem className={`${styles.NavItem}`}>
          <NavLink className={`${styles.NavLink}`} tag={Link} to={"/pages"}>
            <FaImage className="me-2" />
            Portfolio
          </NavLink>
        </NavItem>
        <NavItem className={`${styles.NavItem}`}>
          <NavLink className={`${styles.NavLink}`} tag={Link} to={"/faq"}>
            <FaQuestion className="me-2" />
            FAQ
          </NavLink>
        </NavItem>
        <NavItem className={`${styles.NavItem}`}>
          <NavLink className={`${styles.NavLink}`} tag={Link} to={"/contact"}>
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
      title: "Home 3",
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
