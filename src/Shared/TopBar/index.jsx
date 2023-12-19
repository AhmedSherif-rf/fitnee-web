import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Collapse,
} from "reactstrap";

import FillBtn from "../Buttons/FillBtn";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../Buttons/OutlineBtn";
import { PiCaretDownBold } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { FaBars, FaUserEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { GiWallet, GiBodyBalance } from "react-icons/gi";
import InformationModal from "../Modal/InformationModal";
import Logo from "../../Assets/Images/homeScreen/Logo.svg";
import { setLanguageInStorage } from "../../utils/functions";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { FaKey, FaTrashCan, FaCircleArrowUp } from "react-icons/fa6";
import React, { useState, useEffect, memo, useCallback } from "react";
import { setLanguage } from "../../Redux/features/Language/languageSlice";
import {
  ENGLISH_LANGUAGE,
  ARABIC_LANGUAGE,
  TRAINEE_TYPE,
  TRAINER_TYPE,
  NUTRITIONIST_TYPE,
} from "../../utils/constants";

const TopBar = ({ isPublic, isGuest, isPrivate, isAuth }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const { t, i18n } = useTranslation("");
  const roleType = localStorage.getItem("role");
  const { lang: currentLanguage } = useSelector((state) => state?.language);

  useEffect(() => {
    if (isPublic) {
      window.addEventListener("scroll", listenScrollEvent);
    }

    if (isPrivate || isGuest) {
      setBackgroundClass("bg-white-custom");
    } else if (isPublic) {
      setBackgroundClass("bg-transparent");
    }

    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [isPublic, location.pathname]);

  useEffect(() => {
    if (isPublic && isAuth) {
      setShowNavItems(false);
    } else {
      setShowNavItems(true);
    }

    if (
      isPublic &&
      (location.pathname === "/termAndCondition" ||
        location.pathname === "/signIn" ||
        location.pathname === "/contactUs" ||
        location.pathname === "/forgotPassword" ||
        location.pathname === "/changePassword")
    ) {
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
    }
  }, [location.pathname, isAuth, isPublic]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [collapsed, setCollapsed] = useState(true);
  const [collapsedList, setCollapsedList] = useState(true);
  const [showNavItems, setShowNavItems] = useState(true);
  const [
    showSubscriptionInformationModal,
    setShowSubscriptionInformationModal,
  ] = useState(false);

  const toggleNavbarList = () => {
    setCollapsedList(!collapsedList);
  };
  const [deleteAccountModal, setDeleteAccountModal] = useState(false);

  const [backgroundClass, setBackgroundClass] = useState(
    isPublic
      ? isGuest
        ? "bg-white-custom"
        : "bg-transparent"
      : "bg-white-custom"
  );

  const textClass = isPublic
    ? isGuest
      ? "text-black-custom"
      : "text-white"
    : "text-black-custom";

  const listenScrollEvent = () => {
    if (!isGuest && isPublic) {
      if (window.scrollY > 180) {
        setBackgroundClass("customBgDark");
      } else {
        setBackgroundClass("bg-transparent");
      }
    }
  };

  const selectLanguage = (language) => {
    dispatch(setLanguage(language));
    i18n.changeLanguage(language);
    setLanguageInStorage(language);
  };

  const handleSignUpClick = useCallback(() => {
    navigate("/registerAs");
  }, [navigate]);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const handleSignInClick = useCallback(() => {
    navigate("/signIn");
  }, [navigate]);

  const handleSubscriptionInformationModalClose = useCallback(() => {
    setShowSubscriptionInformationModal(false);
  }, []);

  const handleDeleteAccountModalClose = useCallback(() => {
    setDeleteAccountModal(false);
  }, []);

  const handleDeleteAccountClick = useCallback(() => {
    setDeleteAccountModal(false);
  }, []);

  const handleDeleteClick = () => {
    setDeleteAccountModal(true);
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("role");
    navigate("/");
  };

  const handleSubscriptionClick = useCallback(() => {
    navigate("/registerAs");
  }, [navigate]);

  const handleFitneeCommunityClick = useCallback(() => {
    setShowSubscriptionInformationModal(true);
  }, []);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      {showTopBar && (
        <div>
          <Navbar
            className={`${styles.navbar} ${backgroundClass} p-2`}
            expand="lg"
            fixed="top"
          >
            <Link
              className="text-start d-block w-25"
              to={
                roleType === TRAINEE_TYPE
                  ? "/trainee/dashboard"
                  : roleType === TRAINER_TYPE || roleType === NUTRITIONIST_TYPE
                  ? "/serviceProvider/dashboard"
                  : "/"
              }
            >
              <img src={Logo} alt={"website-logo"} />
            </Link>
            {showNavItems && (
              <>
                <NavbarToggler
                  className={"textYellow pb-2"}
                  onClick={toggleNavbar}
                >
                  <FaBars />
                </NavbarToggler>
                <Collapse isOpen={!collapsed} className="w-100 mt-2 text-white">
                  <Nav
                    className={` py-4 ${styles.nav} customBgDark caret`}
                    navbar
                  >
                    {!isPrivate && roleType === null && (
                      <>
                        <NavItem className={`${styles.NavItem}`}>
                          <Link to="/">
                            {" "}
                            <span className={`px-1 borderHover`}>
                              {t("landing.homeText")}
                            </span>
                          </Link>
                        </NavItem>

                        <NavItem
                          className={`${styles.NavItem}`}
                          onClick={toggleNavbarList}
                        >
                          <span className={`px-1 borderHover`}>
                            {t("landing.servicesText")}
                          </span>

                          <Collapse
                            isOpen={!collapsedList}
                            className="text-center bg-dark"
                          >
                            <Nav navbar>
                              <NavItem>
                                <Link
                                  className="w-100 d-flex align-items-center"
                                  to="/guest/serviceProviderList/trainer"
                                >
                                  <p className="mb-0">
                                    {t("landing.trainersText")}
                                  </p>
                                </Link>
                              </NavItem>
                              <NavItem>
                                <Link
                                  className="w-100 d-flex align-items-center"
                                  to="/guest/serviceProviderList/nutritionist"
                                >
                                  <p className="mb-0">
                                    {t("landing.nutritionistsText")}
                                  </p>
                                </Link>
                              </NavItem>
                              <NavItem>
                                <Link
                                  className=" d-flex align-items-center"
                                  to="/guest/services"
                                >
                                  <p className="mb-0">
                                    {t("landing.exerciseText")}
                                  </p>
                                </Link>
                              </NavItem>
                            </Nav>
                          </Collapse>
                        </NavItem>

                        <NavItem className={`${styles.NavItem}`}>
                          <Link to="#" onClick={handleFitneeCommunityClick}>
                            <span className={`px-1 borderHover`}>
                              {t("landing.fitneeCommunityText")}
                            </span>{" "}
                          </Link>
                        </NavItem>

                        <NavItem className={`${styles.NavItem}`}>
                          <Link to="/contactUs">
                            <span className={`px-1 borderHover`}>
                              {t("landing.contactUsText")}
                            </span>
                          </Link>
                        </NavItem>
                      </>
                    )}
                    {!isGuest && roleType !== null && (
                      <div>
                        <NavItem className={`${styles.NavItem} p-2`}>
                          <Link
                            className={`nav-link ${styles.NavLink}`}
                            to={
                              roleType === TRAINEE_TYPE
                                ? "/trainee/dashboard"
                                : "/serviceProvider/dashboard"
                            }
                          >
                            <RiDashboardFill
                              className={`fs-2 me-3 text-white`}
                            />
                            {"Dashboard"}
                          </Link>
                        </NavItem>
                        <NavItem className={`${styles.NavItem} p-2`}>
                          <Link
                            className={`nav-link ${styles.NavLink}`}
                            to={
                              roleType === TRAINEE_TYPE
                                ? "/trainee/editProfile"
                                : "/serviceProvider/editProfile"
                            }
                          >
                            <FaUserEdit className={`fs-2 me-3 text-white`} />
                            {"Edit Profile"}
                          </Link>
                        </NavItem>
                        {roleType && roleType !== TRAINEE_TYPE && (
                          <>
                            <NavItem className={`${styles.NavItem} p-2`}>
                              <Link
                                className={`nav-link ${styles.NavLink}`}
                                to="/serviceProvider/paymentHistory"
                              >
                                <GiWallet className={`fs-2 me-3 text-white`} />
                                {"Wallet"}
                              </Link>
                            </NavItem>
                          </>
                        )}

                        <NavItem className={`${styles.NavItem} p-2`}>
                          <Link
                            className={`nav-link ${styles.NavLink}`}
                            to={
                              roleType === TRAINEE_TYPE
                                ? "/trainee/resetPassword"
                                : "/serviceProvider/resetPassword"
                            }
                          >
                            <FaKey className={`fs-2 me-3 text-white`} />
                            {"Change Password"}
                          </Link>
                        </NavItem>

                        <NavItem className={`${styles.NavItem} p-2`}>
                          <div
                            className="d-flex align-items-center w-100 p-1"
                            onClick={handleDeleteClick}
                          >
                            <FaTrashCan className={`fs-2 me-3 text-white`} />
                            {"Delete Account"}
                          </div>
                        </NavItem>

                        <NavItem className={`${styles.NavItem} p-2`}>
                          <div
                            className="d-flex align-items-center w-100 p-1"
                            onClick={handleLogoutClick}
                          >
                            <FaCircleArrowUp
                              className={`fs-2 me-3 text-white`}
                            />
                            {"Logout"}
                          </div>
                        </NavItem>
                      </div>
                    )}
                  </Nav>
                  {!isGuest && !isPrivate && roleType === null && (
                    <>
                      {!isGuest && !isPrivate && roleType === null && (
                        <Nav
                          className={`ml-auto d-lg-none d-block ${styles.nav}`}
                        >
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
                                </span>
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
                                </span>
                                <span>{"English (US)"}</span>
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                          <FillBtn
                            className="px-3 w-100 mb-2"
                            text={t("landing.signUpText")}
                            handleOnClick={handleSignUpClick}
                          />
                          <OutlineBtn
                            className="px-3 w-100"
                            text={t("landing.signInText")}
                            handleOnClick={handleSignInClick}
                          />
                        </Nav>
                      )}
                    </>
                  )}
                </Collapse>
                {roleType === null && (
                  <Nav className={"d-lg-flex d-none"} navbar>
                    <NavItem className={`${styles.navItem}`}>
                      <Link
                        className={`nav-link ${styles.navLink} ${textClass}`}
                        to="/"
                      >
                        <span className={`borderHover`}>
                          {" "}
                          {t("landing.homeText")}
                        </span>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <UncontrolledDropdown
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        isOpen={isDropdownOpen}
                      >
                        <DropdownToggle
                          className={`${styles.navLink} ${textClass} nav-link bg-transparent border-0 p-0 mb-0 mt-2`}
                        >
                          <span className={`px-1 borderHover`}>
                            {t("landing.servicesText")}
                          </span>
                        </DropdownToggle>
                        <DropdownMenu
                          style={{
                            right: 0,
                            left: "auto",
                            opacity: isDropdownOpen ? 1 : 0,
                          }}
                        >
                          <DropdownItem>
                            <Link
                              className="w-100 d-flex align-items-center"
                              to="/guest/serviceProviderList/trainer"
                            >
                              <p className="text-black-custom mb-0">
                                {t("landing.trainersText")}
                              </p>
                            </Link>
                          </DropdownItem>

                          <DropdownItem>
                            <Link
                              className="w-100 d-flex align-items-center"
                              to="/guest/serviceProviderList/nutritionist"
                            >
                              <p className="text-black-custom mb-0">
                                {t("landing.nutritionistsText")}
                              </p>
                            </Link>
                          </DropdownItem>

                          <DropdownItem>
                            <Link
                              className=" d-flex align-items-center"
                              to="/guest/services"
                            >
                              <p className="text-black-custom mb-0">
                                {t("landing.exerciseText")}
                              </p>
                            </Link>
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledDropdown>
                    </NavItem>
                    <NavItem>
                      <div
                        onClick={handleFitneeCommunityClick}
                        className={`nav-link ${styles.navLink} ${textClass}`}
                      >
                        <span className={`borderHover`}>
                          {t("landing.fitneeCommunityText")}
                        </span>
                      </div>
                    </NavItem>
                    <NavItem>
                      <Link
                        className={`nav-link ${styles.navLink} ${textClass}`}
                        to="/contactUs"
                      >
                        <span className={`borderHover`}>
                          {t("landing.contactUsText")}
                        </span>
                      </Link>
                    </NavItem>
                  </Nav>
                )}
                {!isGuest && !isPrivate && roleType === null && (
                  <Nav className={`d-md-flex d-none gap-2`}>
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
                          </span>
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
                          </span>
                          <span>{"English (US)"}</span>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                    <FillBtn
                      className="px-3 ms-1 shadow-none"
                      text={t("landing.signUpText")}
                      handleOnClick={handleSignUpClick}
                    />
                    <OutlineBtn
                      className="px-3 shadow-none"
                      text={t("landing.signInText")}
                      handleOnClick={handleSignInClick}
                    />
                  </Nav>
                )}
                {!isGuest && !isPublic && (
                  <Nav className={`d-lg-flex d-none  ${styles.nav}`}>
                    <UncontrolledDropdown>
                      <DropdownToggle className="p-0" nav>
                        <div
                          className="bgProperties rounded-circle"
                          style={{
                            backgroundImage: `url(${Images.PROFILE4_IMG})`,
                            width: "40px",
                            height: "40px",
                          }}
                        ></div>
                      </DropdownToggle>
                      <DropdownMenu
                        className="custom-dropdown-menu"
                        style={{ right: 0, left: "auto" }}
                      >
                        <DropdownItem className="p-0">
                          <Link
                            className="w-100 p-1"
                            to={
                              roleType === TRAINEE_TYPE
                                ? "/trainee/dashboard"
                                : "/serviceProvider/dashboard"
                            }
                          >
                            <div className="d-flex align-items-center">
                              <span className="textParrotGreen me-2">
                                <RiDashboardFill className="mb-1" />
                              </span>
                              <p className="text-black-custom mb-0">
                                Dashboard
                              </p>
                            </div>
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="p-0">
                          <Link
                            className="w-100 p-1"
                            to={
                              roleType === TRAINEE_TYPE
                                ? "/trainee/editProfile"
                                : "/serviceProvider/editProfile"
                            }
                          >
                            <div className="d-flex align-items-center w-100">
                              <span className="textParrotGreen me-2">
                                <FaUserEdit className="mb-1" />
                              </span>
                              <p className="text-black-custom mb-0">
                                Edit Profile
                              </p>
                            </div>
                          </Link>
                        </DropdownItem>
                        {roleType && roleType !== TRAINEE_TYPE && (
                          <>
                            <DropdownItem className="p-0">
                              <Link
                                className="w-100 p-1"
                                to="/serviceProvider/paymentHistory"
                              >
                                <div className="d-flex align-items-center">
                                  <span className="textParrotGreen me-2">
                                    <GiWallet className="mb-1" />
                                  </span>
                                  <p className="text-black-custom mb-0">
                                    Wallet
                                  </p>
                                </div>
                              </Link>
                            </DropdownItem>
                          </>
                        )}

                        <DropdownItem className="p-0">
                          <Link
                            className="w-100 p-1"
                            to={
                              roleType === TRAINEE_TYPE
                                ? "/trainee/resetPassword"
                                : "/serviceProvider/resetPassword"
                            }
                          >
                            <div className="d-flex align-items-center">
                              <span className="textParrotGreen me-2">
                                <FaKey className="mb-1" />
                              </span>
                              <p className="text-black-custom mb-0">
                                Change Password
                              </p>
                            </div>
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="p-0">
                          <div
                            className="d-flex align-items-center w-100 p-1"
                            onClick={handleDeleteClick}
                          >
                            <span className="textParrotGreen me-2 d-flex">
                              <FaTrashCan className="mb-1" />
                            </span>
                            <p className="text-black-custom mb-0">
                              Delete Account
                            </p>
                          </div>
                        </DropdownItem>
                        <DropdownItem className="p-0">
                          <div
                            className="d-flex align-items-center w-100 p-1"
                            onClick={handleLogoutClick}
                          >
                            <span className="textParrotGreen me-2 d-flex">
                              <FaCircleArrowUp className="mb-1" />
                            </span>
                            <p className="text-black-custom mb-0">Logout</p>
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                )}
              </>
            )}
          </Navbar>
        </div>
      )}

      <InformationModal
        size={"md"}
        TOneClassName={"fw-bold mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={showSubscriptionInformationModal}
        onClose={handleSubscriptionInformationModalClose}
        ModalTextOne={t("landing.communityFirstText")}
        ButtonOne={
          <FillBtn
            text={t("guest.subscribeText")}
            className="py-2 px-5"
            handleOnClick={handleSubscriptionClick}
          />
        }
        ButtonTwo={
          <OutlineBtn
            text={t("guest.notNowText")}
            className="py-2 px-5"
            handleOnClick={handleSubscriptionInformationModalClose}
          />
        }
      />

      <InformationModal
        size={"md"}
        TOneClassName={"fw-bold mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={deleteAccountModal}
        onClose={handleDeleteAccountModalClose}
        ModalTextOne="Are you sure to want to delete your account?"
        ButtonOne={
          <FillBtn
            text={t("signup.yesText")}
            className="py-2 px-5"
            handleOnClick={handleDeleteAccountClick}
          />
        }
        ButtonTwo={
          <OutlineBtn
            text={"No"}
            className="py-2 px-5"
            handleOnClick={handleDeleteAccountModalClose}
          />
        }
      />
    </>
  );
};

export default memo(TopBar);
