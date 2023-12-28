import React from "react";
import "./DownloadLinkStyle.scss";
import { useTranslation } from "react-i18next";
import { Col, Container, Row, Card } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const AppDownloadLink = () => {
  const { t } = useTranslation("");
  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="BorderRadius contentCard px-3">
            <Row>
              <Col md="6" className="text-center">
                <div className=" pt-3">
                  <h3 className="py-3 fw-bold">
                    {t("appDownloadLink.congratulationsText")}
                  </h3>
                  <p className="px-5">
                    You have subscribed with XXX . XXX, he/she will review your
                    profile and get back to you shortly, please download FitNee
                    app and enable the notification.
                  </p>
                  <p className="px-5 mb-0">
                    Be informed that you have the right to cancel your
                    subscription for any reason within 72 hours and your money
                    will be in your wallet in the app so you can re-subscribe
                    with other trainer or nutrition specialist.
                  </p>
                  <p className="px-5">
                    Manage your profile and contact your trainer/nutrition by
                    downloading the app
                  </p>
                </div>
                <div className="text-center">
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
                      {t("appDownloadLink.getAppText")}
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
        </Col>
      </Row>
    </Container>
  );
};

export default AppDownloadLink;
