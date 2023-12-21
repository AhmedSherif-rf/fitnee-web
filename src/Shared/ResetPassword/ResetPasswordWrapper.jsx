import React, { memo } from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import { Col, Row, Card, Container } from "reactstrap";

const ResetPasswordWrapper = () => {
  return (
    <Container fluid className="mt-5">
      <Row>
        <Col md={12} xs={12}>
          <ResetPasswordForm />
        </Col>
      </Row>
    </Container>
  );
};

export default memo(ResetPasswordWrapper);
