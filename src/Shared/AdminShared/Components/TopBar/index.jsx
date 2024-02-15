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
import { LOGOUT_URL } from "../../../../utils/constants";
import Notification from "../../../../Shared/Notification";
import { logout } from "../../../../Redux/features/User/userApi";
import LoadingScreen from "../../../../HelperMethods/LoadingScreen";
import Images from "../../../../HelperMethods/Constants/ImgConstants";

const Topbar = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loading } = useSelector((state) => state.user);

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
            className="custom-dropdown-menu bg-white mt-3 "
            style={{ right: 0, left: "auto",width: "290px" }}
          >
            <div
            className="w-100 pt-3"
              style={{
                maxHeight: "520px",
                overflowY: "scroll",
              }}
            > 
              <Card className={`w-100 ms-1 border-0 px-2 mb-2`}>
                <div className={`BorderRadius p-3 ${"bgNotification"}`}>
                  <div>
                    <h6 className="fw-bold mb-0">fasdfa</h6>
                    <p className="mb-0 small">fgdsfa afsdfa</p>
                  </div>

                  <div className="mx-1 text-end">
                    <h6 className="small fw-bold mb-0">
                      {/* {t("topBar.markAsRead")} */}Mark as read
                    </h6>
                  </div>
                </div>
              </Card>{" "}
              <Card className={`w-100 ms-1 border-0 px-2 mb-2`}>
                <div className={`BorderRadius p-3 ${"bgNotification"}`}>
                  <div>
                    <h6 className="fw-bold mb-0">fasdfa</h6>
                    <p className="mb-0 small">fgdsfa afsdfa</p>
                  </div>

                  <div className="mx-1 text-end">
                    <h6 className="small fw-bold mb-0">
                      {/* {t("topBar.markAsRead")} */}Mark as read
                    </h6>
                  </div>
                </div>
              </Card>
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
