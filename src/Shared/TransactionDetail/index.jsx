import moment from "moment";
import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import { CURRENCY } from "../../utils/constants";
import Images from "../../HelperMethods/Constants/ImgConstants";

const TransactionDetail = (props) => {
  const { data } = props;

  return (
    <>
      {data?.transactions?.map((transaction, index) => (
        <Row className="mb-2" key={index}>
          <Col md={12}>
            <div className="d-flex align-items-center border-bottom py-2">
              <div className="me-2">
                <img
                  src={Images.ARROW_UP_IMG}
                  height={58}
                  alt="paymentTypeImg"
                />
              </div>
              <div className="d-flex align-items-center justify-content-between w-100">
                <div className="">
                  <h6 className="fw-bold">{transaction?.status}</h6>
                  <span className="small text-black-custom">
                    {transaction?.status === "released"
                      ? moment(transaction?.payment_date).format(
                          "MM/DD/YYYY hh:mm A"
                        )
                      : moment(transaction?.date_created).format(
                          "MM/DD/YYYY hh:mm A"
                        )}
                  </span>
                </div>
                <div>
                  <h4 className="mb-0">{`${CURRENCY} ${transaction?.amount}`}</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default memo(TransactionDetail);
