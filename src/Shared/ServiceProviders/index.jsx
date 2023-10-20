import React from "react";
import { Col, Row } from "reactstrap";

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

  return (
    <Row className="align-items-center BorderYellow BorderRadius py-1 mb-2">
      <Col md={3} sm={6} xs={6} className="mb-2">
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
              <div className="text-md-end text-center">{CancelButton}</div>
            ) : (
              <div className="BorderYellow p-2 rounded-3 d-flex align-items-center justify-content-center">
                <p className="mb-0 small">{startDate} </p>
                <span className="mb-0 mx-1">To</span>
                <p className="mb-0 small">{endDate}</p>
                <span className="d-md-none d-block textDark">({duration})</span>
              </div>
            )}
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Index;
