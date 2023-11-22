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

  const [
    showCancelSubscriptionModal,
    setShowCancelSubscriptionModal,
  ] = useState(false);

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
      <Row className="align-items-center text-black-custom BorderRadius text-black-custom py-2 mb-2">
        <Col md={3} sm={6} xs={6} className="mb-md-0 mb-2">
          <div className="d-flex align-items-center">
            <div
              className="me-2 bgProperties"
              style={{
                width: "60px",
                height: "60px",
                backgroundImage: `url(${useImages})`,
                borderRadius: "50%",
                border: "1px solid",
              }}
            ></div>

            <div className="">
              <h6 className="mb-0">{userName}</h6>
              <span className="d-md-none d-block textDark">
                {serviceProvider}
              </span>
            </div>
          </div>
        </Col>
        {CancelButton ? (
          <Col md={4} sm={2} xs={6}>
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

        {serviceProvider ? (
          <Col md={2} sm={3} className="d-md-block d-none">
            <div className="mb-md-0 BorderYellow text-center py-2 rounded-3">
              {serviceProvider}
            </div>
          </Col>
        ) : (
          ""
        )}

        <Col md={1} sm={2} className="mb-2">
          <div className="d-flex align-items-center  h-100">
            <h6 className="mb-0 text-center w-100">{fee}</h6>
          </div>
        </Col>

        <Col md={4}>
          <Row className="align-items-center h-100 ">
            <Col md={12} xs={12} className="text-center">
              {CancelButton ? (
                <div
                  className="text-md-end text-center"
                  onClick={handleCancelButtonClick}
                >
                  {CancelButton}
                </div>
              ) : (
                <div className="BorderYellow p-2 rounded-3 d-flex align-items-center justify-content-center">
                  <p className="mb-0 small">{startDate} </p>
                  <span className="mb-0 mx-1">To</span>
                  <p className="mb-0 small">{endDate}</p>
                  <span className="d-md-none d-block textDark">
                    ({duration})
                  </span>
                </div>
              )}
            </Col>
          </Row>
        </Col>
      </Row>

      <InformationModal
        size={"md"}
        TOneClassName={"fw-bold mb-4 fs-5 text-center"}
        className={"p-4"}
        isOpen={showCancelSubscriptionModal}
        onClose={handleCloseSubscriptionModal}
        ModalTextOne="Subscribe and then download the app so you can access FitNee Community"
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
