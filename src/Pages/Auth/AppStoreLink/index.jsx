import React from "react";
import { useTranslation } from "react-i18next";
import { Col, Container, Row, Card, CardBody } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const AppStoreLink = () => {
  const { t, i18n } = useTranslation("");
  return (
    <Container fluid className={i18n.dir()}>
      <Row className="justify-content-center m-0">
        <Col lg="5" md={6}>
          <Card className="contentCard BorderRadius h-100">
            <CardBody>
              <div className="w-100 text-center p-4 mb-4">
                <img src={Images.SMALL_LOGO_IMG} className="" alt="" />
              </div>
              <p className="text-center ws-2 mb-5">
                {t("landing.firstHeroSectionText")}
                {t("landing.secondHeroSectionTextOne")}
              </p>

              <div className="w-100 text-center">
                <div className="w-100 mb-2">
                  <a
                    href="https://apps.apple.com/us/app/fitnee/id6473802571"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={Images.APP_STORE_IMG}
                      className="img-fluid "
                      alt=""
                    />
                  </a>
                </div>

                <div className="w-100">
                  <img
                    src={Images.GOOGLE_PLAY_IMG}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AppStoreLink;
