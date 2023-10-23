import { Container, Row } from "reactstrap";
import PaymentHistory from "../../../Shared/PaymentHistory";

const TrainerPaymentHistory = () => {
  return (
    <Container fluid className="mt-3">
      <Row className="justify-content-center">
        <PaymentHistory />
      </Row>
    </Container>
  );
};

export default TrainerPaymentHistory;
