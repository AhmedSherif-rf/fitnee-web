import React, { useState, useEffect, memo, useCallback } from "react";
import {
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardBody,
  CardFooter,
} from "reactstrap";

import { BiHome } from "react-icons/bi";
import FillBtn from "../Buttons/FillBtn";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../Buttons/OutlineBtn";
import { PiCaretDownBold } from "react-icons/pi";
import { RiDashboardFill } from "react-icons/ri";
import { FaKey, FaTrashCan } from "react-icons/fa6";
import { FaBars, FaUserEdit } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { GiWallet, GiBodyBalance } from "react-icons/gi";
import InformationModal from "../Modal/InformationModal";
import Logo from "../../Assets/Images/homeScreen/Logo.svg";
import { setLanguageInStorage } from "../../utils/functions";
import Images from "../../HelperMethods/Constants/ImgConstants";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { PiUsersFourThin, PiAddressBookBold } from "react-icons/pi";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isPublic, location.pathname]);

  useEffect(() => {
    if (
      props?.isPublic &&
      (location.pathname === "/registerAs" || props?.isAuth)
    ) {
      setShowNavItems(false);
    } else {
      setShowNavItems(true);
    }

    if (
      props.isPublic &&
      (location.pathname === "/termAndCondition" ||
        location.pathname === "/signIn" ||
        location.pathname === "/contactUs" ||
        location.pathname === "/forgotPassword")
    ) {
      setShowTopBar(false);
    } else {
      setShowTopBar(true);
    }
  }, [location.pathname, props?.isAuth, props.isPublic]);

  const [showTopBar, setShowTopBar] = useState(true);
  const [isSliding, setIsSliding] = useState(false);
  const [showNavItems, setShowNavItems] = useState(true);
  const [
    showSubscriptionInformationModal,
    setShowSubscriptionInformationModal,
  ] = useState(false);

  const [backgroundClass, setBackgroundClass] = useState(
    props.isPublic
      ? props?.isGuest
        ? "bg-white-custom"
        : "bg-transparent"
      : "bg-white-custom"
  );

  const textClass = props.isPublic
    ? props?.isGuest
      ? "text-black-custom"
      : "text-white"
    : "text-black-custom";

  const listenScrollEvent = () => {
    if (!props?.isGuest && props?.isPublic) {
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

  const slide = () => {
    setIsSliding(!isSliding);
  };

  const handleSignInClick = useCallback(() => {
    navigate("/signIn");
  }, [navigate]);

  const handleSubscriptionInformationModalClose = useCallback(() => {
    setShowSubscriptionInformationModal(false);
  }, []);

  const handleSubscriptionClick = useCallback(() => {
    navigate("/registerAs");
  }, [navigate]);

  const handleFitneeCommunityClick = useCallback(() => {
    setShowSubscriptionInformationModal(true);
  }, []);

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
                <NavbarToggler
                  className={"textGrey yellowBorder pb-2"}
                  onClick={slide}
                >
                  <FaBars />
                </NavbarToggler>
                <Nav className={"mx-auto gap-2 d-lg-flex d-none"} navbar>
                  <NavItem className={`${styles.navItem}`}>
                    <Link
                      className={`nav-link ${styles.navLink} ${textClass}`}
                      to="/"
                    >
                     <span className={`borderHover`}> {t("landing.homeText")}</span>
                    </Link>
                  </NavItem>
                  <NavItem>
                    <UncontrolledDropdown>
                      <DropdownToggle
                        className={`${styles.navLink} ${textClass} nav-link bg-transparent border-0 p-0 mb-0 mt-2`}
                      >
                        <span className={`px-1 borderHover`}>
                          {t("landing.servicesText")}
                        </span>
                      </DropdownToggle>
                      <DropdownMenu style={{ right: 0, left: "auto" }}>
                        <DropdownItem>
                          <Link
                            className="w-100 d-flex align-items-center"
                            to="/guest/serviceProviderList/trainer"
                          >
                            <p className="text-dark mb-0">Trainers</p>
                          </Link>
                        </DropdownItem>

                        <DropdownItem>
                          <Link
                            className="w-100 d-flex align-items-center"
                            to="/guest/serviceProviderList/nutritionist"
                          >
                            <p className="text-dark mb-0">Nutritionist</p>
                          </Link>
                        </DropdownItem>

                        <DropdownItem>
                          <Link
                            className=" d-flex align-items-center"
                            to="/guest/services"
                          >
                            <p className="text-dark mb-0">Exercises</p>
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
                       <span className={`borderHover`}>{t("landing.fitneeCommunityText")}</span>
                    </div>
                  </NavItem>
                  <NavItem>
                    <Link
                      className={`nav-link ${styles.navLink} ${textClass}`}
                      to="/contactUs"
                    >
                         <span className={`borderHover`}>{t("landing.contactUsText")}</span>
                    </Link>
                  </NavItem>
                </Nav>

                {!props?.isGuest && !props?.isPrivate && (
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
                      className="px-3 shadow-none"
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

                {!props?.isGuest && !props?.isPublic && (
                  <Nav className={`ml-auto d-lg-flex d-none ${styles.nav}`}>
                    <UncontrolledDropdown>
                      <DropdownToggle className="p-0" nav>
                        <div
                          className="bgProperties rounded-circle"
                          style={{
                            backgroundImage: `url(${Images.PROFILE_IMG})`,
                            width: "40px",
                            height: "40px",
                          }}
                        ></div>
                      </DropdownToggle>
                      <DropdownMenu style={{ right: 0, left: "auto" }}>
                        <DropdownItem>
                          <Link
                            className=" d-flex align-items-center"
                            to="/trainee/dashboard"
                          >
                            <span className="textParrotGreen me-2">
                              <RiDashboardFill className="mb-1" />
                            </span>
                            <p className="text-dark mb-0">Dashboard</p>
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="/serviceProvider/editProfile" className=" d-flex align-items-center">
                            <span className="textParrotGreen me-2">
                              <FaUserEdit className="mb-1" />
                            </span>
                            <p className="text-dark mb-0">Edit Profile</p>
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="" className=" d-flex align-items-center">
                            <span className="textParrotGreen me-2">
                              <GiWallet className="mb-1" />
                            </span>
                            <p className="text-dark mb-0">Wallet</p>
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="" className=" d-flex align-items-center">
                            <span className="textParrotGreen me-2">
                              <FaKey className="mb-1" />
                            </span>
                            <p className="text-dark mb-0">Change Password</p>
                          </Link>
                        </DropdownItem>
                        <DropdownItem>
                          <Link to="" className=" d-flex align-items-center">
                            <span className="textParrotGreen me-2">
                              <FaTrashCan className="mb-1" />
                            </span>
                            <p className="text-dark mb-0">Delete Account</p>
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                )}
              </>
            )}
          </Navbar>
          <div
            className={`d-lg-none d-block bg-black ${styles.mobileView} h-100 ${
              isSliding ? styles["slide-right"] : styles["slide-left"]
            }`}
          >
            <Card className="bg-transparent border-0 h-100">
              <CardBody className="p-0">
                <Nav className={`mx-auto my-5 gap-2 ${styles.nav}`} navbar>
                  <NavItem className={`${styles.NavItem}`}>
                    <NavLink className={`${styles.NavLink}`} href="/">
                      <BiHome className={`fs-2 me-3 text-white`} />
                      {t("landing.homeText")}
                    </NavLink>
                  </NavItem>

                  <NavItem className={`${styles.NavItem}`}>
                    <UncontrolledDropdown
                      nav
                      inNavbar
                      className={`w-100  ${styles.UncontrolledDropdown}`}
                    >
                      <DropdownToggle
                        nav
                        className={`w-100 ${styles.DropdownToggle}`}
                      >
                        <div className="d-flex align-items-center justify-content-between w-100">
                          <div className="">
                            <GiBodyBalance className={`fs-2 me-3 text-white`} />
                            {t("landing.servicesText")}
                          </div>
                          <PiCaretDownBold />
                        </div>
                      </DropdownToggle>
                      <DropdownMenu
                        className={` bg-black w-100 ${styles.DropdownMenu}`}
                      >
                        <DropdownItem
                          className={` w-100 ${styles.DropdownItem}`}
                        >
                          <Link
                            className={`w-100 d-flex align-items-center ${styles.Link}`}
                            to="/guest/serviceProviderList/trainer"
                          >
                            <p className=" mb-0">Trainers</p>
                          </Link>
                        </DropdownItem>

                        <DropdownItem
                          className={`w-100 ${styles.DropdownItem}`}
                        >
                          <Link
                            className={`w-100 d-flex align-items-center ${styles.Link}`}
                            to="/guest/serviceProviderList/nutritionist"
                          >
                            <p className="mb-0">Nutritionist</p>
                          </Link>
                        </DropdownItem>

                        <DropdownItem
                          className={`w-100 ${styles.DropdownItem}`}
                        >
                          <Link
                            className={`d-flex align-items-center ${styles.Link}`}
                            to="/guest/services"
                          >
                            <p className="mb-0">Exercises</p>
                          </Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>

                  <NavItem className={`${styles.NavItem}`}>
                    <NavLink
                      className={`${styles.NavLink}`}
                      href="#"
                      onClick={handleFitneeCommunityClick}
                    >
                      <PiUsersFourThin className={`fs-2 me-3 text-white`} />
                      {t("landing.fitneeCommunityText")}
                    </NavLink>
                  </NavItem>

                  <NavItem className={`${styles.NavItem}`}>
                    <NavLink className={`${styles.NavLink}`} href="/contactUs">
                      <PiAddressBookBold className={`fs-2 me-3 text-white`} />
                      {t("landing.contactUsText")}
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
              <CardFooter className="border-0">
                {!props?.isGuest && (
                  <Nav className={`ml-auto d-lg-none d-block ${styles.nav}`}>
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
              </CardFooter>
            </Card>
          </div>
          <div
            onClick={slide}
            className={`d-lg-none d-block overflow-hidden ${
              styles.bgInverse
            } h-100 ${
              isSliding
                ? styles["slide-left-blank"]
                : styles["slide-right-blank"]
            }`}
          ></div>
        </div>
      )}

      <InformationModal
        size={"md"}
        TOneClassName={"fw-bold mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={showSubscriptionInformationModal}
        onClose={handleSubscriptionInformationModalClose}
        ModalTextOne="Subscribe and then download the app so you can access FitNee Community"
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
    </>
  );
};

export default memo(TopBar);
