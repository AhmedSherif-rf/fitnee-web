import "./DownloadLinkStyle.scss";
import React, { memo } from "react";
import { Col, Container, Row } from "reactstrap";
import FillBtn from "../../../Shared/Buttons/FillBtn";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const AppDownloadLink = () => {
  return (
    <Container fluid className="px-4">
      <Row>
        <Col md="6" className="text-center mb-3">
          <div className=" pt-3">
            <h4>Congratulations</h4>
            <p className="px-5">
              You have subscribed with XXX . XXX, he will review your profile
              and get back to you shortly, please download FitNee app and enable
              the notification.
            </p>
            <p className="px-5 mb-0">
              Be informed that you have the right to cancel your Subscription
              for any reason within 72 hours and your money will be in your
              wallet in the app so you can re-subscribe with other trainer or
              nitration specialist.
            </p>
            <p className="px-5">
              You can now manage your profile and contact your Trainer/Nutrition
              by downloading the app
            </p>
          </div>
          <div className="text-center mt-4">
            <img className="w-75" src={Images.CREDIT_CARD_IMG} alt="" />
          </div>
        </Col>
        <Col md="6">
          <div className="d-flex justify-content-center mb-4">
            <div className="QRcodeDiv p-5">
              <img className="mb-5 mt-3" src={Images.QR_CODE_IMG} alt="" />
            </div>
          </div>
          <div className=" d-flex align-items-center justify-content-center">
            <FillBtn className="w-100 p-3 me-3" text="Google Link" />
            <FillBtn className="w-100 p-3" text="Apple Link" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(AppDownloadLink);
