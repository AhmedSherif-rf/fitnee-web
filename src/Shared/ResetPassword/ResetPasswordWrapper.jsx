import React, { memo } from "react";
import ResetPasswordForm from "./ResetPasswordForm";
import { Col, Row, Card, Container } from "reactstrap";

const ResetPasswordWrapper = () => {
  return (
    <Container fluid className="pt-3">
      <Row>
        <Card className="BorderRadius">
          <Col md={12} xs={12}>
            <ResetPasswordForm />
          </Col>
        </Card>
      </Row>
    </Container>
  );
};

export default memo(ResetPasswordWrapper);
