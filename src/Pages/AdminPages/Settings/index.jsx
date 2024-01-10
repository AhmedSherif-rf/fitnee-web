import React from "react";
import { TbFlagDiscount } from "react-icons/tb";
import { MdOutlineCategory } from "react-icons/md";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";

const Settings = (props) => {
  return (
    <React.Fragment>
      <Container>
        <Row className="p-4">
          <Col md={4} className="mb-2">
            <Card className="BorderRadius h-100">
              <CardBody className="p-0">
                <Link
                  className="d-flex align-items-center justify-content-between p-0"
                  to="/admin/settings/category"
                >
                  <h6 className="mb-0 p-3 fw-bold textGrey">Categories</h6>
                  <MdOutlineCategory className="display-5 p-1 me-3 textLightGray" />
                </Link>
              </CardBody>
            </Card>
          </Col>

          <Col md={4} className="mb-2">
            <Card className="BorderRadius h-100">
              <CardBody className="p-0">
                <Link
                  className="d-flex align-items-center justify-content-between p-0"
                  to="/admin/settings/promoCode"
                >
                  <h6 className="mb-0 p-3 fw-bold textGrey">Promo Codes</h6>
                  <div className="">
                    <TbFlagDiscount className="display-5 p-1 me-3 textLightGray" />
                  </div>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
export default Settings;
