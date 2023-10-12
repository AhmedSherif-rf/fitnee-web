import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Col, Container, Row } from "reactstrap";
import Image from "../../HelperMethods/Constants/ImgConstants";

const Footer = () => {
  const { t } = useTranslation("");
  const currentYear = new Date().getFullYear();

  return (
    <Container fluid>
      <Row className="bg-dark py-3">
        <Col md={4}>
          <div className=" d-flex align-items-center justify-content-center mx-3 h-100 p-3">
            <Link to={"/"}>
              <img src={Image.LOGO_IMG} alt="logo" />
            </Link>
          </div>
        </Col>
        <Col md={4}>
          <div className="d-flex h-100  align-items-center  justify-content-center p-3">
            <p className="text-white mb-0 small">
              {t("landing.copyrightText")} {currentYear}{" "}
              {t("landing.fitneeText")}
            </p>
          </div>
        </Col>
        <Col md={4}>
          <div className="">
            <div className="d-flex gap-3 mx-4 align-items-center justify-content-center p-3">
              <Link to="/termAndCondition">
                <h6 className="text-white mb-0">
                  {t("landing.termsAndConditionsText")}
                </h6>
              </Link>
              <img src={Image.TWITTER_IMG} alt="logo" />
              <img src={Image.YOUTUBE_IMG} alt="logo" />
              <img src={Image.TIKTOK_IMG} alt="logo" />
              <img src={Image.INSTA_IMG} alt="logo" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default memo(Footer);
