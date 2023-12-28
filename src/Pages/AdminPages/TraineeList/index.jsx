import React from "react";
import { useState } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import ToggleSwitch from "../../../Shared/ToggleSwitch";
import { GoTrash, GoPencil, GoEye } from "react-icons/go";
import PageHeading from "../../../Shared/Headings/PageHeading";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";

const Dashboard = (props) => {
  const [checked, setChecked] = useState(true);

  const handleToggle = () => {
    setChecked(!checked);
  };
  const users = [
    {
      username: (
        <div className="d-flex align-items-center">
          <div
            className="bgProperties rounded-circle me-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundImage: `url(${Images.PROFILE3_IMG})`,
            }}
          ></div>
          <h6 className="text-secondary fw-bold mb-0">Nadeem Abbas</h6>
        </div>
      ),
      subscriptionStatus: "Trainer",
      email: "xyz@gmail.com",
      phone: "+966-45-3456715",
      status: (
        <div className="d-flex align-items-center justify-content-center">
          <div
            className="me-2 bg-warning rounded-circle"
            style={{ minWidth: "8px", minHeight: "8px" }}
          ></div>
          <span>Active</span>
        </div>
      ),
      Unblock: (
        <div className="d-flex align-items-center justify-content-md-center">
          <ToggleSwitch id="1" isOn={checked} handleToggle={handleToggle} />
        </div>
      ),
      Action: (
        <div className="d-flex align-items-center justify-content-md-center">
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoPencil className="GoPencil mb-1" />
            </Link>
          </span>
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoTrash className="GoTrash mb-1" />
            </Link>
          </span>
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoEye className="GoEye mb-1" />
            </Link>
          </span>
        </div>
      ),
    },
    {
      username: (
        <div className="d-flex align-items-center">
          <div
            className="bgProperties rounded-circle me-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundImage: `url(${Images.PROFILE3_IMG})`,
            }}
          ></div>
          <h6 className="text-secondary fw-bold mb-0">Frank</h6>
        </div>
      ),
      subscriptionStatus: "Trainer",
      email: "xyz@gmail.com",
      phone: "+966-45-3456715",
      status: (
        <div className="d-flex align-items-center justify-content-center">
          <div
            className="m-2 bg-secondary rounded-circle"
            style={{ minWidth: "8px", minHeight: "8px" }}
          ></div>
          <span>InActive</span>
        </div>
      ),
      Unblock: (
        <div className="d-flex align-items-center justify-content-md-center">
          <ToggleSwitch id="2" isOn={checked} handleToggle={handleToggle} />
        </div>
      ),
      Action: (
        <div className="d-flex align-items-center justify-content-md-center">
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoPencil className="GoPencil mb-1" />
            </Link>
          </span>
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoTrash className="GoTrash mb-1" />
            </Link>
          </span>
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoEye className="GoEye mb-1" />
            </Link>
          </span>
        </div>
      ),
    },
    {
      username: (
        <div className="d-flex align-items-center">
          <div
            className="bgProperties rounded-circle me-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundImage: `url(${Images.PROFILE3_IMG})`,
            }}
          ></div>
          <h6 className="text-secondary fw-bold mb-0">John</h6>
        </div>
      ),
      subscriptionStatus: "Trainer",
      email: "xyz@gmail.com",
      phone: "+966-45-3456715",
      status: (
        <div className="d-flex align-items-center justify-content-center">
          <div
            className="me-2 bg-warning rounded-circle"
            style={{ minWidth: "8px", minHeight: "8px" }}
          >
          </div>
          <span>Active</span>
        </div>
      ),
      Unblock: (
        <div className="d-flex align-items-center justify-content-md-center">
          <ToggleSwitch id="3" isOn={checked} handleToggle={handleToggle} />
        </div>
      ),
      Action: (
        <div className="d-flex align-items-center justify-content-md-center">
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoPencil className="GoPencil mb-1" />
            </Link>
          </span>
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoTrash className="GoTrash mb-1" />
            </Link>
          </span>
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoEye className="GoEye mb-1" />
            </Link>
          </span>
        </div>
      ),
    },
  ];

  const columns = [
    { label: "User Name", dataKey: "username" },
    {
      label: "Subscribe Status",
      dataKey: "subscriptionStatus",
      align: "center",
    },
    { label: "Email ID", dataKey: "email", align: "center" },
    { label: "Phone#", dataKey: "phone", align: "center" },
    { label: "Status", dataKey: "status", align: "center" },
    { label: "Unblock / Block", dataKey: "Unblock", align: "center" },
    { label: "Action", dataKey: "Action", align: "center" },
  ];

  return (
    <React.Fragment>
      <Row>
        <Col md="12" className="text-start">
          <PageHeading
            headingText="Trainee List"
            categoryText=""
          />
        </Col>
        <Col md="12">
          <ListingTable users={users} columns={columns} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Dashboard;
