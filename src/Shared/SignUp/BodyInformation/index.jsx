import React from "react";
import { Col, Row } from "reactstrap";
import InputField from "../../../Shared/InputField/InputField";

const index = () => {
  return (
    <Row className="mb-3">
      <Col md={12} className="mb-3">
        <h5>Body Information</h5>
      </Col>
      <Col md={6} className="mb-2">
        <InputField className="BorderYellow" placeholder="Weight (lbs / kg)" />
      </Col>
      <Col md={6} className="mb-2">
        <InputField className="BorderYellow" placeholder="Hight (cm / feet)" />
      </Col>
      <Col md={6} className="mb-2">
        <InputField
          className="BorderYellow"
          placeholder="Skeletal Muscle Mass"
        />
      </Col>
      <Col md={6} className="mb-2">
        <InputField className="BorderYellow" placeholder="Body Fat Mass" />
      </Col>
      <Col md={6} className="mb-2">
        <InputField className="BorderYellow" placeholder="Total Body Water" />
      </Col>
      <Col md={6} className="mb-2">
        <InputField className="BorderYellow" placeholder="Protein" />
      </Col>
    </Row>
  );
};

export default index;
