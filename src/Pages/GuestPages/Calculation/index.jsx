import React from "react";
import { Col, Container, Row } from "reactstrap";
import CalculationWrapper from "../../../Shared/CalculationWrapper";

const Calculation = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col md={12}>
          <CalculationWrapper />
        </Col>
      </Row>
    </Container>
  );
};

export default Calculation;
