import React, { memo } from "react";
import { Col, Row } from "reactstrap";
import ContactUsForm from "./ContactUsForm";

const ContactUsWrapper = (props) => {
  const { CompStyle, text1, text2, text3 } = props;

  return (
    <Row className="h-100">
      <Col md={6} xs={12} className="p-0 d-md-block d-none">
        <div
          className="d-flex flex-column justify-content-between h-100 py-4"
          style={CompStyle}
        >
          <div>{text1}</div>
          <div>{text2}</div>
          <div>{text3}</div>
        </div>
      </Col>

      <Col md={6} xs={12} className="p-0">
        <ContactUsForm />
      </Col>
    </Row>
  );
};

export default memo(ContactUsWrapper);
