import React from "react";
import "./DownloadLinkStyle.scss";
import { useParams } from "react-router-dom";
import { Col, Container, Row, Card } from "reactstrap";
import Images from "../../../HelperMethods/Constants/ImgConstants";

const AppDownloadLink = () => {
  const { requestId } = useParams();

  return (
    <Container fluid>
      <Row>
        <Col md="12">
          <Card className="BorderRadius contentCard px-3">
            <Row>
              <Col md="6" className="text-center">
                <div className=" pt-3">
                  <h3 className="py-3 fw-bold">Congratulations</h3>
                  <p className="px-md-5 mx-md-2">
                    The admin will review your profile and get back to you
                    shortly by email, please keep checking your emails.
                    Meanwhile, you can download the app with by accessing the
                    below link.
                  </p>
                  <p className="py-4 fw-bold">Ticket ID : {requestId}</p>
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
        </Col>
      </Row>
    </Container>
  );
};

export default AppDownloadLink;
