import moment from "moment";
import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CURRENCY } from "../../utils/constants";
import Images from "../../HelperMethods/Constants/ImgConstants";

const Index = (props) => {
  const { data } = props;

  const { t } = useTranslation("");

  return (
    <>
      <Row className="align-items-center justify-content-center text-black-custom border-bottom text-black-custom py-2 mb-2">
        <Col md={3} className="mb-md-0 mb-2">
          <div className="d-flex align-items-center">
            <Link
              className="text-decoration-none"
              to={`/serviceProvider/subscriber/${data?.id}`}
            >
              <div
                className="me-2 bgProperties rounded-circle"
                style={{
                  width: "60px",
                  height: "60px",
                  cursor: "pointer",
                  backgroundImage:
                    data?.profile_pic === "" || data?.profile_pic === null
                      ? `url(${Images.USER_DUMMY_IMG})`
                      : `url(${data?.profile_pic})`,
                  border: "1px solid transparent",
                }}
              ></div>
            </Link>
            <div>
              <h6 className="mb-0 fw-bold ">
                {data?.first_name} {data?.last_name}
              </h6>
              <span className="text-black-custom">{data?.role}</span>
              <div className="mb-md-0 d-md-none d-block py-2">
                <h6 className="mb-0 w-100 small fw-bold ">
                  {CURRENCY} {data?.transition?.current_price}
                </h6>
              </div>
            </div>
          </div>
        </Col>
        <Col md={2} className="d-md-block d-none">
          <div className="mb-md-0 text-center py-2 rounded-3">
            {data?.phone_number}
          </div>
        </Col>
        <Col md={2} className="d-md-block d-none">
          <div className="mb-md-0 text-center py-2 rounded-3">
            <h6 className="mb-0 w-100 fs-5 fw-bold ">{data?.age}</h6>
          </div>
        </Col>
        <Col md={4}>
          <div className="mb-md-0 text-center py-2 rounded-3">
            {data?.training_level}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default memo(Index);
