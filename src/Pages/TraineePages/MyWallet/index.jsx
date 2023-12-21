import { Container, Row, Col, Card } from "reactstrap";
import PaymentHistoryWrapper from "../../../Shared/PaymentHistoryWrapper";

const MyWallet = () => {
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

export default MyWallet;
