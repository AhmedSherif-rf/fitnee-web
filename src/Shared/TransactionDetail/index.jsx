import React, { memo } from "react";
import { Col, Row } from "reactstrap";

const TransactionDetail = (props) => {
  const {
    ArrowIcon,
    Dr_or_Cr,
    Currency,
    Amount,
    AmountTitle,
    TransactionTime,
  } = props;

  return (
    <Row className="mb-2">
      <Col md={12}>
        <div className="d-flex align-items-center border-bottom py-2">
          <div className="me-2">
            <img src={ArrowIcon} alt="" />
          </div>
          <div className="d-flex align-items-center justify-content-between w-100">
            <div className="">
              <h6 className="fw-bold">{AmountTitle}</h6>
              <span className="small text-dark">{TransactionTime}</span>
            </div>
            <div className="">
              <h4 className="mb-0">
                {Dr_or_Cr} {Currency} {Amount}
              </h4>
            </div>
            
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default memo(TransactionDetail);
