import React, { useState, useEffect, memo } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { FaBars } from "react-icons/fa";
import FillBtn from "../Buttons/FillBtn";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../Buttons/OutlineBtn";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../Assets/Images/homeScreen/Logo.svg";
import { setLanguageInStorage } from "../../utils/functions";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { setLanguage } from "../../Redux/features/Language/languageSlice";
import { ENGLISH_LANGUAGE, ARABIC_LANGUAGE } from "../../utils/constants";

const TopBar = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { t, i18n } = useTranslation("");
  const { lang: currentLanguage } = useSelector((state) => state?.language);

  useEffect(() => {
    if (props.isPublic) {
      window.addEventListener("scroll", listenScrollEvent);

      if (location.pathname === "/registerAs") {
        setShowNavItems(false);
      }
    }

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  useEffect(() => {
    if (props.isPublic && location.pathname === "/registerAs") {
      setShowNavItems(false);
    } else {
      setShowNavItems(true);
    }
  }, [location.pathname]);

  const [isOpen, setIsOpen] = useState(false);
  const [showNavItems, setShowNavItems] = useState(true);

  const toggle = () => setIsOpen(!isOpen);

  const [backgroundClass, setBackgroundClass] = useState(
    props.isPublic
      ? props?.isGuest
        ? "bg-white-custom"
        : "bg-transparent"
      : "bg-white-custom"
  );

  const listenScrollEvent = () => {
    if (!props?.isGuest && props?.isPublic) {
      if (window.scrollY > 200) {
        setBackgroundClass("bg-dark");
      } else {
        setBackgroundClass("bg-transparent");
      }
    }
  };

  const selecteLanguage = (language) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
    setLanguageInStorage(language);
  };

  return (
    <div>
      <Navbar
        className={`${styles.navbar} ${backgroundClass} p-2`}
        expand="lg"
        fixed="top"
      >
        <Link to={"/"}>
          <img src={Logo} alt={"website-logo"} />
        </Link>
        {showNavItems && (
          <>
            <NavbarToggler className={"text-white"} onClick={toggle}>
              <FaBars />
            </NavbarToggler>
            <Collapse
              className={`p-3 ${styles.navbarCollapse}`}
              isOpen={isOpen}
              navbar
            >
              <Nav className={"mx-auto gap-2"} navbar>
                <NavItem className={`${styles.navItem}`}>
                  <NavLink className={`${styles.navLink}`} href="/components/">
                    {t("landing.homeText")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={`${styles.navLink}`} href="/components/">
                    {t("landing.servicesText")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className={`${styles.navLink}`} href="/components/">
                    {t("landing.fitneeCommunityText")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={`${styles.navLink}`}
                    href="https://github.com/reactstrap/reactstrap"
                  >
                    {t("landing.contactUsText")}
                  </NavLink>
                </NavItem>
              </Nav>

              {!props?.isGuest && (
                <Nav className={`ml-auto ${styles.nav}`}>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      <img
                        src={
                          currentLanguage === ENGLISH_LANGUAGE
                            ? Images.AMERICAN_FLAG_IMG
                            : Images.ARABIA_FLAG_IMG
                        }
                        alt="Flag_Image"
                      />
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem
                        onClick={() => selecteLanguage(ARABIC_LANGUAGE)}
                      >
                        <span>
                          <img
                            src={Images.ARABIA_FLAG_IMG}
                            alt="Arabia_Flag_Image"
                          />
                        </span>{" "}
                        <span>{"العربية"}</span>
                      </DropdownItem>
                      <DropdownItem
                        onClick={() => selecteLanguage(ENGLISH_LANGUAGE)}
                      >
                        <span>
                          <img
                            src={Images.AMERICAN_FLAG_IMG}
                            alt="America_Flag_Image"
                          />
                        </span>{" "}
                        <span>{"English (US)"}</span>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <FillBtn
                    className="px-3"
                    text={t("landing.signUpText")}
                    handleOnClick={() => navigate("/registerAs")}
                  />
                  <OutlineBtn className="px-3" text=  {t("landing.signInText")} />
                </Nav>
              )}
            </Collapse>
          </>
        )}
      </Navbar>
    </div>
  );
};

export default memo(TopBar);
