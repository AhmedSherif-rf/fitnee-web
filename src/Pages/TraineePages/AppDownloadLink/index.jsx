import React from "react";
import "./DownloadLinkStyle.scss";
import { Col, Container, Row, Card } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const AppDownloadLink = () => {
  return (
    <Container fluid className="px-4">
      <Card className="BorderRadius">
        <Row>
          <Col md="6" className="text-center mb-3">
            <div className=" pt-3">
              <h4>Congratulations</h4>
              <p className="px-5">
                You have subscribed with XXX . XXX, he will review your profile
                and get back to you shortly, please download FitNee app and
                enable the notification.
              </p>
              <p className="px-5 mb-0">
                Be informed that you have the right to cancel your Subscription
                for any reason within 72 hours and your money will be in your
                wallet in the app so you can re-subscribe with other trainer or
                nitration specialist.
              </p>
              <p className="px-5">
                You can now manage your profile and contact your
                Trainer/Nutrition by downloading the app
              </p>
            </div>
            <div className="text-center mt-4">
              <img className="w-75" src={Images.CREDIT_CARD_IMG} alt="" />
            </div>
          </Col>
          <Col md="6">
            <div className="d-flex justify-content-center mb-md-4 mb-0">
              <div className="QRcodeDiv p-5 text-center">
                <img
                  className="mb-3"
                  style={{ width: "85%" }}
                  src={Images.QR_CODE_IMG}
                  alt=""
                />
                <h6 className="text-black-custom fw-bold text-center">
                  GET APP
                </h6>
              </div>
            </div>
            <Row className="justify-content-center">
              <Col md={5} className="mb-3 text-md-block text-center">
                <div className="w-100">
                  <img
                    src={Images.APP_STORE_IMG}
                    className="img-fluid "
                    alt=""
                  />
                </div>
              </Col>
              <Col md={5} className="mb-3 text-md-block text-center">
                <div className="w-100">
                  <img
                    src={Images.GOOGLE_PLAY_IMG}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default AppDownloadLink;
