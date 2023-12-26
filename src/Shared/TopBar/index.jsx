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
import { GiWallet } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../Buttons/OutlineBtn";
import { PiCaretDownBold } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { FaBars, FaUserEdit } from "react-icons/fa";
import { FaKey, FaTrashCan } from "react-icons/fa6";
import { useSelector, useDispatch } from "react-redux";
import InformationModal from "../Modal/InformationModal";
import { logout } from "../../Redux/features/User/userApi";
import { setLanguageInStorage } from "../../utils/functions";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { useLocation, Link, useNavigate } from "react-router-dom";
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
  const { user } = useSelector((state) => state.user);
  const { lang: currentLanguage } = useSelector((state) => state.language);

  const roleType = user?.role ? user?.role.toLowerCase() : null;

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    if (isPublic) {
      setBackgroundClass("bg-transparent");
    }

    setCollapsed(false);

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

  const [collapsed, setCollapsed] = useState(false);
  const [collapsedServiceList, setCollapsedServiceList] = useState(false);
  const [collapsedLangList, setCollapsedLangList] = useState(false);

  const [showNavItems, setShowNavItems] = useState(true);
  const [
    showSubscriptionInformationModal,
    setShowSubscriptionInformationModal,
  ] = useState(false);

  const [deleteAccountModal, setDeleteAccountModal] = useState(false);

  const [backgroundClass, setBackgroundClass] = useState(
    isPublic
      ? isGuest
        ? "bg-white-custom"
        : "bg-transparent"
      : "bg-transparent"
  );

  const textClass = "text-white";

  const listenScrollEvent = () => {
    if (window.scrollY > 20) {
      setBackgroundClass("customBgDark");
    } else {
      setBackgroundClass("bg-transparent");
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
    const data = {
      apiEndpoint: "/logout/"
    };
    dispatch(logout(data)).then(res => {
      navigate("/signIn")
    })
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
              className="text-start d-block w-20"
              to={
                roleType === TRAINEE_TYPE
                  ? "/trainee/dashboard"
                  : roleType === TRAINER_TYPE || roleType === NUTRITIONIST_TYPE
                  ? "/serviceProvider/dashboard"
                  : "/"
              }
            >
              <img
                src={
                  location.pathname === "/"
                    ? Images.LOGO_IMG
                    : Images.SMALL_LOGO_IMG
                }
                alt={"website-logo"}
                style={{ verticalAlign: "sub" }}
              />
            </Link>
            {showNavItems && (
              <>
                <NavbarToggler
                  className={"textYellow d-md-none d-block pb-2"}
                  onClick={toggleNavbar}
                >
                  <FaBars />
                </NavbarToggler>
                {roleType === null && (
                  <Nav className={"d-lg-flex d-none"} navbar>
                    <NavItem>
                      <Link
                        className={`nav-link ${styles.navLink} ${textClass} px-2`}
                        to="/"
                      >
                        <span> {t("landing.homeText")}</span>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <UncontrolledDropdown
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        isOpen={isDropdownOpen}
                      >
                        <DropdownToggle
                          className={`${styles.navLink} ${textClass} bg-transparent border-0 p-0 mb-0 mt-2`}
                        >
                          <span className={`px-2`}>
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
                              className="w-100 d-flex align-items-center"
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
                        className={`nav-link ${styles.navLink} ${textClass} px-2`}
                      >
                        <span>{t("landing.fitneeCommunityText")}</span>
                      </div>
                    </NavItem>
                    <NavItem>
                      <Link
                        className={`nav-link ${styles.navLink} ${textClass} px-2`}
                        to="/contactUs"
                      >
                        <span>{t("landing.contactUsText")}</span>
                      </Link>
                    </NavItem>
                  </Nav>
                )}
                {!isPrivate && roleType === null && (
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
                  <Nav
                    className={`d-lg-flex d-none ${styles.nav} text-black-custom`}
                  >
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
                            <div className="d-flex align-items-center text-black-custom">
                              <span className="me-2">
                                <RiDashboardFill size={16} className="mb-1" />
                              </span>
                              <p className="mb-0">Dashboard</p>
                            </div>
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="p-0">
                          <Link
                            className="w-100 p-1"
                            to={
                              roleType === TRAINEE_TYPE
                                ? "/trainee/editProfile/trainee"
                                : roleType === TRAINER_TYPE
                                ? "/serviceProvider/editProfile/trainer"
                                : "/serviceProvider/editProfile/nutritionist"
                            }
                          >
                            <div className="d-flex align-items-center w-100 text-black-custom">
                              <span className="me-2">
                                <FaUserEdit size={16} className="mb-1" />
                              </span>
                              <p className="mb-0">Edit Profile</p>
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
                                <div className="d-flex align-items-center text-black-custom">
                                  <span className="me-2">
                                    <GiWallet size={16} className="mb-1" />
                                  </span>
                                  <p className="mb-0">Wallet</p>
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
                            <div className="d-flex align-items-center text-black-custom">
                              <span className="me-2">
                                <FaKey size={16} className="mb-1" />
                              </span>
                              <p className="mb-0">Change Password</p>
                            </div>
                          </Link>
                        </DropdownItem>
                        <DropdownItem className="p-0">
                          <div
                            className="d-flex align-items-center w-100 p-1 text-black-custom"
                            onClick={handleDeleteClick}
                          >
                            <span className="me-2 d-flex">
                              <FaTrashCan size={16} className="mb-1" />
                            </span>
                            <p className="mb-0">Delete Account</p>
                          </div>
                        </DropdownItem>
                        <DropdownItem className="p-0">
                          <div
                            className="d-flex align-items-center w-100 p-1 text-black-custom"
                            onClick={handleLogoutClick}
                          >
                            <span className="me-2 d-flex">
                              <FaArrowUp size={16} className="mb-1" />
                            </span>
                            <p className="mb-0">Logout</p>
                          </div>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                )}
              </>
            )}
          </Navbar>
          <Collapse
            isOpen={collapsed}
            className={`text-white w-100 ${styles.collapseScss}`}
            // ref={collapseRef}
          >
            <Nav
              className={`pt-2 ${styles.togglerNav} customBgDark caret`}
              navbar
            >
              {!isPrivate && roleType === null && (
                <>
                  <NavItem className={`${styles.navItem}`}>
                    <Link to="/">
                      {" "}
                      <span className={`px-1`}>{t("landing.homeText")}</span>
                    </Link>
                  </NavItem>

                  <NavItem
                    className={`${styles.navItem}`}
                    onClick={() =>
                      setCollapsedServiceList(!collapsedServiceList)
                    }
                  >
                    <span
                      className={`px-1 d-flex align-items-center justify-content-center`}
                    >
                      {t("landing.servicesText")}
                      <PiCaretDownBold />
                    </span>

                    <Collapse
                      isOpen={collapsedServiceList}
                      className="text-center bg-dark"
                    >
                      <Nav navbar>
                        <NavItem>
                          <Link
                            className="w-100 d-flex align-items-center"
                            to="/guest/serviceProviderList/trainer"
                          >
                            <p className="mb-0">{t("landing.trainersText")}</p>
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
                            <p className="mb-0">{t("landing.exerciseText")}</p>
                          </Link>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </NavItem>

                  <NavItem className={`${styles.navItem}`}>
                    <Link to="#" onClick={handleFitneeCommunityClick}>
                      <span className={`px-1`}>
                        {t("landing.fitneeCommunityText")}
                      </span>{" "}
                    </Link>
                  </NavItem>

                  <NavItem className={`${styles.navItem}`}>
                    <Link to="/contactUs">
                      <span className={`px-1`}>
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
                      {"Dashboard"}
                    </Link>
                  </NavItem>
                  <NavItem className={`${styles.NavItem} p-2`}>
                    <Link
                      className={`nav-link ${styles.NavLink}`}
                      to={
                        roleType === TRAINEE_TYPE
                          ? "/trainee/editProfile/trainee"
                          : roleType === TRAINER_TYPE
                          ? "/serviceProvider/editProfile/trainer"
                          : "/serviceProvider/editProfile/nutritionist"
                      }
                    >
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
                      {"Change Password"}
                    </Link>
                  </NavItem>

                  <NavItem className={`${styles.NavItem} p-2`}>
                    <div
                      className={`nav-link d-flex justify-content-center w-100 p-1`}
                      onClick={handleDeleteClick}
                    >
                      {"Delete Account"}
                    </div>
                  </NavItem>

                  <NavItem className={`${styles.NavItem} p-2`}>
                    <div
                      className="d-flex justify-content-center w-100 p-1"
                      onClick={handleLogoutClick}
                    >
                      {"Logout"}
                    </div>
                  </NavItem>
                </div>
              )}
            </Nav>
            {!isPrivate && roleType === null && (
              <>
                <Nav
                  className={`ml-auto pb-4 d-lg-none d-block customBgDark ${styles.togglerNav}`}
                >
                  <NavItem
                    className={`${styles.navItem}`}
                    onClick={() => setCollapsedLangList(!collapsedLangList)}
                  >
                    <span className={`px-1`}>
                      <img
                        src={
                          currentLanguage === ENGLISH_LANGUAGE
                            ? Images.AMERICAN_FLAG_IMG
                            : Images.ARABIA_FLAG_IMG
                        }
                        alt="Flag_Image"
                      />
                      <PiCaretDownBold />
                    </span>

                    <Collapse
                      isOpen={collapsedLangList}
                      className="text-center bg-dark"
                    >
                      <Nav navbar>
                        <NavItem>
                          <div
                            className="w-100 d-flex justify-content-center align-items-center py-2 text-white gap-2"
                            onClick={() => selectLanguage(ARABIC_LANGUAGE)}
                          >
                            <span>
                              <img
                                src={Images.ARABIA_FLAG_IMG}
                                alt="Arabia_Flag_Image"
                              />
                            </span>
                            <span>{"العربية"}</span>
                          </div>
                        </NavItem>
                        <NavItem>
                          <div
                            className="w-100 d-flex justify-content-center align-items-center py-2 text-white gap-2"
                            onClick={() => selectLanguage(ENGLISH_LANGUAGE)}
                          >
                            <span>
                              <img
                                src={Images.AMERICAN_FLAG_IMG}
                                alt="America_Flag_Image"
                              />
                            </span>
                            <span>{"English (US)"}</span>
                          </div>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </NavItem>
                  <div className="d-flex align-items-center flex-column">
                    <FillBtn
                      className="w-50 px-3 mb-2"
                      text={t("landing.signUpText")}
                      handleOnClick={handleSignUpClick}
                    />
                    <OutlineBtn
                      className="w-50 px-3"
                      text={t("landing.signInText")}
                      handleOnClick={handleSignInClick}
                    />
                  </div>
                </Nav>
              </>
            )}
          </Collapse>
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
