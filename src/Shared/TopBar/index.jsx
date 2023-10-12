import React, { useState, useEffect, memo, useCallback } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import FillBtn from "../Buttons/FillBtn";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../Buttons/OutlineBtn";
import { FaPeopleGroup } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../Assets/Images/homeScreen/Logo.svg";
import { setLanguageInStorage } from "../../utils/functions";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { setLanguage } from "../../Redux/features/Language/languageSlice";
import { ENGLISH_LANGUAGE, ARABIC_LANGUAGE } from "../../utils/constants";
import { FaAddressCard, FaBars, FaHome, FaServicestack } from "react-icons/fa";

const TopBar = (props) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation("");
  const { lang: currentLanguage } = useSelector((state) => state?.language);

  const [isSliding, setIsSliding] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [showNavItems, setShowNavItems] = useState(true);
  const [backgroundClass, setBackgroundClass] = useState(
    props.isPublic
      ? props?.isGuest
        ? "bg-white-custom"
        : "bg-transparent"
      : "bg-white-custom"
  );

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
  }, [props.isPublic, location.pathname]);

  useEffect(() => {
    if (props.isPublic && location.pathname === "/registerAs") {
      setShowNavItems(false);
    } else {
      setShowNavItems(true);
    }

    if (
      props.isPublic &&
      (location.pathname === "/termAndCondition" ||
        location.pathname === "/signIn" ||
        location.pathname === "/contactUs")
    ) {
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
    }
  }, [location.pathname, props.isPublic]);

  const listenScrollEvent = () => {
    if (!props?.isGuest && props?.isPublic) {
      if (window.scrollY > 200) {
        setBackgroundClass("bg-dark");
      } else {
        setBackgroundClass("bg-transparent");
      }
    }
  };

  const slide = () => {
    setIsSliding(!isSliding);
  };

  const selectLanguage = (language) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
    setLanguageInStorage(language);
  };

  const handleSignUpClick = useCallback(() => {
    navigate("/registerAs");
  }, [navigate]);

  const handleSignInClick = useCallback(() => {
    navigate("/signIn");
  }, [navigate]);

  return (
    <>
      {showTopBar && (
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
                <NavbarToggler className={"text-white"} onClick={slide}>
                  <FaBars />
                </NavbarToggler>
                <Nav className={"mx-auto gap-2 d-lg-flex d-none"} navbar>
                  <NavItem className={`${styles.navItem}`}>
                    <NavLink
                      className={`${styles.navLink}`}
                      href="/components/"
                    >
                      {t("landing.homeText")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={`${styles.navLink}`}
                      href="/components/"
                    >
                      {t("landing.servicesText")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={`${styles.navLink}`}
                      href="/components/"
                    >
                      {t("landing.fitneeCommunityText")}
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <Link
                      className={`nav-link ${styles.navLink}`}
                      to="/contactUs"
                    >
                      {t("landing.contactUsText")}
                    </Link>
                  </NavItem>
                </Nav>

                {!props?.isGuest && (
                  <Nav className={`ml-auto d-lg-flex d-none ${styles.nav}`}>
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
                          onClick={() => selectLanguage(ARABIC_LANGUAGE)}
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
                          onClick={() => selectLanguage(ENGLISH_LANGUAGE)}
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
                      text={"Sign Up"}
                      handleOnClick={handleSignUpClick}
                    />
                    <OutlineBtn
                      className="px-3"
                      text={"Sign In"}
                      handleOnClick={handleSignInClick}
                    />
                  </Nav>
                )}
              </>
            )}
          </Navbar>
          <div
            onClick={slide}
            className={`d-lg-none d-block pt-5 ${styles.mobileView} h-100 ${
              isSliding ? styles["slide-right"] : styles["slide-left"]
            }`}
          >
            <Nav className={`mx-auto my-5 gap-2 ${styles.nav}`} navbar>
              <NavItem className={`${styles.NavItem}`}>
                <NavLink className={`${styles.NavLink}`} href="/components/">
                  <FaHome className={`fs-2 me-2 ${styles.PGreen}`} />{" "}
                  {t("landing.homeText")}
                </NavLink>
              </NavItem>

              <NavItem className={`${styles.NavItem}`}>
                <NavLink className={`${styles.NavLink}`} href="/components/">
                  <FaServicestack className={`fs-2 me-2 ${styles.PGreen}`} />
                  {t("landing.servicesText")}
                </NavLink>
              </NavItem>

              <NavItem className={`${styles.NavItem}`}>
                <NavLink className={`${styles.NavLink}`} href="/components/">
                  <FaPeopleGroup className={`fs-2 me-2 ${styles.PGreen}`} />{" "}
                  {t("landing.fitneeCommunityText")}
                </NavLink>
              </NavItem>

              <NavItem className={`${styles.NavItem}`}>
                <NavLink className={`${styles.NavLink}`} href="/components/">
                  <FaAddressCard className={`fs-2 me-2 ${styles.PGreen}`} />{" "}
                  {t("landing.contactUsText")}
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <div
            onClick={slide}
            className={`d-lg-none d-block ${styles.bgInverse} h-100 ${
              isSliding
                ? styles["slide-left-blank"]
                : styles["slide-right-blank"]
            }`}
          >
            {/* Content */}
          </div>
        </div>
      )}
    </>
  );
};

export default memo(TopBar);
