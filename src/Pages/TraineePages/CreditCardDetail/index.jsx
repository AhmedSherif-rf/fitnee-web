import React from "react";
import { Col, Container, Row, Card } from "reactstrap";
import CreditCardDetailWrapper from "../../../Shared/CreditCardDetailWrapper";

const CreditCardDetail = () => {
  return (
    <Container fluid>
      <Card className="BorderRadius">
        <Row>
          <Col md={12}>
            <CreditCardDetailWrapper />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default CreditCardDetail;
