import React from "react";
import { useState } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import {
  GoTrash,
  GoPencil,
  GoEye,
  GoTriangleDown,
  GoTriangleUp,
} from "react-icons/go";
import PageHeading from "../../../Shared/Headings/PageHeading";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";

const ContactUs = (props) => {
  const [showFullText, setShowFullText] = useState(false);

  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };
  const users = [
    {
      ReportingUser: (
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
      dateTime: "02:00 PM - 03/04/2023",
      ReportingTo: (
        <div className="d-flex align-items-center">
          <div
            className="bgProperties rounded-circle me-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundImage: `url(${Images.PROFILE3_IMG})`,
            }}
          ></div>
          <h6 className="text-secondary fw-bold mb-0">Edgar</h6>
        </div>
      ),

      subscriptionStatus: "Trainer",
      phone: "+966-45-3456715",
      reportReason: (
        <div
          className="d-flex align-items-center "
          style={{ maxWidth: "300px" }}
        >
          <div className="d-flex align-items-center mb-0">
            {showFullText
              ? "Lorazepam, sold under the brand name Ativan among others, is a benzodiazepine medication. It is used to treat anxiety, trouble sleeping, severe agitation, active seizures including status epilepticus, alcohol withdrawal, and chemotherapy-induced nausea and"
              : "Lorazepam, sold under the brand name Ativan among others,"}
          </div>
          <div>
            {showFullText ? (
              <GoTriangleUp
                className="textYellow fs-2"
                onClick={handleToggleText}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <GoTriangleDown
                className="textYellow fs-2"
                onClick={handleToggleText}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
      ),
      reportFrom: "FitNee Community",
      view: (
        <div className="d-flex align-items-center justify-content-md-center">
         
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoEye className="GoEye mb-1" />
            </Link>
          </span>
        </div>
      ),
    },
    {
      ReportingUser: (
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
      dateTime: "02:00 PM - 03/04/2023",
      ReportingTo: (
        <div className="d-flex align-items-center">
          <div
            className="bgProperties rounded-circle me-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundImage: `url(${Images.PROFILE5_IMG})`,
            }}
          ></div>
          <h6 className="text-secondary fw-bold mb-0">Jorge</h6>
        </div>
      ),

      subscriptionStatus: "Trainer",
      phone: "+966-45-3456715",
      reportReason: (
        <div
          className="d-flex align-items-center "
          style={{ maxWidth: "300px" }}
        >
          <div className="d-flex align-items-center mb-0">
            {showFullText
              ? "Lorazepam, sold under the brand name Ativan among others, is a benzodiazepine medication. It is used to treat anxiety, trouble sleeping, severe agitation, active seizures including status epilepticus, alcohol withdrawal, and chemotherapy-induced nausea and"
              : "Lorazepam, sold under the brand name Ativan among others,"}
          </div>
          <div>
            {showFullText ? (
              <GoTriangleUp
                className="textYellow fs-2"
                onClick={handleToggleText}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <GoTriangleDown
                className="textYellow fs-2"
                onClick={handleToggleText}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
      ),
      reportFrom: "FitNee Community",
      view: (
        <div className="d-flex align-items-center justify-content-md-center">
         
          <span className={`iconBadge me-1`}>
            <Link to="#0">
              <GoEye className="GoEye mb-1" />
            </Link>
          </span>
        </div>
      ), 
    },
    {
      ReportingUser: (
        <div className="d-flex align-items-center">
          <div
            className="bgProperties rounded-circle me-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundImage: `url(${Images.PROFILE4_IMG})`,
            }}
          ></div>
          <h6 className="text-secondary fw-bold mb-0">John</h6>
        </div>
      ),
      dateTime: "02:00 PM - 03/04/2023",
      ReportingTo: (
        <div className="d-flex align-items-center">
          <div
            className="bgProperties rounded-circle me-2"
            style={{
              width: "40px",
              height: "40px",
              backgroundImage: `url(${Images.PROFILE2_IMG})`,
            }}
          ></div>
          <h6 className="text-secondary fw-bold mb-0">Maya</h6>
        </div>
      ),
      phone: "+966-45-3456715",
      reportReason: (
        <div
          className="d-flex align-items-center "
          style={{ maxWidth: "300px" }}
        >
          <div className="d-flex align-items-center mb-0">
            {showFullText
              ? "Lorazepam, sold under the brand name Ativan among others, is a benzodiazepine medication. It is used to treat anxiety, trouble sleeping, severe agitation, active seizures including status epilepticus, alcohol withdrawal, and chemotherapy-induced nausea and"
              : "Lorazepam, sold under the brand name Ativan among others,"}
          </div>
          <div>
            {showFullText ? (
              <GoTriangleUp
                className="textYellow fs-2"
                onClick={handleToggleText}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <GoTriangleDown
                className="textYellow fs-2"
                onClick={handleToggleText}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
      ),
      reportFrom: "FitNee Community",
      view: (
        <div className="d-flex align-items-center justify-content-md-center">
         
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
    { label: "Reporting User", dataKey: "ReportingUser" },
    { label: "Date & Time", dataKey: "dateTime", align: "center" },
    { label: "Reporting To", dataKey: "ReportingTo" },
    {
      label: "Report From",
      dataKey: "reportFrom",
      align: "center",
    },

    { label: "Report Reason", dataKey: "reportReason", align: "center" },
    { label: "View", dataKey: "view", align: "center" },
  ];

  return (
    <React.Fragment>
      <Row>
        <Col md="12" className="text-start">
          <PageHeading headingText="Reports" categoryText="" />
        </Col>
        <Col md="12">
          <ListingTable users={users} columns={columns} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ContactUs;
