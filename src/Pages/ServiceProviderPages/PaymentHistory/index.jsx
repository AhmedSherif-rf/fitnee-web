import { Card, Col, Container, Row } from "reactstrap";
import PaymentHistoryWrapper from "../../../Shared/PaymentHistoryWrapper";

const PaymentHistory = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col md={12}>
          <Card className="BorderRadius w px-3 contentCard">
            <PaymentHistoryWrapper />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PaymentHistory;
