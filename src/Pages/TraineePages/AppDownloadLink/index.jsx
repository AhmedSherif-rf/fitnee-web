import React from "react";
import "./DownloadLinkStyle.scss";
import { useTranslation } from "react-i18next";
import { Col, Container, Row, Card } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const AppDownloadLink = () => {
  const { t } = useTranslation("");
  return (
    <Container fluid className="px-4">
      <Card className="BorderRadius">
        <Row>
          <Col md="6" className="text-center mb-3">
            <div className=" pt-3">
              <h4>{t("appDownloadLink.congratulationsText")}</h4>
              <p className="px-5">
              {t("appDownloadLink.youHaveSubscribeText")}
              </p>
              <p className="px-5 mb-0">
              {t("appDownloadLink.beInformedThatText")}
              </p>
              <p className="px-5">
              {t("appDownloadLink.youCanManageText")}
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
    </Container>
  );
};

export default AppDownloadLink;
