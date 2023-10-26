import React from "react";
import { Col, Container, Row } from "reactstrap";
import CreditCardDetails from "../../../Shared/CreditCardDetails";

const CreditCard = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <CreditCardDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default CreditCard;
