import "./style.scss";
import {
  Navbar,
  Button,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Card } from "reactstrap";
import React, { memo } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { CgMenuLeft } from "react-icons/cg";
import { GoBellFill } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
import Images from "../../../../HelperMethods/Constants/ImgConstants";
import {
  LOGOUT_URL,
  USER_NOTIFICATIONS_URL,
} from "../../../../utils/constants";
import {
  logout,
  markUserNotificationAsRead,
  getUserNotifications,
} from "../../../../Redux/features/User/userApi";
import { useTranslation } from "react-i18next";

const Topbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("");
  const { user, loading, notifications } = useSelector((state) => state.user);

  const handleLogoutClick = () => {
    const data = {
      apiEndpoint: LOGOUT_URL,
      requestData: { refresh: user?.tokens?.refresh, device: "web" },
    };
    dispatch(logout(data)).then((res) => {
      if (res.type === "logout/fullfiled") {
        navigate("/signIn");
      }
    });
  };

  const markNotificationAsRead = (id) => {
    const data = {
      apiEndpoint: `${USER_NOTIFICATIONS_URL}${id}/`,
      requestData: JSON.stringify({ is_read: true }),
    };
    dispatch(markUserNotificationAsRead(data)).then((res) => {
      if (res.type === "markUserNotificationAsRead/fulfilled") {
        fetchUserNotifications();
      }
    });
  };

  const fetchUserNotifications = () => {
    const data = {
      apiEndpoint: USER_NOTIFICATIONS_URL,
    };

    dispatch(getUserNotifications(data));
  };

  return (
    <Navbar className="navbar admin-navbar BorderRadius mb-3 p-0">
      {loading === "pending" && <LoadingScreen />}

      <Button
        color="info"
        onClick={toggleSidebar}
        className=" border-0 admin-navbar-toggler"
      >
        <CgMenuLeft color="black" />
      </Button>
      <div className="d-flex gap-3 align-items-center">
        <UncontrolledDropdown>
          <DropdownToggle className="p-0" nav>
            <div>
              <GoBellFill size={24} />
            </div>
          </DropdownToggle>
          <DropdownMenu
            className="custom-dropdown-menu bg-white mt-1"
            style={{ right: 0, left: "auto", width: "290px" }}
          >
            <div
              className="w-100 pt-3"
              style={{
                maxHeight: "520px",
                overflowY: "scroll",
              }}
            >
              {notifications.map((notification, index) => (
                <Card key={index} className={`ms-1 border-0 px-2 mb-1`}>
                  <div
                    className={`BorderRadius p-3 ${
                      !notification.is_read && "bgNotification"
                    }`}
                  >
                    <div>
                      <h6 className="fw-bold mb-0 small">{notification?.title}</h6>
                      <p className="mb-0 small">{notification?.text}</p>
                    </div>

                    <div className="mx-1 text-end">
                      {!notification?.is_read && (
                        <div
                          onClick={() =>
                            markNotificationAsRead(notification?.id)
                          }
                        >
                          <p className="small fw-bold mb-0 cursorPointer">
                            {t("topBar.markAsRead")}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>

        <Nav className={`d-md-flex text-black-custom`}>
          <UncontrolledDropdown>
            <DropdownToggle className="p-0" nav>
              <div
                className="bgProperties rounded-circle"
                style={{
                  backgroundImage: `url(${Images.USER_DUMMY_IMG})`,
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
      </div>
    </Navbar>
  );
};

export default memo(Topbar);
