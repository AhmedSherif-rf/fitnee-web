import { Col, Row } from "reactstrap";
import React, { useState } from "react";
import FillBtn from "../Buttons/FillBtn";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../Buttons/OutlineBtn";
import InformationModal from "../Modal/InformationModal";

const Index = (props) => {
  const {
    useImages,
    userName,
    serviceProvider,
    duration,
    fee,
    startDate,
    endDate,
    CancelButton,
  } = props;

  const { t } = useTranslation("");

  const [showCancelSubscriptionModal, setShowCancelSubscriptionModal] =
    useState(false);

  const handleCloseSubscriptionModal = () => {
    setShowCancelSubscriptionModal(false);
  };

  const handleCancelSubscriptionClick = () => {
    setShowCancelSubscriptionModal(false);
  };

  const handleNoClick = () => {
    setShowCancelSubscriptionModal(false);
  };

  const handleCancelButtonClick = () => {
    setShowCancelSubscriptionModal(true);
  };

  return (
    <>
      <Row className="align-items-center justify-content-center text-black-custom border-bottom text-black-custom py-2 mb-2">
        <Col md={3} className="mb-md-0 mb-2">
          <div className="d-flex align-items-center">
            <div
              className="me-2 bgProperties rounded-circle"
              style={{
                width: "60px",
                height: "60px",
                backgroundImage: `url(${useImages})`,
                border: "1px solid",
              }}
            ></div>
            <div>
              <h6 className="mb-0 fw-bold ">{userName}</h6>
              <span className="d-md-none d-block textDark">
                {serviceProvider}
              </span>
              <div className="mb-md-0 d-md-none d-block py-2">
                <h6 className="mb-0 w-100 small fw-bold ">{fee}</h6>
              </div>
            </div>
          </div>
        </Col>
        {CancelButton ? (
          <Col md={2} sm={8} xs={8}>
            <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
              {duration}
            </div>
          </Col>
        ) : (
          <Col md={2} className="d-md-block d-none">
            <div className="mb-md-0 mb-2 BorderYellow text-center p-2 rounded-3">
              {duration}
            </div>
          </Col>
        )}
        <Col md={2} className="d-md-block d-none">
          <div className="mb-md-0 text-center py-2 rounded-3">
            <h6 className="mb-0 w-100 fs-5 fw-bold ">{fee}</h6>
          </div>
        </Col>
        <Col md={4}>
          {CancelButton ? (
            <div
              className="text-md-end text-center"
              onClick={handleCancelButtonClick}
            >
              {CancelButton}
            </div>
          ) : (
            <div className="BorderYellow p-2 rounded-3 d-md-flex d-block align-items-center justify-content-center">
              <div className="d-flex align-items-center justify-content-center">
                <p className="mb-0 small">{startDate} </p>
                <span className="mb-0 mx-1">To</span>
                <p className="mb-0 small">{endDate}</p>
              </div>
              <span className="d-md-none d-block textDark text-center">
                ({duration})
              </span>
            </div>
          )}
        </Col>
      </Row>

      <InformationModal
        size={"md"}
        TOneClassName={"fw-bold mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={showCancelSubscriptionModal}
        onClose={handleCloseSubscriptionModal}
        ModalTextOne="Are you sure about canceling your subscription?"
        ButtonOne={
          <FillBtn
            text={t("signup.yesText")}
            className="py-2 px-5"
            handleOnClick={handleCancelSubscriptionClick}
          />
        }
        ButtonTwo={
          <OutlineBtn
            text={"No"}
            className="py-2 px-5"
            handleOnClick={handleNoClick}
          />
        }
      />
    </>
  );
};

export default Index;
