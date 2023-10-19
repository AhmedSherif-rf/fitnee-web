import React from "react";
import { Col, Row } from "reactstrap";
import { Link } from "react-router-dom";
import FillBtn from "../Buttons/FillBtn";

const index = () => {
  return (
    <Row className="my-3">
      <Col md={12}>
        <Link to="/trainee/ServiceProviderList">
          <FillBtn className="w-100 mb-2" text="My Current Trainer" />
        </Link>
        <Link to="/trainee/ServiceProviderList">
          <FillBtn className="w-100 mb-2" text="My Current Nutritionist" />
        </Link>
        <Link to="/trainee/subscriptionDetail">
          <FillBtn className="w-100 mb-2" text="My Subscription History" />
        </Link>
        <FillBtn className="w-100 mb-2" text="My Progress" />
      </Col>
    </Row>
  );
};

export default index;
