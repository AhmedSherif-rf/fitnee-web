import moment from "moment";
import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import { CURRENCY } from "../../utils/constants";
import Images from "../../HelperMethods/Constants/ImgConstants";

const WalletDetail = (props) => {
  const { index, data } = props;

  return (
    <>
      {data?.map((transaction) => (
        <Row className="mb-2" key={index}>
          <Col md={12}>
            <div className="d-flex align-items-center border-bottom py-2">
              <div className="me-2">
                <img
                  src={
                    transaction?.type === "debit"
                      ? Images.ARROW_UP_IMG
                      : Images.ARROW_DOWN_IMG
                  }
                  alt="paymentTypeImg"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="">
                  <h6 className="fw-bold">{transaction?.type}</h6>
                  <span className="small text-black-custom">
                    {moment(data?.date_created).format("MM/DD/YYYY hh:mm A")}
                  </span>
                </div>
                <div>
                  {transaction?.status === "debit" ? (
                    <h4 className="mb-0">{`- ${CURRENCY} ${data?.amount}`}</h4>
                  ) : (
                    <h4 className="mb-0">{`+ ${CURRENCY} ${data?.amount}`}</h4>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default memo(WalletDetail);
