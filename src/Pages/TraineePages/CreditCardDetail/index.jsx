import React from "react";
import { Col, Container, Row } from "reactstrap";
import CreditCardDetailWrapper from "../../../Shared/CreditCardDetailWrapper";

const CreditCardDetail = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <CreditCardDetailWrapper />
        </Col>
      </Row>
    </Container>
  );
};

export default CreditCardDetail;
