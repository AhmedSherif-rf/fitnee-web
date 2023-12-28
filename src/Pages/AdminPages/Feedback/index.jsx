import React from "react";
import { useState } from "react";
import { Col, Row } from "reactstrap";
import Rating from "../../../Shared/Rating";
import ToggleSwitch from "../../../Shared/ToggleSwitch";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import PageHeading from "../../../Shared/Headings/PageHeading";
import Images from "../../../HelperMethods/Constants/ImgConstants";
import ListingTable from "../../../Shared/AdminShared/Components/ListingTable";

const ContactUs = (props) => {
  const [checked, setChecked] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const handleToggleText = () => {
    setShowFullText(!showFullText);
  };

  const handleToggle = () => {
    setChecked(!checked);
  };
  const users = [
    {
      userName: (
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

      serviceProvider: (
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

      rating: <Rating />,

      summary: (
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

      date: "02:00 PM - 03/04/2023",

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

      publish: (
        <div className="d-flex align-items-center justify-content-md-center">
          <ToggleSwitch id={2} isOn={checked} handleToggle={handleToggle} />
        </div>
      ),
    },
    {
      userName: (
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

      serviceProvider: (
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

      rating: <Rating />,

      summary: (
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

      date: "02:00 PM - 03/04/2023",

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

      publish: (
        <div className="d-flex align-items-center justify-content-md-center">
          <ToggleSwitch id={1} isOn={checked} handleToggle={handleToggle} />
        </div>
      ),
    },
  ];

  const columns = [
    { label: "User Name", dataKey: "userName" },
    { label: "Service Provider", dataKey: "serviceProvider", align: "center" },
    { label: "Rating", dataKey: "rating" },
    {
      label: "Summary",
      dataKey: "summary",
      align: "center",
    },

    { label: "Date", dataKey: "date", align: "center" },
    { label: "Publish", dataKey: "publish", align: "center" },
  ];

  return (
    <React.Fragment>
      <Row>
        <Col md="12" className="text-start">
          <PageHeading headingText="Feedback" categoryText="" />
        </Col>
        <Col md="12">
          <ListingTable users={users} columns={columns} />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ContactUs;
